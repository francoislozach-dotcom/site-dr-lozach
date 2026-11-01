/* ============================================================
   Section « Genou en mouvement » — accueil
   Séquence anatomique de 96 images (4 planches WebP de 6 × 4)
   pilotée par le défilement : la scène reste collée à l'écran
   pendant que l'on traverse la section.
   ============================================================ */

const KNEE_SEQ = { sheets: 4, cols: 6, perSheet: 24, total: 96, frame: 720, src: i => `assets/genou-sequence/genou-v1-${i}.webp` };

const KNEE_STEPS = [
  { num: '01 — Comprendre', title: ['Chaque articulation ', 'a son histoire.'], text: 'Votre rythme de vie, vos douleurs, vos attentes : on part de vous avant de proposer une solution.' },
  { num: '02 — Voir juste', title: ["Voir l'invisible, ", "avant d'agir."], text: 'Examen clinique minutieux, IRM : on identifie précisément la lésion, comme ici le ligament croisé, avant toute décision.' },
  { num: '03 — Reprendre', title: ['Reprendre ', 'le mouvement.'], text: 'Prothèse totale ou unicompartimentale, assistance robotique ROSA, récupération rapide : vous remettre debout, vite et bien.' }
];

function SectionGenou() {
  const storyRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const railRef = React.useRef(null);
  const degRef = React.useRef(null);
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    const story = storyRef.current, cv = canvasRef.current, ctx = cv.getContext('2d');
    const sheets = Array.from({ length: KNEE_SEQ.sheets }, (_, i) => {
      const im = new Image();
      im.decoding = 'async';
      im.src = KNEE_SEQ.src(i);
      im.addEventListener('load', () => { lastFrame = -1; render(); });
      return im;
    });
    let W = 0, H = 0, DPR = 1, lastFrame = -1, lastStep = 0, raf = 0;

    // avancement 0 → 1 pendant la traversée de la section
    const progress = () => {
      const r = story.getBoundingClientRect(), span = story.offsetHeight - window.innerHeight;
      return span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
    };
    const resize = () => {
      const r = cv.getBoundingClientRect();
      DPR = Math.min(2, window.devicePixelRatio || 1);
      W = r.width; H = r.height;
      cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
      lastFrame = -1; render();
    };
    function render() {
      raf = 0;
      const p = progress();
      const f = Math.round(p * (KNEE_SEQ.total - 1)), sh = Math.floor(f / KNEE_SEQ.perSheet), k = f % KNEE_SEQ.perSheet;
      const im = sheets[sh];
      if (W && im.complete && im.naturalWidth && f !== lastFrame) {
        const side = Math.min(W, H), F = KNEE_SEQ.frame;
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        ctx.clearRect(0, 0, W, H);
        ctx.drawImage(im, (k % KNEE_SEQ.cols) * F, Math.floor(k / KNEE_SEQ.cols) * F, F, F, (W - side) / 2, (H - side) / 2, side, side);
        lastFrame = f;
      }
      // flexion jusqu'à ~35°, pause en vue radio, puis extension avec prothèse
      const deg = p < 1 / 3 ? 35 * p * 3 : p < 2 / 3 ? 35 : 35 * (1 - (p - 2 / 3) * 3);
      degRef.current.textContent = String(Math.round(deg)).padStart(3, '0') + '°';
      railRef.current.style.height = (p * 100).toFixed(1) + '%';
      const idx = p < 0.34 ? 0 : p < 0.67 ? 1 : 2;
      if (idx !== lastStep) { lastStep = idx; setStep(idx); }
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(render); };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', resize);
    resize();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const h = React.createElement;
  return h('section', { className: 'knee-story', ref: storyRef, 'aria-label': 'Le genou en mouvement' },
    h('div', { className: 'knee-stage' },
      h('div', { className: 'container knee-inner' },
        h('div', { className: 'knee-steps' },
          h('div', { className: 'knee-rail', 'aria-hidden': 'true' }, h('span', { ref: railRef })),
          h('ol', { className: 'knee-list' },
            KNEE_STEPS.map((s, i) => h('li', { key: s.num, className: 'knee-step' + (i === step ? ' on' : ''), 'aria-hidden': i === step ? undefined : 'true' },
              h('span', { className: 'mono knee-num' }, s.num),
              h('h2', null, s.title[0], h('em', null, s.title[1])),
              h('p', null, s.text))))),
        h('div', { className: 'knee-viz' },
          h('canvas', { ref: canvasRef, role: 'img', 'aria-label': "Genou vu de profil en rendu anatomique : il se plie, passe en vue radio avec le ligament croisé antérieur en lumière, puis se tend avec une prothèse totale en place." }),
          h('div', { className: 'mono knee-hud' }, 'Genou / ', h('b', { ref: degRef }, '000°'))))));
}

Object.assign(window, { SectionGenou });
