/*!
 * hanche-pth.js — Prothèse totale de hanche en 3D, boucle animée (Three.js r160 auto-hébergé).
 * Os réels : BodyParts3D, © The Database Center for Life Science (DBCLS), licence CC BY-SA 2.1 JP
 * (assets/anatomy/hanche-os.bin ; crédits dans assets/anatomy/ATTRIBUTION.txt).
 *
 * Utilisation : <div data-hanche-pth></div> n'importe où (y compris créé par React),
 * puis en fin de <body> : <script type="module" src="js/hanche-pth.js?v=1"></script>
 *
 * Performance : rien n'est téléchargé (Three.js 670 Ko + os 200 Ko, ~330 Ko gzip au total) tant que le
 * bloc n'est pas réellement visible (accordéon ouvert) ; rendu en pause hors écran / onglet masqué ;
 * prefers-reduced-motion respecté (pose fixe).
 */

const SELECTOR = '[data-hanche-pth]';
const LOOP = 8;
const DEG = Math.PI / 180;
const BONES_URL = new URL('../assets/anatomy/hanche-os.bin', import.meta.url);
const VENDOR = (f) => new URL(`./vendor/three/${f}`, import.meta.url).href;
const C = { cyan: '#00d4ff', blue: '#4a7fff', bone: '#dccfb6', cut: '#c79b6d' };

const CSS = `
.pth-stage{position:relative;width:100%;aspect-ratio:16/10;min-height:340px;max-height:min(620px,78vh);overflow:hidden;isolation:isolate;
  border-radius:var(--radius,18px);border:1px solid var(--line,rgba(120,160,220,.15));color:var(--ink,#e8eef7);
  background:radial-gradient(ellipse 48% 58% at 52% 46%,rgba(0,140,255,.28),rgba(0,90,200,.08) 55%,transparent 75%),var(--bg-deep,#060912)}
.pth-stage canvas{position:absolute;inset:0;display:block;width:100%!important;height:100%!important;outline:none}
.pth-hud{position:absolute;top:18px;left:20px;font-family:var(--mono,'JetBrains Mono',ui-monospace,monospace);font-size:13px;
  letter-spacing:.12em;text-transform:uppercase;color:var(--ink-2,#a8b4c8);pointer-events:none;font-variant-numeric:tabular-nums}
.pth-hud b{font-weight:500;color:var(--gold,#00d4ff)}
.pth-legend{position:absolute;right:18px;bottom:16px;margin:0;padding:0;list-style:none;text-align:right;pointer-events:none;
  font-family:var(--mono,'JetBrains Mono',ui-monospace,monospace);font-size:11px;letter-spacing:.08em;text-transform:uppercase;
  line-height:2;color:var(--ink-2,#a8b4c8)}
.pth-legend i{display:inline-block;width:7px;height:7px;border-radius:50%;margin-left:9px;vertical-align:1px}
.pth-note{position:absolute;left:20px;bottom:16px;max-width:46%;font-size:11px;line-height:1.5;color:var(--muted,#98a5ba);opacity:.8}
.pth-note a{color:inherit}
.pth-msg{position:absolute;inset:0;display:grid;place-items:center;padding:16px;text-align:center;font-size:14px;color:var(--muted,#98a5ba)}
.pth-hud,.pth-legend,.pth-note{z-index:1}
@media (max-width:720px){
  .pth-stage{aspect-ratio:3/4}
  .pth-stage::after{content:'';position:absolute;left:0;right:0;bottom:0;height:34%;pointer-events:none;
    background:linear-gradient(to bottom,transparent,rgba(6,9,18,.92) 55%)}
  .pth-hud{top:14px;left:14px;font-size:12px}
  .pth-legend{left:12px;right:12px;bottom:40px;display:flex;flex-wrap:wrap;justify-content:center;gap:0 14px;font-size:10px;line-height:1.9}
  .pth-legend li{display:flex;flex-direction:row-reverse;align-items:center}
  .pth-legend i{margin:0 6px 0 0}
  .pth-note{left:12px;right:12px;bottom:10px;max-width:none;text-align:center;font-size:10px}
}`;

/* ---------- Montage différé ---------- */

function boot() {
  const scan = () => document.querySelectorAll(SELECTOR).forEach(prepare);
  scan();
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
}

function prepare(el) {
  if (el.__pth) return;
  el.__pth = true;
  injectStyle();
  el.classList.add('pth-stage'); // donne sa taille au bloc avant le chargement
  if (!('IntersectionObserver' in window)) { mount(el); return; }
  const io = new IntersectionObserver((en) => {
    if (en.some((e) => e.intersectionRect.height > 1)) { io.disconnect(); mount(el); }
  }, { rootMargin: '200px 0px', threshold: [0, 0.02, 0.1, 0.3] });
  io.observe(el);
}

