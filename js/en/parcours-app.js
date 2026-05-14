const TIMELINE = [{
  y: '2017',
  evt: 'Practice at Polyclinique Sainte Thérèse',
  loc: 'Sète, Ortho-7'
}, {
  y: '2013-2017',
  evt: 'Chief Resident, Montpellier University Hospitals',
  loc: 'CHU Montpellier'
}, {
  y: '2013',
  evt: 'Lecturer — Faculty of Medicine & IBODE/IFSI Nursing School',
  loc: 'Montpellier'
}, {
  y: '2013',
  evt: 'Orthopaedic Surgery Residency (DESC)',
  loc: 'Montpellier'
}, {
  y: '—',
  evt: 'Senior Medical Officer of Reserve, Military Health Service',
  loc: 'France'
}, {
  y: '—',
  evt: 'MSF Surgeon — war zones & humanitarian missions',
  loc: 'International'
}];
const DIPLOMES = ['Doctor of Medicine — Montpellier', 'Thesis: "Derotation osteotomies of the leg skeleton in femoro-patellar pathology, a review of 120 cases."', 'Speciality Degree (DES) in General Surgery', 'Orthopaedic Surgery Residency (DESC)', 'University Diploma (DIU) in Dissection and Laparoscopic Anatomy', 'University Diploma (DIU) in Microsurgery', 'University Diploma (DIU) in Surgical Knee Pathology', 'University Diploma (DIU) in Laparoscopic Surgery', 'University Diploma (DIU) in Arthroscopic Surgery', 'University Diploma (DIU) in Personal Injury Assessment', 'CAPEDOC — Certificate of Competence in Personal Injury Expertise', 'University Diploma (DU) in Personal Insurance', 'Master of Biological and Medical Sciences (MSBM)'];
const FORMATION = ['Former Resident, Montpellier University Hospitals', 'Former Senior House Officer, Montpellier University Hospitals', 'Former Chief Resident, Montpellier University Hospitals', 'Lecturer, Faculty of Medicine, Montpellier (2013–2016)', 'Lecturer, School of Nursing, Montpellier (2013–2016)', 'Enrolled in Continuing Medical Education (CME)', 'Senior Medical Officer of Reserve, Military Health Service', 'MSF Surgeon for war zones and humanitarian missions'];
const MEMBRE = ['French Society of Orthopaedic Surgery — SOFCOT', 'American Academy of Orthopaedic Surgeons — AAOS', 'ORTHORISQ', 'FFAMCE', 'French Association of Foot Surgery — AFCP', 'Accredited by the HAS (French National Authority for Health)', 'Court-Appointed Medical Expert, Montpellier Court of Appeal'];
const FONCTIONS_UNIV = ['Senior House Officer, Montpellier University Hospitals', 'Chief Resident, Montpellier University Hospitals', 'Anatomy practical sessions (PCEM2 students)', 'Lectures on DESC Emergency Traumatology of the Lower Limb', 'Orthopaedic surgery lectures at the IBODE School, Montpellier', 'Surgical anatomy lectures at the IFSI School, Montpellier', 'Orthopaedic Department lectures for Second Cycle Medical Studies', 'Anterior approach hip arthroplasty trainer — anatomy laboratories in Poitiers and Toulouse'];
const PUBLICATIONS = [{
  title: 'Misleading diagnosis of a migratory epigastric pain in mobile emergency units: spontaneous rupture of the oesophagus',
  authors: 'Ladwig M, Labourel H, Lozach F, Menthonnex E.',
  ref: 'Annales Françaises Anesthésie Réanimation. 2006 Oct;25(10):1072-4'
}, {
  title: 'Mosaicplasty for femoral osteochondritis dissecans',
  authors: 'Louahem D, Lozach F, Delpont M, Weiss A, Prodhomme O, Cottalorda J.',
  ref: 'Orthop Traumatol Surg Res. 2016 Apr;102(2):247-50. doi: 10.1016/j.otsr.2015.12.013'
}, {
  title: 'Mosaicplasty of the femoral head in a child with osteochondritis dissecans',
  authors: 'Presentation',
  ref: 'SOFCOT Congress 2015'
}, {
  title: 'Derotation osteotomies of the leg skeleton with realignment of the extensor mechanism in femoro-patellar pathology — a review of 120 cases',
  authors: 'Presentation',
  ref: 'SOFCOT Congress 2015'
}, {
  title: 'Post-contusive patellar chondropathy in medico-legal expertise — criteria for causal attribution',
  authors: 'Dissertation',
  ref: 'CAPEDOC 2022–2023'
}];
function DiplomesShowcase({
  items
}) {
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive(a => (a + 1) % items.length);
    }, 2400);
    return () => clearInterval(id);
  }, [paused, items.length]);
  const ROW_H = 84;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-deep)',
      borderTop: '1px solid var(--line)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 80
    },
    className: "parcours-section-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow gold reveal"
  }, "◍ Degrees"), /*#__PURE__*/React.createElement(Heading, {
    className: "display",
    tag: "h2"
  }, /*#__PURE__*/React.createElement("span", null, "Academic"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic",
    style: {
      color: 'var(--gold)'
    }
  }, "background.")), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'var(--gold)',
      letterSpacing: '0.18em'
    }
  }, String(active + 1).padStart(2, '0'), " / ", String(items.length).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 240,
      height: 1,
      background: 'rgba(0,212,255,0.15)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      width: (active + 1) / items.length * 100 + '%',
      background: 'var(--gold)',
      transition: 'width 0.6s var(--ease-out)',
      boxShadow: '0 0 8px var(--gold)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setPaused(true);
      setActive(a => (a - 1 + items.length) % items.length);
    },
    className: "mono",
    style: {
      background: 'transparent',
      border: '1px solid rgba(0,212,255,0.3)',
      color: 'var(--gold)',
      padding: '8px 14px',
      cursor: 'pointer',
      fontSize: 11,
      letterSpacing: '0.15em'
    }
  }, "← PREV"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPaused(p => !p),
    className: "mono",
    style: {
      background: paused ? 'var(--gold)' : 'transparent',
      border: '1px solid rgba(0,212,255,0.3)',
      color: paused ? 'var(--bg-deep)' : 'var(--gold)',
      padding: '8px 14px',
      cursor: 'pointer',
      fontSize: 11,
      letterSpacing: '0.15em'
    }
  }, paused ? '▶ PLAY' : '❚❚ PAUSE'), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setPaused(true);
      setActive(a => (a + 1) % items.length);
    },
    className: "mono",
    style: {
      background: 'transparent',
      border: '1px solid rgba(0,212,255,0.3)',
      color: 'var(--gold)',
      padding: '8px 14px',
      cursor: 'pointer',
      fontSize: 11,
      letterSpacing: '0.15em'
    }
  }, "NEXT →")))), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      position: 'relative',
      height: 460,
      overflow: 'hidden',
      maskImage: 'linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '50%',
      transform: 'translateY(' + (-active * ROW_H - ROW_H / 2) + 'px)',
      transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
    }
  }, items.map((t, i) => {
    const dist = Math.abs(i - active);
    const isActive = i === active;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => {
        setPaused(true);
        setActive(i);
      },
      style: {
        height: ROW_H,
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        padding: '0 12px',
        cursor: 'pointer',
        opacity: isActive ? 1 : Math.max(0.18, 1 - dist * 0.3),
        transform: 'scale(' + (isActive ? 1 : 0.92) + ')',
        transformOrigin: 'left center',
        transition: 'opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        color: isActive ? 'var(--gold)' : 'var(--ink-2)',
        fontSize: 11,
        letterSpacing: '0.15em',
        flexShrink: 0,
        width: 36,
        transition: 'color 0.4s'
      }
    }, "/", String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--serif)',
        fontSize: isActive ? 26 : 18,
        lineHeight: 1.3,
        color: isActive ? 'var(--ink)' : 'var(--ink-2)',
        fontStyle: isActive ? 'italic' : 'normal',
        transition: 'font-size 0.5s var(--ease-out), color 0.4s'
      }
    }, t), isActive && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        flexShrink: 0,
        width: 28,
        height: 1,
        background: 'var(--gold)',
        marginLeft: 'auto',
        boxShadow: '0 0 10px var(--gold)'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '50%',
      height: ROW_H,
      transform: 'translateY(-50%)',
      borderTop: '1px solid rgba(0,212,255,0.18)',
      borderBottom: '1px solid rgba(0,212,255,0.18)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: -1,
      top: -3,
      width: 6,
      height: 6,
      background: 'var(--gold)',
      boxShadow: '0 0 8px var(--gold)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -1,
      bottom: -3,
      width: 6,
      height: 6,
      background: 'var(--gold)',
      boxShadow: '0 0 8px var(--gold)'
    }
  }))))));
}
function Section({
  eyebrow,
  title,
  italic,
  items,
  numbered,
  twoCol,
  deep
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: deep ? 'var(--bg-deep)' : 'var(--bg)',
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 80
    },
    className: "parcours-section-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow gold reveal"
  }, "◍ ", eyebrow), /*#__PURE__*/React.createElement(Heading, {
    className: "display",
    tag: "h2"
  }, /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic",
    style: {
      color: 'var(--gold)'
    }
  }, italic))), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      columnCount: twoCol ? 2 : 1,
      columnGap: 40
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '16px 0',
      borderBottom: '1px solid rgba(232,238,247,0.10)',
      display: 'flex',
      gap: 20,
      alignItems: 'baseline',
      breakInside: 'avoid'
    }
  }, numbered && /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--gold)',
      flexShrink: 0,
      fontSize: 11
    }
  }, "/", String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 19,
      lineHeight: 1.4
    }
  }, t)))))));
}
function App() {
  useReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Cursor, null), /*#__PURE__*/React.createElement(Nav, {
    active: "parcours"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 180,
      paddingBottom: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 60,
      alignItems: 'flex-end'
    },
    className: "parcours-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow reveal"
  }, "◍ Career \xB7 Qualifications"), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display"
  }, "A career")), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display italic",
    style: {
      color: 'var(--gold)'
    }
  }, "devoted to precision."))), /*#__PURE__*/React.createElement("div", {
    className: "reveal portrait-fuse",
    style: {
      position: 'relative',
      aspectRatio: '4/5'
    }
  }, /*#__PURE__*/React.createElement("img", {
    loading: "lazy", src: "assets/portrait.webp",
    alt: "Dr Fran\xE7ois Lozach",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center top',
      display: 'block',
      mixBlendMode: 'screen',
      filter: 'contrast(1.08) brightness(1.0)',
      maskImage: 'radial-gradient(ellipse 60% 72% at 45% 38%, black 0%, rgba(0,0,0,0.95) 35%, rgba(0,0,0,0.55) 62%, rgba(0,0,0,0.15) 82%, transparent 100%)',
      WebkitMaskImage: 'radial-gradient(ellipse 60% 72% at 45% 38%, black 0%, rgba(0,0,0,0.95) 35%, rgba(0,0,0,0.55) 62%, rgba(0,0,0,0.15) 82%, transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '-10%',
      background: 'radial-gradient(circle at 45% 35%, rgba(0,212,255,0.22), transparent 55%)',
      zIndex: -1,
      filter: 'blur(20px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(0,212,255,0.04) 3px, rgba(0,212,255,0.04) 4px)',
      mixBlendMode: 'overlay',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      position: 'absolute',
      left: 0,
      bottom: 16,
      color: 'var(--gold)',
      fontSize: 10,
      letterSpacing: '0.18em',
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 1,
      background: 'var(--gold)',
      marginBottom: 6
    }
  }), "DR FRAN\xC7OIS LOZACH")))), /*#__PURE__*/React.createElement("style", null, `
            @media (max-width: 900px) { .parcours-hero-grid { grid-template-columns: 1fr !important; } }
            @media (max-width: 900px) { .parcours-section-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
          `)), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-deep)',
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 80
    },
    className: "parcours-section-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow gold reveal"
  }, "◍ Biography"), /*#__PURE__*/React.createElement(Heading, {
    className: "display",
    tag: "h2"
  }, /*#__PURE__*/React.createElement("span", null, "From Montpellier"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic",
    style: {
      color: 'var(--gold)'
    }
  }, "to S\xE8te."))), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 22,
      lineHeight: 1.5,
      color: 'var(--ink)'
    }
  }, "After passing the competitive surgical residency examination, Dr Fran\xE7ois Lozach was appointed Surgical Resident at the Montpellier University Hospitals."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--ink-2)'
    }
  }, "He trained under Professor Philippe Maury, who conveyed with great passion the complexity of lower limb surgery — the rigour of a specialty that tolerates no approximation."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--ink-2)'
    }
  }, "He spent eight years specialising in hip and knee arthroplasty — primary and revision — arthroscopic surgery, foot surgery, and traumatology."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--ink-2)'
    }
  }, "He took part in humanitarian surgical missions in countries engaged in armed conflict, under the auspices of M\xE9decins Sans Fronti\xE8res (Doctors Without Borders)."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--ink-2)'
    }
  }, "As a court-appointed Medical Expert, he participates in medico-legal assessments at the Montpellier Court of Appeal."))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg)',
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow gold reveal"
  }, "◍ Timeline"), /*#__PURE__*/React.createElement(Heading, {
    className: "display",
    tag: "h2"
  }, /*#__PURE__*/React.createElement("span", null, "Key"), " ", /*#__PURE__*/React.createElement("span", {
    className: "italic",
    style: {
      color: 'var(--gold)'
    }
  }, "milestones.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80,
      borderTop: '1px solid var(--line)'
    }
  }, TIMELINE.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal hoverable",
    style: {
      display: 'grid',
      gridTemplateColumns: '160px 1fr 280px',
      gap: 32,
      padding: '32px 0',
      borderBottom: '1px solid var(--line)',
      alignItems: 'center',
      transition: 'padding-left 0.4s var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.paddingLeft = '20px',
    onMouseLeave: e => e.currentTarget.style.paddingLeft = '0'
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontSize: t.y.length > 4 ? 36 : 56,
      color: 'var(--gold)',
      letterSpacing: '-0.02em',
      whiteSpace: 'nowrap'
    }
  }, t.y), /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontSize: 'clamp(20px, 2vw, 28px)'
    }
  }, t.evt), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--muted)',
      textAlign: 'right'
    }
  }, t.loc)))))), /*#__PURE__*/React.createElement(DiplomesShowcase, {
    items: DIPLOMES
  }), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Training",
    title: "Posts",
    italic: "& teaching.",
    items: FORMATION,
    numbered: false,
    twoCol: true,
    deep: false
  }), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Member",
    title: "Learned societies",
    italic: "& accreditations.",
    items: MEMBRE,
    numbered: false,
    twoCol: false,
    deep: true
  }), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Academic positions",
    title: "Teaching",
    italic: "& training.",
    items: FONCTIONS_UNIV,
    numbered: false,
    twoCol: true,
    deep: false
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-deep)',
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 80
    },
    className: "parcours-section-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow gold reveal"
  }, "◍ Works & publications"), /*#__PURE__*/React.createElement(Heading, {
    className: "display",
    tag: "h2"
  }, /*#__PURE__*/React.createElement("span", null, "Research"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic",
    style: {
      color: 'var(--gold)'
    }
  }, "& communications."))), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, PUBLICATIONS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '24px 0',
      borderBottom: '1px solid rgba(232,238,247,0.12)',
      display: 'grid',
      gridTemplateColumns: '40px 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--gold)',
      fontSize: 11,
      paddingTop: 6
    }
  }, "/", String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 20,
      lineHeight: 1.35,
      color: 'var(--ink)',
      marginBottom: 8
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'var(--ink-2)',
      marginBottom: 4
    }
  }, p.authors), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'var(--gold)',
      opacity: 0.7
    }
  }, p.ref)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-deep)',
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container text-center"
  }, /*#__PURE__*/React.createElement(Heading, {
    className: "display",
    tag: "h2"
  }, /*#__PURE__*/React.createElement("span", null, "A question?"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic",
    style: {
      color: 'var(--gold)'
    }
  }, "Let's talk.")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-16 center reveal",
    style: {
      marginTop: 48,
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
    href: "contact.html",
    className: "btn btn-outline"
  }, "Contact")))))), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('app')).render(/*#__PURE__*/React.createElement(App, null));
