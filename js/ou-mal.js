/*!
 * ou-mal.js — « Où avez-vous mal ? » : squelette 3D interactif du membre inférieur.
 * Survol / toucher d'une zone → la zone s'illumine en cyan et la liste des fiches pathologies s'affiche.
 * Modèle : assets/anatomy/skeleton.glb (Z-Anatomy / BodyParts3D, CC BY-SA — voir ATTRIBUTION.txt).
 * Three.js r160 auto-hébergé (js/vendor/three/).
 *
 * Utilisation : <div data-ou-mal></div> (peut être créé par React)
 *               <script type="module" src="js/ou-mal.js?v=1"></script>
 * Sans WebGL ou avec « réduire les animations », les zones et les liens restent pleinement utilisables.
 */

const SELECTOR = '[data-ou-mal]';
const VENDOR = (f) => new URL(`./vendor/three/${f}`, import.meta.url).href;
const MODEL = new URL('../assets/anatomy/skeleton.glb', import.meta.url).href;
const DRACO = new URL('../assets/anatomy/draco/', import.meta.url).href;
const DEG = Math.PI / 180;

const ZONES = [
  { id: 'hanche', label: 'Hanche', r: 0.11, items: [
    ['Coxarthrose', 'coxarthrose'],
    ['Conflit fémoro-acétabulaire', 'conflit-femoro-acetabulaire-cfa'],
    ['Lésions du labrum', 'lesions-du-labrum'],
    ['Ostéonécrose de la tête fémorale', 'osteonecrose-de-la-tete-femorale'],
    ['Tendinopathies du moyen fessier', 'tendinopathies-du-moyen-fessier'],
    ['Tendinopathies du psoas', 'tendinopathies-du-psoas'],
    ['Compressions nerveuses (nerf sciatique)', 'compressions-dynamiques-neurologiques-nerf-sciatique'],
  ] },
  { id: 'genou', label: 'Genou', r: 0.095, items: [
    ['Gonarthrose', 'gonarthrose'],
    ['Lésion du ligament croisé antérieur (LCA)', 'lesion-du-ligament-croise-anterieur-lca'],
    ['Lésion du ligament croisé postérieur (LCP)', 'lesion-du-ligament-croise-posterieur-lcp'],
    ['Lésions méniscales', 'lesions-meniscales'],
    ['Lésions ligamentaires aiguës', 'lesions-ligamentaires-aigues-du-genou'],
    ['Instabilité rotulienne', 'instabilite-rotulienne'],
    ['Lésions cartilagineuses focales', 'lesions-cartilagineuses-focales'],
    ['Genu varum / genu valgum', 'deformations-genu-varum-genu-valgum'],
  ] },
  { id: 'cheville', label: 'Cheville', r: 0.07, items: [
    ['Entorses bénignes', 'entorses-benignes-de-la-cheville'],
    ['Entorses graves', 'entorses-graves-de-la-cheville'],
    ['Instabilité chronique', 'instabilite-chronique-de-cheville'],
    ['Conflits antérieur et postérieur', 'conflits-anterieur-et-posterieur-de-la-cheville'],
    ['Lésion ostéochondrale du dôme talien', 'lesion-osteochondrale-du-dome-talien'],
    ['Tendinopathies du tendon d’Achille', 'tendinopathies-du-tendon-d-achille'],
  ] },
  { id: 'pied', label: 'Pied', r: 0.08, items: [
    ['Hallux valgus', 'hallux-valgus'],
    ['Névrome de Morton', 'nevrome-de-morton'],
    ['Métatarsalgies', 'metatarsalgies'],
    ['Orteils en griffe / en marteau', 'orteils-en-griffe-en-marteau'],
    ['Arthrose du médio-pied', 'arthrose-du-medio-pied'],
  ] },
  { id: 'trauma', label: 'Traumatologie', r: 0.9, soft: true, items: [
    ['Fractures du membre inférieur', 'fractures-du-membre-inferieur'],
    ['Luxations (prothétiques et non prothétiques)', 'luxations-prothetiques-et-non-prothetiques'],
    ['Ruptures tendineuses (Achille, rotulien, quadricipital)', 'ruptures-tendineuses-tendon-d-achille-rotulien-quadricipital'],
  ] },
];

