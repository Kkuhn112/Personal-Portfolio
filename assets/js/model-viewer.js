/* ============================================================
   Interactive 3MF viewer for project pages.
   ------------------------------------------------------------
   Renders any <div class="model-block" data-model="path.3mf">.

   The 3D libraries are vendored in assets/vendor/three rather than
   loaded from a CDN, so the site has no external runtime dependency
   and keeps working offline. They are large, so nothing is
   downloaded until a model actually scrolls into view. Pages with no
   model never touch them at all.

   If the libraries or the model file cannot load, the whole block
   removes itself and logs why, so a missing file never leaves a
   dead frame on the page.
   ============================================================ */
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

function fail(block, why, detail) {
  block.hidden = true;

  // A section whose only content is the model reads badly once the model is
  // gone, since the text refers to something that is not there. Hide the whole
  // section in that case, and its table-of-contents entry with it. A section
  // that also carries figures, tables or lists keeps its other content.
  const section = block.closest('.proj-section');
  if (section && !section.querySelector('figure.figure, table, ul')) {
    section.hidden = true;
    const link = document.querySelector('#projToc a[href="#' + section.id + '"]');
    if (link) link.hidden = true;
  }

  if (window.console && console.warn) {
    console.warn('[portfolio] 3D model not shown (' + why + '):', detail || block.dataset.model);
  }
}

async function mount(block) {
  const src = block.dataset.model;
  const stage = block.querySelector('.model-stage');
  const status = block.querySelector('.model-status');

  // Confirm the file exists before pulling down three.js for it.
  try {
    const head = await fetch(src, { method: 'HEAD' });
    if (!head.ok) return fail(block, 'file not found, ' + head.status, src);
  } catch (e) {
    return fail(block, 'file unreachable', src);
  }

  let THREE, ThreeMFLoader, OrbitControls;
  try {
    [THREE, { ThreeMFLoader }, { OrbitControls }] = await Promise.all([
      import('../vendor/three/three.module.min.js'),
      import('../vendor/three/3MFLoader.js'),
      import('../vendor/three/OrbitControls.js')
    ]);
  } catch (e) {
    return fail(block, '3D libraries unavailable', String(e));
  }

  let model;
  try {
    model = await new ThreeMFLoader().loadAsync(src, (p) => {
      if (p.lengthComputable && status) {
        status.textContent = 'Loading model ' + Math.round((p.loaded / p.total) * 100) + '%';
      }
    });
  } catch (e) {
    return fail(block, 'model failed to parse', String(e));
  }

  status && status.remove();

  const scene = new THREE.Scene();
  // Slightly darker than the page so untextured white CAD geometry still
  // reads against it.
  scene.background = new THREE.Color(0xe7e9ed);

  // 3MF is Z-up; three.js is Y-up.
  model.rotation.x = -Math.PI / 2;
  scene.add(model);

  // Kept dim enough that shading gradients survive. A 3MF usually arrives
  // with no material, so a blown-out key light turns the part into a
  // silhouette with no readable edges.
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8e97a2, 1.1));
  const key = new THREE.DirectionalLight(0xffffff, 2.0);
  key.position.set(1, 2, 1.5);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 0.75);
  fill.position.set(-1.5, 0.4, -1);
  scene.add(fill);
  const rim = new THREE.DirectionalLight(0xffffff, 0.5);
  rim.position.set(-0.5, 0.6, 2);
  scene.add(rim);

  // Frame the part regardless of its modelled size or origin.
  const box = new THREE.Box3().setFromObject(model);
  if (box.isEmpty()) return fail(block, 'model has no geometry', src);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  model.position.sub(center);

  const camera = new THREE.PerspectiveCamera(38, 16 / 10, 0.1, 10000);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  stage.appendChild(renderer.domElement);

  // Fit the bounding sphere to whichever field of view is tighter, so a tall
  // thin part like a 3U frame fills the frame instead of floating in it.
  const sphere = box.getBoundingSphere(new THREE.Sphere());
  const radius = sphere.radius || 1;
  function frame() {
    const vFov = (camera.fov * Math.PI) / 180;
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * camera.aspect);
    return (radius / Math.sin(Math.min(vFov, hFov) / 2)) * 1.06;
  }

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.autoRotate = !REDUCED;
  controls.autoRotateSpeed = 0.9;
  controls.addEventListener('start', () => { controls.autoRotate = false; });

  let placed = false;
  function resize() {
    const w = stage.clientWidth, h = stage.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    const dist = frame();
    if (!placed) {
      camera.position.set(dist * 0.62, dist * 0.46, dist * 0.74).setLength(dist);
      controls.update();
      placed = true;
    }
    controls.minDistance = radius * 0.5;
    controls.maxDistance = dist * 3;
  }

  resize();
  new ResizeObserver(resize).observe(stage);

  // Only render while the model is actually on screen.
  let visible = true;
  new IntersectionObserver((e) => { visible = e[0].isIntersecting; }).observe(stage);
  renderer.setAnimationLoop(() => {
    if (!visible) return;
    controls.update();
    renderer.render(scene, camera);
  });

  block.classList.add('is-ready');
}

function scan() {
  const blocks = document.querySelectorAll('.model-block[data-model]:not([data-model-ready])');
  if (!blocks.length) return;
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      obs.unobserve(e.target);
      mount(e.target);
    });
  }, { rootMargin: '200px' });
  blocks.forEach((b) => { b.setAttribute('data-model-ready', '1'); io.observe(b); });
}

window.ModelViewer = { scan };

// Project pages render their content asynchronously, so scan on load and
// again once the renderer signals it has injected the page.
document.addEventListener('DOMContentLoaded', scan);
document.addEventListener('portfolio:rendered', scan);
