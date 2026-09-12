const DOCTOLIB = "https://www.doctolib.fr/chirurgien-orthopediste/sete/francois-lozach";

/* Photo / video media — supports real src or placeholder */
function Media({ kind = 'photo', label, desc, src, ratio, frame }) {
  if (src) {
    const isVideo = /\.(mp4|webm|mov)$/i.test(src) || kind === 'video';
    return (
      <div className={'gr-img-frame' + (frame === 'disc' ? ' disc' : '') + (frame === 'feather' ? ' feather' : '')} style={ratio ? { aspectRatio: ratio } : null}>
        {isVideo ?
        <video src={src} autoPlay muted loop playsInline preload="metadata" /> :

        <img src={src} alt={label || ''} loading="lazy" />
        }
        <div className="gr-img-grid"></div>
        <div className="gr-img-rim"></div>
        {label && <div className="gr-img-cap"><span className="dot"></span>{label}</div>}
      </div>);

  }
  return (
    <div className={'gr-media ' + (kind === 'video' ? 'video' : '')}>
      <div className="icn">{kind === 'video' ? '▶' : '📷'}</div>
      <div>{label}</div>
      {desc && <div style={{ opacity: 0.6, textTransform: 'none', letterSpacing: 0, fontSize: 11, marginTop: 4 }}>{desc}</div>}
    </div>);

}

/* HERO */
function Hero() {
  return (
    <section className="gr-section gr-hero">
      <div className="gr-hero-glow"></div>
      <div className="gr-container">
        <div className="gr-hero-grid">
          <div>
            <div className="gr-eyebrow">◍ AutoCart™ · Genou & Cheville</div>
            <h1 className="gr-title h1">Greffe de cartilage du genou et de la cheville</h1>
            <p className="gr-lede">Une technique autologue en une seule opération — votre propre cartilage pour réparer votre cartilage.</p>
            <p className="gr-text">Vous souffrez d'une douleur chronique du genou ou de la cheville, sans amélioration malgré les traitements habituels ? Il existe aujourd'hui une solution chirurgicale de régénération — en une seule intervention, sans matériau étranger, avec vos propres cellules cartilagineuses.</p>
            <div className="gr-cta-row">
              <a href="#procedure" className="gr-btn gr-btn-ghost">Découvrir la procédure</a>
            </div>
          </div>
          <div className="hv">
            <img src="assets/hero-knee.webp" alt="Articulation du genou · cartilage et ménisque" className="hv-img" width="1600" height="2000" fetchPriority="high" />
            <div className="hv-grid"></div>
            <div className="hv-scan"></div>
            <div className="hv-hud hv-hud-tl"><span className="dot"></span>AUTOCART™</div>
            <div className="hv-hud hv-hud-tr">
</div>
            <div className="hv-hud hv-hud-bl">
</div>
            <div className="hv-hud hv-hud-br">REGEN · 02</div>
          </div>
        </div>
      </div>
    </section>);}

