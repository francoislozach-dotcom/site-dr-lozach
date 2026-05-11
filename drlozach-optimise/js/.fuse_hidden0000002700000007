const {
  useState,
  useEffect
} = React;
const PATHO = [{
  id: 'hanche',
  kind: 'hip',
  num: '01',
  name: 'Pathologies de la hanche',
  regionKey: 'Hanche',
  tagline: '',
  intro: 'La hanche supporte l\'ensemble du poids du corps. Quand elle se dégrade, la chirurgie permet une mobilité durable.',
  items: ['Coxarthrose', 'Conflit fémoro-acétabulaire (CFA)', 'Ostéonécrose de la tête fémorale', 'Lésions du labrum', 'Tendinopathies du moyen fessier', 'Tendinopathies du psoas', 'Compressions dynamiques neurologiques (nerf sciatique)']
}, {
  id: 'genou',
  kind: 'knee',
  num: '02',
  name: 'Pathologies du genou',
  regionKey: 'Genou',
  tagline: '',
  intro: 'Le genou cumule les contraintes : pivot, charge, instabilité. De l\'entorse sportive à l\'arthrose, chaque pathologie a sa solution adaptée.',
  items: ['Gonarthrose', 'Lésion du ligament croisé antérieur (LCA)', 'Lésion du ligament croisé postérieur (LCP)', 'Lésions méniscales', 'Lésions cartilagineuses focales', 'Instabilité rotulienne', 'Déformations (genu varum / genu valgum)']
}, {
  id: 'cheville',
  kind: 'foot',
  num: '03',
  name: 'Chirurgies de la cheville',
  regionKey: 'Cheville',
  tagline: '',
  intro: 'La cheville absorbe les chocs et transmet la propulsion. Tendinopathies, conflits, instabilité — chaque lésion a sa prise en charge précise.',
  items: ['Tendinopathies du tendon d\'Achille', 'Instabilité chronique de cheville', 'Lésion ostéochondrale du dôme talien', 'Conflits antérieur et postérieur de la cheville']
}, {
  id: 'pied',
  kind: 'foot',
  num: '04',
  name: 'Chirurgie du pied',
  regionKey: 'Pied',
  tagline: '',
  intro: 'Le pied est une mécanique fine. La chirurgie redonne l\'appui, supprime la douleur et permet la reprise de la marche.',
  items: ['Hallux valgus', 'Orteils en griffe / en marteau', 'Névrome de Morton', 'Métatarsalgies', 'Arthrose du médio-pied']
}, {
  id: 'trauma',
  kind: 'knee',
  num: '05',
  name: 'Traumatologie',
  regionKey: 'Traumatologie',
  tagline: 'L\'urgence, sans attendre.',
  intro: 'Une fracture, une entorse grave, une rupture tendineuse. Prise en charge rapide, intervention dans les 24-48h si nécessaire.',
  items: ['Fractures du membre inférieur', 'Entorses bénignes de la cheville', 'Entorses graves de la cheville', 'Lésions ligamentaires aiguës du genou', 'Ruptures tendineuses (tendon d\'Achille, rotulien, quadricipital)', 'Luxations (prothétiques et non prothétiques)']
}];

/* ---------- Hero ---------- */
function PathoHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 180,
      paddingBottom: 80,
      background: 'var(--bg)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.12,
      mixBlendMode: 'screen',
      filter: 'hue-rotate(180deg) saturate(1.2) contrast(1.05)',
      pointerEvents: 'none',
      zIndex: 0,
      maskImage: 'radial-gradient(ellipse at 80% 60%, black 20%, transparent 75%)',
      WebkitMaskImage: 'radial-gradient(ellipse at 80% 60%, black 20%, transparent 75%)'
    }
  }, /*#__PURE__*/React.createElement("source", {
    loading: "lazy", src: "assets/anatomy.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow reveal"
  }, "\u25CD Pathologies \xB7 Membre inf\xE9rieur"), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display"
  }, "Pathologie de la hanche,")), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display soft-dynamic",
    style: {
      color: 'var(--gold)',
      fontStyle: 'italic',
      display: 'inline-block'
    }
  }, "du genou, de la cheville")), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display"
  }, "et du pied.")), /*#__PURE__*/React.createElement("p", {
    className: "reveal",
    style: {
      maxWidth: 600,
      fontSize: 18,
      lineHeight: 1.5,
      color: 'var(--ink-2)',
      marginTop: 48,
      fontFamily: 'var(--serif)',
      fontStyle: 'italic'
    }
  }, "Quatre domaines d'intervention. Une m\xEAme approche \u2014 comprendre, analyser, op\xE9rer juste.")));
}

