/* ============================================================
   Validates every 3MF under content/ the same way the website does.

     node tools/check-3mf.mjs

   The viewer reads 3MF files with fflate, which is stricter than
   most desktop tools: it trusts the offsets recorded in the zip
   central directory instead of repairing them. A file that opens
   fine in Windows, 7-Zip or Python can still be unreadable in the
   browser, in which case the model block hides itself and the
   section quietly disappears from the page.

   This catches that at push time instead. Exits non-zero on any
   file the site could not display.
   ============================================================ */
import * as fflate from '../assets/vendor/three/fflate.module.js';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const CONTENT = join(ROOT, 'content');

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.3mf$/i.test(name)) out.push(p);
  }
  return out;
}

const files = walk(CONTENT);
if (!files.length) {
  console.log('No 3MF files under content/. Nothing to check.');
  process.exit(0);
}

let failed = 0;
for (const file of files) {
  const name = relative(ROOT, file);
  let zip;
  try {
    zip = fflate.unzipSync(new Uint8Array(readFileSync(file)));
  } catch (e) {
    console.error(`FAIL ${name}\n     the browser cannot open this archive: ${e.message}`);
    console.error('     Re-export it and replace the file. Opening and re-saving it with a');
    console.error('     different tool also rewrites the zip offsets and usually fixes it.');
    failed++;
    continue;
  }

  const names = Object.keys(zip);
  const problems = [];

  // The loader looks for these two by pattern; without them it throws.
  if (!names.some((n) => /_rels\/\.rels$/.test(n))) problems.push('missing _rels/.rels');
  if (!names.some((n) => /\[Content_Types\]\.xml$/.test(n))) problems.push('missing [Content_Types].xml');

  const modelName = names.find((n) => /\.model$/.test(n));
  if (!modelName) {
    problems.push('no .model part');
  } else {
    const xml = new TextDecoder().decode(zip[modelName]);
    if (!/<model[\s>]/.test(xml)) problems.push(`${modelName} has no <model> element`);
    if (!xml.trimEnd().endsWith('</model>')) problems.push(`${modelName} is truncated, it does not end in </model>`);
  }

  if (problems.length) {
    console.error(`FAIL ${name}`);
    for (const p of problems) console.error(`     ${p}`);
    failed++;
  } else {
    const tris = (zip[modelName] ? new TextDecoder().decode(zip[modelName]).match(/<triangle /g) || [] : []).length;
    const mb = (statSync(file).size / 1024 / 1024).toFixed(2);
    console.log(`ok   ${name}  (${mb} MB, ${names.length} parts, ${tris.toLocaleString()} triangles)`);
  }
}

if (failed) {
  console.error(`\n${failed} of ${files.length} 3MF file(s) would not display on the site.`);
  process.exit(1);
}
console.log(`\nAll ${files.length} 3MF file(s) load.`);