/* SECTION 2 — Problème */
function SectionProbleme() {
  return (
    <section className="gr-section">
      <div className="gr-container">
        <div className="gr-section-head">
          <div className="gr-eyebrow">◍ Le problème</div>
          <h2 className="gr-title h2">Le cartilage ne se répare pas tout seul</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 60, alignItems: 'center' }} className="gr-prob-grid">
          <div>
            <p className="gr-text" style={{ fontSize: 17 }}>Le cartilage est un tissu particulier : il n'est pas vascularisé, c'est-à-dire qu'il ne reçoit pas de sang. Sans vaisseaux sanguins, il ne peut pas se régénérer spontanément comme un os ou un muscle. Une fois abîmé par un traumatisme, une ostéochondrite ou une usure localisée, le cartilage reste lésé — et la douleur s'installe durablement.</p>
            <div className="gr-quote">
              <div className="gr-quote-label">— Analogie</div>
              <p>Le cartilage, c'est comme le revêtement en téflon d'une poêle : si vous le rayez, il ne se répare pas. Il faut intervenir.</p>
            </div>
          </div>
          <Media kind="photo" src="assets/lesion-hd.webp" frame="disc" label="Vue arthroscopique · lésion cartilagineuse" />
        </div>
        <style>{`@media (max-width: 900px) { .gr-prob-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>);

}

/* SECTION 3 — Pourquoi pas les autres */
const COMPARE_BLOCKS = [
{
  title: "Les infiltrations (cortisone, PRP, acide hyaluronique)",
  rows: [
  { lab: 'Effet', body: "Diminuent l'inflammation, lubrifient l'articulation, soulagent temporairement." },
  { lab: 'Limite', neg: true, body: "Elles ne réparent pas le cartilage. L'effet s'estompe, la lésion reste — et souvent s'aggrave." }],

  verdict: "Utiles pour gérer la douleur à court terme, pas pour traiter la cause."
},
{
  title: "Les microfractures",
  rows: [
  { lab: 'Effet', body: "On perce l'os sous-chondral pour faire saigner. Le caillot produit du fibrocartilage." },
  { lab: 'Limite', neg: true, body: "Le fibrocartilage n'est pas du vrai cartilage. Tissu de moindre qualité, moins résistant, qui se dégrade en 2 à 5 ans — en particulier pour les lésions > 2 cm²." },
  { lab: 'Études', body: "La greffe de cartilage autologue haché donne des résultats cliniques et IRM supérieurs aux microfractures." }],

  verdict: "Acceptable pour les très petites lésions, insuffisant au-delà."
},
{
  title: "La prothèse de genou ou de cheville",
  rows: [
  { lab: 'Effet', body: "Remplace toute l'articulation." },
  { lab: 'Limite', neg: true, body: "Solution irréversible, inadaptée à un patient jeune ou actif avec une lésion localisée. On ne remplace pas une pièce entière de moteur pour une rayure sur un piston." }],

  verdict: "Dernier recours, réservé aux arthroses diffuses et sévères."
},
{
  title: "La transplantation de chondrocytes (MACI / ACI)",
  rows: [
  { lab: 'Effet', body: "Prélever du cartilage, cultiver les cellules en laboratoire, réimplanter lors d'une deuxième opération." },
  { lab: 'Limite', neg: true, body: "Deux interventions chirurgicales, plusieurs mois d'attente entre les deux, coût élevé." },
  { lab: 'Études', body: "Pour les grandes lésions, la technique cartilage haché + PRP + fibrine donne de meilleurs résultats à 24 mois — en une seule intervention." }],

  verdict: "Technique dépassée sur le plan pratique."
}];


function SectionAlternatives() {
  return (
    <section className="gr-section">
      <div className="gr-container">
        <div className="gr-section-head">
          <div className="gr-eyebrow">◍ Pourquoi pas les autres ?</div>
          <h2 className="gr-title h2">Ce qu'on vous a peut-être déjà proposé — et pourquoi ça ne résout pas le problème</h2>
        </div>
        <div className="gr-compare-grid">
          {COMPARE_BLOCKS.map((b, i) =>
          <div key={i} className="gr-compare-card">
              <h3>{b.title}</h3>
              {b.rows.map((r, j) =>
            <div className="row" key={j}>
                  <span className={'lab' + (r.neg ? ' neg' : '')}>{r.lab}</span>
                  <span className="body">{r.body}</span>
                </div>
            )}
              <div className="verdict">{b.verdict}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* SECTION 4 — AutoCart */
function SectionAutoCart() {
  return (
    <section className="gr-section">
      <div className="gr-container">
        <div className="gr-section-head">
          <div className="gr-eyebrow">◍ La solution AutoCart™</div>
          <h2 className="gr-title h2">La greffe de cartilage autologue : la seule technique qui restaure du vrai cartilage</h2>
          <p className="gr-lede" style={{ marginTop: 28 }}>La technique AutoCart™ repose sur un principe simple mais puissant : utiliser votre propre cartilage pour réparer votre cartilage.</p>
          <p className="gr-text" style={{ marginTop: 16 }}>On prélève des fragments de cartilage sain dans votre articulation, on les mélange avec votre propre sang centrifugé (PRP), et on les fixe sur la lésion avec une colle de fibrine naturelle issue de votre sang. Aucun produit étranger. Aucune culture en laboratoire. Une seule opération. Moins de 45 minutes.</p>
        </div>
        <div className="gr-eyebrow" style={{ marginTop: 32 }}>◍ La triade de guérison</div>
        <div className="gr-triade-grid">
          {[
          { num: '/01', title: 'Chondrocytes fragmentés', src: 'Votre cartilage', role: 'Cellules régénératrices' },
          { num: '/02', title: 'PRP — Plasma Riche en Plaquettes', src: 'Votre sang centrifugé', role: 'Facteurs de croissance' },
          { num: '/03', title: 'Colle de fibrine autologue', src: 'Votre sang', role: 'Matrice de fixation' }].
          map((c, i) =>
          <div key={i} className="gr-triade-card">
              <div className="num">{c.num}</div>
              <h3>{c.title}</h3>
              <div className="src">— {c.src}</div>
              <div className="arrow">↓</div>
              <div className="role">{c.role}</div>
            </div>
          )}
        </div>
        <p className="gr-triade-sub">Ces trois éléments réunis déclenchent la régénération du cartilage hyalin — le vrai cartilage, solide et durable.</p>
      </div>
    </section>);

}

/* SECTION 5 — TIMELINE FUTURISTE */
const STEPS = [
{ num: 1, title: "Visualisation de la lésion sous arthroscopie", short: "Diagnostic",
  text: "Une caméra miniaturisée est introduite dans l'articulation. On voit la lésion en direct : sa taille exacte, sa profondeur, ses bords. C'est l'étape de cartographie — on sait précisément ce qu'on va traiter avant de commencer.",
  media: [{ kind: 'photo', src: 'assets/lesion-hd.webp', label: 'Lésion focale · vue per-op' }] },
{ num: 2, title: "Débridement et prélèvement de votre cartilage sain", short: "Préparation & récolte",
  text: "La zone lésée est d'abord débridée avec précision : on retire le cartilage nécrosé et instable jusqu'à obtenir des bords sains. Dans la foulée, un couteau-shaver spécifique prélève des micro-fragments de cartilage hyalin dans les zones non portantes de votre articulation — automatiquement collectés dans un filtre stérile (GraftNet™), environ 0,2 mL par cm² de lésion. Votre cartilage, pour réparer votre cartilage.",
  media: [{ kind: 'video', src: 'assets/debridement.mp4', label: 'Débridement & shaver · séquence per-opératoire' }] },
{ num: 3, title: "Activation de votre plasma riche en plaquettes", short: "PRP",
  text: "Simultanément, 45 mL de votre sang sont prélevés et centrifugés. On obtient un PRP concentré en facteurs de croissance et pauvre en cellules inflammatoires. Ce plasma doré va enrichir la pâte de cartilage et servir à fabriquer la colle de fibrine naturelle.",
  media: [{ kind: 'video', src: 'assets/prp.mp4', frame: 'feather', label: 'Préparation PRP · double seringue' }] },
{ num: 4, title: "Mise en place du greffon — la lésion est comblée", short: "Greffe",
  text: "Les copeaux de cartilage sont mélangés au PRP pour former une pâte biologique. Cette pâte est introduite dans l'articulation via une canule, déposée précisément sur la zone lésée et ajustée avec un crochet palpeur. Un mastic vivant, sur mesure.",
  media: [{ kind: 'video', src: 'assets/greffe-application.mp4', ratio: '4/3', label: 'Application de la pâte' }] },
{ num: 5, title: "Fixation par fibrine et PRP — zéro produit étranger", short: "Stabilisation",
  text: "Une colle de fibrine 100 % autologue — fabriquée à partir de votre propre PRP via le système Thrombinator™ — est appliquée sur le greffon. Elle coagule en 15 secondes, forme un gel naturel et maintient les chondrocytes en place pendant la régénération. Aucun implant, aucun produit chimique.",
  media: [{ kind: 'video', src: 'assets/fibrine.mp4', label: 'Application de la fibrine' }] },
{ num: 6, title: "Résultat final — la surface articulaire est reconstituée", short: "Résultat",
  text: "La lésion est comblée. La surface articulaire est reconstituée avec votre propre cartilage hyalin. L'opération est terminée — moins de 45 minutes. La régénération va se poursuivre pendant les mois suivants, guidée par les facteurs de croissance du PRP.",
  media: [{ kind: 'photo', src: 'assets/resultat-avant.webp', frame: 'disc', label: 'Avant · lésion initiale' }, { kind: 'photo', src: 'assets/resultat-apres.webp', frame: 'disc', label: 'Après · surface comblée' }],
  final: true }];


/* ONE continuous electric path that snakes through all nodes */
function TimelinePath({ nodeRefs, version }) {
  const wrapRef = useRef(null);
  const coreRef = useRef(null);
  const haloRef = useRef(null);
  const trailRef = useRef(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const [pathD, setPathD] = useState('');
  const [len, setLen] = useState(0);

  useEffect(() => {
    const compute = () => {
      const container = wrapRef.current?.parentElement;
      if (!container) return;
      const cRect = container.getBoundingClientRect();
      const w = cRect.width,h = cRect.height;
      const pts = nodeRefs.current.map((el) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { x: r.left - cRect.left + r.width / 2, y: r.top - cRect.top + r.height / 2 };
      }).filter(Boolean);
      if (pts.length < 2) return;
      // Build smooth zigzag bezier that bulges sideways between consecutive nodes
      let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
      for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1],p1 = pts[i];
        const dy = p1.y - p0.y;
        // Alternate left/right bulge; magnitude scales with segment height
        const dir = i % 2 === 1 ? 1 : -1;
        const mag = Math.min(140, dy * 0.45);
        const c1 = { x: p0.x + dir * mag, y: p0.y + dy * 0.35 };
        const c2 = { x: p1.x + dir * mag, y: p0.y + dy * 0.65 };
        d += ` C ${c1.x.toFixed(1)} ${c1.y.toFixed(1)}, ${c2.x.toFixed(1)} ${c2.y.toFixed(1)}, ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}`;
      }
      setDims({ w, h });
      setPathD(d);
    };
    compute();
    window.addEventListener('resize', compute);
    const t1 = setTimeout(compute, 300);
    const t2 = setTimeout(compute, 1200);
    return () => {window.removeEventListener('resize', compute);clearTimeout(t1);clearTimeout(t2);};
  }, [version]);

  useEffect(() => {
    if (coreRef.current && pathD) setLen(coreRef.current.getTotalLength());
  }, [pathD]);

  useEffect(() => {
    if (!len) return;
    let raf;
    const t0 = performance.now();
    const dur = 5200; // full loop duration
    const tick = (t) => {
      const phase = (t - t0) % dur / dur;
      const off = -phase * len;
      if (coreRef.current) coreRef.current.style.strokeDashoffset = String(off);
      if (haloRef.current) haloRef.current.style.strokeDashoffset = String(off + len * 0.012);
      if (trailRef.current) trailRef.current.style.strokeDashoffset = String(off + len * 0.025);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [len]);

  // Two pulses traveling: dasharray = [seg, gap, seg, gap] with sum = len
  const seg = len * 0.07;
  const gap = (len - seg * 2) / 2;
  const dash = len > 0 ? `${seg} ${gap} ${seg} ${gap}` : '0 1';

  return (
    <svg ref={wrapRef} className="gr-timeline-path" width={dims.w} height={dims.h} viewBox={`0 0 ${dims.w} ${dims.h}`} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <filter id="tl-blur-soft" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="tl-blur-wide" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <linearGradient id="tl-base-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(0,180,255,0.05)" />
          <stop offset="0.3" stopColor="rgba(0,180,255,0.22)" />
          <stop offset="0.7" stopColor="rgba(0,229,255,0.25)" />
          <stop offset="1" stopColor="rgba(0,229,255,0.05)" />
        </linearGradient>
      </defs>
      {pathD &&
      <>
          {/* dim base */}
          <path d={pathD} stroke="url(#tl-base-grad)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          {/* trail — wide blue halo */}
          <path ref={trailRef} d={pathD} stroke="rgba(0,180,255,0.55)" strokeWidth="14" fill="none" strokeLinecap="round" strokeDasharray={dash} filter="url(#tl-blur-wide)" opacity="0.65" />
          {/* halo — tighter cyan */}
          <path ref={haloRef} d={pathD} stroke="rgba(0,229,255,0.85)" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray={dash} filter="url(#tl-blur-soft)" opacity="0.85" />
          {/* core — white spark */}
          <path ref={coreRef} d={pathD} stroke="#ffffff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeDasharray={dash} style={{ filter: 'drop-shadow(0 0 6px #00e5ff) drop-shadow(0 0 14px rgba(0,180,255,0.6))' }} />
        </>
      }
    </svg>);

}

function TimelineRow({ step, index, nodeRef }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {setInView(true);io.disconnect();}
    }, { threshold: 0.15 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const leftSide = index % 2 === 0;
  return (
    <div ref={ref} className={'gr-timeline-row' + (inView ? ' in' : '')} style={{ minHeight: 200 }}>
      <div className={'gr-side ' + (leftSide ? '' : 'empty')}>
        {leftSide && <StepBody step={step} />}
      </div>
      <div className="gr-node-cell" style={{ position: 'relative' }}>
        <div ref={nodeRef} className={'gr-node' + (step.final ? ' final' : '')}><div className="dot"></div></div>
      </div>
      <div className={'gr-side ' + (leftSide ? 'empty' : '')}>
        {!leftSide && <StepBody step={step} />}
      </div>
    </div>);

}

function StepBody({ step }) {
  return (
    <div>
      <span className="step-num">— Étape {String(step.num).padStart(2, '0')} · {step.short}</span>
      <h3>{step.title}</h3>
      <p className="gr-text">{step.text}</p>
      {(() => {
        const allDisc = step.media.length > 1 && step.media.every((m) => m.frame === 'disc');
        if (allDisc) {
          return (
            <div className="gr-disc-grid">
              {step.media.map((m, i) => <Media key={i} {...m} />)}
            </div>);

        }
        return (
          <div style={{ display: 'grid', gridTemplateColumns: step.media.length > 1 ? '1fr 1fr' : '1fr', gap: 12, marginTop: 12 }}>
            {step.media.map((m, i) => <Media key={i} {...m} />)}
          </div>);

      })()}
    </div>);

}

function SectionProcedure() {
  const nodeRefs = useRef([]);
  const [version, setVersion] = useState(0);
  useEffect(() => {
    // Trigger a re-measure once after images / fonts settle
    const t = setTimeout(() => setVersion((v) => v + 1), 800);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="gr-section" id="procedure">
      <div className="gr-container">
        <div className="gr-section-head">
          <div className="gr-eyebrow">◍ La procédure</div>
          <h2 className="gr-title h2">Pas à pas — six étapes, une seule intervention</h2>
        </div>
        <div className="gr-timeline" style={{ position: 'relative' }}>
          <TimelinePath nodeRefs={nodeRefs} version={version} />
          <div className="gr-timeline-rows">
            {STEPS.map((s, i) =>
            <TimelineRow key={i} step={s} index={i} nodeRef={(el) => {nodeRefs.current[i] = el;}} />
            )}
          </div>
        </div>
      </div>
    </section>);

}

/* SECTION 6 — Indications */
function SectionIndications() {
  const yes = [
  "Lésions chondrales ou ostéochondrales de grade 3 à 4 (Outerbridge)",
  "Lésions de 2 cm² à 6 cm²",
  "Genou : condyle fémoral, plateau tibial, rotule (patella)",
  "Cheville : dôme du talus (lésion ostéochondrale)",
  "Patient actif souhaitant préserver une articulation native",
  "Échec des traitements conservateurs (infiltrations, rééducation)",
  "Échec ou résultat insuffisant des microfractures"];

  const no = [
  "Arthrose diffuse de l'articulation",
  "Lésion ligamentaire non contrôlée",
  "Lésion méniscale instable non contrôlée",
  "Axe mécanique fortement dévié non corrigé"];

  return (
    <section className="gr-section">
      <div className="gr-container">
        <div className="gr-section-head">
          <div className="gr-eyebrow">◍ Indications</div>
          <h2 className="gr-title h2">Cette technique est-elle faite pour vous ?</h2>
        </div>
        <div className="gr-ind-grid">
          <div className="gr-ind-card yes">
            <h3><span className="mk">✓</span> Indiqué pour</h3>
            <ul>{yes.map((t, i) => <li key={i}><span>{t}</span></li>)}</ul>
          </div>
          <div className="gr-ind-card no">
            <h3><span className="mk">✗</span> Non indiqué si</h3>
            <ul>{no.map((t, i) => <li key={i}><span>{t}</span></li>)}</ul>
          </div>
        </div>
        <p className="gr-text" style={{ marginTop: 32, maxWidth: 800, fontStyle: 'italic' }}>Une consultation spécialisée est nécessaire pour évaluer votre situation sur la base du bilan clinique et des imageries (IRM en particulier).</p>
      </div>
    </section>);

}

/* SECTION 7 — Suites */
const SUITES = [
{
  title: "Genou — Lésion fémoro-tibiale",
  steps: [
  { when: "J0 – J2", what: "Repos, jambe en extension" },
  { when: "J2 – 6 sem.", what: "Appui partiel (15 kg), béquilles" },
  { when: "6 sem. – 3 mois", what: "Appui total progressif, vélo, natation" },
  { when: "3 mois", what: "Sports à faible impact" },
  { when: "12 – 16 mois", what: "Sports à fort impact (course, ski, foot)" }]

},
{
  title: "Genou — Lésion fémoro-patellaire (rotule)",
  note: "Même protocole + attelle ajustable en flexion progressive : 0/30° (sem. 1-2) → 0/60° (sem. 3-4) → 0/90° (sem. 5-6)",
  steps: [
  { when: "J0 – J2", what: "Repos, jambe en extension" },
  { when: "Sem. 1-2", what: "Attelle 0/30°, appui partiel" },
  { when: "Sem. 3-4", what: "Attelle 0/60°" },
  { when: "Sem. 5-6", what: "Attelle 0/90°" },
  { when: "12 – 16 mois", what: "Sports à fort impact" }]

},
{
  title: "Cheville",
  steps: [
  { when: "0 – 6 sem.", what: "Appui partiel (max 20 kg), orthèse" },
  { when: "6 sem. – 3 mois", what: "Appui total progressif, mobilisation complète" },
  { when: "3 mois", what: "Sports à faible impact" },
  { when: "6 mois", what: "Reprise de toute activité sportive" },
  { when: "Suivi", what: "Consultation et IRM de contrôle à 1 an" }]

}];


/* IRM cycler — discrete dynamic progression M0 → M3 → M6 in loop */
function IRMCycler() {
  const FRAMES = [
  { src: 'assets/irm-m0.webp', tag: 'M0', sub: 'Initial' },
  { src: 'assets/irm-m3.webp', tag: 'M3', sub: '3 mois' },
  { src: 'assets/irm-m6.webp', tag: 'M6', sub: '6 mois' }];

  return (
    <div className="gr-irm">
      <div className="gr-irm-stage">
        {FRAMES.map((f, i) =>
        <div key={i} className="gr-irm-frame" style={{ animationDelay: `${i * 4}s` }}>
            <img loading="lazy" decoding="async" width="990" height="940" src={f.src} alt={`IRM ${f.tag}`} />
          </div>
        )}
        <div className="gr-irm-scan"></div>
        <div className="gr-irm-hud-tl">◍ SUIVI POST-OP · IRM</div>
        <div className="gr-irm-tags">
          {FRAMES.map((f, i) =>
          <div key={i} className="gr-irm-tag" style={{ animationDelay: `${i * 4}s` }}>
              <span className="t">{f.tag}</span>
              <span className="s">{f.sub}</span>
            </div>
          )}
        </div>
      </div>
      <div className="gr-irm-track">
        {FRAMES.map((f, i) =>
        <div key={i} className="gr-irm-tick">
            <div className="dot" style={{ animationDelay: `${i * 4}s` }}></div>
            <div className="lab">{f.tag}</div>
          </div>
        )}
        <div className="gr-irm-progress"></div>
      </div>
      <div className="gr-irm-caption">ÉVOLUTION DE LA RÉPARATION SUR 6 MOIS · IRM </div>
    </div>);

}

function SectionSuites() {
  return (
    <section className="gr-section">
      <div className="gr-container">
        <div className="gr-section-head">
          <div className="gr-eyebrow">◍ Suites opératoires</div>
          <h2 className="gr-title h2">Après l'opération : à quoi vous attendre ?</h2>
        </div>
        {SUITES.map((b, i) => (
          <div className="gr-suites-block" key={i}>
            <h3>{b.title}</h3>
            {b.note && <p className="gr-text" style={{ marginBottom: 20, fontSize: 14, fontStyle: 'italic' }}>{b.note}</p>}
            <div className="gr-suites-timeline">
              <div className="gr-suites-beam" aria-hidden="true"></div>
              {b.steps.map((s, j) => (
                <div className="gr-suites-step" key={j} style={{ animationDelay: `${j * 3}s` }}>
                  <div className="when">{s.when}</div>
                  <div className="what">{s.what}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

}

/* SECTION 8 — Résultats */
const STATS = [
{ num: '/01', title: 'Supérieure aux microfractures', body: "Résultats cliniques et IRM significativement meilleurs, notamment pour les lésions patellaires et les grandes lésions." },
{ num: '/02', title: 'Supérieure à la MACT', body: "Pour les lésions larges, la technique avec PRP et fibrine donne de meilleurs résultats à 24 mois — en une seule intervention." },
{ num: '/03', title: 'Stabilité à 5 ans', body: "Les études à long terme confirment le maintien des résultats fonctionnels et l'absence de dégradation progressive." },
{ num: '/04', title: 'Faible taux de réopération', body: "À 5 ans, le taux de réintervention est très bas." }];


function SectionResultats() {
  return (
    <section className="gr-section">
      <div className="gr-container">
        <div className="gr-section-head">
          <div className="gr-eyebrow">◍ Résultats & données scientifiques</div>
          <h2 className="gr-title h2">Des résultats prouvés jusqu'à 5 ans</h2>
          <p className="gr-text" style={{ marginTop: 20 }}>La technique de cartilage autologue est étudiée depuis 1983. Les données actuelles, issues de plusieurs études cliniques portant sur des centaines de patients, sont convergentes :</p>
        </div>
        <div className="gr-stats-grid">
          {STATS.map((s, i) =>
          <div key={i} className="gr-stat-card">
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          )}
        </div>
        <div style={{ marginTop: 64, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
          <IRMCycler />
        </div>
      </div>
    </section>);

}

/* SECTION 9 — FAQ */
const FAQ = [
{ q: "Est-ce que j'aurai mal après l'opération ?",
  a: "La douleur post-opératoire immédiate est gérée par un protocole antalgique adapté. Elle est généralement modérée et similaire à celle d'une arthroscopie standard. Le cap le plus difficile est souvent les premières 48 heures." },
{ q: "Combien de temps dure l'hospitalisation ?",
  a: "L'intervention est généralement réalisée en ambulatoire ou avec une nuit d'hospitalisation, selon les protocoles du site opératoire." },
{ q: "Pourquoi ne peut-on pas reprendre le sport avant 12–16 mois pour le genou ?",
  a: "La régénération du cartilage est un processus biologique lent. Le tissu est structurellement en place dès 3–6 mois, mais il faut 12 à 18 mois pour qu'il atteigne une résistance mécanique suffisante pour les sports à impact. Reprendre trop tôt, c'est risquer d'abîmer ce qu'on vient de construire." },
{ q: "Est-ce que la technique est remboursée par la Sécurité Sociale ?",
  a: "La prise en charge dépend du contexte clinique et du code acte utilisé. Ce point est discuté lors de la consultation préopératoire." },
{ q: "Peut-on traiter genou ET cheville avec cette technique ?",
  a: "Oui. Les deux articulations peuvent être traitées, lors de la même intervention ou lors d'interventions séparées, selon votre bilan." },
{ q: "Faut-il une IRM avant la consultation ?",
  a: "Une IRM récente (moins de 6 mois) de l'articulation concernée est indispensable pour évaluer la lésion. Si vous n'en avez pas, elle sera prescrite lors de la consultation." }];


function SectionFAQ() {
  const [open, setOpen] = useState(-1);
  return (
    <section className="gr-section">
      <div className="gr-container" style={{ maxWidth: 900 }}>
        <div className="gr-section-head">
          <div className="gr-eyebrow">◍ FAQ</div>
          <h2 className="gr-title h2">Vos questions fréquentes</h2>
        </div>
        <div>
          {FAQ.map((it, i) =>
          <div key={i} className={'gr-faq-item' + (open === i ? ' open' : '')}>
              <button className="gr-faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="plus">+</span>
              </button>
              <div className="gr-faq-a">
                <p>{it.a}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* SECTION 10 — CTA final */
function CTAFinal() {
  return (
    <section className="gr-section gr-cta-final">
      <div className="gr-container">
        <div className="gr-eyebrow" style={{ justifyContent: 'center' }}>◍ Consultation</div>
        <h2 className="gr-title h2">Vous avez une douleur du genou ou de la cheville qui ne passe pas ?</h2>
        <p>Une consultation dédiée permet d'analyser vos imageries, d'évaluer votre lésion et de déterminer si la greffe de cartilage est la solution adaptée à votre situation. Chaque cas est unique — commençons par se voir.</p>
        <div className="gr-cta-row">
          <a href="contact.html" className="gr-btn gr-btn-ghost">Contactez le secrétariat</a>
        </div>
      </div>
    </section>);

}

/* Particle canvas background */
function useParticles() {
  useEffect(() => {
    const c = document.getElementById('gr-particles');
    if (!c) return;
    const ctx = c.getContext('2d');
    let w, h, raf;
    const N = 50;
    let parts = [];
    const init = () => {
      w = c.width = window.innerWidth * window.devicePixelRatio;
      h = c.height = window.innerHeight * window.devicePixelRatio;
      c.style.width = window.innerWidth + 'px';
      c.style.height = window.innerHeight + 'px';
      parts = Array.from({ length: N }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3 * window.devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.3 * window.devicePixelRatio,
        r: (Math.random() * 1.5 + 0.5) * window.devicePixelRatio,
        a: Math.random() * 0.5 + 0.1
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      parts.forEach((p) => {
        p.x += p.vx;p.y += p.vy;
        if (p.x < 0) p.x = w;if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 180, 255, ${p.a})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    init();
    draw();
    window.addEventListener('resize', init);
    return () => {cancelAnimationFrame(raf);window.removeEventListener('resize', init);};
  }, []);
}

function App() {
  useParticles();
  return (
    <div className="gr-page">
      <Cursor />
      <Nav active="greffe" />
      <main>
        <Hero />
        <SectionProbleme />
        <SectionAlternatives />
        <SectionAutoCart />
        <SectionProcedure />
        <SectionIndications />
        <SectionSuites />
        <SectionResultats />
        <SectionFAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>);

}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