/* ---------- Patho card ---------- */
function PathoCard({
  s,
  index,
  onSelect
}) {
  const deeper = index % 2 === 1;
  return /*#__PURE__*/React.createElement("section", {
    id: s.id,
    style: {
      background: deeper ? 'var(--bg-deep)' : 'var(--bg)',
      color: 'var(--ink)',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid var(--line)'
    }
  }, s.id === 'hanche' && /*#__PURE__*/React.createElement("div", {
    className: "joint-video-wrap",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("video", {
    className: "joint-video",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto"
  }, /*#__PURE__*/React.createElement("source", {
    src: "assets/hanche.mp4",
    type: "video/mp4"
  }))), s.id === 'genou' && /*#__PURE__*/React.createElement("div", {
    className: "joint-video-wrap",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("video", {
    className: "joint-video",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto"
  }, /*#__PURE__*/React.createElement("source", {
    src: "assets/genou.mp4",
    type: "video/mp4"
  }))), (s.id === 'cheville' || s.id === 'pied') && /*#__PURE__*/React.createElement("div", {
    className: "joint-video-wrap",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("video", {
    className: "joint-video",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto"
  }, /*#__PURE__*/React.createElement("source", {
    src: "assets/cheville-pied.mp4",
    type: "video/mp4"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '-15%',
      top: '50%',
      transform: 'translateY(-50%)',
      opacity: 0.45,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(JointGlyph, {
    kind: s.kind,
    size: 760
  })), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'flex-start'
    },
    className: "patho-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow gold reveal"
  }, "\u25CD /", s.num, " \u2014 ", s.name), /*#__PURE__*/React.createElement(Heading, {
    className: "display",
    tag: "h2"
  }, s.name, ".", s.tagline ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic",
    style: {
      color: 'var(--gold)'
    }
  }, s.tagline)) : null), /*#__PURE__*/React.createElement("p", {
    className: "reveal",
    style: {
      lineHeight: 1.6,
      color: 'var(--ink-2)',
      marginTop: 32,
      maxWidth: 480,
      fontFamily: 'var(--serif)',
      fontSize: 22
    }
  }, s.intro)), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--gold)',
      marginBottom: 20
    }
  }, "\u2014 Pathologies trait\xE9es"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      borderTop: '1px solid var(--line)'
    }
  }, s.items.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onSelect({
      region: s.name,
      regionKey: s.regionKey,
      name: p
    }),
    className: "patho-row hoverable",
    style: {
      width: '100%',
      textAlign: 'left',
      padding: '18px 0',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gap: 18,
      alignItems: 'center',
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      color: 'var(--ink)',
      transition: 'transform 0.3s, color 0.3s, padding 0.3s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      opacity: 0.5,
      alignSelf: 'start',
      paddingTop: 6
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 22,
      lineHeight: 1.25,
      minWidth: 0,
      wordBreak: 'break-word',
      hyphens: 'auto'
    }
  }, p), /*#__PURE__*/React.createElement("span", {
    className: "mono patho-cta",
    style: {
      opacity: 0,
      color: 'var(--gold)',
      fontSize: 12,
      letterSpacing: '0.1em',
      transition: 'opacity 0.3s',
      alignSelf: 'start',
      paddingTop: 8,
      whiteSpace: 'nowrap'
    }
  }, "D\xC9TAIL \u2197")))))))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 960px) { .patho-grid { grid-template-columns: 1fr !important; } }
        .patho-row:hover { transform: translateX(8px); color: var(--gold); padding-left: 8px !important; padding-right: 8px !important; }
        .patho-row:hover .patho-cta { opacity: 1; }

        .joint-video-wrap {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 110%;
          height: 90%;
          max-width: none;
          pointer-events: none;
          z-index: 1;
          opacity: 0.28;
          mix-blend-mode: screen;
          -webkit-mask-image: radial-gradient(ellipse 45% 55% at 50% 50%, black 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.15) 80%, transparent 100%);
                  mask-image: radial-gradient(ellipse 45% 55% at 50% 50%, black 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.15) 80%, transparent 100%);
          animation: joint-spin 60s linear infinite;
        }
        .joint-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: hue-rotate(180deg) saturate(1.4) brightness(0.9) contrast(1.15);
        }
        @keyframes joint-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @media (max-width: 960px) {
          .joint-video-wrap { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .joint-video-wrap { animation: none; }
        }
      `));
}

/* ---------- Drawer helpers ---------- */
function Section({
  num,
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 18,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--gold)',
      fontSize: 12
    }
  }, "/", num), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 1.1,
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 30
    }
  }, children));
}
function Paragraphs({
  text
}) {
  if (!text) return null;
  const arr = Array.isArray(text) ? text : String(text).split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, arr.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      color: 'var(--ink)',
      fontSize: 17,
      lineHeight: 1.7,
      fontFamily: 'var(--sans)',
      margin: 0
    }
  }, p)));
}
function BulletList({
  items,
  accent = 'var(--gold)'
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 0,
      margin: 0
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 14,
      alignItems: 'baseline',
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent,
      fontSize: 8,
      transform: 'translateY(-2px)'
    }
  }, "\u25CF"), /*#__PURE__*/React.createElement("span", null, it))));
}

/* ---------- Drawer ---------- */
function PathoDrawer({
  patho,
  onClose
}) {
  useEffect(() => {
    if (!patho) return;
    document.body.style.overflow = 'hidden';
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [patho, onClose]);
  const data = patho ? window.PATHO_DETAILS?.[patho.regionKey || patho.region]?.[patho.name] : null;
  const placeholder = !data;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: 'rgba(6, 9, 18, 0.7)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      opacity: patho ? 1 : 0,
      pointerEvents: patho ? 'auto' : 'none',
      transition: 'opacity 0.4s ease'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    "aria-hidden": !patho,
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100vh',
      width: 'min(640px, 100vw)',
      background: 'var(--bg-deep)',
      borderLeft: '1px solid var(--line)',
      zIndex: 201,
      color: 'var(--ink)',
      transform: patho ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.55s cubic-bezier(0.7, 0, 0.2, 1)',
      overflowY: 'auto',
      overflowX: 'hidden',
      boxShadow: '-40px 0 80px rgba(0, 212, 255, 0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 2,
      background: 'linear-gradient(90deg, transparent, var(--gold) 40%, var(--gold) 60%, transparent)',
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid var(--line)',
      position: 'sticky',
      top: 0,
      background: 'var(--bg-deep)',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.18em',
      color: 'var(--gold)'
    }
  }, "\u25CD ", patho?.region.toUpperCase(), " \xB7 PATHOLOGIE"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    className: "hoverable",
    "aria-label": "Fermer",
    style: {
      background: 'transparent',
      border: '1px solid var(--line)',
      color: 'var(--ink)',
      width: 38,
      height: 38,
      borderRadius: '50%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color 0.3s, color 0.3s, transform 0.3s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'var(--gold)';
      e.currentTarget.style.color = 'var(--gold)';
      e.currentTarget.style.transform = 'rotate(90deg)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'var(--line)';
      e.currentTarget.style.color = 'var(--ink)';
      e.currentTarget.style.transform = 'rotate(0)';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1L13 13M13 1L1 13",
    stroke: "currentColor",
    strokeWidth: "1.4"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 40px 80px'
    }
  }, /*#__PURE__*/React.createElement(Heading, {
    className: "display",
    tag: "h2",
    style: {
      fontSize: 'clamp(22px, 2.6vw, 36px)',
      lineHeight: 1.1,
      wordBreak: 'break-word',
      hyphens: 'auto'
    }
  }, patho?.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    },
    className: "mono"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "R\xE9gion : "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, patho?.region)), data && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(Section, {
    num: "01",
    label: "Qu'est-ce que c'est ?"
  }, /*#__PURE__*/React.createElement(Paragraphs, {
    text: data.whatIsIt || data.description
  })), /*#__PURE__*/React.createElement(Section, {
    num: "02",
    label: "Comment \xE7a se manifeste ?"
  }, data.symptoms ? /*#__PURE__*/React.createElement(Paragraphs, {
    text: data.symptoms
  }) : /*#__PURE__*/React.createElement(BulletList, {
    items: data.signs
  })), /*#__PURE__*/React.createElement(Section, {
    num: "03",
    label: "Que se passe-t-il sans traitement ?"
  }, data.untreated ? /*#__PURE__*/React.createElement(Paragraphs, {
    text: data.untreated
  }) : /*#__PURE__*/React.createElement(BulletList, {
    items: data.exams
  })), /*#__PURE__*/React.createElement(Section, {
    num: "04",
    label: "Comment \xE7a se traite ?"
  }, data.treatment ? /*#__PURE__*/React.createElement(Paragraphs, {
    text: data.treatment
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--gold)',
      fontSize: 11,
      letterSpacing: '0.16em',
      marginBottom: 12
    }
  }, "\u2014 TRAITEMENT M\xC9DICAL"), /*#__PURE__*/React.createElement(BulletList, {
    items: data.medical,
    accent: "var(--gold)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--ink)',
      fontSize: 11,
      letterSpacing: '0.16em',
      marginBottom: 12
    }
  }, "\u2014 TRAITEMENT CHIRURGICAL"), /*#__PURE__*/React.createElement(BulletList, {
    items: data.surgical,
    accent: "var(--ink)"
  }))))), placeholder && patho && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      padding: '40px 0',
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "mono",
    style: {
      color: 'var(--gold)',
      fontSize: 11,
      letterSpacing: '0.14em'
    }
  }, "\u25CD CONTENU \xC0 VENIR"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontFamily: 'var(--serif)',
      fontSize: 22,
      color: 'var(--ink-2)',
      lineHeight: 1.4
    }
  }, "Le d\xE9tail de cette pathologie sera prochainement publi\xE9.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      padding: '28px 32px',
      border: '1px solid var(--line)',
      borderRadius: 4,
      background: 'rgba(0, 212, 255, 0.03)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--gold)',
      fontSize: 11,
      letterSpacing: '0.14em',
      marginBottom: 10
    }
  }, "\u25CD POUR ALLER PLUS LOIN"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 20,
      lineHeight: 1.4
    }
  }, "Une consultation permet de poser le bon diagnostic et de discuter des options."), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "btn hoverable",
    style: {
      marginTop: 22,
      border: '1px solid var(--gold)',
      color: 'var(--gold)'
    }
  }, "Prendre rendez-vous", /*#__PURE__*/React.createElement("svg", {
    className: "arrow",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 14L14 2M14 2H4M14 2V12",
    stroke: "currentColor",
    strokeWidth: "1.4"
  })))))), /*#__PURE__*/React.createElement("style", null, `
        .patho-section[open] .patho-chevron { transform: rotate(45deg); }
        .patho-section summary::-webkit-details-marker { display: none; }
      `));
}

/* ---------- App ---------- */
function App() {
  useReveal();
  const [selected, setSelected] = useState(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Cursor, null), /*#__PURE__*/React.createElement(Nav, {
    active: "pathologies"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PathoHero, null), /*#__PURE__*/React.createElement(Marquee, {
    items: ['Hanche', 'Genou', 'Pied', 'Cheville', 'Traumatologie', 'Arthroscopie', 'Prothèse', 'Cartilage']
  }), PATHO.map((s, i) => /*#__PURE__*/React.createElement(PathoCard, {
    key: s.id,
    s: s,
    index: i,
    onSelect: setSelected
  }))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(PathoDrawer, {
    patho: selected,
    onClose: () => setSelected(null)
  }));
}
ReactDOM.createRoot(document.getElementById('app')).render(/*#__PURE__*/React.createElement(App, null));
