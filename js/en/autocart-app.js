/* ============================================================
   AutoCart — Autologous cartilage grafting · Dr Lozach
   ============================================================ */

const COMPARATIF = [
  {
    technique: 'Microfractures',
    tissu: 'Fibrocartilage',
    temps: '1 stage',
    resultat: 'Insufficient after 5 years',
    contrainte: 'Scar tissue of inferior quality compared to hyaline cartilage',
    highlight: false
  },
  {
    technique: 'MACI',
    tissu: 'Hyaline cartilage',
    temps: '2 surgical stages',
    resultat: 'Good long-term outcomes',
    contrainte: 'Cell culture required, 2 hospital admissions, 6-week interval between stages',
    highlight: false
  },
  {
    technique: 'AutoCart',
    tissu: 'Native hyaline cartilage',
    temps: '1 surgical stage',
    resultat: 'Good long-term outcomes',
    contrainte: 'Lesion limited to 8 cm² — stable knee required',
    highlight: true
  }
];

const ELIGIBILITE = [
  { ok: true, label: 'Age', valeur: '20 to 55 years' },
  { ok: true, label: 'Lesion size', valeur: 'Between 1 and 8 cm² — ICRS grade III or IV' },
  { ok: true, label: 'Knee stability', valeur: 'Ligaments intact or stabilised in the same surgical session' },
  { ok: true, label: 'Limb alignment', valeur: 'Correct or corrected by associated osteotomy' },
  { ok: true, label: 'Conservative treatment', valeur: 'Physiotherapy and injections insufficient' },
  { ok: false, label: 'Contraindications', valeur: 'Diffuse osteoarthritis, active infection, severe obesity (BMI > 35), lesion > 8 cm²' }
];

const SUITES = [
  {
    phase: 'Before',
    timing: 'Consultation',
    items: ['3-Tesla MRI with cartilage mapping', 'Pre-anaesthetic consultation', 'Standard blood tests', 'Weight-bearing X-rays (limb alignment)']
  },
  {
    phase: 'Surgery',
    timing: '1 hour',
    items: ['Arthroscopy under general or spinal anaesthesia', 'Harvesting from non-weight-bearing area (trochlear border, intercondylar notch)', 'Arthroscopic transfer and fixation onto the lesion', 'Return home the same day (day surgery)']
  },
  {
    phase: 'Weeks 1–6',
    timing: 'Non-weight-bearing',
    items: ['Crutches mandatory', 'Gentle physiotherapy in non-weight-bearing from day 15', 'Muscle strengthening without joint loading', 'Clinical review at day 30']
  },
  {
    phase: 'Months 2–6',
    timing: 'Progressive return',
    items: ['Progressive weight-bearing authorised at 6–8 weeks', 'Exercise bike from 2 months', 'Swimming from 3 months', 'Extended walking from 4 months']
  },
  {
    phase: 'Months 6–18',
    timing: 'Return to sport',
    items: ['Light sport (jogging, cycling) at 6–9 months', 'Pivoting contact sport at 12–18 months based on MRI', 'MRI review at 1 year — assessment of integration', 'Annual clinical review']
  }
];

/* ---- Hero ---- */
function AutoCartHero() {
  return React.createElement('section', {
    style: { paddingTop: 180, paddingBottom: 100, background: 'var(--bg)', position: 'relative', overflow: 'hidden' }
  },
    React.createElement('div', { className: 'container', style: { position: 'relative', zIndex: 1 } },
      React.createElement('div', { className: 'eyebrow reveal' }, '◍ Cartilage surgery · Knee'),
      React.createElement('div', { className: 'line-mask' },
        React.createElement('span', { className: 'display' }, 'AutoCart.')
      ),
      React.createElement('div', { className: 'line-mask' },
        React.createElement('span', { className: 'display', style: { color: 'var(--gold)', fontStyle: 'italic', display: 'inline-block' } }, 'Rebuild. Naturally.')
      ),
      React.createElement('p', {
        className: 'reveal',
        style: { maxWidth: 620, fontSize: 18, lineHeight: 1.65, color: 'var(--ink-2)', marginTop: 48, fontFamily: 'var(--serif)', fontStyle: 'italic' }
      }, 'Autologous cartilage grafting in a single surgical session — for focal knee lesions between 1 and 8 cm². The patient\'s own native hyaline cartilage, with no cell culture and no artificial biomaterial.'),
      React.createElement('div', { className: 'reveal', style: { display: 'flex', gap: 12, marginTop: 48, flexWrap: 'wrap' } },
        ['+50 grafts performed', '1 surgical stage', 'Native hyaline cartilage', 'Day surgery'].map(function(tag) {
          return React.createElement('span', {
            key: tag,
            style: {
              fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '10px 18px', borderRadius: 999,
              border: tag === '+50 grafts performed' ? '1px solid var(--gold)' : '1px solid var(--line)',
              color: tag === '+50 grafts performed' ? 'var(--gold)' : 'var(--ink-2)'
            }
          }, tag);
        })
      )
    )
  );
}

