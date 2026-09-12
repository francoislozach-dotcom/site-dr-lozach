const DOCTOLIB = "https://www.doctolib.fr/chirurgien-orthopediste/sete/francois-lozach";

/* Photo / video media */
function Media({ kind = 'photo', label, desc, src, ratio, frame }) {
  if (src) {
    const isVideo = /\.(mp4|webm|mov)$/i.test(src) || kind === 'video';
    return (
      <div className={'gr-img-frame' + (frame === 'disc' ? ' disc' : '') + (frame === 'feather' ? ' feather' : '')} style={ratio ? { aspectRatio: ratio } : null}>
        {isVideo
          ? <video src={src} autoPlay muted loop playsInline preload="metadata" />
          : <img src={src} alt={label || ''} loading="lazy" />
        }
        <div className="gr-img-grid"></div>
        <div className="gr-img-rim"></div>
        {label && <div className="gr-img-cap"><span className="dot"></span>{label}</div>}
      </div>
    );
  }
  return (
    <div className={'gr-media ' + (kind === 'video' ? 'video' : '')}>
      <div className="icn">{kind === 'video' ? '▶' : '📷'}</div>
      <div>{label}</div>
      {desc && <div style={{ opacity: 0.6, textTransform: 'none', letterSpacing: 0, fontSize: 11, marginTop: 4 }}>{desc}</div>}
    </div>
  );
}

