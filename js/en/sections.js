/* ============================================================
   Sections Home — English version
   ============================================================ */

function SectionApproche() {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "blob blob-rose",
    style: {
      width: 500,
      height: 500,
      left: '-15%',
      top: '20%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "bistouri-video-wrap",
    style: {
      position: 'absolute',
      left: '50%',
      top: '32%',
      transform: 'translate(-50%, -50%)',
      width: '70%',
      height: '60%',
      zIndex: 1,
      pointerEvents: 'none',
      opacity: 0.22,
      mixBlendMode: 'screen',
      maskImage: 'radial-gradient(ellipse 50% 55% at 50% 50%, black 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.15) 80%, transparent 100%)',
      WebkitMaskImage: 'radial-gradient(ellipse 50% 55% at 50% 50%, black 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.15) 80%, transparent 100%)'
    }
  }, /*#__PURE__*/React.createElement("video", {
    src: "../assets/bistouri.mp4",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'hue-rotate(180deg) saturate(1.4) brightness(0.95) contrast(1.15)'
    }
  })), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 960px) { .bistouri-video-wrap { display: none; } }
        @media (prefers-reduced-motion: reduce) { .bistouri-video-wrap { display: none; } }
      `), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 80,
      alignItems: 'flex-start'
    },
    className: "approche-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow reveal"
  }, "◍ Approach"), /*#__PURE__*/React.createElement(Heading, {
    className: "display",
    tag: "h2"
  }, "The right move,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic",
    style: {
      color: 'var(--gold)'
    }
  }, "not one move too many."))), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 22,
      lineHeight: 1.5,
      color: 'var(--ink-2)',
      marginBottom: 32,
      fontFamily: 'var(--serif)'
    }
  }, "Every joint has its own story. My role is to understand yours — your lifestyle, your pain, your expectations — before proposing a solution."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--muted)'
    }
  }, "The best surgery is the one you can avoid. When surgery becomes the best option, I use the least invasive techniques: mini-invasive approaches, arthroscopy, enhanced recovery protocols. The goal is not simply to operate — it is to get you back on your feet, quickly and effectively."))), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      marginTop: 100,
      aspectRatio: '21/9',
      overflow: 'hidden',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    loading: "lazy", src: "../assets/dr-bloc.webp",
    alt: "Dr Fran\xE7ois Lozach in the operating theatre",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 30%',
      filter: hover ? 'saturate(1.05) brightness(1.05) contrast(1.08)' : 'saturate(0.4) brightness(0.55) contrast(1.2)',
      transform: hover ? 'scale(1.02)' : 'scale(1)',
      transition: 'filter 1s var(--ease-out), transform 1.4s var(--ease-out)',
      maskImage: 'radial-gradient(ellipse 65% 75% at 50% 50%, black 0%, rgba(0,0,0,0.92) 25%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 75%, transparent 100%)',
      WebkitMaskImage: 'radial-gradient(ellipse 65% 75% at 50% 50%, black 0%, rgba(0,0,0,0.92) 25%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 75%, transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: hover ? 'linear-gradient(90deg, rgba(10,14,26,0.4) 0%, rgba(10,14,26,0.05) 50%, rgba(10,14,26,0.4) 100%), radial-gradient(circle at 30% 50%, rgba(0,212,255,0.18), transparent 60%)' : 'linear-gradient(90deg, rgba(10,14,26,0.7) 0%, rgba(10,14,26,0.5) 50%, rgba(10,14,26,0.8) 100%), radial-gradient(circle at 30% 50%, rgba(0,212,255,0.10), transparent 55%)',
      transition: 'background 1s var(--ease-out)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(0,212,255,0.05) 3px, rgba(0,212,255,0.05) 4px)',
      mixBlendMode: 'overlay',
      opacity: hover ? 1 : 0.6,
      transition: 'opacity 0.6s',
      pointerEvents: 'none',
      maskImage: 'radial-gradient(ellipse 65% 75% at 50% 50%, black 0%, rgba(0,0,0,0.92) 25%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 75%, transparent 100%)',
      WebkitMaskImage: 'radial-gradient(ellipse 65% 75% at 50% 50%, black 0%, rgba(0,0,0,0.92) 25%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 75%, transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      position: 'absolute',
      left: 24,
      bottom: 24,
      color: 'var(--gold)',
      fontSize: 11,
      letterSpacing: '0.18em',
      opacity: hover ? 1 : 0.75,
      transition: 'opacity 0.5s',
      textShadow: '0 1px 8px rgba(0,0,0,0.6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: hover ? 64 : 36,
      height: 1,
      background: 'var(--gold)',
      marginBottom: 8,
      transition: 'width 0.6s var(--ease-out)'
    }
  }), "OPERATING THEATRE \xB7 FOCUS")), /*#__PURE__*/React.createElement("style", null, `
          @media (max-width: 900px) { .approche-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
        `)));
}
const SPECIALTIES = [{
  id: 'hanche',
  kind: 'hip',
  num: '01',
  title: 'Hip',
  desc: 'Total hip arthroplasty via anterior mini-invasive approach, arthroscopy, femoroacetabular impingement.'
}, {
  id: 'genou',
  kind: 'knee',
  num: '02',
  title: 'Knee',
  desc: 'Total and unicompartmental arthroplasty, ligament reconstruction, meniscectomy, cartilage graft.'
}, {
  id: 'pied',
  kind: 'foot',
  num: '03',
  title: 'Foot & Ankle',
  desc: 'Mini-invasive hallux valgus, arthrodesis, ankle arthroscopy, trauma surgery.'
}];
function SectionSpecialites() {
  const [active, setActive] = useS(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'rgba(20,28,48,0.4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex between",
    style: {
      marginBottom: 80,
      alignItems: 'flex-end',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow reveal"
  }, "◍ Specialties"), /*#__PURE__*/React.createElement(Heading, {
    className: "display",
    tag: "h2"
  }, "Three joints.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic"
  }, "One obsession."))), /*#__PURE__*/React.createElement("a", {
    href: "chirurgie.html",
    className: "btn btn-outline reveal"
  }, "View all", /*#__PURE__*/React.createElement("svg", {
    className: "arrow",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 14L14 2M14 2H4M14 2V12",
    stroke: "currentColor",
    strokeWidth: "1.4"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 60,
      alignItems: 'center',
      minHeight: 520
    },
    className: "spec-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, SPECIALTIES.map((s, i) => /*#__PURE__*/React.createElement("a", {
    key: s.id,
    href: `chirurgie.html#${s.id}`,
    onMouseEnter: () => setActive(i),
    className: "spec-item hoverable",
    style: {
      borderTop: '1px solid var(--line)',
      borderBottom: i === SPECIALTIES.length - 1 ? '1px solid var(--line)' : 'none',
      padding: '32px 0',
      display: 'grid',
      gridTemplateColumns: '60px 1fr 24px',
      alignItems: 'center',
      gap: 24,
      transition: 'padding 0.4s var(--ease-out), color 0.3s',
      paddingLeft: active === i ? 24 : 0,
      color: active === i ? 'var(--gold-deep)' : 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--muted)'
    }
  }, s.num), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'clamp(36px, 5vw, 64px)',
      marginBottom: 8
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--muted)',
      maxHeight: active === i ? 80 : 0,
      opacity: active === i ? 1 : 0,
      overflow: 'hidden',
      transition: 'max-height 0.5s var(--ease-out), opacity 0.3s, margin 0.4s'
    }
  }, s.desc)), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      transform: active === i ? 'rotate(-45deg) translateX(4px)' : 'rotate(0)',
      transition: 'transform 0.4s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8H13M13 8L8 3M13 8L8 13",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "reveal spec-glyph",
    style: {
      background: 'linear-gradient(135deg, #0e1422 0%, #142038 100%)',
      border: '1px solid var(--line)',
      aspectRatio: '1/1.05',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, SPECIALTIES.map((s, i) => {
    const imgSrc = s.kind === 'hip' ? '../assets/anatomy-hanche.webp' : s.kind === 'knee' ? '../assets/anatomy-genou.webp' : '../assets/anatomy-pied.webp';
    const objPos = s.kind === 'hip' ? 'center 30%' : 'center center';
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      style: {
        position: 'absolute',
        inset: 0,
        opacity: active === i ? 1 : 0,
        transform: active === i ? 'scale(1)' : 'scale(0.94)',
        transition: 'opacity 0.6s var(--ease-out), transform 0.8s var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: imgSrc,
      alt: s.title,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: objPos,
        filter: 'saturate(0.95) brightness(1.05) contrast(1.05)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 45%, transparent 35%, rgba(10,14,26,0.55) 100%), linear-gradient(180deg, transparent 60%, rgba(10,14,26,0.7) 100%)',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(0,212,255,0.06) 3px, rgba(0,212,255,0.06) 4px)',
        mixBlendMode: 'overlay',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        position: 'absolute',
        bottom: 24,
        left: 24,
        color: 'var(--gold)',
        textShadow: '0 1px 8px rgba(0,0,0,0.6)',
        letterSpacing: '0.18em',
        fontSize: 11
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 36,
        height: 1,
        background: 'var(--gold)',
        marginBottom: 6
      }
    }), "/", s.num, " — ", s.title.toUpperCase()));
  })))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 900px) {
          .spec-row { grid-template-columns: 1fr !important; }
          .spec-glyph { aspect-ratio: 1/1 !important; order: -1; }
        }
      `));
}
function SectionTechniques() {
  const techs = [{
    num: '01',
    title: 'Hip and knee arthroplasty',
    desc: 'Total and unicompartmental prostheses — primary and revision. Anterior mini-invasive approach, ROSA robotic assistance.'
  }, {
    num: '02',
    title: 'Arthroscopy',
    desc: 'Joint surgery through 2 mini-incisions under camera guidance. Knee, hip, ankle.'
  }, {
    num: '03',
    title: 'ERAS (Enhanced Recovery After Surgery)',
    desc: 'Enhanced recovery after surgery: anaesthesia protocols, multimodal analgesia, early mobilisation.'
  }, {
    num: '04',
    title: 'Cartilage graft',
    desc: 'Repair of cartilage lesions in young patients — an alternative to joint replacement.'
  }, {
    num: '05',
    title: 'Injections & PRP',
    desc: 'Platelet-rich plasma, hyaluronic acid, ultrasound-guided corticosteroid injections.'
  }, {
    num: '06',
    title: 'Trauma surgery',
    desc: 'Fractures, severe sprains, sports injuries — urgent management.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "deep",
    style: {
      background: 'var(--bg-deep)',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex between",
    style: {
      marginBottom: 80,
      alignItems: 'flex-end',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow gold reveal"
  }, "◍ Techniques"), /*#__PURE__*/React.createElement(Heading, {
    className: "display",
    tag: "h2"
  }, "The right move,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic",
    style: {
      color: 'var(--gold)'
    }
  }, "not one move too many."))), /*#__PURE__*/React.createElement("a", {
    href: "pathologies.html",
    className: "btn reveal",
    style: {
      border: '1px solid var(--ink-2)',
      color: 'var(--ink)'
    }
  }, "All conditions", /*#__PURE__*/React.createElement("svg", {
    className: "arrow",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 14L14 2M14 2H4M14 2V12",
    stroke: "currentColor",
    strokeWidth: "1.4"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      borderTop: '1px solid rgba(253,250,243,0.15)'
    },
    className: "tech-grid"
  }, techs.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "tech-card hoverable",
    style: {
      padding: '40px 32px',
      borderRight: (i + 1) % 3 !== 0 ? '1px solid rgba(253,250,243,0.15)' : 'none',
      borderBottom: i < 3 ? '1px solid rgba(253,250,243,0.15)' : 'none',
      minHeight: 280,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      transition: 'background 0.4s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(184,137,90,0.06)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--gold)'
    }
  }, "/", t.num), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 30,
      marginBottom: 16
    }
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'rgba(253,250,243,0.65)'
    }
  }, t.desc)))))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 900px) {
          .tech-grid { grid-template-columns: 1fr !important; }
          .tech-card { border-right: none !important; border-bottom: 1px solid rgba(253,250,243,0.15) !important; }
        }
        @media (max-width: 1200px) and (min-width: 901px) {
          .tech-grid { grid-template-columns: 1fr 1fr !important; }
          .tech-card:nth-child(2n) { border-right: none !important; }
          .tech-card:nth-child(odd) { border-right: 1px solid rgba(253,250,243,0.15) !important; }
        }
      `));
}
function SectionStats() {
  const stats = [{
    n: 90,
    suf: '%',
    label: '90% ERAS protocol'
  }, {
    n: 4500,
    suf: '+',
    label: '4500+ procedures'
  }, {
    n: 10,
    suf: '+',
    label: '10+ years experience'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg)',
      padding: '60px 0',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "blob blob-olive",
    style: {
      width: 400,
      height: 400,
      right: '5%',
      top: '-10%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    },
    className: "stats-grid"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal card-warm",
    style: {
      borderRadius: 24,
      padding: '32px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 'clamp(48px, 6vw, 80px)',
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: 'var(--gold-deep)'
    }
  }, /*#__PURE__*/React.createElement(Counter, {
    to: s.n,
    suffix: s.suf
  })), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginTop: 16,
      color: 'var(--muted)'
    }
  }, s.label))))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 720px) { .stats-grid { grid-template-columns: 1fr 1fr !important; } }
      `));
}
function SectionCTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-deep)',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "blob blob-gold",
    style: {
      width: 600,
      height: 600,
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container text-center",
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Heading, {
    className: "display",
    tag: "h2"
  }, "Restore", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic",
    style: {
      color: 'var(--gold)'
    }
  }, "your movement.")), /*#__PURE__*/React.createElement("p", {
    className: "reveal",
    style: {
      fontSize: 18,
      color: 'var(--muted)',
      maxWidth: 540,
      margin: '32px auto 48px',
      lineHeight: 1.6
    }
  }, "Appointments at P\xF4le Sant\xE9 Thau, opposite the Sainte-Th\xE9r\xE8se clinic."), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-16 center reveal",
    style: {
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.doctolib.fr/chirurgien-orthopediste/sete/francois-lozach",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary"
  }, "Book an appointment online", /*#__PURE__*/React.createElement("svg", {
    className: "arrow",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 14L14 2M14 2H4M14 2V12",
    stroke: "currentColor",
    strokeWidth: "1.4"
  })))), /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement("a", {
    href: "tel:0467530924",
    className: "btn btn-outline"
  }, "04 67 53 09 24")))));
}
Object.assign(window, {
  SectionApproche,
  SectionSpecialites,
  SectionTechniques,
  SectionStats,
  SectionCTA
});
