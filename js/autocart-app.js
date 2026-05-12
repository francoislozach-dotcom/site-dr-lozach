/* ============================================================
   AutoCart — Greffe cartilagineuse autologue · Dr Lozach
   ============================================================ */

const COMPARATIF = [
  {
    technique: 'Microfractures',
    tissu: 'Fibrocartilage',
    temps: '1 temps',
    resultat: 'Insuffisant > 5 ans',
    contrainte: 'Tissu cicatriciel de qualité inférieure au cartilage hyalin',
    highlight: false
  },
  {
    technique: 'MACI',
    tissu: 'Cartilage hyalin',
    temps: '2 temps opératoires',
    resultat: 'Bons à long terme',
    contrainte: 'Culture cellulaire, 2 hospitalisations, délai 6 semaines entre les temps',
    highlight: false
  },
  {
    technique: 'AutoCart',
    tissu: 'Cartilage hyalin natif',
    temps: '1 temps opératoire',
    resultat: 'Bons à long terme',
    contrainte: 'Lésion limitée à 8 cm² — genou stable requis',
    highlight: true
  }
];

const ELIGIBILITE = [
  { ok: true, label: 'Âge', valeur: '20 à 55 ans' },
  { ok: true, label: 'Taille de la lésion', valeur: 'Entre 1 et 8 cm² — ICRS grade III ou IV' },
  { ok: true, label: 'Stabilité du genou', valeur: 'Ligaments intacts ou stabilisés dans le même temps opératoire' },
  { ok: true, label: 'Axe du membre', valeur: 'Correct ou corrigé par ostéotomie associée' },
  { ok: true, label: 'Traitement conservateur', valeur: 'Kinésithérapie et infiltrations insuffisants' },
  { ok: false, label: 'Contre-indications', valeur: 'Arthrose diffuse, infection active, obésité sévère (IMC > 35), lésion > 8 cm²' }
];

const SUITES = [
  {
    phase: 'Avant',
    timing: 'Consultation',
    items: ['IRM 3 Tesla avec cartographie du cartilage', 'Consultation pré-anesthésique', 'Bilan biologique standard', 'Radiographies en charge (axe des membres)']
  },
  {
    phase: 'Opération',
    timing: '1 heure',
    items: ['Arthroscopie sous anesthésie générale ou rachianesthésie', 'Prélèvement en zone non portante (bord trochléen, échancrure)', 'Transfert et fixation arthroscopique sur la lésion', 'Retour à domicile le jour même (ambulatoire)']
  },
  {
    phase: 'Semaines 1–6',
    timing: 'Sans appui',
    items: ['Cannes anglaises obligatoires', 'Kinésithérapie douce en décharge dès J15', 'Travail musculaire sans contrainte articulaire', 'Contrôle clinique à J30']
  },
  {
    phase: 'Mois 2–6',
    timing: 'Reprise progressive',
    items: ['Appui progressif autorisé à 6–8 semaines', 'Vélo d\'appartement à 2 mois', 'Natation à 3 mois', 'Marche prolongée à 4 mois']
  },
  {
    phase: 'Mois 6–18',
    timing: 'Retour au sport',
    items: ['Sport léger (jogging, vélo) à 6–9 mois', 'Sport pivot-contact à 12–18 mois selon IRM', 'IRM de contrôle à 1 an — évaluation de l\'intégration', 'Contrôle clinique annuel']
  }
];

/* ---- Hero ---- */
function AutoCartHero() {
  return React.createElement('section', {
    style: { paddingTop: 180, paddingBottom: 100, background: 'var(--bg)', position: 'relative', overflow: 'hidden' }
  },
    React.createElement('div', { className: 'container', style: { position: 'relative', zIndex: 1 } },
      React.createElement('div', { className: 'eyebrow reveal' }, '◍ Chirurgie cartilagineuse · Genou'),
      React.createElement('div', { className: 'line-mask' },
        React.createElement('span', { className: 'display' }, 'AutoCart.')
      ),
      React.createElement('div', { className: 'line-mask' },
        React.createElement('span', { className: 'display', style: { color: 'var(--gold)', fontStyle: 'italic', display: 'inline-block' } }, 'Reconstruire. Naturellement.')
      ),
      React.createElement('p', {
        className: 'reveal',
        style: { maxWidth: 620, fontSize: 18, lineHeight: 1.65, color: 'var(--ink-2)', marginTop: 48, fontFamily: 'var(--serif)', fontStyle: 'italic' }
      }, 'Greffe cartilagineuse autologue en un seul temps opératoire — pour les lésions focales du genou entre 1 et 8 cm². Cartilage hyalin natif du patient, sans culture cellulaire, sans biomatériau artificiel.'),
      React.createElement('div', { className: 'reveal', style: { display: 'flex', gap: 12, marginTop: 48, flexWrap: 'wrap' } },
        ['+50 greffes réalisées', '1 seul temps opératoire', 'Cartilage hyalin natif', 'Ambulatoire'].map(function(tag) {
          return React.createElement('span', {
            key: tag,
            style: {
              fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '10px 18px', borderRadius: 999,
              border: tag === '+50 greffes réalisées' ? '1px solid var(--gold)' : '1px solid var(--line)',
              color: tag === '+50 greffes réalisées' ? 'var(--gold)' : 'var(--ink-2)'
            }
          }, tag);
        })
      )
    )
  );
}

