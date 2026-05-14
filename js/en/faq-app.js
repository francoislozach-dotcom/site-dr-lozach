const THEMES = [{
  id: 'consultation',
  key: 'Consultation',
  name: 'Consultation',
  accroche: 'Before your surgery.',
  items: [{
    q: "Do I need a referral from my GP to book a consultation?",
    a: "No, you can book a consultation directly without a referral. However, a letter from your GP is appreciated as it helps optimise the consultation. For the best coverage by the National Health Insurance (Assurance Maladie), it is always preferable to go through your GP within the coordinated care pathway. Your GP acts as a genuine 'control tower' who knows you well and will guide you to the right care pathway."
  }, {
    q: "How do I book an appointment?",
    a: "Appointments can be booked via Doctolib or by phone on 04 67 53 09 24. The secretary's office is reachable Monday to Friday. For urgent trauma cases, contact the Pôle Santé Thau clinic directly, unscheduled medical care unit, level -1."
  }, {
    q: "What documents should I bring to the first consultation?",
    a: "Please bring any recent imaging (X-rays, MRI, CT scan), your current prescriptions, your health insurance card and complementary insurance details, and if possible a summary of your medical and surgical history."
  }, {
    q: "Does Dr Lozach practise in the private sector (Sector 2)?",
    a: "Yes, Dr Lozach practises in the private sector (Sector 2). A written estimate will be provided before any surgical procedure. Most complementary insurance plans cover all or part of the additional fees."
  }]
}, {
  id: 'avant',
  key: "Before surgery",
  name: "Before surgery",
  accroche: 'What you need to know.',
  items: [{
    q: "How should I prepare for surgery?",
    a: "A pre-anaesthetic consultation is required before any procedure. You must fast from solid food for 6 hours before your arrival at the clinic, and from clear fluids for 2 hours. Some medications must be stopped (anticoagulants, aspirin) — your surgeon will advise which ones. For day surgery (ambulatory) procedures, please arrange for someone to drive you home."
  }, {
    q: "Is most surgery performed as day surgery (ambulatory)?",
    a: "Yes, the vast majority of procedures are performed as day surgery: foot surgery, ankle surgery, knee arthroscopy, ACL reconstruction, AutoCart cartilage grafting, Achilles tendon surgery. You arrive and leave the same day. Total joint replacements (THA, TKA) can also be performed as day surgery or may require a short inpatient stay."
  }, {
    q: "What is the ROSA robot and why is it used?",
    a: "ROSA is a robotic assistance system used for knee replacement surgery (TKA and UKA). It enables personalised planning and high-precision implant positioning. The result: a better-positioned prosthesis, faster recovery, and optimised longevity."
  }, {
    q: "What is the AutoCart technique?",
    a: "AutoCart is a cartilage graft performed in a single surgical session. Thin slices of healthy cartilage are harvested from a non-weight-bearing area of the knee, then transplanted directly onto the damaged area during the same procedure. One hour, day surgery, using the patient's own tissue."
  }]
}, {
  id: 'apres',
  key: "After surgery",
  name: "After surgery",
  accroche: 'Recovery, step by step.',
  items: [{
    q: "When can I drive again after a hip replacement?",
    a: "Driving may be resumed 2 to 4 weeks after a THA, subject to the surgeon's approval at the follow-up consultation. This period allows the stabilising muscles to regain sufficient tone."
  }, {
    q: "When can I return to sport after ACL reconstruction?",
    a: "Return to pivoting contact sports is authorised at a minimum of 9 months, after objective criteria have been validated (isokinetic tests, functional tests). Running resumes around 4–5 months, cycling at 6 weeks."
  }, {
    q: "Is post-operative pain significant?",
    a: "Pain is very well controlled thanks to multimodal analgesia protocols and loco-regional nerve blocks. The majority of patients describe moderate discomfort during the first days, quickly relieved by the prescribed treatment. Dr Lozach works closely with his anaesthesiologist colleagues to optimise the quality of post-operative care."
  }, {
    q: "When is the first post-operative consultation?",
    a: "The first follow-up consultation takes place at 4 weeks for the majority of procedures, with clinical examination and X-ray review. Further consultations are scheduled at 3 months, 6 months, and 1 year."
  }, {
    q: "Can physiotherapy be done at home?",
    a: "Outpatient physiotherapy with a private physiotherapist is sufficient for the vast majority of procedures. Inpatient rehabilitation (SSR) can be arranged for patients who live alone, elderly patients, or after certain complex revision surgeries. A detailed rehabilitation protocol will be provided at discharge."
  }]
}, {
  id: 'protheses',
  key: 'Joint replacements',
  name: 'Joint replacements',
  accroche: 'What you need to know.',
  items: [{
    q: "How long does a hip or knee replacement last?",
    a: "Current joint replacements have an estimated lifespan of 20–25 years for more than 90% of patients. This durability depends on implant quality, precision of positioning (hence the value of the ROSA robot), the patient's weight, and activity level."
  }, {
    q: "Can I have an MRI scan with a joint replacement?",
    a: "Yes, current orthopaedic implants are MRI-compatible. They are manufactured from non-ferromagnetic alloys (titanium, cobalt-chrome). Always inform the radiologist of the presence of a joint replacement before any MRI scan."
  }, {
    q: "What precautions should I take after a hip replacement?",
    a: "For the first 3 months, avoid crossing your legs, bending the hip beyond 90°, and sitting in very low seats. These precautions are progressively lifted as the capsular healing progresses. A detailed list will be provided before discharge."
  }]
}, {
  id: 'expertise',
  key: 'Medical expertise',
  name: 'Medical expertise',
  accroche: 'A complementary activity.',
  items: [{
    q: "Does Dr Lozach carry out medico-legal assessments?",
    a: "Yes, Dr Lozach is a court-appointed medico-legal expert in orthopaedics. He carries out amicable and judicial assessments in personal injury cases (road traffic accidents, workplace accidents, medical liability)."
  }, {
    q: "How can I request an assessment?",
    a: "Requests typically come from insurance companies, solicitors, or courts. Please contact the secretary's office at secretariat@ortho-7fr.fr, specifying the nature of the request (amicable, judicial, CRCI) and enclosing available medical documents."
  }]
}];
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
    name: 'All'
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
  }, "◍ Frequently asked questions"), /*#__PURE__*/React.createElement("div", {
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
  }, "Frequently asked.")), /*#__PURE__*/React.createElement("p", {
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
  }, "Answers to the questions you ask before and after surgery."), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      marginTop: 32,
      fontFamily: 'var(--mono)',
      fontSize: 13,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--gold)'
    }
  }, count, " question", count > 1 ? 's' : '', " · ", THEMES.length, " themes"), /*#__PURE__*/React.createElement("div", {
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
    className: 'faq-row' + (isOpen ? ' open' : ''),
    onClick: onToggle
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-q"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-q-text"
  }, q), /*#__PURE__*/React.createElement("div", {
    className: "faq-chev"
  }, "›")), /*#__PURE__*/React.createElement("div", {
    className: "faq-a-wrap"
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