/* HERO */
function Hero() {
  return (
    <section className="gr-section gr-hero">
      <div className="gr-hero-glow"></div>
      <div className="gr-container">
        <div className="gr-hero-grid">
          <div>
            <div className="gr-eyebrow">◍ AutoCart™ · Knee &amp; Ankle</div>
            <h1 className="gr-title h1">Cartilage graft for the knee and ankle</h1>
            <p className="gr-lede">An autologous single-stage procedure — your own cartilage to repair your cartilage.</p>
            <p className="gr-text">Do you suffer from chronic knee or ankle pain that has not improved despite conventional treatments? A surgical regeneration solution is now available — in a single procedure, using no foreign material, with your own cartilage cells.</p>
            <div className="gr-cta-row">
              <a href="#procedure" className="gr-btn gr-btn-ghost">Discover the procedure</a>
            </div>
          </div>
          <div className="hv">
            <img src="../assets/hero-knee.webp" alt="Knee joint · cartilage and meniscus" className="hv-img" width="1600" height="2000" fetchPriority="high" />
            <div className="hv-grid"></div>
            <div className="hv-scan"></div>
            <div className="hv-hud hv-hud-tl"><span className="dot"></span>AUTOCART™</div>
            <div className="hv-hud hv-hud-tr"></div>
            <div className="hv-hud hv-hud-bl"></div>
            <div className="hv-hud hv-hud-br">REGEN · 02</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* SECTION 2 — The problem */
function SectionProbleme() {
  return (
    <section className="gr-section">
      <div className="gr-container">
        <div className="gr-section-head">
          <div className="gr-eyebrow">◍ The problem</div>
          <h2 className="gr-title h2">Cartilage does not repair itself</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 60, alignItems: 'center' }} className="gr-prob-grid">
          <div>
            <p className="gr-text" style={{ fontSize: 17 }}>Cartilage is an unusual tissue: it is avascular, meaning it receives no blood supply. Without blood vessels, it cannot regenerate spontaneously the way bone or muscle does. Once damaged — by trauma, osteochondritis, or localised wear — cartilage stays injured, and pain becomes chronic.</p>
            <div className="gr-quote">
              <div className="gr-quote-label">— Analogy</div>
              <p>Cartilage is like the Teflon coating on a pan: once scratched, it does not repair itself. You have to intervene.</p>
            </div>
          </div>
          <Media kind="photo" src="../assets/lesion-hd.webp" frame="disc" label="Arthroscopic view · cartilage lesion" />
        </div>
        <style>{`@media (max-width: 900px) { .gr-prob-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

/* SECTION 3 — Why not the alternatives */
const COMPARE_BLOCKS = [
  {
    title: "Injections (cortisone, PRP, hyaluronic acid)",
    rows: [
      { lab: 'Effect', body: "Reduce inflammation, lubricate the joint, provide temporary relief." },
      { lab: 'Limitation', neg: true, body: "They do not repair cartilage. The effect fades, the lesion remains — and often worsens." }
    ],
    verdict: "Useful for short-term pain management, not for treating the underlying cause."
  },
  {
    title: "Microfractures",
    rows: [
      { lab: 'Effect', body: "The subchondral bone is drilled to induce bleeding. The clot produces fibrocartilage." },
      { lab: 'Limitation', neg: true, body: "Fibrocartilage is not true cartilage. It is an inferior tissue, less durable, that degrades in 2 to 5 years — particularly for lesions larger than 2 cm²." },
      { lab: 'Studies', body: "Minced autologous cartilage graft shows superior clinical and MRI outcomes compared to microfractures." }
    ],
    verdict: "Acceptable for very small lesions, insufficient beyond that."
  },
  {
    title: "Knee or ankle replacement",
    rows: [
      { lab: 'Effect', body: "Replaces the entire joint." },
      { lab: 'Limitation', neg: true, body: "An irreversible solution, unsuitable for a young or active patient with a localised lesion. You do not replace an entire engine for a scratch on one piston." }
    ],
    verdict: "Last resort, reserved for severe diffuse osteoarthritis."
  },
  {
    title: "Chondrocyte transplantation (MACI / ACI)",
    rows: [
      { lab: 'Effect', body: "Cartilage is harvested, cells cultured in a laboratory, then reimplanted in a second procedure." },
      { lab: 'Limitation', neg: true, body: "Two surgical procedures, several months between them, and high cost." },
      { lab: 'Studies', body: "For large lesions, minced cartilage + PRP + fibrin gives better outcomes at 24 months — in a single procedure." }
    ],
    verdict: "Practically superseded technique."
  }
];

function SectionAlternatives() {
  return (
    <section className="gr-section">
      <div className="gr-container">
        <div className="gr-section-head">
          <div className="gr-eyebrow">◍ Why not the alternatives?</div>
          <h2 className="gr-title h2">What you may already have been offered — and why it does not solve the problem</h2>
        </div>
        <div className="gr-compare-grid">
          {COMPARE_BLOCKS.map((b, i) => (
            <div key={i} className="gr-compare-card">
              <h3>{b.title}</h3>
              {b.rows.map((r, j) => (
                <div className="row" key={j}>
                  <span className={'lab' + (r.neg ? ' neg' : '')}>{r.lab}</span>
                  <span className="body">{r.body}</span>
                </div>
              ))}
              <div className="verdict">{b.verdict}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SECTION 4 — AutoCart */
function SectionAutoCart() {
  return (
    <section className="gr-section">
      <div className="gr-container">
        <div className="gr-section-head">
          <div className="gr-eyebrow">◍ The AutoCart™ Solution</div>
          <h2 className="gr-title h2">Autologous cartilage graft: the only technique that restores true cartilage</h2>
          <p className="gr-lede" style={{ marginTop: 28 }}>The AutoCart™ technique rests on a simple but powerful principle: using your own cartilage to repair your cartilage.</p>
          <p className="gr-text" style={{ marginTop: 16 }}>Fragments of healthy cartilage are harvested from your joint, mixed with your centrifuged blood (PRP), and fixed onto the lesion with a natural fibrin glue derived from your own blood. No foreign material. No laboratory culture. A single procedure. Under 45 minutes.</p>
        </div>
        <div className="gr-eyebrow" style={{ marginTop: 32 }}>◍ The healing triad</div>
        <div className="gr-triade-grid">
          {[
            { num: '/01', title: 'Minced chondrocytes', src: 'Your cartilage', role: 'Regenerative cells' },
            { num: '/02', title: 'PRP — Platelet-Rich Plasma', src: 'Your centrifuged blood', role: 'Growth factors' },
            { num: '/03', title: 'Autologous fibrin glue', src: 'Your blood', role: 'Fixation matrix' }
          ].map((c, i) => (
            <div key={i} className="gr-triade-card">
              <div className="num">{c.num}</div>
              <h3>{c.title}</h3>
              <div className="src">— {c.src}</div>
              <div className="arrow">↓</div>
              <div className="role">{c.role}</div>
            </div>
          ))}
        </div>
        <p className="gr-triade-sub">These three elements combined trigger the regeneration of hyaline cartilage — the real cartilage, strong and long-lasting.</p>
      </div>
    </section>
  );
}

/* SECTION 5 — TIMELINE */
const STEPS = [
  {
    num: 1, title: "Visualisation of the lesion under arthroscopy", short: "Diagnosis",
    text: "A miniaturised camera is introduced into the joint. The lesion is seen in real time: its exact size, depth, and margins. This is the mapping step — we know precisely what we are treating before we begin.",
    media: [{ kind: 'photo', src: '../assets/lesion-hd.webp', label: 'Focal lesion · intraoperative view' }]
  },
  {
    num: 2, title: "Debridement and harvest of your healthy cartilage", short: "Preparation & harvest",
    text: "The damaged area is first precisely debrided: necrotic and unstable cartilage is removed until healthy margins are reached. A dedicated shaver then harvests micro-fragments of hyaline cartilage from non-load-bearing zones of your joint — automatically collected in a sterile filter (GraftNet™), approximately 0.2 mL per cm² of lesion. Your cartilage, to repair your cartilage.",
    media: [{ kind: 'video', src: '../assets/debridement.mp4', label: 'Debridement & shaver · intraoperative sequence' }]
  },
  {
    num: 3, title: "Activation of your platelet-rich plasma", short: "PRP",
    text: "Simultaneously, 45 mL of your blood is drawn and centrifuged. This produces a PRP concentrated in growth factors and low in inflammatory cells. This golden plasma will enrich the cartilage paste and serve as the basis for the natural fibrin glue.",
    media: [{ kind: 'video', src: '../assets/prp.mp4', frame: 'feather', label: 'PRP preparation · double syringe' }]
  },
  {
    num: 4, title: "Placement of the graft — the lesion is filled", short: "Graft",
    text: "The cartilage shavings are mixed with PRP to form a biological paste. This paste is introduced into the joint through a cannula, deposited precisely onto the damaged area, and adjusted with a probe hook. A living, custom-made filler.",
    media: [{ kind: 'video', src: '../assets/greffe-application.mp4', ratio: '4/3', label: 'Paste application' }]
  },
  {
    num: 5, title: "Fixation with fibrin and PRP — zero foreign material", short: "Stabilisation",
    text: "A 100% autologous fibrin glue — produced from your own PRP via the Thrombinator™ system — is applied over the graft. It coagulates in 15 seconds, forms a natural gel, and holds the chondrocytes in place during regeneration. No implant, no chemical product.",
    media: [{ kind: 'video', src: '../assets/fibrine.mp4', label: 'Fibrin application' }]
  },
  {
    num: 6, title: "Final result — the articular surface is restored", short: "Result",
    text: "The lesion is filled. The articular surface is restored with your own hyaline cartilage. The procedure is complete — under 45 minutes. Regeneration will continue over the following months, guided by the growth factors from the PRP.",
    media: [
      { kind: 'photo', src: '../assets/resultat-avant.webp', frame: 'disc', label: 'Before · initial lesion' },
      { kind: 'photo', src: '../assets/resultat-apres.webp', frame: 'disc', label: 'After · surface filled' }
    ],
    final: true
  }
];

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
      const w = cRect.width, h = cRect.height;
      const pts = nodeRefs.current.map((el) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { x: r.left - cRect.left + r.width / 2, y: r.top - cRect.top + r.height / 2 };
      }).filter(Boolean);
      if (pts.length < 2) return;
      let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
      for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1], p1 = pts[i];
        const dy = p1.y - p0.y;
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
    return () => { window.removeEventListener('resize', compute); clearTimeout(t1); clearTimeout(t2); };
  }, [version]);

  useEffect(() => {
    if (coreRef.current && pathD) setLen(coreRef.current.getTotalLength());
  }, [pathD]);

  useEffect(() => {
    if (!len) return;
    let raf;
    const t0 = performance.now();
    const dur = 5200;
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
      {pathD && <>
        <path d={pathD} stroke="url(#tl-base-grad)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path ref={trailRef} d={pathD} stroke="rgba(0,180,255,0.55)" strokeWidth="14" fill="none" strokeLinecap="round" strokeDasharray={dash} filter="url(#tl-blur-wide)" opacity="0.65" />
        <path ref={haloRef} d={pathD} stroke="rgba(0,229,255,0.85)" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray={dash} filter="url(#tl-blur-soft)" opacity="0.85" />
        <path ref={coreRef} d={pathD} stroke="#ffffff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeDasharray={dash} style={{ filter: 'drop-shadow(0 0 6px #00e5ff) drop-shadow(0 0 14px rgba(0,180,255,0.6))' }} />
      </>}
    </svg>
  );
}

function TimelineRow({ step, index, nodeRef }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { setInView(true); io.disconnect(); }
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
    </div>
  );
}

function StepBody({ step }) {
  return (
    <div>
      <span className="step-num">— Step {String(step.num).padStart(2, '0')} · {step.short}</span>
      <h3>{step.title}</h3>
      <p className="gr-text">{step.text}</p>
      {(() => {
        const allDisc = step.media.length > 1 && step.media.every((m) => m.frame === 'disc');
        if (allDisc) {
          return (
            <div className="gr-disc-grid">
              {step.media.map((m, i) => <Media key={i} {...m} />)}
            </div>
          );
        }
        return (
          <div style={{ display: 'grid', gridTemplateColumns: step.media.length > 1 ? '1fr 1fr' : '1fr', gap: 12, marginTop: 12 }}>
            {step.media.map((m, i) => <Media key={i} {...m} />)}
          </div>
        );
      })()}
    </div>
  );
}

function SectionProcedure() {
  const nodeRefs = useRef([]);
  const [version, setVersion] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setVersion((v) => v + 1), 800);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="gr-section" id="procedure">
      <div className="gr-container">
        <div className="gr-section-head">
          <div className="gr-eyebrow">◍ The procedure</div>
          <h2 className="gr-title h2">Step by step — six stages, a single procedure</h2>
        </div>
        <div className="gr-timeline" style={{ position: 'relative' }}>
          <TimelinePath nodeRefs={nodeRefs} version={version} />
          <div className="gr-timeline-rows">
            {STEPS.map((s, i) => (
              <TimelineRow key={i} step={s} index={i} nodeRef={(el) => { nodeRefs.current[i] = el; }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* SECTION 6 — Indications */
function SectionIndications() {
  const yes = [
    "Chondral or osteochondral lesions grade 3 to 4 (Outerbridge)",
    "Lesions from 2 cm² to 6 cm²",
    "Knee: femoral condyle, tibial plateau, patella",
    "Ankle: talar dome (osteochondral lesion)",
    "Active patient wishing to preserve a native joint",
    "Failure of conservative treatments (injections, physiotherapy)",
    "Failure or insufficient result of microfractures"
  ];
  const no = [
    "Diffuse joint osteoarthritis",
    "Uncontrolled ligament injury",
    "Unstable meniscal lesion not controlled",
    "Significantly deviated mechanical axis not corrected"
  ];
  return (
    <section className="gr-section">
      <div className="gr-container">
        <div className="gr-section-head">
          <div className="gr-eyebrow">◍ Indications</div>
          <h2 className="gr-title h2">Is this technique right for you?</h2>
        </div>
        <div className="gr-ind-grid">
          <div className="gr-ind-card yes">
            <h3><span className="mk">✓</span> Indicated for</h3>
            <ul>{yes.map((t, i) => <li key={i}><span>{t}</span></li>)}</ul>
          </div>
          <div className="gr-ind-card no">
            <h3><span className="mk">✗</span> Not indicated if</h3>
            <ul>{no.map((t, i) => <li key={i}><span>{t}</span></li>)}</ul>
          </div>
        </div>
        <p className="gr-text" style={{ marginTop: 32, maxWidth: 800, fontStyle: 'italic' }}>A specialist consultation is required to assess your situation on the basis of the clinical examination and imaging (MRI in particular).</p>
      </div>
    </section>
  );
}

/* SECTION 7 — Post-op recovery */
const SUITES = [
  {
    title: "Knee — Femoro-tibial lesion",
    steps: [
      { when: "D0 – D2", what: "Rest, leg in extension" },
      { when: "D2 – 6 wks", what: "Partial weight-bearing (15 kg), crutches" },
      { when: "6 wks – 3 mths", what: "Progressive full weight-bearing, cycling, swimming" },
      { when: "3 months", what: "Low-impact sports" },
      { when: "12 – 16 mths", what: "High-impact sports (running, skiing, football)" }
    ]
  },
  {
    title: "Knee — Femoro-patellar lesion (patella)",
    note: "Same protocol + adjustable brace in progressive flexion: 0/30° (wk 1-2) → 0/60° (wk 3-4) → 0/90° (wk 5-6)",
    steps: [
      { when: "D0 – D2", what: "Rest, leg in extension" },
      { when: "Wk 1-2", what: "Brace 0/30°, partial weight-bearing" },
      { when: "Wk 3-4", what: "Brace 0/60°" },
      { when: "Wk 5-6", what: "Brace 0/90°" },
      { when: "12 – 16 mths", what: "High-impact sports" }
    ]
  },
  {
    title: "Ankle",
    steps: [
      { when: "0 – 6 wks", what: "Partial weight-bearing (max 20 kg), orthosis" },
      { when: "6 wks – 3 mths", what: "Progressive full weight-bearing, full mobilisation" },
      { when: "3 months", what: "Low-impact sports" },
      { when: "6 months", what: "Return to all sporting activity" },
      { when: "Follow-up", what: "Consultation and MRI control at 1 year" }
    ]
  }
];

function IRMCycler() {
  const FRAMES = [
    { src: '../assets/irm-m0.webp', tag: 'M0', sub: 'Initial' },
    { src: '../assets/irm-m3.webp', tag: 'M3', sub: '3 months' },
    { src: '../assets/irm-m6.webp', tag: 'M6', sub: '6 months' }
  ];
  return (
    <div className="gr-irm">
      <div className="gr-irm-stage">
        {FRAMES.map((f, i) => (
          <div key={i} className="gr-irm-frame" style={{ animationDelay: `${i * 4}s` }}>
            <img loading="lazy" decoding="async" width="990" height="940" src={f.src} alt={`MRI ${f.tag}`} />
          </div>
        ))}
        <div className="gr-irm-scan"></div>
        <div className="gr-irm-hud-tl">◍ POST-OP FOLLOW-UP · MRI</div>
        <div className="gr-irm-tags">
          {FRAMES.map((f, i) => (
            <div key={i} className="gr-irm-tag" style={{ animationDelay: `${i * 4}s` }}>
              <span className="t">{f.tag}</span>
              <span className="s">{f.sub}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="gr-irm-track">
        {FRAMES.map((f, i) => (
          <div key={i} className="gr-irm-tick">
            <div className="dot" style={{ animationDelay: `${i * 4}s` }}></div>
            <div className="lab">{f.tag}</div>
          </div>
        ))}
        <div className="gr-irm-progress"></div>
      </div>
      <div className="gr-irm-caption">REPAIR PROGRESSION OVER 6 MONTHS · MRI</div>
    </div>
  );
}

function SectionSuites() {
  return (
    <section className="gr-section">
      <div className="gr-container">
        <div className="gr-section-head">
          <div className="gr-eyebrow">◍ Post-operative recovery</div>
          <h2 className="gr-title h2">After surgery: what to expect</h2>
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

/* SECTION 8 — Results */
const STATS = [
  { num: '/01', title: 'Superior to microfractures', body: "Significantly better clinical and MRI outcomes, particularly for patellar lesions and large lesions." },
  { num: '/02', title: 'Superior to MACT', body: "For large lesions, the technique with PRP and fibrin yields better outcomes at 24 months — in a single procedure." },
  { num: '/03', title: 'Stability at 5 years', body: "Long-term studies confirm maintenance of functional results and absence of progressive deterioration." },
  { num: '/04', title: 'Low reoperation rate', body: "At 5 years, the reintervention rate is very low." }
];

function SectionResultats() {
  return (
    <section className="gr-section">
      <div className="gr-container">
        <div className="gr-section-head">
          <div className="gr-eyebrow">◍ Results &amp; scientific data</div>
          <h2 className="gr-title h2">Proven results up to 5 years</h2>
          <p className="gr-text" style={{ marginTop: 20 }}>The autologous cartilage technique has been studied since 1983. Current data, from multiple clinical studies involving hundreds of patients, are consistent:</p>
        </div>
        <div className="gr-stats-grid">
          {STATS.map((s, i) => (
            <div key={i} className="gr-stat-card">
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 64, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
          <IRMCycler />
        </div>
      </div>
    </section>
  );
}

/* SECTION 9 — FAQ */
const FAQ = [
  {
    q: "Will I be in pain after surgery?",
    a: "Immediate post-operative pain is managed with an appropriate analgesic protocol. It is generally moderate and similar to that of standard arthroscopy. The most difficult period is usually the first 48 hours."
  },
  {
    q: "How long is the hospital stay?",
    a: "The procedure is generally performed as day surgery or with one overnight stay, depending on the protocols of the operating site."
  },
  {
    q: "Why can sport not be resumed before 12–16 months for the knee?",
    a: "Cartilage regeneration is a slow biological process. The tissue is structurally in place by 3–6 months, but it takes 12 to 18 months to reach sufficient mechanical strength for impact sports. Returning too early risks damaging what has just been built."
  },
  {
    q: "Is the technique covered by health insurance?",
    a: "Coverage depends on the clinical context and the procedure code used. This point is discussed during the pre-operative consultation."
  },
  {
    q: "Can the knee AND ankle be treated with this technique?",
    a: "Yes. Both joints can be treated, either during the same procedure or at separate operations, depending on your assessment."
  },
  {
    q: "Is an MRI required before the consultation?",
    a: "A recent MRI (within the past 6 months) of the affected joint is essential to assess the lesion. If you do not have one, it will be prescribed at the consultation."
  }
];

function SectionFAQ() {
  const [open, setOpen] = useState(-1);
  return (
    <section className="gr-section">
      <div className="gr-container" style={{ maxWidth: 900 }}>
        <div className="gr-section-head">
          <div className="gr-eyebrow">◍ FAQ</div>
          <h2 className="gr-title h2">Frequently asked questions</h2>
        </div>
        <div>
          {FAQ.map((it, i) => (
            <div key={i} className={'gr-faq-item' + (open === i ? ' open' : '')}>
              <button className="gr-faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="plus">+</span>
              </button>
              <div className="gr-faq-a">
                <p>{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SECTION 10 — CTA final */
function CTAFinal() {
  return (
    <section className="gr-section gr-cta-final">
      <div className="gr-container">
        <div className="gr-eyebrow" style={{ justifyContent: 'center' }}>◍ Consultation</div>
        <h2 className="gr-title h2">Persistent knee or ankle pain that will not go away?</h2>
        <p>A dedicated consultation allows us to analyse your imaging, assess your lesion, and determine whether cartilage grafting is the right solution for your situation. Every case is unique — let us start with a meeting.</p>
        <div className="gr-cta-row">
          <a href="contact.html" className="gr-btn gr-btn-ghost">Contact the secretary</a>
        </div>
      </div>
    </section>
  );
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
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
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
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', init); };
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
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