/* ---- Problem ---- */
function ProblemeSection() {
  return React.createElement('section', {
    style: { borderTop: '1px solid var(--line)', padding: '100px 0', background: 'var(--bg-deep)' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'autocart-grid-2', style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' } },
        React.createElement('div', null,
          React.createElement('div', { className: 'eyebrow gold reveal' }, '◍ /01 — The problem'),
          React.createElement(Heading, { className: 'display', tag: 'h2' },
            'Cartilage',
            React.createElement('br', null),
            React.createElement('span', { style: { color: 'var(--gold)', fontStyle: 'italic' } }, 'does not regenerate.')
          )
        ),
        React.createElement('div', { className: 'reveal', style: { display: 'flex', flexDirection: 'column', gap: 20 } },
          React.createElement('p', { style: { fontSize: 16, lineHeight: 1.75, color: 'var(--ink)', margin: 0 } },
            'Articular cartilage is an avascular tissue with no spontaneous capacity for regeneration. A focal lesion of traumatic or degenerative origin inevitably progresses towards worsening: expansion of the damaged area, exposure of the subchondral bone, mechanical pain, locking, and repeated joint effusions.'
          ),
          React.createElement('p', { style: { fontSize: 16, lineHeight: 1.75, color: 'var(--ink)', margin: 0 } },
            'Without appropriate treatment, an ICRS grade III-IV lesion in a patient aged 30 to 55 ultimately leads to generalised osteoarthritis and total knee replacement. The goal is to biologically reconstruct the cartilage tissue before the joint destruction becomes diffuse.'
          ),
          React.createElement('p', { style: { fontSize: 16, lineHeight: 1.75, color: 'var(--ink)', margin: 0 } },
            'Physiotherapy, injections, and viscosupplementation address symptoms but do not restore cartilage. AutoCart is a curative surgical solution with a biological aim.'
          )
        )
      ),
      React.createElement('style', null, '@media(max-width:900px){.autocart-grid-2{grid-template-columns:1fr!important;gap:40px!important}}')
    )
  );
}

