/* ============================================================
   Hero variants — English version
   1. video    : full-bleed dark hero with abstract motion bg
   2. type     : huge typographic hero (default)
   3. image    : split hero with portrait placeholder
   4. anatomic : hero with animated joint glyph
   ============================================================ */

const {
  useState: useS,
  useEffect: useE,
  useRef: useR
} = React;
function HeroType() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero hero-type",
    style: {
      paddingTop: 140,
      paddingBottom: 80,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "blob blob-gold",
    style: {
      width: 600,
      height: 600,
      right: '-15%',
      top: '5%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "blob blob-rose",
    style: {
      width: 400,
      height: 400,
      left: '-10%',
      bottom: '10%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: 60,
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex between",
    style: {
      alignItems: 'flex-start',
      marginBottom: 24,
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tag-pill reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "S\xC8TE, FRANCE \xB7 SINCE 2017"), /*#__PURE__*/React.createElement("div", {
    className: "mono reveal",
    style: {
      color: 'var(--muted)',
      maxWidth: 280,
      textTransform: 'none',
      letterSpacing: '0.04em',
      lineHeight: 1.6
    }
  }, "Lower limb", /*#__PURE__*/React.createElement("br", null), "Hip \xB7 Knee \xB7 Foot & Ankle")), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display"
  }, "Dr Fran\xE7ois")), /*#__PURE__*/React.createElement("div", {
    className: "line-mask",
    style: {
      marginLeft: '20%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "display italic",
    style: {
      color: 'var(--gold)'
    }
  }, "Lozach")), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 'clamp(80px, 14vw, 200px)',
      height: 8,
      background: 'var(--gold)',
      borderRadius: 999,
      display: 'inline-block'
    }
  }), "Orthopaedic Surgeon")), /*#__PURE__*/React.createElement("div", {
    className: "flex between reveal",
    style: {
      marginTop: 60,
      alignItems: 'flex-end',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 460,
      fontSize: 18,
      lineHeight: 1.5,
      color: 'var(--ink-2)'
    }
  }, "Orthopaedic surgery of the lower limb. Mini-invasive approaches, arthroscopy, enhanced recovery after surgery."), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-16",
    style: {
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.doctolib.fr/chirurgien-orthopediste/sete/francois-lozach",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary"
  }, "Book appointment", /*#__PURE__*/React.createElement("svg", {
    className: "arrow",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 14L14 2M14 2H4M14 2V12",
    stroke: "currentColor",
    strokeWidth: "1.4"
  })))), /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement("a", {
    href: "chirurgie.html",
    className: "btn btn-outline"
  }, "Explore", /*#__PURE__*/React.createElement("svg", {
    className: "arrow",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 14L14 2M14 2H4M14 2V12",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }))))))));
}
function HeroVideo() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero hero-video",
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      minHeight: '100vh',
      background: 'var(--bg-deep)',
      color: 'var(--ink)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    preserveAspectRatio: "none",
    viewBox: "0 0 1600 900"
  }, Array.from({
    length: 30
  }).map((_, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: "0",
    y1: i * 40,
    x2: "1600",
    y2: i * 40 + 200,
    stroke: "var(--gold)",
    strokeWidth: "0.3",
    opacity: "0.3"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "x1",
    values: "0;-200;0",
    dur: `${15 + i * 0.5}s`,
    repeatCount: "indefinite"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse at 30% 50%, rgba(184,137,90,0.18), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '100vh',
      paddingTop: 120,
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow gold reveal"
  }, "◍ Orthopaedic surgery \xB7 S\xE8te"), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display",
    style: {
      fontSize: 'clamp(56px, 10vw, 180px)'
    }
  }, "Restoring")), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display italic",
    style: {
      fontSize: 'clamp(56px, 10vw, 180px)',
      color: 'var(--gold)'
    }
  }, "movement.")), /*#__PURE__*/React.createElement("div", {
    className: "flex between reveal",
    style: {
      marginTop: 60,
      alignItems: 'flex-end',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 480,
      fontSize: 18,
      lineHeight: 1.5,
      color: 'rgba(253,250,243,0.75)'
    }
  }, "Dr Fran\xE7ois Lozach — orthopaedic surgeon specialising in the hip, knee, foot and ankle. Mini-invasive techniques and enhanced recovery."), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-16",
    style: {
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.doctolib.fr/chirurgien-orthopediste/sete/francois-lozach",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary"
  }, "Book appointment", /*#__PURE__*/React.createElement("svg", {
    className: "arrow",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 14L14 2M14 2H4M14 2V12",
    stroke: "currentColor",
    strokeWidth: "1.4"
  })))), /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement("a", {
    href: "chirurgie.html",
    className: "btn btn-outline"
  }, "Specialties", /*#__PURE__*/React.createElement("svg", {
    className: "arrow",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 14L14 2M14 2H4M14 2V12",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }))))))));
}
function HeroImage() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero hero-image",
    style: {
      paddingTop: 120,
      paddingBottom: 80,
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 60,
      alignItems: 'center',
      minHeight: 'calc(100vh - 200px)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow reveal"
  }, "◍ Orthopaedic surgeon \xB7 S\xE8te"), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display",
    style: {
      fontSize: 'clamp(48px, 8vw, 130px)'
    }
  }, "Fran\xE7ois")), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display italic",
    style: {
      fontSize: 'clamp(48px, 8vw, 130px)',
      color: 'var(--gold)'
    }
  }, "Lozach")), /*#__PURE__*/React.createElement("p", {
    className: "reveal",
    style: {
      maxWidth: 460,
      fontSize: 18,
      lineHeight: 1.5,
      color: 'var(--ink-2)',
      marginTop: 32
    }
  }, "Hip, knee, foot & ankle. Mini-invasive approaches, arthroscopy, enhanced recovery after surgery."), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-16 reveal",
    style: {
      marginTop: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.doctolib.fr/chirurgien-orthopediste/sete/francois-lozach",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary"
  }, "Book appointment", /*#__PURE__*/React.createElement("svg", {
    className: "arrow",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 14L14 2M14 2H4M14 2V12",
    stroke: "currentColor",
    strokeWidth: "1.4"
  })))), /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement("a", {
    href: "parcours.html",
    className: "btn btn-outline"
  }, "Background")))), /*#__PURE__*/React.createElement("div", {
    className: "ph reveal",
    style: {
      aspectRatio: '4/5',
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("div", null, "⊡", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "PORTRAIT", /*#__PURE__*/React.createElement("br", null), "DR LOZACH", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "4:5 \xB7 to be provided")))));
}
function HeroAnatomic() {
  const ref = useR(null);
  const [rot, setRot] = useS(0);
  useE(() => {
    let raf;
    const loop = () => {
      setRot(r => (r + 0.25) % 360);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  useE(() => {
    const onMove = e => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      ref.current.style.setProperty('--mx', x);
      ref.current.style.setProperty('--my', y);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Layered cross-sections of a lower limb (hip → foot), drawn at different Z depths
  const layers = [-100, -50, 0, 50, 100];
  return /*#__PURE__*/React.createElement("section", {
    className: "hero hero-anatomic",
    style: {
      paddingTop: 120,
      paddingBottom: 80,
      minHeight: '100vh',
      overflow: 'hidden',
      position: 'relative',
      background: 'var(--bg)'
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
      opacity: 0.18,
      mixBlendMode: 'screen',
      filter: 'hue-rotate(180deg) saturate(1.3) contrast(1.1)',
      pointerEvents: 'none',
      zIndex: 0,
      maskImage: 'radial-gradient(ellipse at 70% 50%, black 30%, transparent 80%)',
      WebkitMaskImage: 'radial-gradient(ellipse at 70% 50%, black 30%, transparent 80%)'
    }
  }, /*#__PURE__*/React.createElement("source", {
    loading: "lazy", src: "../assets/anatomy.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "blob blob-gold",
    style: {
      width: 700,
      height: 700,
      right: '-15%',
      top: '-5%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "blob blob-olive",
    style: {
      width: 500,
      height: 500,
      right: '15%',
      bottom: '0%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'absolute',
      right: '-2%',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 720,
      height: 800,
      perspective: '1400px',
      pointerEvents: 'none',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      transformStyle: 'preserve-3d',
      transform: `rotateY(${rot}deg) rotateX(calc(var(--mx, 0) * 10deg)) rotateZ(calc(var(--my, 0) * -5deg))`
    }
  }, layers.map((z, i) => {
    const isMain = i === 2;
    const fade = (1 - Math.abs(z) / 180) * 1.1;
    const sw = isMain ? 1 : 0.7;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'absolute',
        inset: 0,
        transform: `translateZ(${z}px)`,
        opacity: Math.min(1, fade),
        filter: isMain ? 'drop-shadow(0 0 12px rgba(0, 212, 255, 0.4))' : 'none'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 600 800",
      width: "100%",
      height: "100%",
      "aria-hidden": "true",
      style: {
        overflow: 'visible'
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: `limb-${i}`,
      x1: "0",
      x2: "0",
      y1: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#00d4ff",
      stopOpacity: "0.95"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: "#4a7fff",
      stopOpacity: "0.75"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#7c5cff",
      stopOpacity: "0.55"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M180 90 Q300 60 420 90",
      fill: "none",
      stroke: `url(#limb-${i})`,
      strokeWidth: isMain ? 2.4 : 1,
      opacity: isMain ? 1 : 0.75
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "300",
      cy: "130",
      r: 70 - i * 4,
      fill: "none",
      stroke: `url(#limb-${i})`,
      strokeWidth: isMain ? 2.6 : 1.1,
      opacity: isMain ? 1 : 0.75
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "300",
      cy: "130",
      r: 42 - i * 3,
      fill: "none",
      stroke: "#00d4ff",
      strokeWidth: "0.6",
      opacity: "0.4"
    }), /*#__PURE__*/React.createElement("path", {
      d: `M${278 - i} 165 Q${294} 290 ${298} 410`,
      fill: "none",
      stroke: `url(#limb-${i})`,
      strokeWidth: isMain ? 2.8 : 1.3,
      opacity: isMain ? 1 : 0.75
    }), /*#__PURE__*/React.createElement("path", {
      d: `M${322 + i} 165 Q${308} 290 ${304} 410`,
      fill: "none",
      stroke: `url(#limb-${i})`,
      strokeWidth: isMain ? 2.8 : 1.3,
      opacity: isMain ? 1 : 0.75
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "301",
      cy: "425",
      rx: 42 - i * 2,
      ry: 30 - i * 2,
      fill: "none",
      stroke: `url(#limb-${i})`,
      strokeWidth: isMain ? 2.6 : 1.1,
      opacity: isMain ? 1 : 0.75
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "301",
      cy: "425",
      rx: 22 - i,
      ry: 14 - i,
      fill: "none",
      stroke: "#4a7fff",
      strokeWidth: "0.5",
      opacity: "0.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: `M${287 - i} 455 Q${294} 560 ${298} 670`,
      fill: "none",
      stroke: `url(#limb-${i})`,
      strokeWidth: isMain ? 2.8 : 1.3,
      opacity: isMain ? 1 : 0.75
    }), /*#__PURE__*/React.createElement("path", {
      d: `M${315 + i} 455 Q${308} 560 ${304} 670`,
      fill: "none",
      stroke: `url(#limb-${i})`,
      strokeWidth: isMain ? 2.4 : 1,
      opacity: isMain ? 1 : 0.75
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "301",
      cy: "685",
      r: 28 - i * 2,
      fill: "none",
      stroke: `url(#limb-${i})`,
      strokeWidth: isMain ? 2.5 : 1.1,
      opacity: isMain ? 1 : 0.75
    }), /*#__PURE__*/React.createElement("path", {
      d: `M${301 - i} 705 Q230 740 195 768 L445 758 Q380 720 301 712 Z`,
      fill: "none",
      stroke: `url(#limb-${i})`,
      strokeWidth: isMain ? 2.4 : 1,
      opacity: isMain ? 1 : 0.75
    }), /*#__PURE__*/React.createElement("path", {
      d: "M210 762 L195 778 M250 758 L240 778 M295 754 L290 778 M340 754 L345 778 M390 758 L400 778",
      fill: "none",
      stroke: `url(#limb-${i})`,
      strokeWidth: isMain ? 1.6 : 0.8,
      opacity: isMain ? 1 : 0.65
    }), isMain && /*#__PURE__*/React.createElement(React.Fragment, null, [0, 1, 2, 3, 4].map(k => /*#__PURE__*/React.createElement("circle", {
      key: `hr-${k}`,
      cx: "300",
      cy: "130",
      r: 82 + k * 12,
      fill: "none",
      stroke: "#00d4ff",
      strokeWidth: "0.4",
      opacity: 0.35 - k * 0.06
    })), [0, 1, 2, 3].map(k => /*#__PURE__*/React.createElement("circle", {
      key: `kr-${k}`,
      cx: "301",
      cy: "425",
      r: 56 + k * 10,
      fill: "none",
      stroke: "#4a7fff",
      strokeWidth: "0.4",
      opacity: 0.35 - k * 0.06
    })), [0, 1, 2, 3].map(k => /*#__PURE__*/React.createElement("circle", {
      key: `ar-${k}`,
      cx: "301",
      cy: "685",
      r: 42 + k * 9,
      fill: "none",
      stroke: "#7c5cff",
      strokeWidth: "0.4",
      opacity: 0.35 - k * 0.06
    })), Array.from({
      length: 8
    }).map((_, k) => /*#__PURE__*/React.createElement("line", {
      key: `t-${k}`,
      x1: 264,
      y1: 185 + k * 28,
      x2: 272,
      y2: 185 + k * 28,
      stroke: "#00d4ff",
      strokeWidth: "0.5",
      opacity: "0.5"
    })), Array.from({
      length: 6
    }).map((_, k) => /*#__PURE__*/React.createElement("line", {
      key: `tt-${k}`,
      x1: 328,
      y1: 475 + k * 30,
      x2: 336,
      y2: 475 + k * 30,
      stroke: "#4a7fff",
      strokeWidth: "0.5",
      opacity: "0.5"
    })))));
  }), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      position: 'absolute',
      top: '10%',
      left: '-12%',
      color: 'var(--gold)',
      fontSize: 10,
      opacity: 0.85,
      letterSpacing: '0.12em'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 1,
      background: 'var(--gold)',
      marginBottom: 4
    }
  }), "HIP / ", Math.floor(rot), "\xB0"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      position: 'absolute',
      top: '50%',
      left: '-12%',
      color: 'var(--rose)',
      fontSize: 10,
      opacity: 0.85,
      letterSpacing: '0.12em'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 1,
      background: 'var(--rose)',
      marginBottom: 4
    }
  }), "KNEE"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      position: 'absolute',
      top: '82%',
      left: '-12%',
      color: 'var(--olive)',
      fontSize: 10,
      opacity: 0.85,
      letterSpacing: '0.12em'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 1,
      background: 'var(--olive)',
      marginBottom: 4
    }
  }), "ANKLE"))), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 200px)',
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tag-pill reveal",
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "ANATOMICAL SCAN / REAL TIME"), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display",
    style: {
      fontSize: 'clamp(56px, 10vw, 170px)'
    }
  }, "Bone, joint,")), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display italic",
    style: {
      fontSize: 'clamp(56px, 10vw, 170px)',
      color: 'var(--gold)'
    }
  }, "precision.")), /*#__PURE__*/React.createElement("p", {
    className: "reveal",
    style: {
      maxWidth: 460,
      fontSize: 18,
      lineHeight: 1.5,
      color: 'var(--ink-2)',
      marginTop: 40
    }
  }, "Dr Fran\xE7ois Lozach — orthopaedic surgeon. Hip, knee, foot & ankle. S\xE8te."), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-16 reveal",
    style: {
      marginTop: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.doctolib.fr/chirurgien-orthopediste/sete/francois-lozach",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary"
  }, "Book appointment", /*#__PURE__*/React.createElement("svg", {
    className: "arrow",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 14L14 2M14 2H4M14 2V12",
    stroke: "currentColor",
    strokeWidth: "1.4"
  })))), /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement("a", {
    href: "chirurgie.html",
    className: "btn btn-outline"
  }, "Specialties")))));
}
Object.assign(window, {
  HeroType,
  HeroVideo,
  HeroImage,
  HeroAnatomic
});
