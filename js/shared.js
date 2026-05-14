/* ============================================================
   Composants partagés — Site Dr Lozach
   Curseur, Nav, Footer, Reveal hooks, Marquee
   ============================================================ */

const {
  useState,
  useEffect,
  useRef
} = React;

/* ---------- Custom cursor ---------- */
function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(max-width: 900px)').matches) return;
    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2;
    let rx = mx,
      ry = my;
    const move = e => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.left = mx + 'px';
        dot.current.style.top = my + 'px';
      }
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring.current) {
        ring.current.style.left = rx + 'px';
        ring.current.style.top = ry + 'px';
      }
      requestAnimationFrame(tick);
    };
    const enter = e => {
      if (ring.current && e.target.closest('a, button, .hoverable, input, textarea')) ring.current.classList.add('hover');
    };
    const leave = e => {
      if (ring.current && e.target.closest('a, button, .hoverable, input, textarea')) ring.current.classList.remove('hover');
    };
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', enter);
    document.addEventListener('mouseout', leave);
    requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', enter);
      document.removeEventListener('mouseout', leave);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    ref: dot,
    className: "cursor-dot"
  }), /*#__PURE__*/React.createElement("div", {
    ref: ring,
    className: "cursor-ring"
  }));
}

/* ---------- Reveal on scroll ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .line-mask');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

/* ---------- Nav ---------- */
function Nav({
  active,
  dark
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { href: 'index.html', label: 'Accueil', key: 'accueil' },
    { href: 'pathologies.html', label: 'Pathologies', key: 'pathologies' },
    { href: 'chirurgie.html', label: 'Chirurgies', key: 'chirurgie' },
    { href: 'greffe-cartilagineuse.html', label: 'Greffe', key: 'greffe' },
    { href: 'parcours.html', label: 'Parcours', key: 'parcours' },
    { href: 'faq.html', label: 'FAQ', key: 'faq' },
    { href: 'contact.html', label: 'Contact', key: 'contact' },
  ];

  return React.createElement(React.Fragment, null,
    React.createElement("nav", {
      className: `nav ${dark ? 'dark' : ''}`,
      style: {
        paddingTop: scrolled ? 14 : 24,
        paddingBottom: scrolled ? 14 : 24,
        transition: 'padding 0.3s var(--ease-out)'
      }
    },
      React.createElement("a", { href: "index.html", className: "nav-logo" },
        React.createElement("span", { className: "mark" },
          React.createElement("span", { className: "mark-orbit" }),
          React.createElement("span", { className: "mark-pip" })
        ),
        React.createElement("span", null, "Dr Fran\xE7ois Lozach")
      ),
      React.createElement("div", { className: "nav-links" },
        links.map(function(l) {
          return React.createElement("a", { key: l.key, href: l.href, className: active === l.key ? 'active' : '' }, l.label);
        })
      ),
      React.createElement("a", {
        href: "https://www.doctolib.fr/chirurgien-orthopediste/sete/francois-lozach",
        target: "_blank", rel: "noopener", className: "nav-cta"
      }, "Prendre RDV",
        React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none" },
          React.createElement("path", { d: "M1 9L9 1M9 1H2M9 1V8", stroke: "currentColor", strokeWidth: "1.2" })
        )
      ),
      React.createElement("button", {
        className: "nav-hamburger",
        onClick: function() { setOpen(!open); },
        "aria-label": "Menu"
      },
        React.createElement("span", { className: open ? 'bar bar-open' : 'bar' }),
        React.createElement("span", { className: open ? 'bar bar-open' : 'bar' }),
        React.createElement("span", { className: open ? 'bar bar-open' : 'bar' })
      )
    ),
    open && React.createElement("div", {
      className: "nav-mobile-overlay",
      onClick: function() { setOpen(false); }
    },
      React.createElement("div", {
        className: "nav-mobile-menu",
        onClick: function(e) { e.stopPropagation(); }
      },
        links.map(function(l, i) {
          return React.createElement("a", {
            key: l.key,
            href: l.href,
            className: 'nav-mobile-link' + (active === l.key ? ' active' : ''),
            style: { animationDelay: (i * 60) + 'ms' },
            onClick: function() { setOpen(false); }
          }, l.label);
        }),
        React.createElement("a", {
          href: "https://www.doctolib.fr/chirurgien-orthopediste/sete/francois-lozach",
          target: "_blank", rel: "noopener",
          className: "nav-mobile-cta",
          onClick: function() { setOpen(false); }
        }, "Prendre RDV →")
      )
    )
  );
}

/* ---------- Floating Doctolib button ---------- */
function DoctolibFloat() {
  return /*#__PURE__*/React.createElement("a", {
    href: "https://www.doctolib.fr/chirurgien-orthopediste/sete/francois-lozach",
    target: "_blank",
    rel: "noopener",
    className: "doctolib-float"
  }, "Prendre RDV \u2192");
}

