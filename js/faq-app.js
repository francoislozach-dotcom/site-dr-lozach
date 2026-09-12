const THEMES = [
  {
    "id": "consultation",
    "key": "Consultation",
    "name": "Consultation",
    "accroche": "Avant de vous opérer.",
    "items": [
      {
        "q": "Ai-je besoin d'une ordonnance de mon médecin traitant pour consulter ?",
        "a": "Non, vous pouvez consulter directement sans ordonnance. Cependant, une lettre de votre médecin traitant est appréciée car elle permet d'optimiser la consultation. Pour une prise en charge optimale par l'Assurance Maladie, il est toujours préférable de passer par votre médecin traitant dans le cadre du parcours de soins coordonnés. Le médecin traitant est une véritable \"tour de contrôle\" qui vous connait parfaitement, et saura vous orienter vers le bon parcours de soin."
      },
      {
        "q": "Comment prendre rendez-vous ?",
        "a": "La prise de rendez-vous se fait via Doctolib ou par téléphone au 04 67 53 09 24. Le secrétariat est joignable du lundi au vendredi. Pour les urgences traumatologiques, contactez directement la clinique Pôle Santé Thau, service de médecine non programmée au niveau -1."
      },
      {
        "q": "Quels documents apporter à la première consultation ?",
        "a": "Apportez vos radiographies et examens d'imagerie récents (radio, IRM, scanner), vos ordonnances en cours, votre carte Vitale et mutuelle, et si possible un résumé de vos antécédents médicaux et chirurgicaux."
      },
      {
        "q": "Est-ce que le Dr Lozach opère en secteur 2 ?",
        "a": "Oui, le Dr Lozach exerce en secteur 2 . Un devis vous sera remis avant toute intervention chirurgicale. La plupart des mutuelles prennent en charge tout ou partie du dépassement d'honoraires."
      }
    ]
  },
  {
    "id": "avant",
    "key": "Avant l'op",
    "name": "Avant l'opération",
    "accroche": "Ce qu'il faut savoir.",
    "items": [
      {
        "q": "Comment se préparer à une intervention chirurgicale ?",
        "a": "Suivez les consignes personnalisées données lors de la consultation d’anesthésie, notamment pour le jeûne et les médicaments. N’arrêtez aucun traitement sans avis médical. Prévoyez un accompagnant pour le retour à domicile en ambulatoire."
      },
      {
        "q": "La majorité des interventions sont-elles réalisées en ambulatoire ?",
        "a": "Oui, la grande majorité des interventions sont réalisées en ambulatoire : chirurgie du pied, de la cheville, arthroscopie du genou, reconstruction du LCA, greffe cartilagineuse AutoCart, chirurgie du tendon d'Achille. Vous entrez et sortez le même jour. Les prothèses totales (PTH, PTG) peuvent être aussi réalisées en ambulatoire ou necessiter une courte hospitalisation."
      },
      {
        "q": "Qu'est-ce que le robot ROSA et pourquoi est-il utilisé ?",
        "a": "ROSA assiste le chirurgien dans la planification et le positionnement des implants de prothèse du genou. Son utilisation dépend de l’indication ; elle ne garantit ni une récupération plus rapide ni une durée de vie supérieure de la prothèse."
      },
      {
        "q": "Qu'est-ce que la technique AutoCart ?",
        "a": "AutoCart utilise des fragments du cartilage du patient au cours d’une même intervention. L’indication, la durée opératoire et les consignes de récupération sont évaluées individuellement. La page Greffe explique cette approche et ses limites."
      }
    ]
  },
  {
    "id": "apres",
    "key": "Après l'op",
    "name": "Après l'opération",
    "accroche": "La récupération, étape par étape.",
    "items": [
      {
        "q": "Quand peut-on reprendre la conduite après une prothèse de hanche ?",
        "a": "La conduite peut reprendre après réévaluation, lorsque vous pouvez maîtriser le véhicule et effectuer un freinage d’urgence en sécurité, sans médicament altérant la vigilance. Demandez les consignes adaptées à votre situation au chirurgien."
      },
      {
        "q": "Quand peut-on reprendre le sport après une reconstruction du LCA ?",
        "a": "Le retour au sport de pivot-contact est autorisé à 9 mois minimum, après validation de critères objectifs (tests isocinétiques, tests fonctionnels). La course à pied reprend vers 4-5 mois, le vélo à 6 semaines."
      },
      {
        "q": "La douleur post-opératoire est-elle importante ?",
        "a": "La prise en charge de la douleur est adaptée à l’intervention et à chaque patient, en lien avec l’équipe d’anesthésie. Suivez l’ordonnance de sortie et contactez l’équipe soignante si la douleur augmente ou reste insuffisamment soulagée."
      },
      {
        "q": "Quand a lieu la première consultation post-opératoire ?",
        "a": "La première consultation de contrôle a lieu à 4 semaines pour la majorité des chirurgies, avec examen clinique et contrôle radiologique. Des consultations ultérieures sont programmées à 3 mois, 6 mois et 1 an."
      },
      {
        "q": "Peut-on faire de la rééducation à domicile ?",
        "a": "La rééducation en ville chez un kinésithérapeute libéral est suffisante pour la grande majorité des interventions. Une hospitalisation en SSR peut être organisée pour les patients isolés, âgés ou après certaines reprises complexes. Un protocole de rééducation détaillé vous sera remis à la sortie."
      }
    ]
  },
  {
    "id": "protheses",
    "key": "Prothèses",
    "name": "Prothèses",
    "accroche": "Ce que vous devez savoir.",
    "items": [
      {
        "q": "Combien de temps dure une prothèse de hanche ou de genou ?",
        "a": "La durée de vie d’une prothèse varie selon l’implant, l’état articulaire, l’activité et les facteurs individuels. Le suivi permet de dépister une usure ou une complication ; une reprise peut parfois être nécessaire."
      },
      {
        "q": "Peut-on passer une IRM avec une prothèse ?",
        "a": "Oui, les prothèses orthopédiques actuelles sont compatibles IRM. Elles sont fabriquées en alliages non ferromagnétiques (titane, cobalt-chrome). Signalez toujours la présence d'une prothèse avant tout examen IRM."
      },
      {
        "q": "Quelles précautions après une prothèse de hanche ?",
        "a": "Les 3 premiers mois, évitez de croiser les jambes, de fléchir la hanche au-delà de 90° et de vous asseoir dans des sièges trop bas. Ces précautions sont progressivement levées au fil de la cicatrisation capsulaire. Une liste détaillée vous sera remise avant la sortie."
      }
    ]
  },
  {
    "id": "expertise",
    "key": "Expertise",
    "name": "Expertise médico-légale",
    "accroche": "Une activité complémentaire.",
    "items": [
      {
        "q": "Le Dr Lozach réalise-t-il des expertises médico-légales ?",
        "a": "Oui, le Dr Lozach est expert médico-légal en orthopédie. Il réalise des expertises amiables et judiciaires dans le cadre de dommages corporels (accidents de la route, accidents du travail, responsabilité médicale)."
      },
      {
        "q": "Comment solliciter une expertise ?",
        "a": "Les demandes émanent généralement des compagnies d'assurance, des avocats ou des tribunaux. Contactez le secrétariat à secretariat@ortho-7.fr en précisant le cadre de la demande (amiable, judiciaire, CCI) et en joignant les pièces médicales disponibles."
      }
    ]
  }
];
const TOTAL_Q = THEMES.reduce((n, t) => n + t.items.length, 0);
function FaqHero({
  filter,
  setFilter
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let raf, start;
    const tick = t => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / 1500);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * TOTAL_Q));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  const filters = [{
    id: 'all',
    name: 'Tous'
  }, ...THEMES.map(t => ({
    id: t.id,
    name: t.key
  }))];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 180,
      paddingBottom: 80,
      background: 'var(--bg)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow reveal"
  }, "\u25CD Foire aux questions"), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display"
  }, "Questions")), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display soft-dynamic",
    style: {
      color: 'var(--gold)',
      fontStyle: 'italic',
      display: 'inline-block'
    }
  }, "Questions fr\xE9quentes.")), /*#__PURE__*/React.createElement("p", {
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
  }, "Les r\xE9ponses aux questions que vous vous posez avant et apr\xE8s l'intervention."), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      marginTop: 32,
      fontFamily: 'var(--mono)',
      fontSize: 13,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--gold)'
    }
  }, count, " question", count > 1 ? 's' : '', " \xB7 ", THEMES.length, " th\xE8mes"), /*#__PURE__*/React.createElement("div", {
    className: "faq-filters reveal"
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f.id,
    className: 'faq-filter' + (filter === f.id ? ' active' : ''),
    onClick: () => {
      setFilter(f.id);
      if (f.id !== 'all') {
        setTimeout(() => {
          const el = document.getElementById('theme-' + f.id);
          if (el) window.scrollTo({
            top: el.offsetTop - 60,
            behavior: 'smooth'
          });
        }, 320);
      }
    }
  }, f.name)))));
}
function FaqRow({
  q,
  a,
  isOpen,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'faq-row' + (isOpen ? ' open' : '')
  }, /*#__PURE__*/React.createElement("button", {
    type: "button", onClick: onToggle, "aria-expanded": isOpen,
    className: "faq-q"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-q-text"
  }, q), /*#__PURE__*/React.createElement("div", {
    className: "faq-chev"
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    className: "faq-a-wrap", hidden: !isOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-a-line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "faq-a"
  }, a)));
}
function FaqTheme({
  theme,
  index,
  filter
}) {
  const [openIdx, setOpenIdx] = useState(-1);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setInView(true), 80 + index * 50);
    return () => clearTimeout(t);
  }, [index]);
  const hidden = filter !== 'all' && filter !== theme.id;
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    id: 'theme-' + theme.id,
    className: 'faq-theme' + (inView ? ' is-in' : '') + (hidden ? ' is-hidden' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display",
    style: {
      fontSize: 'clamp(40px, 5vw, 64px)'
    }
  }, theme.name, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--serif)',
      fontStyle: 'italic',
      color: 'var(--gold)',
      fontSize: 20,
      marginTop: 12,
      marginBottom: 48
    }
  }, theme.accroche), /*#__PURE__*/React.createElement("div", null, theme.items.map((it, i) => /*#__PURE__*/React.createElement(FaqRow, {
    key: i,
    q: it.q,
    a: it.a,
    isOpen: openIdx === i,
    onToggle: () => setOpenIdx(openIdx === i ? -1 : i)
  })))));
}
function App() {
  const [filter, setFilter] = useState('all');
  useEffect(() => {
    const bar = document.getElementById('scrollBar');
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      if (bar) bar.style.transform = 'scaleX(' + p + ')';
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Cursor, null), /*#__PURE__*/React.createElement(Nav, {
    active: "faq"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(FaqHero, {
    filter: filter,
    setFilter: setFilter
  }), THEMES.map((t, i) => /*#__PURE__*/React.createElement(FaqTheme, {
    key: t.id,
    theme: t,
    index: i,
    filter: filter
  }))), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('app')).render(/*#__PURE__*/React.createElement(App, null));
