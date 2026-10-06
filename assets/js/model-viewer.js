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

  let THREE, ThreeMFLoader, TrackballControls;
  try {
    [THREE, { ThreeMFLoader }, { TrackballControls }] = await Promise.all([
      import('../vendor/three/three.module.min.js'),
      import('../vendor/three/3MFLoader.js'),
      import('../vendor/three/TrackballControls.js')
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
  // Dark ground so untextured CAD geometry, which arrives white, reads
  // clearly against it.
  scene.background = new THREE.Color(0x333944);

  // 3MF is Z-up; three.js is Y-up. The model sits inside a pivot so the idle
  // spin is applied to the pivot, leaving the camera free to be tumbled
  // anywhere without the two fighting each other.
  model.rotation.x = -Math.PI / 2;
  const pivot = new THREE.Group();
  pivot.add(model);
  scene.add(pivot);

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
  const box = new THREE.Box3().setFromObject(pivot);
  if (box.isEmpty()) return fail(block, 'model has no geometry', src);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  model.position.sub(center);

  const camera = new THREE.PerspectiveCamera(38, 16 / 10, 0.1, 10000);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  stage.appendChild(renderer.domElement);

  // Fit the actual bounding box rather than its sphere. A sphere fit reserves
  // the longest dimension in every direction, which leaves a wide object like
  // a deployed solar array floating in the middle of the frame.
  const radius = box.getBoundingSphere(new THREE.Sphere()).radius || 1;
  const VIEW_DIR = new THREE.Vector3(0.62, 0.46, 0.74).normalize();
  const half = size.clone().multiplyScalar(0.5);

  function frame() {
    const tanV = Math.tan((camera.fov * Math.PI) / 360);
    const tanH = tanV * camera.aspect;

    // Camera basis looking from VIEW_DIR back at the centred model.
    const up = new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3().crossVectors(up, VIEW_DIR).normalize();
    const camUp = new THREE.Vector3().crossVectors(VIEW_DIR, right).normalize();

    // Distance that keeps every corner of the box inside both fields of view.
    let dist = 0;
    for (let i = 0; i < 8; i++) {
      const corner = new THREE.Vector3(
        (i & 1 ? 1 : -1) * half.x,
        (i & 2 ? 1 : -1) * half.y,
        (i & 4 ? 1 : -1) * half.z
      );
      const along = corner.dot(VIEW_DIR);
      dist = Math.max(
        dist,
        along + Math.abs(corner.dot(right)) / tanH,
        along + Math.abs(corner.dot(camUp)) / tanV
      );
    }
    return dist * 1.05;
  }

  // TrackballControls rather than OrbitControls: orbit keeps a fixed up
  // vector, so dragging past vertical stops dead at the poles. Trackball has
  // no up vector, so the part tumbles freely in any direction.
  const controls = new TrackballControls(camera, renderer.domElement);
  controls.rotateSpeed = 3.0;
  controls.zoomSpeed = 1.1;
  controls.noPan = true;
  controls.staticMoving = false;
  controls.dynamicDampingFactor = 0.12;

  // Zoom is off until the viewer is deliberately clicked, and off again once
  // the pointer leaves. Otherwise the wheel is captured whenever the cursor
  // happens to pass over the model and the page stops scrolling.
  controls.noZoom = true;
  renderer.domElement.addEventListener('pointerdown', () => { controls.noZoom = false; });
  renderer.domElement.addEventListener('pointerleave', () => { controls.noZoom = true; });

  let spin = !REDUCED;
  const stopSpin = () => { spin = false; };
  renderer.domElement.addEventListener('pointerdown', stopSpin);
  renderer.domElement.addEventListener('wheel', stopSpin, { passive: true });

  let placed = false;
  function resize() {
    const w = stage.clientWidth, h = stage.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    const dist = frame();
    if (!placed) {
      camera.position.copy(VIEW_DIR).multiplyScalar(dist);
      controls.update();
      placed = true;
    }
    controls.minDistance = radius * 0.5;
    controls.maxDistance = dist * 3;
    controls.handleResize();
  }

  resize();
  new ResizeObserver(resize).observe(stage);

  // Only render while the model is actually on screen.
  let visible = true;
  new IntersectionObserver((e) => { visible = e[0].isIntersecting; }).observe(stage);
  renderer.setAnimationLoop(() => {
    if (!visible) return;
    if (spin) pivot.rotation.y += 0.0035;
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