/* ---- Technique ---- */
function TechniqueSection() {
  var steps = [
    { num: '01', title: 'Harvesting', text: 'Hyaline cartilage slices are harvested from a non-weight-bearing area of the knee (trochlear border, intercondylar notch). The donor site is non-functional and causes no morbidity.' },
    { num: '02', title: 'Transfer', text: 'The slices are immediately transferred and fixed arthroscopically onto the target cartilage lesion. No cell culture, no artificial biomaterial. Everything takes place within the same surgical session.' },
    { num: '03', title: 'Integration', text: 'The patient\'s native cartilage, preserving the original tissue structure and chondrocyte viability, gradually integrates with the subchondral bone over 12 to 18 months. MRI review at 1 year.' }
  ];
  return React.createElement('section', {
    style: { borderTop: '1px solid var(--line)', padding: '100px 0', background: 'var(--bg)' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'eyebrow gold reveal' }, '◍ /02 — The technique'),
      React.createElement(Heading, { className: 'display', tag: 'h2' },
        'Surgical',
        React.createElement('br', null),
        React.createElement('span', { style: { color: 'var(--gold)', fontStyle: 'italic' } }, 'principle.')
      ),
      React.createElement('div', {
        className: 'reveal autocart-grid-3',
        style: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', marginTop: 64, borderTop: '1px solid var(--line)' }
      },
        steps.map(function(s) {
          return React.createElement('div', {
            key: s.num,
            style: { padding: '48px 36px', borderRight: '1px solid var(--line)' }
          },
            React.createElement('div', { style: { fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--gold)', letterSpacing: '0.16em', marginBottom: 24 } }, '— ' + s.num),
            React.createElement('h3', { style: { fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 500, color: 'var(--ink)', marginBottom: 20, marginTop: 0 } }, s.title),
            React.createElement('p', { style: { fontSize: 15, lineHeight: 1.7, color: 'var(--ink)', margin: 0 } }, s.text)
          );
        })
      ),
      React.createElement('style', null, '@media(max-width:900px){.autocart-grid-3{grid-template-columns:1fr!important}}')
    )
  );
}

/* ---- Comparison ---- */
function ComparatifSection() {
  return React.createElement('section', {
    style: { borderTop: '1px solid var(--line)', padding: '100px 0', background: 'var(--bg-deep)' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'eyebrow gold reveal' }, '◍ /03 — Comparison'),
      React.createElement(Heading, { className: 'display', tag: 'h2' },
        'AutoCart vs',
        React.createElement('br', null),
        React.createElement('span', { style: { color: 'var(--gold)', fontStyle: 'italic' } }, 'the alternatives.')
      ),
      React.createElement('div', { className: 'reveal', style: { marginTop: 64, overflowX: 'auto' } },
        React.createElement('table', { style: { width: '100%', borderCollapse: 'collapse', fontSize: 15 } },
          React.createElement('thead', null,
            React.createElement('tr', { style: { borderBottom: '1px solid var(--line)' } },
              ['Technique', 'Regenerated tissue', 'Surgical stages', 'Long-term outcomes', 'Main constraints'].map(function(h) {
                return React.createElement('th', {
                  key: h,
                  style: { textAlign: 'left', padding: '16px 20px', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 400 }
                }, h);
              })
            )
          ),
          React.createElement('tbody', null,
            COMPARATIF.map(function(row, i) {
              return React.createElement('tr', {
                key: i,
                style: { borderBottom: '1px solid var(--line)', background: row.highlight ? 'rgba(0,212,255,0.06)' : 'transparent' }
              },
                React.createElement('td', { style: { padding: '20px', fontFamily: 'var(--serif)', fontSize: 18, fontWeight: row.highlight ? 600 : 400, color: row.highlight ? 'var(--gold)' : 'var(--ink)' } }, row.technique),
                React.createElement('td', { style: { padding: '20px', color: 'var(--ink)' } }, row.tissu),
                React.createElement('td', { style: { padding: '20px', color: 'var(--ink)' } }, row.temps),
                React.createElement('td', { style: { padding: '20px', color: 'var(--ink)' } }, row.resultat),
                React.createElement('td', { style: { padding: '20px', color: 'var(--ink-2)', fontSize: 14 } }, row.contrainte)
              );
            })
          )
        )
      )
    )
  );
}

/* ---- Eligibility ---- */
function EligibiliteSection() {
  return React.createElement('section', {
    style: { borderTop: '1px solid var(--line)', padding: '100px 0', background: 'var(--bg)' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'eyebrow gold reveal' }, '◍ /04 — Eligibility'),
      React.createElement(Heading, { className: 'display', tag: 'h2' },
        'Am I',
        React.createElement('br', null),
        React.createElement('span', { style: { color: 'var(--gold)', fontStyle: 'italic' } }, 'eligible?')
      ),
      React.createElement('div', {
        className: 'reveal autocart-elig-grid',
        style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginTop: 64 }
      },
        ELIGIBILITE.map(function(item, i) {
          return React.createElement('div', {
            key: i,
            style: {
              padding: '32px 36px',
              borderTop: '1px solid var(--line)',
              background: item.ok ? 'transparent' : 'rgba(255,80,80,0.04)',
              gridColumn: item.ok ? 'auto' : '1 / -1'
            }
          },
            React.createElement('div', { style: { display: 'flex', gap: 20, alignItems: 'flex-start' } },
              React.createElement('span', { style: { fontFamily: 'var(--mono)', color: item.ok ? 'var(--gold)' : '#ff6060', fontSize: 18, flexShrink: 0, marginTop: 2 } }, item.ok ? '✓' : '✗'),
              React.createElement('div', null,
                React.createElement('div', { style: { fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-2)', marginBottom: 10 } }, item.label),
                React.createElement('div', { style: { fontFamily: 'var(--serif)', fontSize: 19, color: 'var(--ink)', fontWeight: 500, lineHeight: 1.4 } }, item.valeur)
              )
            )
          );
        })
      ),
      React.createElement('style', null, '@media(max-width:900px){.autocart-elig-grid{grid-template-columns:1fr!important}}')
    )
  );
}