function injectStyle() {
  if (document.getElementById('pth-style')) return;
  const s = document.createElement('style');
  s.id = 'pth-style';
  s.textContent = CSS;
  document.head.appendChild(s);
}

const node = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};

async function loadBones() {
  const buf = await (await fetch(BONES_URL)).arrayBuffer();
  const jl = new DataView(buf).getUint32(0, true);
  const meta = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, jl)));
  const base = 4 + jl;
  const decode = (m, pos, idx) => {
    const q = new Int16Array(buf, base + pos[0], m.n * 3);
    const p = new Float32Array(m.n * 3);
    for (let i = 0; i < p.length; i++) { const k = i % 3; p[i] = (q[i] + 32767) * m.sc[k] + m.lo[k]; }
    return { pos: p, idx: new Uint16Array(buf.slice(base + idx[0], base + idx[0] + idx[1])) };
  };
  return { meta, hip: decode(meta.hip, meta.hipPos, meta.hipIdx), femur: decode(meta.femur, meta.femPos, meta.femIdx) };
}

/* ---------- Scène ---------- */

async function mount(el) {
  injectStyle();
  el.classList.add('pth-stage');
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label',
    "Animation 3D d'une prothèse totale de hanche sur un bassin et un fémur réels : cupule et insert dans le cotyle, " +
    'tête prothétique sur une tige fémorale visible par transparence ; flexion, abduction puis rotations.');
  const msg = node('div', 'pth-msg', 'Chargement du modèle 3D…');
  el.appendChild(msg);

  let THREE, RoomEnvironment, OrbitControls, bones;
  try {
    const mods = await Promise.all([
      import(VENDOR('three.module.min.js')),
      import(VENDOR('RoomEnvironment.js')),
      import(VENDOR('OrbitControls.js')),
      loadBones(),
    ]);
    THREE = mods[0]; RoomEnvironment = mods[1].RoomEnvironment; OrbitControls = mods[2].OrbitControls; bones = mods[3];
  } catch (e) {
    console.error('[hanche-pth]', e);
    msg.textContent = 'Animation 3D indisponible.';
    return;
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (e) {
    msg.textContent = 'Votre navigateur ne permet pas l’affichage 3D.';
    return;
  }
  msg.remove();

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(pointer: fine)').matches;

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.92;
  renderer.localClippingEnabled = true;
  el.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;
  pmrem.dispose();

  const key = new THREE.DirectionalLight(0xfff1dc, 2.6);
  key.position.set(30, 40, 35);
  const fill = new THREE.DirectionalLight(0x6fa8ff, 0.9);
  fill.position.set(-30, 5, 20);
  const rim = new THREE.DirectionalLight(0x00b4ff, 2.2);
  rim.position.set(-15, 20, -40);
  scene.add(key, fill, rim, new THREE.AmbientLight(0x1a2a4a, 0.4));

  const hip = buildHip(THREE, bones);
  scene.add(hip.root);

  const camera = new THREE.PerspectiveCamera(28, 1, 1, 500);
  const target = new THREE.Vector3(-0.5, -3.2, 1.2);
  const viewDir = new THREE.Vector3(Math.sin(42 * DEG) * Math.cos(10 * DEG), Math.sin(10 * DEG), Math.cos(42 * DEG) * Math.cos(10 * DEG));

  let userMoved = false, sway = 1;
  let controls = null;
  if (finePointer) {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.copy(target);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = !reduced;
    controls.dampingFactor = 0.08;
    controls.minPolarAngle = 25 * DEG;
    controls.maxPolarAngle = 135 * DEG;
    renderer.domElement.style.cursor = 'grab';
    controls.addEventListener('start', () => { userMoved = true; renderer.domElement.style.cursor = 'grabbing'; });
    controls.addEventListener('end', () => { renderer.domElement.style.cursor = 'grab'; });
    if (reduced) controls.addEventListener('change', () => render());
  }

  const hud = node('div', 'pth-hud', 'Hanche');
  const legend = node('ul', 'pth-legend', [
    ['Tête céramique', '#f4f1ea'], ['Insert polyéthylène', '#f0a3bd'], ['Cupule titane', '#aab3bf'],
    ['Tige fémorale (transparence)', C.cyan],
  ].map(([t, c]) => `<li>${t}<i style="background:${c}"></i></li>`).join(''));
  const note = node('div', 'pth-note',
    'Illustration pédagogique non contractuelle. Modèle osseux : BodyParts3D © DBCLS, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.1/jp/deed.fr" target="_blank" rel="noopener">CC BY-SA</a>.');
  el.append(hud, legend, note);

  function resize() {
    const w = el.clientWidth, h = el.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const t = Math.tan((camera.fov / 2) * DEG);
    const dist = Math.max(23 / t, 15.5 / (t * camera.aspect));
    if (!userMoved) camera.position.copy(target).addScaledVector(viewDir, dist);
    else camera.position.sub(target).setLength(dist).add(target);
    camera.lookAt(target);
    camera.updateProjectionMatrix();
    if (!running) render();
  }

  let lastLabel = '';
  function update(t) {
    const p = reduced ? { flex: 40, abd: 0, rot: 0, label: 'Flexion', val: 40 } : pose(t);
    hip.setPose(p.flex, p.abd, p.rot);
    if (!reduced) {
      if (userMoved) sway = Math.max(0, sway - 0.02);
      hip.root.rotation.y = sway * 0.2 * Math.sin((2 * Math.PI * t) / LOOP);
    }
    const label = `Hanche / ${p.label} <b>${String(Math.round(p.val)).padStart(3, '0')}°</b>`;
    if (label !== lastLabel) { hud.innerHTML = label; lastLabel = label; }
  }

  function render() {
    if (controls) controls.update();
    hip.root.updateMatrixWorld(true);
    hip.syncClip();
    renderer.render(scene, camera);
  }

  let elapsed = 0, last = 0, running = false, onScreen = true;
  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.1);
    last = now;
    elapsed = (elapsed + dt) % LOOP;
    update(elapsed);
    render();
  }
  function sync() {
    const want = !reduced && onScreen && !document.hidden;
    if (want === running) return;
    running = want;
    if (want) { last = performance.now(); renderer.setAnimationLoop(frame); }
    else renderer.setAnimationLoop(null);
  }

  new ResizeObserver(resize).observe(el);
  new IntersectionObserver((e) => { onScreen = e[e.length - 1].intersectionRect.height > 1; sync(); },
    { threshold: [0, 0.02, 0.1, 0.3] }).observe(el);
  document.addEventListener('visibilitychange', sync);
  update(0);
  resize();
  render();
  sync();
}