const CSS = `
.om{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);grid-template-areas:"stage head" "stage side";
  column-gap:72px;row-gap:28px;align-items:start;color:var(--ink,#e8eef7)}
.om-head{grid-area:head;align-self:end}
.om-head .display{margin:.15em 0 .3em}
.om-intro{margin:0;max-width:46ch;color:var(--ink-2,#a8b4c8);font-size:16px;line-height:1.6}
.om-stage{grid-area:stage;position:relative;width:100%;aspect-ratio:4/5;max-height:720px;
  background:radial-gradient(ellipse 50% 58% at 50% 52%,rgba(0,140,255,.16),rgba(0,90,200,.05) 55%,transparent 75%)}
.om-stage canvas{position:absolute;inset:0;width:100%!important;height:100%!important;display:block;outline:none}
.om-side{grid-area:side}
.om-zones{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 22px;padding:0}
.om-zone{font-family:var(--mono,'JetBrains Mono',monospace);font-size:12px;letter-spacing:.14em;text-transform:uppercase;
  color:var(--ink-2,#a8b4c8);background:transparent;border:1px solid rgba(0,212,255,.28);border-radius:999px;
  padding:10px 16px;min-height:44px;cursor:pointer;transition:color .25s,background .25s,border-color .25s}
.om-zone:hover,.om-zone:focus-visible{color:var(--ink,#e8eef7);border-color:rgba(0,212,255,.6);outline:none}
.om-zone[aria-pressed="true"]{color:var(--gold,#00d4ff);background:rgba(0,212,255,.1);border-color:rgba(0,212,255,.7)}
.om-list{list-style:none;margin:0;padding:0;min-height:380px}
.om-list li{border-bottom:1px solid var(--line,rgba(120,160,220,.15));opacity:0;transform:translateY(6px);
  animation:omIn .45s cubic-bezier(.22,1,.36,1) forwards}
.om-list a{display:grid;grid-template-columns:34px 1fr 20px;gap:14px;align-items:baseline;padding:14px 0;
  color:var(--ink,#e8eef7);text-decoration:none}
.om-list a:hover,.om-list a:focus-visible{color:var(--gold,#00d4ff);outline:none}
.om-num{font-family:var(--mono,'JetBrains Mono',monospace);font-size:11px;color:var(--gold,#00d4ff);opacity:.6}
.om-t{font-family:var(--serif,'Instrument Serif',serif);font-size:21px;line-height:1.3}
.om-arrow{font-family:var(--mono,monospace);color:var(--gold,#00d4ff);opacity:.5;transition:transform .25s,opacity .25s}
.om-list a:hover .om-arrow{transform:translateX(4px);opacity:1}
.om-note{margin:18px 0 0;font-size:13px;color:var(--muted,#98a5ba)}
.om-hot{position:absolute;left:0;top:0;width:44px;height:44px;margin:-22px 0 0 -22px;padding:0;border:0;background:transparent;
  cursor:pointer;z-index:2;will-change:transform;opacity:0;transition:opacity .4s}
.om-ready .om-hot{opacity:1}
.om-hot::before{content:"";position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;
  background:var(--gold,#00d4ff);box-shadow:0 0 12px rgba(0,212,255,.9);transition:transform .3s}
.om-hot::after{content:"";position:absolute;left:50%;top:50%;width:26px;height:26px;margin:-13px 0 0 -13px;border-radius:50%;
  border:1px solid rgba(0,212,255,.7);animation:omPulse 2.4s ease-out infinite}
.om-hot span{position:absolute;left:36px;top:50%;transform:translateY(-50%);white-space:nowrap;pointer-events:none;
  font-family:var(--mono,monospace);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink,#e8eef7);
  background:rgba(6,9,18,.7);padding:4px 8px;border-radius:4px;opacity:0;transition:opacity .25s}
.om-hot:hover span,.om-hot:focus-visible span,.om-hot.on span{opacity:1}
.om-hot.on::before{transform:scale(1.5)}
.om-hot:focus-visible{outline:none}
.om-msg{position:absolute;inset:0;display:grid;place-items:center;font-size:13px;color:var(--muted,#98a5ba)}
@keyframes omPulse{0%{transform:scale(.6);opacity:.9}100%{transform:scale(1.9);opacity:0}}
@keyframes omIn{to{opacity:1;transform:none}}
@media (max-width:900px){
  .om{grid-template-columns:1fr;grid-template-areas:"head" "stage" "side";row-gap:20px}
  .om-stage{aspect-ratio:1/1;max-height:440px;max-width:440px;margin:0 auto}
  .om-list{min-height:0}
  .om-t{font-size:19px}
}
@media (prefers-reduced-motion:reduce){.om-hot::after{animation:none;opacity:.5}.om-list li{animation:none;opacity:1;transform:none}}`;

/* ---------- Montage ---------- */