/* ---------- Footer ---------- */
function Footer() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-display line-mask"
  }, /*#__PURE__*/React.createElement("span", null, "Dr Lozach")), /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Cabinet"), /*#__PURE__*/React.createElement("p", null, "P\xF4le Sant\xE9 Thau", /*#__PURE__*/React.createElement("br", null), "310 avenue du Mar\xE9chal Juin", /*#__PURE__*/React.createElement("br", null), "34200 S\xE8te")), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "tel:0467530924"
  }, "04 67 53 09 24"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:secretariat@ortho-7.fr"
  }, "secretariat@ortho-7.fr")), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Chirurgie"), /*#__PURE__*/React.createElement("a", {
    href: "chirurgie.html#hanche"
  }, "Hanche"), /*#__PURE__*/React.createElement("a", {
    href: "chirurgie.html#genou"
  }, "Genou"), /*#__PURE__*/React.createElement("a", {
    href: "chirurgie.html#pied"
  }, "Pied & Cheville"), /*#__PURE__*/React.createElement("a", {
    href: "chirurgie.html#trauma"
  }, "Traumatologie")), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Navigation"), /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, "Accueil"), /*#__PURE__*/React.createElement("a", {
    href: "pathologies.html"
  }, "Pathologies"), /*#__PURE__*/React.createElement("a", {
    href: "parcours.html"
  }, "Parcours"), /*#__PURE__*/React.createElement("a", {
    href: "faq.html"
  }, "FAQ"), /*#__PURE__*/React.createElement("a", {
    href: "contact.html"
  }, "Contact"))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " \u2014 Dr Fran\xE7ois Lozach"), /*#__PURE__*/React.createElement("span", null, "Chirurgien orthop\xE9dique \xB7 S\xE8te")))), /*#__PURE__*/React.createElement(DoctolibFloat, null));
}

/* ---------- Marquee ---------- */
function Marquee({
  items,
  gold = true
}) {
  const content = /*#__PURE__*/React.createElement("div", {
    className: "marquee-track"
  }, [...items, ...items, ...items].map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "marquee-item"
  }, /*#__PURE__*/React.createElement("span", null, it), gold && /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }))));
  return /*#__PURE__*/React.createElement("div", {
    className: "marquee"
  }, content);
}

/* ---------- Anatomical accent (abstract joint) ---------- */
function JointGlyph({
  kind = 'hip',
  size = 600
}) {
  // Abstract anatomical line drawing — never realistic, always editorial
  if (kind === 'hip') {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 600 600",
      width: size,
      height: size,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
      id: "hipGlow",
      cx: "50%",
      cy: "40%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "var(--gold)",
      stopOpacity: "0.15"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "var(--gold)",
      stopOpacity: "0"
    }))), /*#__PURE__*/React.createElement("circle", {
      cx: "300",
      cy: "240",
      r: "200",
      fill: "url(#hipGlow)"
    }), Array.from({
      length: 14
    }).map((_, i) => /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: "300",
      cy: "240",
      r: 40 + i * 14,
      className: "anatomy-line thin"
    })), /*#__PURE__*/React.createElement("circle", {
      cx: "300",
      cy: "240",
      r: "60",
      className: "anatomy-line gold",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "300",
      cy: "240",
      r: "90",
      className: "anatomy-line"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M210 240 Q300 130 390 240",
      className: "anatomy-line gold",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M300 300 L300 480",
      className: "anatomy-line"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M260 300 L260 460 Q260 510 300 510 Q340 510 340 460 L340 300",
      className: "anatomy-line thin"
    }));
  }
  if (kind === 'knee') {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 600 600",
      width: size,
      height: size,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
      id: "kneeGlow",
      cx: "50%",
      cy: "50%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "var(--gold)",
      stopOpacity: "0.12"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "var(--gold)",
      stopOpacity: "0"
    }))), /*#__PURE__*/React.createElement("circle", {
      cx: "300",
      cy: "300",
      r: "200",
      fill: "url(#kneeGlow)"
    }), Array.from({
      length: 10
    }).map((_, i) => /*#__PURE__*/React.createElement("ellipse", {
      key: i,
      cx: "300",
      cy: "300",
      rx: 50 + i * 16,
      ry: 70 + i * 18,
      className: "anatomy-line thin"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M300 100 L300 280 Q260 300 260 320 Q260 360 300 380 L300 500",
      className: "anatomy-line"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "300",
      cy: "300",
      rx: "48",
      ry: "60",
      className: "anatomy-line gold",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M260 280 L340 280",
      className: "anatomy-line gold"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M250 340 L350 340",
      className: "anatomy-line gold"
    }));
  }
  // foot
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 600 600",
    width: size,
    height: size,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "footGlow",
    cx: "40%",
    cy: "60%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--gold)",
    stopOpacity: "0.12"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--gold)",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "300",
    r: "200",
    fill: "url(#footGlow)"
  }), Array.from({
    length: 10
  }).map((_, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: `M${100 - i * 4} ${400 + i * 4} Q${300} ${200 - i * 8} ${500 + i * 4} ${380 - i * 4}`,
    className: "anatomy-line thin"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M150 420 Q250 200 380 220 Q500 240 480 360 Q460 440 350 440 Q200 440 150 420 Z",
    className: "anatomy-line"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "400",
    r: "22",
    className: "anatomy-line gold"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "380",
    cy: "240",
    r: "18",
    className: "anatomy-line gold"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M220 400 L360 250",
    className: "anatomy-line thin"
  }));
}

/* ---------- Number ticker ---------- */
function Counter({
  to,
  suffix = '',
  duration = 2000
}) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const step = now => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setN(Math.floor(eased * to));
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    }, {
      threshold: 0.4
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, n, suffix);
}

/* ---------- Magnetic button ---------- */
function Magnetic({
  children,
  strength = 0.3
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => {
      el.style.transform = '';
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'inline-block',
      transition: 'transform 0.4s var(--ease-out)'
    }
  }, children);
}

/* ---------- Section heading with line mask ---------- */
function Heading({
  eyebrow,
  children,
  className = '',
  tag: Tag = 'h2'
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "eyebrow reveal"
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    className: `line-mask ${className}`
  }, /*#__PURE__*/React.createElement("span", null, children)));
}
Object.assign(window, {
  Cursor,
  Nav,
  Footer,
  DoctolibFloat,
  Marquee,
  JointGlyph,
  Counter,
  Magnetic,
  Heading,
  useReveal
});
