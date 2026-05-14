function App() {
  useReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Cursor, null), /*#__PURE__*/React.createElement(Nav, {
    active: "contact"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 180,
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow reveal"
  }, "◍ Contact \xB7 S\xE8te"), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display"
  }, "Book an")), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display italic",
    style: {
      color: 'var(--gold)'
    }
  }, "appointment.")))), /*#__PURE__*/React.createElement("section", {
    id: "rdv",
    style: {
      paddingTop: 0,
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    },
    className: "rdv-grid"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.doctolib.fr/chirurgien-orthopediste/sete/francois-lozach",
    target: "_blank",
    rel: "noopener",
    className: "hoverable",
    style: {
      padding: 48,
      background: 'var(--bg-deep)',
      color: 'var(--ink)',
      borderRadius: 4,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: 320,
      position: 'relative',
      overflow: 'hidden',
      transition: 'transform 0.4s var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.transform = 'translateY(-6px)',
    onMouseLeave: e => e.currentTarget.style.transform = 'none'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -100,
      bottom: -100,
      opacity: 0.15
    }
  }, /*#__PURE__*/React.createElement(JointGlyph, {
    kind: "hip",
    size: 400
  })), /*#__PURE__*/React.createElement("div", {
    className: "mono gold",
    style: {
      color: 'var(--gold)',
      position: 'relative'
    }
  }, "/01 — Online"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 'clamp(40px, 5vw, 64px)',
      marginBottom: 16
    }
  }, "Doctolib"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(253,250,243,0.7)',
      marginBottom: 24,
      maxWidth: 360
    }
  }, "Instant booking, 24/7. First consultation or follow-up."), /*#__PURE__*/React.createElement("span", {
    className: "btn",
    style: {
      background: 'var(--gold)',
      color: 'var(--ink)'
    }
  }, "Book on Doctolib", /*#__PURE__*/React.createElement("svg", {
    className: "arrow",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 14L14 2M14 2H4M14 2V12",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }))))), /*#__PURE__*/React.createElement("a", {
    href: "tel:0467530924",
    className: "hoverable",
    style: {
      padding: 48,
      background: 'var(--bg-deep)',
      border: '1px solid var(--line)',
      borderRadius: 4,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: 320,
      transition: 'transform 0.4s var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.transform = 'translateY(-6px)',
    onMouseLeave: e => e.currentTarget.style.transform = 'none'
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--gold-deep)'
    }
  }, "/02 — By phone"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 'clamp(40px, 5vw, 64px)',
      marginBottom: 16
    }
  }, "Secretary"), /*#__PURE__*/React.createElement("p", {
    className: "serif",
    style: {
      fontSize: 32,
      color: 'var(--gold-deep)',
      marginBottom: 8
    }
  }, "04 67 53 09 24"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted)'
    }
  }, "Mon – Fri \xB7 8:30 – 18:00")))), /*#__PURE__*/React.createElement("style", null, `@media (max-width: 800px) { .rdv-grid { grid-template-columns: 1fr !important; } }`))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'flex-start'
    },
    className: "cab-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "◍ Practice"), /*#__PURE__*/React.createElement("h2", {
    className: "serif",
    style: {
      fontSize: 'clamp(40px, 5vw, 72px)',
      marginBottom: 24
    }
  }, "P\xF4le Sant\xE9 Thau"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)'
    }
  }, [['Address', '310 avenue du Maréchal Juin, 34200 Sète'], ['Phone', '04 67 53 09 24'], ['Email', 'secretariat@ortho-7.fr'], ['Hours', 'Mon – Fri · 8:30 – 18:00'], ['Getting here', 'Paid parking · Bus line 4, stop Pôle Santé']].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '20px 0',
      borderBottom: '1px solid var(--line)',
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 18
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    className: "reveal cab-img-frame",
    style: {
      aspectRatio: '4/5',
      borderRadius: 4,
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg-deep)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    loading: "lazy", src: "assets/cabinet-sete.webp",
    alt: "P\xF4le Sant\xE9 Thau — S\xE8te",
    className: "cab-img",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 40%',
      filter: 'saturate(0.85) brightness(0.85) contrast(1.1)',
      transition: 'filter 0.6s var(--ease-out), transform 1.2s var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "cab-overlay",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(10,14,26,0.1) 0%, rgba(10,14,26,0.5) 100%), radial-gradient(circle at 70% 30%, rgba(0,212,255,0.18), transparent 60%)',
      mixBlendMode: 'multiply',
      pointerEvents: 'none',
      transition: 'opacity 0.6s var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(0,212,255,0.05) 3px, rgba(0,212,255,0.05) 4px)',
      mixBlendMode: 'overlay',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      position: 'absolute',
      left: 16,
      bottom: 16,
      color: 'var(--gold)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textShadow: '0 1px 8px rgba(0,0,0,0.6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 1,
      background: 'var(--gold)',
      marginBottom: 6
    }
  }), "P\xD4LE SANT\xC9 THAU \xB7 S\xC8TE"))), /*#__PURE__*/React.createElement("style", null, `@media (max-width: 900px) { .cab-grid { grid-template-columns: 1fr !important; } }
              .cab-img-frame:hover .cab-img { filter: saturate(1.1) brightness(1.15) contrast(1.05) !important; transform: scale(1.03); }
              .cab-img-frame:hover .cab-overlay { opacity: 0.35; }
            `)))), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('app')).render(/*#__PURE__*/React.createElement(App, null));