function boot() {
  const scan = () => document.querySelectorAll(SELECTOR).forEach(build);
  scan();
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
}

const h = (tag, attrs = {}, ...kids) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') n.className = v; else if (k === 'html') n.innerHTML = v; else n.setAttribute(k, v);
  }
  kids.forEach((k) => n.append(k));
  return n;
};

function build(el) {
  if (el.__om) return;
  el.__om = true;
  if (!document.getElementById('om-style')) document.head.append(h('style', { id: 'om-style', html: CSS }));

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const head = h('div', { class: 'om-head' },
    h('div', { class: 'eyebrow gold', html: '◍ Orientation' }),
    h('h2', { class: 'display', id: 'om-titre', html: 'Où avez-vous <span class="italic" style="color:var(--gold)">mal&nbsp;?</span>' }),
    h('p', { class: 'om-intro', html: 'Survolez ou touchez une zone du squelette pour retrouver les pathologies que je prends en charge.' }));
  const stage = h('div', { class: 'om-stage' });
  const zonesBox = h('div', { class: 'om-zones', role: 'group', 'aria-label': 'Zones du membre inférieur' });
  const list = h('ul', { class: 'om-list', 'aria-live': 'polite' });
  const side = h('div', { class: 'om-side' }, zonesBox, list,
    h('p', { class: 'om-note', html: 'Ces fiches informent ; elles ne remplacent pas une consultation.' }));
  const root = h('div', { class: 'om', role: 'region', 'aria-labelledby': 'om-titre' }, head, stage, side);
  el.append(root);

  const zoneBtns = {};
  let current = null, userTook = false, onZone = () => {};

  function setZone(id, byUser) {
    if (byUser) userTook = true;
    if (id === current) return;
    current = id;
    const z = ZONES.find((x) => x.id === id);
    Object.entries(zoneBtns).forEach(([k, b]) => b.setAttribute('aria-pressed', String(k === id)));
    list.replaceChildren(...z.items.map(([t, slug], i) => {
      const li = h('li', {}, h('a', { href: `/pathologie-${slug}.html` },
        h('span', { class: 'om-num', html: String(i + 1).padStart(2, '0') }),
        h('span', { class: 'om-t', html: t }),
        h('span', { class: 'om-arrow', 'aria-hidden': 'true', html: '→' })));
      li.style.animationDelay = `${i * 40}ms`;
      return li;
    }));
    onZone(id);
  }

  ZONES.forEach((z) => {
    const b = h('button', { type: 'button', class: 'om-zone', 'aria-pressed': 'false', html: z.label });
    b.addEventListener('click', () => setZone(z.id, true));
    b.addEventListener('mouseenter', () => setZone(z.id, true));
    b.addEventListener('focus', () => setZone(z.id, true));
    zoneBtns[z.id] = b;
    zonesBox.append(b);
  });
  setZone('hanche', false);

  // Démonstration automatique tant que le visiteur n'a pas interagi
  if (!reduced) {
    let k = 0;
    const timer = setInterval(() => {
      if (userTook) { clearInterval(timer); return; }
      const r = root.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      k = (k + 1) % 4; // 4 articulations ; la traumatologie reste au choix
      setZone(ZONES[k].id, false);
    }, 3200);
  }

  // 3D chargée seulement quand le bloc approche de l'écran
  const io = new IntersectionObserver((en) => {
    if (en.some((e) => e.isIntersecting)) {
      io.disconnect();
      mount3D(stage, reduced, (fn) => { onZone = fn; fn(current); }, (id) => setZone(id, true));
    }
  }, { rootMargin: '300px 0px' });
  io.observe(stage);
}

/* ---------- Squelette 3D ---------- */