/* ---- Problème ---- */
function ProblemeSection() {
  return React.createElement('section', {
    style: { borderTop: '1px solid var(--line)', padding: '100px 0', background: 'var(--bg-deep)' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'autocart-grid-2', style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' } },
        React.createElement('div', null,
          React.createElement('div', { className: 'eyebrow gold reveal' }, '◍ /01 — Le problème'),
          React.createElement(Heading, { className: 'display', tag: 'h2' },
            'Le cartilage',
            React.createElement('br', null),
            React.createElement('span', { style: { color: 'var(--gold)', fontStyle: 'italic' } }, 'ne se régénère pas.')
          )
        ),
        React.createElement('div', { className: 'reveal', style: { display: 'flex', flexDirection: 'column', gap: 20 } },
          React.createElement('p', { style: { fontSize: 16, lineHeight: 1.75, color: 'var(--ink)', margin: 0 } },
            'Le cartilage articulaire est un tissu avasculaire sans capacité spontanée de régénération. Une lésion focale d\'origine traumatique ou dégénérative évolue inévitablement vers l\'aggravation : extension de la zone lésée, exposition osseuse sous-chondrale, douleurs mécaniques, blocages et épanchements répétés.'
          ),
          React.createElement('p', { style: { fontSize: 16, lineHeight: 1.75, color: 'var(--ink)', margin: 0 } },
            'Sans traitement adapté, une lésion ICRS grade III-IV chez un patient de 30 à 55 ans conduit à terme vers l\'arthrose généralisée et la prothèse totale de genou. L\'objectif est de reconstruire biologiquement le tissu cartilagineux avant que la destruction articulaire ne devienne diffuse.'
          ),
          React.createElement('p', { style: { fontSize: 16, lineHeight: 1.75, color: 'var(--ink)', margin: 0 } },
            'La kinésithérapie, les infiltrations et les viscosupplémentations traitent les symptômes mais ne reconstituent pas le cartilage. L\'AutoCart est une réponse chirurgicale curative à visée biologique.'
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
    { num: '01', title: 'Prélèvement', text: 'Prélèvement de lamelles de cartilage hyalin en zone non portante du genou (bord trochléen, échancrure intercondylienne). Le site donneur est non fonctionnel et n\'entraîne pas de morbidité.' },
    { num: '02', title: 'Transfert', text: 'Les lamelles sont immédiatement transférées et fixées sur la lésion cartilagineuse cible par voie arthroscopique. Aucune culture cellulaire, aucun biomatériau artificiel. Tout se passe dans le même temps opératoire.' },
    { num: '03', title: 'Intégration', text: 'Le cartilage natif du patient, préservant la structure tissulaire originelle et la viabilité des chondrocytes, s\'intègre progressivement à l\'os sous-chondral sur 12 à 18 mois. Contrôle IRM à 1 an.' }
  ];
  return React.createElement('section', {
    style: { borderTop: '1px solid var(--line)', padding: '100px 0', background: 'var(--bg)' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'eyebrow gold reveal' }, '◍ /02 — La technique'),
      React.createElement(Heading, { className: 'display', tag: 'h2' },
        'Principe',
        React.createElement('br', null),
        React.createElement('span', { style: { color: 'var(--gold)', fontStyle: 'italic' } }, 'opératoire.')
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

/* ---- Comparatif ---- */
function ComparatifSection() {
  return React.createElement('section', {
    style: { borderTop: '1px solid var(--line)', padding: '100px 0', background: 'var(--bg-deep)' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'eyebrow gold reveal' }, '◍ /03 — Comparatif'),
      React.createElement(Heading, { className: 'display', tag: 'h2' },
        'AutoCart vs',
        React.createElement('br', null),
        React.createElement('span', { style: { color: 'var(--gold)', fontStyle: 'italic' } }, 'les alternatives.')
      ),
      React.createElement('div', { className: 'reveal', style: { marginTop: 64, overflowX: 'auto' } },
        React.createElement('table', { style: { width: '100%', borderCollapse: 'collapse', fontSize: 15 } },
          React.createElement('thead', null,
            React.createElement('tr', { style: { borderBottom: '1px solid var(--line)' } },
              ['Technique', 'Tissu régénéré', 'Temps opératoires', 'Résultats long terme', 'Contraintes principales'].map(function(h) {
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

/* ---- Éligibilité ---- */
function EligibiliteSection() {
  return React.createElement('section', {
    style: { borderTop: '1px solid var(--line)', padding: '100px 0', background: 'var(--bg)' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'eyebrow gold reveal' }, '◍ /04 — Éligibilité'),
      React.createElement(Heading, { className: 'display', tag: 'h2' },
        'Suis-je',
        React.createElement('br', null),
        React.createElement('span', { style: { color: 'var(--gold)', fontStyle: 'italic' } }, 'éligible ?')
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

/* ---- Déroulement ---- */
function SuitesSection() {
  return React.createElement('section', {
    style: { borderTop: '1px solid var(--line)', padding: '100px 0', background: 'var(--bg-deep)' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'eyebrow gold reveal' }, '◍ /05 — Déroulement'),
      React.createElement(Heading, { className: 'display', tag: 'h2' },
        'De l\'opération',
        React.createElement('br', null),
        React.createElement('span', { style: { color: 'var(--gold)', fontStyle: 'italic' } }, 'à la reprise.')
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

/* ---- Expérience ---- */
function ExperienceSection() {
  return React.createElement('section', {
    style: { borderTop: '1px solid var(--line)', padding: '100px 0', background: 'var(--bg)' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'eyebrow gold reveal' }, '◍ /06 — Expérience'),
      React.createElement(Heading, { className: 'display', tag: 'h2' },
        'Plus de 50',
        React.createElement('br', null),
        React.createElement('span', { style: { color: 'var(--gold)', fontStyle: 'italic' } }, 'greffes réalisées.')
      ),
      React.createElement('div', {
        className: 'reveal autocart-exp-grid',
        style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, marginTop: 64 }
      },
        React.createElement('div', { style: { padding: '48px', background: 'var(--bg-deep)', display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center' } },
          React.createElement('p', { style: { fontSize: 16, lineHeight: 1.75, color: 'var(--ink)', margin: 0 } },
            'La technique AutoCart est réalisée au Pôle Santé Thau à Sète. Les images arthroscopiques per-opératoires documentent systématiquement l\'état initial de la lésion, la qualité du prélèvement et la mise en place du greffon.'
          ),
          React.createElement('p', { style: { fontSize: 16, lineHeight: 1.75, color: 'var(--ink)', margin: 0 } },
            'Le suivi post-opératoire est organisé à J30, J90, 6 mois et 1 an avec IRM de contrôle à 12 mois pour évaluer la qualité de l\'intégration cartilagineuse et valider la reprise sportive.'
          )
        ),
        React.createElement('div', {
          style: { background: 'var(--bg-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 260, borderLeft: '1px solid var(--line)', padding: 40 }
        },
          React.createElement('div', { style: { textAlign: 'center' } },
            React.createElement('div', { style: { fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-2)', marginBottom: 16 } }, 'Greffes AutoCart · Pôle Santé Thau'),
            React.createElement('div', { style: { fontFamily: 'var(--serif)', fontSize: 80, fontWeight: 700, color: 'var(--gold)', lineHeight: 1 } }, '+50'),
            React.createElement('div', { style: { fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-2)', marginTop: 16 } }, 'Sète · Hérault')
          )
        )
      ),
      React.createElement('style', null, '@media(max-width:900px){.autocart-exp-grid{grid-template-columns:1fr!important}}')
    )
  );
}

/* ---- Remboursement ---- */
function RemboursementSection() {
  var cols = [
    { label: 'Sécurité sociale', text: 'L\'acte bénéficie d\'une prise en charge partielle par l\'Assurance Maladie. Les modalités dépendent du codage de l\'acte et du contexte clinique.' },
    { label: 'Mutuelle', text: 'Le complément est couvert selon le contrat de mutuelle souscrit. Un devis détaillé est fourni lors de la consultation pré-opératoire.' },
    { label: 'Devis', text: 'Un devis complet est remis en consultation, détaillant les honoraires chirurgicaux, les frais d\'anesthésie et les frais de clinique.' }
  ];
  return React.createElement('section', {
    style: { borderTop: '1px solid var(--line)', padding: '80px 0', background: 'var(--bg-deep)' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'eyebrow gold reveal' }, '◍ /07 — Prise en charge'),
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
        'Évaluer votre',
        React.createElement('br', null),
        React.createElement('span', { style: { color: 'var(--gold)', fontStyle: 'italic' } }, 'éligibilité.')
      ),
      React.createElement('p', {
        className: 'reveal',
        style: { maxWidth: 520, margin: '32px auto 0', fontSize: 17, lineHeight: 1.65, color: 'var(--ink-2)', fontFamily: 'var(--serif)', fontStyle: 'italic' }
      }, 'L\'éligibilité à la technique AutoCart est évaluée en consultation sur la base de l\'IRM et du bilan clinique. Une consultation ne présuppose pas une indication chirurgicale.'),
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
      }, 'Prendre rendez-vous — Doctolib')
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
      React.createElement(Marquee, { items: ['AutoCart', 'Cartilage hyalin', '1 temps opératoire', 'Lésion focale', 'Arthroscopie', 'Genou', 'Dr Lozach', 'Sète', 'Pôle Santé Thau'] }),
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