/* ---------- Cinématique (boucle 8 s, vitesse nulle aux raccords) ---------- */

function pose(t) {
  if (t < 3) {
    const v = 85 * Math.sin((Math.PI * t) / 3) ** 2;
    return { flex: v, abd: 0, rot: 0, label: 'Flexion', val: v };
  }
  if (t < 5.5) {
    const v = 35 * Math.sin((Math.PI * (t - 3)) / 2.5) ** 2;
    return { flex: 0, abd: v, rot: 0, label: 'Abduction', val: v };
  }
  const u = (t - 5.5) / 2.5;
  const v = 33 * Math.sin(2 * Math.PI * u) * Math.sin(Math.PI * u);
  return { flex: 0, abd: 0, rot: v, label: v >= 0 ? 'Rot. externe' : 'Rot. interne', val: Math.abs(v) };
}

/* ---------- Modèle ----------
 * Repère (cm) : origine = centre de rotation ; +x latéral, +y haut, +z antérieur (hanche droite).
 */

function buildHip(THREE, bones) {
  const { meta } = bones;
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  const qFrom = (a, b) => new THREE.Quaternion().setFromUnitVectors(a.clone().normalize(), b.clone().normalize());
  const root = new THREE.Group();
  const pelvis = new THREE.Group();
  const femur = new THREE.Group();
  root.add(pelvis, femur);

  const neckDir = V(...meta.neckDir);   // tête → diaphyse
  const shaftUp = V(...meta.shaftDir);  // axe diaphysaire, vers le haut
  const shaftPt = V(...meta.shaftPt);
  const CUT = meta.headR + 1.15;        // ostéotomie du col (cm depuis le centre)

  // Plan de coupe du col en repère fémur ; partie conservée : côté diaphyse
  const cutLocal = new THREE.Plane(neckDir.clone(), -CUT);
  const cutWorld = new THREE.Plane();

  /* --- Matériaux --- */
  // Os : ivoire mat, liseré cyan en bord (style du site)
  const boneMat = (clip) => {
    const m = new THREE.MeshStandardMaterial({ color: C.bone, roughness: 0.72, metalness: 0, envMapIntensity: 0.35 });
    if (clip) m.clippingPlanes = [cutWorld];
    m.onBeforeCompile = (sh) => {
      sh.uniforms.uRim = { value: new THREE.Color(C.cyan).multiplyScalar(0.55) };
      sh.fragmentShader = 'uniform vec3 uRim;\n' + sh.fragmentShader.replace('#include <opaque_fragment>',
        `float pthF = pow(1.0 - abs(dot(normal, normalize(vViewPosition))), 2.6);
         outgoingLight = outgoingLight * (1.0 - 0.35 * pthF) + uRim * pthF;
         #include <opaque_fragment>`);
    };
    return m;
  };
  // Tranche d'ostéotomie (os spongieux) : faces arrière vues par la coupe
  const cutMat = new THREE.MeshStandardMaterial({ color: C.cut, roughness: 0.95, side: THREE.BackSide, clippingPlanes: [cutWorld] });

  const titanium = new THREE.MeshStandardMaterial({ color: 0xaab3bf, metalness: 1, roughness: 0.38, side: THREE.DoubleSide });
  const stemMat = new THREE.MeshStandardMaterial({ color: 0xb3bac4, metalness: 1, roughness: 0.22 });
  const poly = new THREE.MeshStandardMaterial({ color: 0xf0a3bd, roughness: 0.5, side: THREE.DoubleSide });
  const ceramic = new THREE.MeshPhysicalMaterial({ color: 0xf4f1ea, roughness: 0.1, clearcoat: 1, clearcoatRoughness: 0.04 });

  const fresnelVS = `varying vec3 vN; varying vec3 vV;
    void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`;
  // Implant vu À TRAVERS l'os : dessiné uniquement là où il est caché (GreaterDepth), en cyan
  const xray = new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color(C.cyan) } },
    vertexShader: fresnelVS,
    fragmentShader: `uniform vec3 uColor; varying vec3 vN; varying vec3 vV;
      void main(){ float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 1.8);
        float a = 0.22 + 0.78 * f; gl_FragColor = vec4(uColor * a, a);
        #include <colorspace_fragment>
      }`,
    transparent: true, depthWrite: false, depthFunc: THREE.GreaterDepth, blending: THREE.AdditiveBlending,
  });
  // Enveloppe des parties molles (halo bleu, comme le genou du site)
  const halo = new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color(C.blue) } },
    vertexShader: fresnelVS,
    fragmentShader: `uniform vec3 uColor; varying vec3 vN; varying vec3 vV;
      void main(){ float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 3.0);
        float a = 0.2 * f; gl_FragColor = vec4(uColor * a, a);
        #include <colorspace_fragment>
      }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });

  const geo = ({ pos, idx }) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    g.computeVertexNormals();
    return g;
  };
  // implant + son double « rayons X ». Ordre de rendu : os (opaques) → rayons X (ne testent que la
  // profondeur de l'os) → implant (marqué transparent pour passer APRÈS, mais écrit sa profondeur).
  [titanium, stemMat, poly, ceramic].forEach((m) => { m.transparent = true; });
  const implant = (g, mat, parent) => {
    const m = new THREE.Mesh(g, mat);
    const x = new THREE.Mesh(g, xray);
    m.renderOrder = 10;
    x.renderOrder = 5;
    parent.add(m, x);
    return [m, x];
  };

  /* --- Os réels --- */
  pelvis.add(new THREE.Mesh(geo(bones.hip), boneMat(false)));
  const femGeo = geo(bones.femur);
  femur.add(new THREE.Mesh(femGeo, boneMat(true)), new THREE.Mesh(femGeo, cutMat));

  /* --- Cotyle prothétique : inclinaison 40°, antéversion 15° --- */
  const incl = 40 * DEG, antev = 15 * DEG;
  const cupAxis = V(Math.sin(incl) * Math.cos(antev), -Math.cos(incl), Math.sin(incl) * Math.sin(antev)).normalize();
  const cupQ = qFrom(V(0, -1, 0), cupAxis);
  const shell = (R, r, lip = 0) => {
    const pts = [], N = 28;
    for (let i = 0; i <= N; i++) { const a = (Math.PI / 2) * (1 - i / N); pts.push(new THREE.Vector2(R * Math.cos(a) + 1e-4, R * Math.sin(a))); }
    if (lip) { pts.push(new THREE.Vector2(R, -lip)); pts.push(new THREE.Vector2(r, -lip)); }
    for (let i = 0; i <= N; i++) { const a = (Math.PI / 2) * (i / N); pts.push(new THREE.Vector2(r * Math.cos(a) + 1e-4, r * Math.sin(a))); }
    return new THREE.LatheGeometry(pts, 72);
  };
  const R = meta.headR + 0.2; // cupule ~ Ø natif + 4 mm
  implant(shell(R, R - 0.22), titanium, pelvis).forEach((m) => m.quaternion.copy(cupQ));
  implant(shell(R - 0.23, 1.64, 0.18), poly, pelvis).forEach((m) => m.quaternion.copy(cupQ));

  /* --- Implant fémoral --- */
  implant(new THREE.SphereGeometry(1.6, 64, 40), ceramic, femur); // tête Ø 32 mm

  // Repère de la tige : u = latéral dans le plan du col, s = axe diaphysaire, w = antérieur
  const s = shaftUp.clone().normalize();
  const u = neckDir.clone().addScaledVector(s, -neckDir.dot(s)).normalize();
  const w = new THREE.Vector3().crossVectors(u, s);
  const stemFrame = new THREE.Group();
  stemFrame.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(u, s, w));
  femur.add(stemFrame);
  const n2 = new THREE.Vector2(neckDir.dot(u), neckDir.dot(s)).normalize(); // col, dans le plan de la tige
  const x0 = shaftPt.dot(u);                                                   // axe diaphysaire, dans ce plan

  // Col prothétique (cône morse) : de la tête (fin) vers la tige (large)
  const neckGeo = new THREE.CylinderGeometry(0.7, 0.5, CUT - 0.3, 32);
  neckGeo.translate(0, (CUT - 0.3) / 2 + 0.3, 0);
  implant(neckGeo, stemMat, stemFrame).forEach((m) => m.quaternion.copy(qFrom(V(0, 1, 0), V(n2.x, n2.y, 0))));

  // Corps de la tige (profil frontal extrudé)
  const p0 = n2.clone().multiplyScalar(CUT);
  const perp = new THREE.Vector2(-n2.y, n2.x); // perpendiculaire au col, vers le haut
  const a = p0.clone().addScaledVector(perp, -0.9), b = p0.clone().addScaledVector(perp, 0.9);
  const X = (dx) => x0 + dx;
  const sh = new THREE.Shape();
  sh.moveTo(a.x, a.y);
  sh.lineTo(b.x, b.y);
  sh.quadraticCurveTo(X(0.35), b.y + 0.15, X(0.85), b.y - 0.9);
  sh.lineTo(X(0.66), -6.8);
  sh.quadraticCurveTo(X(0.46), -10, X(0.27), -11.8);
  sh.quadraticCurveTo(X(0), -12.6, X(-0.27), -11.8);
  sh.quadraticCurveTo(X(-0.42), -9.2, X(-0.52), -6.8);
  sh.quadraticCurveTo(X(-0.6), a.y - 2.2, a.x, a.y);
  const stemGeo = new THREE.ExtrudeGeometry(sh, { depth: 0.9, bevelEnabled: true, bevelThickness: 0.2, bevelSize: 0.16, bevelSegments: 5, curveSegments: 28 });
  stemGeo.translate(0, 0, -0.45);
  implant(stemGeo, stemMat, stemFrame);

  /* --- Parties molles (halo) --- */
  const mech = V(...meta.knee).normalize(); // tête → genou
  const thighProf = [[0, 4], [6.2, 2.5], [8.2, -4], [8.4, -12], [7.4, -24], [6.0, -34], [5.4, -40], [0, -43]]
    .map(([r, y]) => new THREE.Vector2(r, y));
  const thigh = new THREE.Mesh(new THREE.LatheGeometry(thighProf, 48), halo);
  thigh.quaternion.copy(qFrom(V(0, -1, 0), mech));
  thigh.position.set(0.8, 0, -0.6);
  femur.add(thigh);

  /* --- Pose --- */
  const up = mech.clone().negate();
  const X1 = V(1, 0, 0), Z1 = V(0, 0, 1);
  const qa = new THREE.Quaternion(), qb = new THREE.Quaternion(), qc = new THREE.Quaternion();
  function setPose(flex, abd, rot) {
    qa.setFromAxisAngle(X1, -flex * DEG);   // flexion : genou vers l'avant
    qb.setFromAxisAngle(Z1, abd * DEG);     // abduction : genou en dehors
    qc.setFromAxisAngle(up, rot * DEG);     // + = rotation externe (autour de l'axe mécanique)
    femur.quaternion.copy(qa).multiply(qb).multiply(qc);
  }
  function syncClip() { cutWorld.copy(cutLocal).applyMatrix4(femur.matrixWorld); }

  return { root, setPose, syncClip };
}

boot();