async function mount3D(stage, reduced, bindZone, pick) {
  const msg = h('div', { class: 'om-msg', html: 'Chargement du squelette…' });
  stage.append(msg);
  let THREE, OrbitControls, GLTFLoader, DRACOLoader, gltf;
  try {
    [THREE, { OrbitControls }, { GLTFLoader }, { DRACOLoader }] = await Promise.all([
      import(VENDOR('three.module.min.js')), import(VENDOR('OrbitControls.js')),
      import(VENDOR('GLTFLoader.js')), import(VENDOR('DRACOLoader.js'))]);
    const draco = new DRACOLoader().setDecoderPath(DRACO);
    draco.setDecoderConfig({ type: 'wasm' });
    gltf = await new GLTFLoader().setDRACOLoader(draco).loadAsync(MODEL);
    draco.dispose();
  } catch (e) {
    console.error('[ou-mal]', e);
    stage.style.display = 'none'; // les zones et les liens restent utilisables
    return;
  }
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' }); }
  catch (e) { stage.style.display = 'none'; return; }
  msg.remove();

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;
  stage.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xdde8ff, 0x0a1430, 1.1));
  const key = new THREE.DirectionalLight(0xfff1dc, 2.2); key.position.set(-2, 3, 3);
  const rim = new THREE.DirectionalLight(0x00b4ff, 2.0); rim.position.set(2, 1.5, -3);
  scene.add(key, rim);

  // Matériau os : ivoire mat, liseré cyan, halo de zone (distance au point actif)
  const uni = { uHot: { value: new THREE.Vector3() }, uRad: { value: 0.1 }, uAmt: { value: 0 },
    uGlow: { value: new THREE.Color('#00d4ff') }, uRim: { value: new THREE.Color('#00d4ff').multiplyScalar(0.3) } };
  const bone = new THREE.MeshStandardMaterial({ color: '#d8cdb6', roughness: 0.72, metalness: 0 });
  bone.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uni);
    sh.vertexShader = 'varying vec3 vOmW;\n' + sh.vertexShader.replace('#include <project_vertex>',
      '#include <project_vertex>\n vOmW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = 'uniform vec3 uHot; uniform float uRad; uniform float uAmt; uniform vec3 uGlow; uniform vec3 uRim; varying vec3 vOmW;\n' +
      sh.fragmentShader.replace('#include <opaque_fragment>', `
        float omF = pow(1.0 - abs(dot(normal, normalize(vViewPosition))), 2.6);
        outgoingLight = outgoingLight * (1.0 - 0.3 * omF) + uRim * omF;
        float omG = (1.0 - smoothstep(0.0, uRad, distance(vOmW, uHot))) * uAmt;
        outgoingLight = mix(outgoingLight, uGlow * (0.55 + 0.6 * omF), omG * 0.75) + uGlow * omG * 0.12;
        #include <opaque_fragment>`);
  };

  const model = gltf.scene;
  const meshes = {};
  model.traverse((o) => {
    if (!o.isMesh) return;
    if (!o.geometry.attributes.normal) o.geometry.computeVertexNormals();
    o.material = bone;
    meshes[o.name.toLowerCase().replace(/[^a-z]/g, '')] = o;
  });
  const pivot = new THREE.Group();
  scene.add(pivot);
  pivot.add(model);
  model.updateMatrixWorld(true);

  // Centrage
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  model.position.sub(center);
  model.updateMatrixWorld(true);

  // Points d'intérêt calculés sur les vrais os (repère du pivot)
  const find = (prefix) => Object.entries(meshes).find(([k]) => k.startsWith(prefix))?.[1];
  const worldVerts = (m) => {
    const p = m.geometry.attributes.position, v = new THREE.Vector3(), out = [];
    for (let i = 0; i < p.count; i += 3) out.push(v.fromBufferAttribute(p, i).applyMatrix4(m.matrixWorld).clone());
    return out;
  };
  const avg = (arr) => arr.reduce((a, b) => a.add(b), new THREE.Vector3()).multiplyScalar(1 / Math.max(arr.length, 1));
  const centerOf = (m) => new THREE.Box3().setFromObject(m).getCenter(new THREE.Vector3());
  const hot = {};
  const femur = find('femur'), hip = find('hipbone'), tibia = find('tibia'), talus = find('talus'), patella = find('patella');
  if (femur && hip) {
    const fv = worldVerts(femur), maxY = Math.max(...fv.map((p) => p.y));
    const top = fv.filter((p) => p.y > maxY - 0.06);
    const medial = Math.sign(centerOf(hip).x - centerOf(femur).x) || 1;
    const midX = top.reduce((a, p) => a + p.x, 0) / top.length;
    hot.hanche = avg(top.filter((p) => (p.x - midX) * medial > 0)).add(new THREE.Vector3(0, -0.015, 0));
  }
  if (tibia) {
    const tv = worldVerts(tibia), maxY = Math.max(...tv.map((p) => p.y));
    hot.genou = avg(tv.filter((p) => p.y > maxY - 0.02)).add(new THREE.Vector3(0, 0.02, 0));
    if (patella) hot.genou.z = (hot.genou.z + centerOf(patella).z) / 2;
  }
  if (talus) hot.cheville = centerOf(talus);
  const metas = Object.entries(meshes).filter(([k]) => k.includes('metatarsal')).map(([, m]) => centerOf(m));
  if (metas.length) hot.pied = avg(metas);
  hot.trauma = new THREE.Vector3(0, 0, 0);

  // Pastilles HTML (accessibles au clavier)
  const LABEL = { hanche: 'Hanche', genou: 'Genou', cheville: 'Cheville', pied: 'Pied' };
  const dots = {};
  Object.entries(LABEL).forEach(([id, lab]) => {
    if (!hot[id]) return;
    const b = h('button', { type: 'button', class: 'om-hot', 'aria-label': `Pathologies : ${lab}` }, h('span', { html: lab }));
    b.addEventListener('mouseenter', () => pick(id));
    b.addEventListener('click', () => pick(id));
    b.addEventListener('focus', () => pick(id));
    stage.append(b);
    dots[id] = b;
  });

  // Caméra : vue antéro-latérale de la jambe droite
  const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 20);
  const target = new THREE.Vector3(0, 0.0, 0);
  const viewDir = new THREE.Vector3(-Math.sin(28 * DEG), Math.sin(6 * DEG), Math.cos(28 * DEG)).normalize();
  let controls = null, userMoved = false;
  if (matchMedia('(pointer: fine)').matches) {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; controls.enablePan = false; controls.enableDamping = true; controls.dampingFactor = 0.08;
    controls.minPolarAngle = 55 * DEG; controls.maxPolarAngle = 120 * DEG;
    controls.addEventListener('start', () => { userMoved = true; });
    renderer.domElement.style.cursor = 'grab';
  }

  function resize() {
    const w = stage.clientWidth, hgt = stage.clientHeight;
    if (!w || !hgt) return;
    renderer.setSize(w, hgt, false);
    camera.aspect = w / hgt;
    const t = Math.tan((camera.fov / 2) * DEG);
    const dist = Math.max((size.y * 0.5) / t, (Math.max(size.x, size.z) * 1.4) / (t * camera.aspect));
    if (!userMoved) camera.position.copy(target).addScaledVector(viewDir, dist);
    camera.lookAt(target);
    if (controls) controls.target.copy(target);
    camera.updateProjectionMatrix();
  }

  // Animation du halo (glisse d'une zone à l'autre)
  const goal = { p: new THREE.Vector3(), r: 0.1, a: 0 };
  bindZone((id) => {
    const z = ZONES.find((x) => x.id === id);
    if (!hot[id]) { goal.a = 0; return; }
    goal.p.copy(hot[id]); goal.r = z.r; goal.a = z.soft ? 0.35 : 1;
    Object.entries(dots).forEach(([k, d]) => d.classList.toggle('on', k === id));
  });
  const cur = goal.p.clone(); // position du halo dans le repère du squelette
  uni.uRad.value = goal.r;

  const v = new THREE.Vector3();
  let t0 = performance.now(), running = false, onScreen = true, sway = 1;
  function frame(now) {
    const t = (now - t0) / 1000;
    if (!reduced) {
      if (userMoved) sway = Math.max(0, sway - 0.02);
      pivot.rotation.y = sway * 0.32 * Math.sin((t * 2 * Math.PI) / 14);
    }
    const k = reduced ? 1 : 0.09;
    cur.lerp(goal.p, k);
    uni.uRad.value += (goal.r - uni.uRad.value) * k;
    const pulse = reduced ? 1 : 0.85 + 0.15 * Math.sin(t * 3);
    uni.uAmt.value += (goal.a * pulse - uni.uAmt.value) * k;
    if (controls) controls.update();
    pivot.updateMatrixWorld(true);
    uni.uHot.value.copy(cur).applyMatrix4(pivot.matrixWorld); // suit la rotation du squelette
    renderer.render(scene, camera);
    // positionne les pastilles
    const W = stage.clientWidth, H = stage.clientHeight;
    for (const [id, d] of Object.entries(dots)) {
      v.copy(hot[id]).applyMatrix4(pivot.matrixWorld).project(camera);
      d.style.transform = `translate(${((v.x + 1) / 2) * W}px, ${((1 - v.y) / 2) * H}px)`;
    }
  }
  function sync() {
    const want = onScreen && !document.hidden;
    if (want === running) return;
    running = want;
    renderer.setAnimationLoop(want ? frame : null);
  }
  new ResizeObserver(() => { resize(); if (!running) frame(performance.now()); }).observe(stage);
  new IntersectionObserver((e) => { onScreen = e[e.length - 1].isIntersecting; sync(); }).observe(stage);
  document.addEventListener('visibilitychange', sync);
  resize();
  frame(performance.now());
  stage.classList.add('om-ready');
  sync();
}

boot();
