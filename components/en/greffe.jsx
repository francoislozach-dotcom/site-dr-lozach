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
            <p className="gr-text">Persistent knee or ankle pain warrants an assessment. For some localised cartilage lesions, an autologous cartilage graft may be discussed after examination and imaging.</p>
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
    "title": "Injections",
    "rows": [
      {
        "lab": "Principle",
        "body": "May be discussed to relieve symptoms."
      }
    ],
    "verdict": "The choice depends on your clinical assessment."
  },
  {
    "title": "Microfracture",
    "rows": [
      {
        "lab": "Principle",
        "body": "A technique intended to stimulate repair tissue."
      }
    ],
    "verdict": "The choice depends on your clinical assessment."
  },
  {
    "title": "Joint replacement",
    "rows": [
      {
        "lab": "Principle",
        "body": "An option discussed in a different clinical context, particularly advanced osteoarthritis."
      }
    ],
    "verdict": "The choice depends on your clinical assessment."
  },
  {
    "title": "Chondrocyte transplantation (MACI / ACI)",
    "rows": [
      {
        "lab": "Principle",
        "body": "A cell-based cartilage repair technique performed in two stages."
      }
    ],
    "verdict": "The choice depends on your clinical assessment."
  }
];

function SectionAlternatives() {
  return (
    <section className="gr-section">
      <div className="gr-container">
        <div className="gr-section-head">
          <div className="gr-eyebrow">◍ Treatment options</div>
          <h2 className="gr-title h2">Different options to discuss in consultation</h2>
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
          <h2 className="gr-title h2">Autologous cartilage graft: an option for selected lesions</h2>
          <p className="gr-lede" style={{ marginTop: 28 }}>The AutoCart™ technique uses the patient’s own cartilage.</p>
          <p className="gr-text" style={{ marginTop: 16 }}>The technique uses cartilage fragments from the patient. Its suitability, practical details and possible associated procedures are explained during the consultation.</p>
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
    "num": 1,
    "title": "Visualisation of the lesion under arthroscopy",
    "short": "Diagnosis",
    "text": "The lesion is assessed under arthroscopic guidance.",
    "media": [
      {
        "kind": "photo",
        "src": "../assets/lesion-hd.webp",
        "label": "Focal lesion · intraoperative view"
      }
    ]
  },
  {
    "num": 2,
    "title": "Debridement and harvest of your healthy cartilage",
    "short": "Preparation & harvest",
    "text": "Cartilage fragments are collected and the area to be treated is prepared.",
    "media": [
      {
        "kind": "video",
        "src": "../assets/debridement.mp4",
        "label": "Debridement & shaver · intraoperative sequence"
      }
    ]
  },
  {
    "num": 3,
    "title": "Activation of your platelet-rich plasma",
    "short": "PRP",
    "text": "Blood is processed to prepare platelet-rich plasma (PRP).",
    "media": [
      {
        "kind": "video",
        "src": "../assets/prp.mp4",
        "frame": "feather",
        "label": "PRP preparation · double syringe"
      }
    ]
  },
  {
    "num": 4,
    "title": "Placement of the graft — the lesion is filled",
    "short": "Graft",
    "text": "The cartilage fragments are placed in the prepared defect.",
    "media": [
      {
        "kind": "video",
        "src": "../assets/greffe-application.mp4",
        "ratio": "4/3",
        "label": "Paste application"
      }
    ]
  },
  {
    "num": 5,
    "title": "Graft stabilisation",
    "short": "Stabilisation",
    "text": "The graft is stabilised according to the planned technique.",
    "media": [
      {
        "kind": "video",
        "src": "../assets/fibrine.mp4",
        "label": "Fibrin application"
      }
    ]
  },
  {
    "num": 6,
    "title": "Final check",
    "short": "Result",
    "text": "The treated area is checked. Healing and recovery are assessed over time.",
    "media": [
      {
        "kind": "photo",
        "src": "../assets/resultat-avant.webp",
        "frame": "disc",
        "label": "Before · initial lesion"
      },
      {
        "kind": "photo",
        "src": "../assets/resultat-apres.webp",
        "frame": "disc",
        "label": "After · surface filled"
      }
    ],
    "final": true
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
    "Lesion size, depth and location assessed individually",
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
    "title": "A personalised recovery plan",
    "note": "The location of the lesion and any associated procedures determine the recovery plan. This page is not a prescription.",
    "steps": [
      {
        "when": "Before surgery",
        "what": "Discuss the planned procedure and personalised recovery instructions."
      },
      {
        "when": "After surgery",
        "what": "Follow the prescribed weight-bearing, crutch and brace instructions."
      },
      {
        "when": "Rehabilitation",
        "what": "Progress according to your surgeon and physiotherapist’s assessment."
      },
      {
        "when": "Return to activity",
        "what": "Resume work and sport only after individual assessment."
      }
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
      <div className="gr-irm-caption">FOLLOW-UP ILLUSTRATION · INDIVIDUAL OUTCOMES VARY</div>
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
  {
    "num": "/01",
    "title": "Goals",
    "body": "Discuss pain, function and your activity goals."
  },
  {
    "num": "/02",
    "title": "Individual outcomes",
    "body": "Improvement varies; a particular result cannot be guaranteed."
  },
  {
    "num": "/03",
    "title": "Follow-up",
    "body": "Recovery is assessed during follow-up visits, with imaging when indicated."
  },
  {
    "num": "/04",
    "title": "Risks and limitations",
    "body": "Persistent pain, stiffness, infection, thrombosis or failure of the graft may occur. Further surgery may be needed. Discuss your individual risks in consultation."
  }
];

function SectionResultats() {
  return (
    <section className="gr-section">
      <div className="gr-container">
        <div className="gr-section-head">
          <div className="gr-eyebrow">◍ Results &amp; scientific data</div>
          <h2 className="gr-title h2">Goals, follow-up and limitations</h2>
          <p className="gr-text" style={{ marginTop: 20 }}>Results must be interpreted in the context of each patient.</p>
        </div>
        <p className="gr-text" style={{marginBottom:24}}><a href="https://www.orthoinfo.org/treatment/articular-cartilage-restoration/" target="_blank" rel="noopener noreferrer">Patient information: cartilage restoration (AAOS, English)</a></p><div className="gr-stats-grid">
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
    "q": "How is pain managed?",
    "a": "Pain relief is prescribed and adapted to your situation."
  },
  {
    "q": "How long does surgery and the hospital stay take?",
    "a": "The planned duration and type of hospital stay are explained during the preoperative consultation and depend on the procedures involved."
  },
  {
    "q": "When can I walk and return to sport?",
    "a": "Weight-bearing and return to sport require individual instructions. Follow your prescription and ask the surgical team before changing your activity."
  },
  {
    "q": "Is treatment covered by health insurance?",
    "a": "Coverage and any additional fees are explained before surgery."
  },
  {
    "q": "Can this technique be considered for the knee or ankle?",
    "a": "The option is assessed according to the location and characteristics of the lesion. A consultation is needed to establish the indication."
  },
  {
    "q": "What should I bring to the consultation?",
    "a": "Bring your available imaging and reports. Any further examinations will be specified during the consultation."
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
              <button className="gr-faq-q" aria-expanded={open === i} aria-controls={`graft-answer-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="plus">+</span>
              </button>
              <div id={`graft-answer-${i}`} className="gr-faq-a" hidden={open !== i}>
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
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
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