/* ---- Timeline ---- */
function SuitesSection() {
  return React.createElement('section', {
    style: { borderTop: '1px solid var(--line)', padding: '100px 0', background: 'var(--bg-deep)' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'eyebrow gold reveal' }, '◍ /05 — Timeline'),
      React.createElement(Heading, { className: 'display', tag: 'h2' },
        'From surgery',
        React.createElement('br', null),
        React.createElement('span', { style: { color: 'var(--gold)', fontStyle: 'italic' } }, 'to return to sport.')
      ),
      React.createElement('div', { style: { marginTop: 64 } },
        SUITES.map(function(phase, i) {
          return React.createElement('div', {
            key: i,
            className: 'reveal autocart-suites-row',
            style: { display: 'grid', gridTemplateColumns: '180px 160px 1fr', gap: 0, borderTop: '1px solid var(--line)', padding: '40px 0', alignItems: 'start' }
          },
            React.createElement('div', { style: { fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 600, color: 'var(--ink)', paddingRight: 24 } }, phase.phase),
            React.createElement('div', { style: { fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', paddingTop: 5, paddingRight: 24 } }, phase.timing),
            React.createElement('ul', { style: { margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 } },
              phase.items.map(function(item, j) {
                return React.createElement('li', {
                  key: j,
                  style: { fontSize: 15, color: 'var(--ink)', lineHeight: 1.55, display: 'flex', gap: 12, alignItems: 'flex-start' }
                },
                  React.createElement('span', { style: { color: 'var(--gold)', flexShrink: 0 } }, '—'),
                  item
                );
              })
            )
          );
        })
      ),
      React.createElement('style', null, '@media(max-width:900px){.autocart-suites-row{grid-template-columns:1fr!important;gap:12px!important;padding:28px 0!important}}')
    )
  );
}

/* ---- Experience ---- */
function ExperienceSection() {
  return React.createElement('section', {
    style: { borderTop: '1px solid var(--line)', padding: '100px 0', background: 'var(--bg)' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'eyebrow gold reveal' }, '◍ /06 — Experience'),
      React.createElement(Heading, { className: 'display', tag: 'h2' },
        'More than 50',
        React.createElement('br', null),
        React.createElement('span', { style: { color: 'var(--gold)', fontStyle: 'italic' } }, 'grafts performed.')
      ),
      React.createElement('div', {
        className: 'reveal autocart-exp-grid',
        style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, marginTop: 64 }
      },
        React.createElement('div', { style: { padding: '48px', background: 'var(--bg-deep)', display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center' } },
          React.createElement('p', { style: { fontSize: 16, lineHeight: 1.75, color: 'var(--ink)', margin: 0 } },
            'The AutoCart technique is performed at Pôle Santé Thau in Sète. Intraoperative arthroscopic images systematically document the initial state of the lesion, graft quality, and placement.'
          ),
          React.createElement('p', { style: { fontSize: 16, lineHeight: 1.75, color: 'var(--ink)', margin: 0 } },
            'Post-operative follow-up is organised at day 30, day 90, 6 months, and 1 year, with an MRI review at 12 months to assess the quality of cartilage integration and validate return to sport.'
          )
        ),
        React.createElement('div', {
          style: { background: 'var(--bg-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 260, borderLeft: '1px solid var(--line)', padding: 40 }
        },
          React.createElement('div', { style: { textAlign: 'center' } },
            React.createElement('div', { style: { fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-2)', marginBottom: 16 } }, 'AutoCart grafts · Pôle Santé Thau'),
            React.createElement('div', { style: { fontFamily: 'var(--serif)', fontSize: 80, fontWeight: 700, color: 'var(--gold)', lineHeight: 1 } }, '+50'),
            React.createElement('div', { style: { fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-2)', marginTop: 16 } }, 'Sète · Hérault')
          )
        )
      ),
      React.createElement('style', null, '@media(max-width:900px){.autocart-exp-grid{grid-template-columns:1fr!important}}')
    )
  );
}

/* ---- Coverage ---- */
function RemboursementSection() {
  var cols = [
    { label: 'National Health Insurance', text: 'The procedure benefits from partial coverage by the National Health Insurance (Assurance Maladie). The terms depend on the procedure coding and clinical context.' },
    { label: 'Complementary insurance', text: 'The remaining balance is covered according to the complementary insurance (mutuelle) contract held. A detailed estimate is provided at the pre-operative consultation.' },
    { label: 'Written estimate', text: 'A full written estimate is provided at the consultation, detailing surgical fees, anaesthesia fees, and clinic charges.' }
  ];
  return React.createElement('section', {
    style: { borderTop: '1px solid var(--line)', padding: '80px 0', background: 'var(--bg-deep)' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'eyebrow gold reveal' }, '◍ /07 — Coverage'),
      React.createElement('div', {
        className: 'reveal autocart-grid-3',
        style: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', marginTop: 48, borderTop: '1px solid var(--line)' }
      },
        cols.map(function(col, i) {
          return React.createElement('div', {
            key: i,
            style: { padding: '40px', borderRight: i < 2 ? '1px solid var(--line)' : 'none' }
          },
            React.createElement('div', { style: { fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--gold)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 } }, '— ' + col.label),
            React.createElement('p', { style: { fontSize: 15, color: 'var(--ink)', lineHeight: 1.65, margin: 0 } }, col.text)
          );
        })
      )
    )
  );
}

/* ---- CTA ---- */
function CTASection() {
  return React.createElement('section', {
    style: { borderTop: '1px solid var(--line)', padding: '120px 0', background: 'var(--bg)', textAlign: 'center' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'eyebrow gold reveal', style: { justifyContent: 'center' } }, '◍ Consultation'),
      React.createElement(Heading, { className: 'display', tag: 'h2', style: { textAlign: 'center' } },
        'Assess your',
        React.createElement('br', null),
        React.createElement('span', { style: { color: 'var(--gold)', fontStyle: 'italic' } }, 'eligibility.')
      ),
      React.createElement('p', {
        className: 'reveal',
        style: { maxWidth: 520, margin: '32px auto 0', fontSize: 17, lineHeight: 1.65, color: 'var(--ink-2)', fontFamily: 'var(--serif)', fontStyle: 'italic' }
      }, 'Eligibility for the AutoCart technique is assessed at consultation based on MRI and clinical findings. A consultation does not presuppose a surgical indication.'),
      React.createElement('a', {
        href: 'https://www.doctolib.fr/chirurgien-orthopediste-traumatologue/sete/francois-lozach',
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'reveal',
        style: {
          display: 'inline-flex', alignItems: 'center', gap: 12,
          marginTop: 48, padding: '18px 44px',
          background: 'var(--gold)', color: 'var(--bg-deep)',
          fontFamily: 'var(--mono)', fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase',
          textDecoration: 'none', borderRadius: 2, fontWeight: 600
        }
      }, 'Book an appointment — Doctolib')
    )
  );
}

/* ---- App ---- */
function App() {
  useReveal();
  return React.createElement(React.Fragment, null,
    React.createElement(Cursor, null),
    React.createElement(Nav, { active: 'chirurgie' }),
    React.createElement('main', null,
      React.createElement(AutoCartHero, null),
      React.createElement(Marquee, { items: ['AutoCart', 'Hyaline cartilage', '1 surgical stage', 'Focal lesion', 'Arthroscopy', 'Knee', 'Dr Lozach', 'Sète', 'Pôle Santé Thau'] }),
      React.createElement(ProblemeSection, null),
      React.createElement(TechniqueSection, null),
      React.createElement(ComparatifSection, null),
      React.createElement(EligibiliteSection, null),
      React.createElement(SuitesSection, null),
      React.createElement(ExperienceSection, null),
      React.createElement(RemboursementSection, null),
      React.createElement(CTASection, null)
    ),
    React.createElement(Footer, null)
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(React.createElement(App, null));
