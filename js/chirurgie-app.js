
/* ============================================================
   Données des interventions
   ============================================================ */
const SECTIONS = [{
  id: 'hanche',
  kind: 'hip',
  name: 'Hanche',
  tagline: 'La grande articulation porteuse.',
  items: [{
    name: 'Prothèse totale de hanche (PTH)',
    tag: 'Hanche',
    principe: "Remplacement de l'articulation coxo-fémorale usée (arthrose, ostéonécrose, fracture) par des implants. Cotyle non cimenté pressfit, tige fémorale cimentée ou non selon la qualité osseuse, tête en céramique ou métal-polyéthylène. Objectif : supprimer la douleur et restaurer la mobilité de façon durable.",
    deroulement: "Anesthésie générale ou rachianesthésie. Durée opératoire 1h à 1h30. Hospitalisation : ambulatoire ou 1 nuit. Intervention possible en ambulatoire sélectionné. Voie d'abord antérieure ou postérieure selon morphologie et habitudes du chirurgien.",
    suites: "Appui complet autorisé dès le lendemain de l'intervention. Reprise de la conduite automobile à 4 semaines. Retour aux activités quotidiennes à 4-8 semaines. Activité sportive légère (marche, natation, vélo) à 3 mois. Contrôle radiologique à 4 semaines, 1 an puis tous les 5 ans."
  }, {
    name: 'Reprise de prothèse de hanche',
    tag: 'Hanche',
    principe: "Réintervention sur une PTH existante pour descellement aseptique, usure des implants, luxation récidivante, infection ou fracture péri-prothétique. Nécessite un bilan pré-opératoire complet (biologie, scintigraphie, scanner) pour identifier la cause et planifier le changement d'implants.",
    deroulement: "Intervention plus longue qu'une PTH primaire (2h à 3h selon complexité). Anesthésie générale. Hospitalisation 2 à 5 jours. Nécessite parfois une reconstruction osseuse (greffes, implants de révision).",
    suites: "Appui différé possible selon reconstruction osseuse. Rééducation plus longue qu'une PTH primaire (3 à 6 mois). Précautions anti-luxation renforcées. Résultats fonctionnels très satisfaisants dans les reprises non infectées."
  }, {
    name: 'Forage de décompression de la tête fémorale',
    tag: 'Hanche',
    principe: "Traitement chirurgical de l'ostéonécrose de la tête fémorale aux stades précoces (ARCO I-II). Consiste à forer un tunnel dans le col fémoral jusqu'à la zone nécrotique pour réduire la pression intra-osseuse et stimuler la revascularisation. Peut être associé à une injection de cellules souches ou à une greffe osseuse.",
    deroulement: "Intervention courte (30 à 45 minutes). Anesthésie générale ou rachianesthésie. Ambulatoire ou hospitalisation 1 nuit. Réalisée sous contrôle radiologique per-opératoire (amplificateur de brillance).",
    suites: "Décharge partielle aux cannes pendant 6 semaines. Reprise de l'appui progressif. Activité normale à 3 mois. Surveillance IRM à 3 et 6 mois pour évaluer la revascularisation."
  }, {
    name: 'Ostéoplastie arthroscopique (CFA)',
    tag: 'Hanche',
    principe: "Traitement arthroscopique du conflit fémoro-acétabulaire (Cam et/ou Pincer). Résection de l'excès osseux à la jonction tête-col (ostéoplastie du Cam) et/ou du bord acétabulaire (acétabuloplastie), associée à la réparation ou réinsertion du labrum par ancres. Permet de corriger la cause mécanique et de préserver le cartilage.",
    deroulement: "Arthroscopie de hanche sous anesthésie générale. Durée 1h30 à 2h. Hospitalisation 1 à 2 jours. Table de traction orthopédique per-opératoire. 2 à 3 portails arthroscopiques.",
    suites: "Appui partiel aux cannes 2 à 4 semaines selon geste labral. Kinésithérapie dès J15. Reprise sportive progressive à 4-6 mois. Résultats excellents chez le sportif sur cartilage préservé."
  }, {
    name: 'Neurolyse (sciatique)',
    tag: 'Hanche',
    principe: "Libération chirurgicale du nerf sciatique comprimé par le muscle piriforme ou d'autres structures anatomiques de la région fessière (syndrome du piriforme, compressions dynamiques). Section du muscle piriforme et libération des adhérences péri-neurales sous contrôle endoscopique.",
    deroulement: "Endoscopie ou mini open de hanche postérieure sous anesthésie générale, en décubitus ventral ou latéral. Durée 1h. Hospitalisation en ambulatoire.",
    suites: "Appui immédiat autorisé. Kinésithérapie de mobilisation précoce. Disparition progressive des douleurs neurologiques sur 4 à 12 semaines. Reprise sportive à 2-3 mois."
  }]
}, {
  id: 'genou',
  kind: 'knee',
  name: 'Genou',
  accroche: "L'articulation la plus sollicitée.",
  items: [{
    name: 'Prothèse totale de genou (PTG)',
    tag: 'Genou',
    principe: "Remplacement des surfaces articulaires fémorotibiales et rotulienne usées par des implants métalliques et un plateau en polyéthylène. Indiquée dans la gonarthrose évoluée uni ou tricompartimentale. Correction de l'axe des membres intégrée dans le geste chirurgical.",
    deroulement: "Anesthésie générale ou rachianesthésie. Durée 1h30. Hospitalisation 4 à 5 jours. Les prothèses sont posées avec l'assistance du robot ROSA, permettant un positionnement des implants de haute précision, une planification personnalisée et une reproductibilité optimale du geste chirurgical.",
    suites: "Appui immédiat avec déambulateur dès J1. Kinésithérapie intensive en hospitalisation puis en ville. Flexion > 90° attendue à 6 semaines. Reprise conduite à 8 semaines. Activité normale à 3-4 mois. Contrôle radio à 1 an puis tous les 5 ans."
  }, {
    name: 'Prothèse unicompartimentale du genou (PUC)',
    tag: 'Genou',
    principe: "Remplacement sélectif du seul compartiment articulaire atteint (interne ou externe), en préservant les ligaments croisés et les autres compartiments sains. Indiquée dans les gonarthroses unicompartimentales isolées chez patient actif avec ligaments intacts. Geste moins invasif que la PTG.",
    deroulement: "Anesthésie générale ou rachianesthésie. Durée 1h. Hospitalisation 2 à 3 jours. Possible en ambulatoire sélectionné. Les prothèses sont posées avec l'assistance du robot ROSA, permettant un positionnement des implants de haute précision, une planification personnalisée et une reproductibilité optimale du geste chirurgical.",
    suites: "Appui immédiat. Récupération fonctionnelle plus rapide qu'une PTG. Reprise conduite à 4-6 semaines. Activité sportive légère à 2-3 mois. Sensation articulaire plus naturelle que la PTG."
  }, {
    name: 'Ostéotomie tibiale de valgisation (OTV)',
    tag: 'Genou',
    principe: "Correction chirurgicale de l'axe du membre inférieur pour soulager le compartiment interne arthrosique. Consiste à ouvrir le tibia proximal en médial et à corriger vers 3-5° de valgus résiduel par une plaque verrouillée (TomoFix). Préserve l'articulation native. Indiquée chez le patient jeune et actif avec gonarthrose interne isolée.",
    deroulement: "Anesthésie générale. Durée 1h15. Hospitalisation 3 à 4 jours. Planification préopératoire sur téléradiographie en charge indispensable. Ostéotomie sous contrôle radiologique per-opératoire.",
    suites: "Appui partiel aux cannes 6 semaines. Appui complet à 6-8 semaines selon consolidation. Reprise sportive légère à 4-6 mois. Consolidation complète à 3 mois. Ablation de matériel possible à 18-24 mois."
  }, {
    name: 'Reconstruction du ligament croisé antérieur (LCA)',
    tag: 'Genou',
    principe: "Reconstruction du LCA rompu par greffe autologue pour restaurer la stabilité antérieure et rotatoire du genou. Trois options de greffes selon morphologie et activité : tendon rotulien (Kenneth Jones, os-tendon-os), ischio-jambiers (DIDT), ou tendon quadricipital. Plastie extra-articulaire de Lemaire associée si instabilité rotatoire importante.",
    deroulement: "Arthroscopie sous anesthésie générale. Durée 1h15 à 1h30. Hospitalisation 1 à 2 jours ou ambulatoire. Tunnels osseux tibiaux et fémoraux pour fixation de la greffe par vis d'interférence ou agrafes.",
    suites: "Appui immédiat avec attelle. Kinésithérapie intensive dès J5. Vélo d'appartement à 6 semaines. Course à pied à 4-5 mois. Retour au sport pivot-contact à 9 mois selon critères objectifs (isocinétisme, tests fonctionnels)."
  }, {
    name: 'Reconstruction du ligament croisé postérieur (LCP)',
    tag: 'Genou',
    principe: "Reconstruction du LCP rompu par greffe autologue ou allogreffe pour restaurer la stabilité postérieure du genou. Indiquée dans les ruptures grade III ou les lésions combinées (angle postéro-latéral). Technique trans-tibiale ou tibiale inlay selon localisation de la rupture.",
    deroulement: "Arthroscopie ± voie ouverte complémentaire selon technique. Anesthésie générale. Durée 1h30 à 2h. Hospitalisation 2 à 3 jours. Reconstruction simultanée des lésions postéro-latérales si nécessaire.",
    suites: "Attelle en extension 4 à 6 semaines. Appui partiel initial. Kinésithérapie de renforcement quadricipital prioritaire. Retour au sport à 9-12 mois. Rééducation plus longue que le LCA."
  }, {
    name: 'Méniscectomie partielle arthroscopique',
    tag: 'Genou',
    principe: "Résection arthroscopique économique de la zone méniscale instable et non réparable (zone avasculaire). Geste de décharge mécanique pour supprimer le conflit douloureux. Préserve le maximum de tissu méniscal fonctionnel. Indiquée dans les lésions dégénératives ou les zones blanches non suturables.",
    deroulement: "Arthroscopie sous anesthésie générale ou locorégionale. Durée 30 à 45 minutes. Ambulatoire dans la quasi-totalité des cas. 2 portails arthroscopiques.",
    suites: "Appui immédiat autorisé. Reprise de la marche normale en 5 à 10 jours. Reprise sportive à 4-6 semaines. Glaçage et AINS les premiers jours."
  }, {
    name: 'Suture méniscale arthroscopique',
    tag: 'Genou',
    principe: "Réparation arthroscopique d'une lésion méniscale traumatique en zone vasculaire (zone rouge). Gold standard pour préserver le ménisque chez le patient jeune. Techniques all-inside (FasT-Fix), inside-out ou outside-in selon localisation. Souvent associée à une reconstruction du LCA pour optimiser la cicatrisation.",
    deroulement: "Arthroscopie sous anesthésie générale. Durée 1h à 1h30 selon complexité. Hospitalisation 1 nuit ou ambulatoire. Points de suture résorbables ou implants de suture par portails arthroscopiques.",
    suites: "Décharge partielle aux cannes 4 à 6 semaines. Pas de flexion > 90° pendant 6 semaines. Kinésithérapie progressive. Reprise sportive à 4-6 mois. Taux de cicatrisation 80-90 % en zone rouge."
  }, {
    name: 'Greffe cartilagineuse autologue — méthode AutoCart',
    tag: 'Genou',
    principe: "Reconstruction biologique d'un défect cartilagineux focal (ICRS III-IV) par greffe cartilagineuse mince autologue — technique AutoCart. Consiste à prélever de fines lamelles de cartilage hyalin en zone non portante du genou, puis à les transplanter et fixer sur la zone lésée en un seul temps opératoire. Contrairement aux techniques en deux temps (MACI), AutoCart ne nécessite pas de culture cellulaire ni de biomatériau : le cartilage natif du patient est directement réutilisé, préservant ainsi la structure tissulaire originelle et la viabilité des chondrocytes. Indiquée pour les défects entre 1 et 8 cm², sur genou stable et bien axé.",
    deroulement: "Intervention en un seul temps opératoire — avantage majeur par rapport aux techniques classiques en deux temps. Arthroscopie ou mini-arthrotomie sous anesthésie générale. Durée 1 heure. Réalisée en ambulatoire. Prélèvement de lamelles cartilagineuses en zone non portante (échancrure intercondylienne, bord trochléen) puis mise en place et fixation sur le défect sous contrôle arthroscopique.",
    suites: "Décharge partielle aux cannes 6 semaines. Kinésithérapie douce en décharge immédiate pour entretenir la trophicité cartilagineuse. Appui progressif à partir de 6-8 semaines. Reprise sportive légère à 6-9 mois. Reprise sport pivot-contact à 12-18 mois. IRM de contrôle à 1 an pour évaluer l'intégration et la qualité du cartilage régénéré."
  }, {
    name: "Chirurgie de l'instabilité rotulienne",
    tag: 'Genou',
    principe: "Correction chirurgicale des luxations récidivantes de rotule par reconstruction du ligament fémoro-patellaire médial (LFPM) et/ou réaxation de la tubérosité tibiale antérieure (TTA). Choix du geste basé sur le bilan anatomique : TTA-TG, hauteur rotulienne, dysplasie trochléaire (Dejour). Trochléoplastie dans les dysplasies sévères.",
    deroulement: "Anesthésie générale. Durée 1h à 2h selon gestes associés. Hospitalisation 1 à 2 jours. Reconstruction du LFPM par greffe au droit interne ou quadricipital — Ostéotomie de la TTA par mini-voie si médialisation nécessaire.",
    suites: "Attelle en extension 4 à 6 semaines. Appui immédiat autorisé avec attelle. Kinésithérapie de renforcement du vaste interne. Reprise sportive à 4-6 mois. Récidive < 5 % avec chirurgie anatomique bien planifiée."
  }]
}, {
  id: 'cheville',
  kind: 'ankle',
  name: 'Cheville',
  accroche: "La stabilité à chaque pas.",
  items: [{
    name: 'Ligamentoplastie de cheville ',
    tag: 'Cheville',
    principe: "Reconstruction anatomique du ligament talo-fibulaire antérieur (LTFA) et du ligament calcanéo-fibulaire (LCF) pour traiter l'instabilité chronique de cheville après entorses à répétition. Technique de Broström-Gould : résection et renforcement des ligaments avec retensionnement du rétinaculum des extenseurs. Gold standard mondial, possible par arthroscopie pure. Restaure la stabilité mécanique tout en préservant la cinématique native de la cheville.",
    deroulement: "Anesthésie générale ou locorégionale. Durée 45 minutes à 1 heure. Réalisée en ambulatoire. Voie arthroscopique ou mini-ouverte selon anatomie. Traitement des lésions ostéochondrales du talus associées dans le même temps si nécessaire.",
    suites: "Botte de marche 4 à 6 semaines. Appui immédiat autorisé dans la botte. Kinésithérapie proprioceptive intensive à partir de 6 semaines. Reprise sportive légère à 3 mois. Retour au sport complet à 4-6 mois. Taux de succès > 90 % à long terme."
  }, {
    name: 'Arthroscopie de cheville',
    tag: 'Cheville',
    principe: "Exploration et traitement chirurgical de la cheville par voie arthroscopique (2 à 3 portails). Indications principales : conflits antérieurs ou postérieurs (ostéophytes tibiaux et taliens, os trigone), synovite chronique, corps étrangers intra-articulaires, lésions ostéochondrales du talus, nettoyage articulaire. Arthroscopie antérieure pour les conflits en flexion dorsale, endoscopie postérieure en décubitus ventral pour les conflits postérieurs et la libération du tendon fléchisseur de l'hallux (FHL).",
    deroulement: "Anesthésie générale ou locorégionale. Durée 45 minutes à 1 heure. Réalisée en ambulatoire. Garrot pneumatique per-opératoire. 2 à 3 portails selon abord antérieur ou postérieur.",
    suites: "Appui immédiat autorisé dès le lendemain. Chaussure de confort ou botte légère 2 à 3 semaines. Kinésithérapie de mobilisation précoce. Reprise sportive à 6-8 semaines pour les conflits simples. Résultats excellents chez le sportif, particulièrement sur les conflits ostéophytiques."
  }, {
    name: 'Greffe cartilagineuse de la cheville',
    tag: 'Cheville',
    principe: "Traitement chirurgical des lésions ostéochondrales du talus  par greffe cartilagineuse autologue. Les lésions ostéochondrales du talus sont fréquemment associées aux entorses graves et à l'instabilité chronique. Technique de greffe cartilagineuse mince autologue (AutoCart) en un seul temps : prélèvement de lamelles de cartilage hyalin en zone non portante du genou ipsilatéral, transfert et fixation sur le défect talien sous contrôle arthroscopique. Indiquée pour les défects ICRS III-IV entre 1 et 4 cm² sur cheville stable ou stabilisée simultanément.",
    deroulement: "Intervention en un seul temps opératoire. Arthroscopie de cheville sous anesthésie générale. Durée 1 heure. Réalisée en ambulatoire. Prélèvement des lamelles cartilagineuses au genou puis transfert arthroscopique sur le défect talien. Stabilisation de la cheville réalisée dans le même temps si instabilité associée.",
    suites: "Décharge stricte aux cannes 6 semaines. Botte de protection. Kinésithérapie douce en décharge pour maintenir la mobilité articulaire. Appui progressif à 6-8 semaines. Reprise sportive légère à 6-9 mois. Reprise sport complet à 12-18 mois. IRM de contrôle à 1 an."
  }, {
    name: "Chirurgie du tendon d'Achille",
    tag: 'Cheville',
    principe: "Prise en charge chirurgicale des pathologies du tendon d'Achille résistant au traitement conservateur (protocole d'Alfredson, ondes de choc). Plusieurs gestes selon la pathologie : ténoscope (nettoyage endoscopique de la gaine et des néo-vaisseaux) pour les tendinopathies corporéales — ténotomie ouverte avec scarifications (peignage tendineux) pour les formes dégénératives — transfert du fléchisseur propre de l'hallux (FHL transfer) pour les tendinopathies insertionnelles sévères avec résection de l'enthèse calcifiée — suture directe mini-invasive pour les ruptures tendineuses aiguës.",
    deroulement: "Anesthésie générale ou locorégionale. Durée 45 minutes à 1 heure selon geste. Réalisée en ambulatoire. Décubitus ventral. Voie endoscopique (ténoscope) ou mini-ouverte selon indication. Garrot pneumatique per-opératoire.",
    suites: "Botte en équin 4 à 6 semaines pour les sutures et transferts tendineux. Appui immédiat dans la botte autorisé. Kinésithérapie de mobilisation progressive à 6 semaines. Renforcement excentrique du triceps sural à partir de 2 mois. Reprise course à pied à 4-5 mois. Reprise sport complet à 6 mois."
  }]
}, {
  id: 'pied',
  kind: 'foot',
  name: 'Pied',
  accroche: "Là où tout commence — et porte.",
  items: [{
    name: "Chirurgie de l'hallux valgus",
    tag: 'Pied',
    principe: "Correction chirurgicale de la déformation du gros orteil par ostéotomie du 1er métatarse. Technique de référence : ostéotomie de Scarf associée à une ostéotomie d'Akin pour les formes modérées à sévères. Ostéotomie basale du M1 pour les formes sévères à angle M1-M2 élevé. Arthrodèse métatarso-phalangienne M1 dans les formes rhumatologiques ou arthrosiques. Objectif : corriger la déformation, supprimer la douleur et permettre un chaussage normal.",
    deroulement: "Anesthésie locorégionale (bloc cheville) ou générale. Durée 45 minutes à 1 heure. Réalisée en ambulatoire. Mini-voie médiale. Ostéosynthèse par vis ou agrafes. Correction simultanée des orteils latéraux si nécessaire.",
    suites: "Appui immédiat autorisé dès la sortie de la salle d'opération dans une chaussure de Barouk. Chaussure de Barouk 6 semaines. Reprise chaussage normal à 6-8 semaines. Gonflement résiduel possible jusqu'à 3-6 mois. Reprise sportive à 3-4 mois."
  }, {
    name: 'Chirurgie des orteils ',
    tag: 'Pied',
    principe: "Correction chirurgicale des déformations en griffes ou en marteau des orteils latéraux. Formes réductibles : ténotomie du fléchisseur et capsulotomie de l'IPP par voie percutanée. Formes rigides : résection-arthroplastie de l'IPP (technique de Du Vries) ou arthrodèse de l'IPP par broche ou implant. Ostéotomie de Weil du métatarse correspondant si métatarsalgie de transfert associée. Souvent réalisée en même temps que la chirurgie de l'hallux valgus.",
    deroulement: "Anesthésie locorégionale (bloc cheville) ou générale. Durée 20 à 45 minutes selon nombre d'orteils. Réalisée en ambulatoire. Voie dorsale ou percutanée selon technique. Brochage temporaire de l'orteil 4 à 6 semaines si arthrodèse.",
    suites: "Appui immédiat autorisé dès la sortie de la salle d'opération dans chaussure de Barouk. Ablation de broche en consultation à 4-6 semaines. Pansements hebdomadaires. Reprise chaussage normal à 6-8 semaines. Gonflement résiduel 2 à 3 mois."
  }, {
    name: 'Chirurgie du névrome de Morton',
    tag: 'Pied',
    principe: "Résection chirurgicale du névrome (hypertrophie fibreuse du nerf digital commun plantaire) dans l'espace inter-métatarsal concerné, le plus souvent le 3ème espace (M3-M4). Voie dorsale inter-métatarsale de référence : résection du névrome et de la commissure supramétatarsale associée. Voie plantaire réservée aux reprises chirurgicales. Indiquée après échec du traitement conservateur (semelles, infiltrations, alcoolisation).",
    deroulement: "Anesthésie locorégionale (bloc cheville) ou générale. Durée 30 minutes. Réalisée en ambulatoire. Voie dorsale entre les métatarses, cicatrice discrète. Exérèse complète du névrome et de la bandelette commissurale.",
    suites: "Appui immédiat autorisé dès la sortie de la salle d'opération dans chaussure large ou de Barouk. Pansements 2 semaines. Reprise chaussage normal à 3-4 semaines. Disparition des douleurs neurologiques progressive sur 4 à 8 semaines. Efficacité > 80 % à long terme."
  }, {
    name: 'Arthrodèse du médiopied (Lisfranc)',
    tag: 'Pied',
    principe: "Fusion chirurgicale des articulations de Lisfranc (tarso-métatarsiennes) atteintes par l'arthrose, qu'elle soit primitive ou post-traumatique (séquelles de fracture-dislocation de Lisfranc). Résection des cartilages articulaires dégénérés et fixation des rayons concernés par vis ou plaques dédiées jusqu'à consolidation osseuse complète. Supprime définitivement la douleur liée aux mouvements inter-métatarsiens pathologiques.",
    deroulement: "Anesthésie générale ou locorégionale. Durée 1h à 1h30 selon nombre de rayons fusionnés. Hospitalisation 1 nuit ou ambulatoire sélectionné. Voie dorsale. Ostéosynthèse par vis compressives ou plaque dédiée selon rayons atteints.",
    suites: "Décharge stricte aux cannes 6 semaines. Botte plâtrée ou résine. Appui progressif à 6-8 semaines selon consolidation radiologique. Chaussage normal à 3-4 mois. Consolidation complète à 3 mois. Reprise activité sportive légère à 6 mois."
  }, {
    name: 'Chirurgie de la métatarsalgie',
    tag: 'Pied',
    principe: "Ostéotomie d'abaissement et de recul de la tête métatarsale (technique de Weil) pour soulager les métatarsalgies mécaniques par surcharge des rayons centraux (M2-M3-M4). Consiste à réaliser une ostéotomie oblique de la tête métatarsale permettant sa translation proximale et son abaissement, réduisant ainsi les pressions plantaires sous la tête concernée. Souvent associée à la correction des griffes d'orteils correspondantes.",
    deroulement: "Anesthésie locorégionale (bloc cheville) ou générale. Durée 30 à 45 minutes. Réalisée en ambulatoire. Voie dorsale. Peut concerner 1 à 3 rayons selon bilan baropodométrique.",
    suites: "Appui immédiat autorisé dès la sortie de la salle d'opération dans chaussure de Barouk dès J1. Pansements hebdomadaires 3 semaines. Reprise chaussage normal à 6-8 semaines. Kinésithérapie de mobilisation des orteils dès J15. Reprise sportive à 2-3 mois."
  }]
}, {
  id: 'traumatologie',
  kind: 'trauma',
  name: 'Traumatologie',
  accroche: "L'urgence, sans attendre.",
  items: [{
    name: 'Ostéosynthèse des fractures du membre inférieur',
    tag: 'Traumatologie',
    principe: "Stabilisation chirurgicale des fractures du membre inférieur par implants métalliques (vis, plaques, clous centro-médullaires) pour permettre la consolidation osseuse et la reprise d'appui précoce. Choix de l'implant selon le type de fracture, le segment osseux, la qualité osseuse et l'état cutané. Fractures du col fémoral : vissage percutané ou prothèse selon âge et déplacement — Fractures trochantériennes : enclouage centro-médullaire (clou gamma, PFNA) — Fractures diaphysaires fémur et tibia : enclouage verrouillé — Fractures plateau tibial : plaque vissée selon Schatzker — Fractures malléolaires : vissage ou embrochage selon classification de Weber.",
    deroulement: "Anesthésie générale ou rachianesthésie selon localisation. Durée 1h à 2h selon complexité. Hospitalisation ambulatoire  à 7 jours selon fracture et terrain. Contrôle radiologique per-opératoire systématique (amplificateur de brillance). Scanner 3D préopératoire indispensable pour les fractures articulaires complexes.",
    suites: "Appui selon type de fracture et implant : immédiat pour les fractures trochantériennes et diaphysaires stables — différé 6 semaines pour les fractures articulaires complexes. Kinésithérapie précoce. Prévention thrombo-embolique systématique. Consolidation radiologique contrôlée à 6 semaines, 3 mois et 6 mois. Ablation de matériel possible à 18-24 mois selon implant."
  }, {
    name: 'Réparation ligamentaire aiguë du genou',
    tag: 'Traumatologie',
    principe: "Traitement chirurgical des lésions ligamentaires aiguës du genou (LCA, LCP, LLI grade III, LLE, angle postéro-latéral) dans les formes instables ou combinées. La luxation du genou constitue une urgence vasculaire et chirurgicale absolue. Les lésions périphériques (LLE, angle postéro-latéral) bénéficient d'une réparation-réinsertion précoce à J10-J15 pour optimiser la cicatrisation. La reconstruction du LCA est différée à distance de la phase inflammatoire aiguë.",
    deroulement: "Anesthésie générale. Durée 1h30 à 2h selon lésions associées. Hospitalisation 2 à 3 jours. Bilan vasculaire préopératoire systématique en cas de luxation (AngioTDM). Arthroscopie diagnostique associée pour bilan des lésions méniscales et cartilagineuses.",
    suites: "Attelle en extension 4 à 6 semaines selon geste. Appui partiel initial aux cannes. Kinésithérapie de mobilisation précoce dès J5. Renforcement musculaire progressif. Reconstruction du LCA différée à 3-6 mois si nécessaire. Reprise sportive à 9-12 mois."
  }, {
    name: "Réparation du tendon d'Achille (rupture aiguë)",
    tag: 'Traumatologie',
    principe: "Suture chirurgicale directe du tendon d'Achille rompu en urgence différée (idéalement dans les 8 à 15 jours suivant la rupture). Technique mini-invasive ou percutanée de référence : suture par points trans-osseux ou ancres calcanéennes, permettant une résistance mécanique immédiate et une reprise d'appui précoce. Taux de rerupture < 2 % vs 10 % en traitement orthopédique seul. Indiquée chez tout patient actif sans contre-indication chirurgicale.",
    deroulement: "Anesthésie générale ou locorégionale. Durée 45 minutes. Réalisée en ambulatoire. Décubitus ventral. Mini-voie postérieure ou technique percutanée. Contrôle de la tension tendineuse per-opératoire.",
    suites: "Botte en équin immédiate dès la sortie du bloc. Appui autorisé dans la botte dès J1. Sevrage progressif de l'équin sur 6 semaines. Kinésithérapie de mobilisation à 6 semaines. Course à pied à 4-5 mois. Reprise sport complet à 6-9 mois selon niveau et activité."
  }, {
    name: 'Réparation du tendon rotulien et quadricipital',
    tag: 'Traumatologie',
    principe: "Suture chirurgicale en urgence des ruptures tendineuses de l'appareil extenseur du genou. Rupture du tendon rotulien (sportif jeune < 40 ans, souvent sur tendinopathie préexistante) : suture directe renforcée par cerclage trans-osseux ou ancres sur la rotule. Rupture du tendon quadricipital (patient > 50 ans, terrain fragilisant : IRC, corticothérapie, obésité) : suture directe trans-osseuse ou sur ancres, renforcée par bandelettes de Dacron si tissu fragile. Urgence fonctionnelle — délai < 15 jours pour éviter la rétraction.",
    deroulement: "Anesthésie générale ou rachianesthésie. Durée 1h à 1h30. Hospitalisation 1 à 2 jours. Contrôle de l'extension active per-opératoire systématique avant fermeture.",
    suites: "Attelle en extension 4 à 6 semaines. Appui immédiat autorisé avec attelle. Kinésithérapie de mobilisation progressive à 6 semaines. Renforcement quadricipital à 2 mois. Reprise course à pied à 4-6 mois. Reprise sport complet à 6-9 mois."
  }, {
    name: 'Réduction et stabilisation des luxations',
    tag: 'Traumatologie',
    principe: "Prise en charge chirurgicale ou orthopédique des luxations traumatiques et prothétiques du membre inférieur. Luxation traumatique de hanche : réduction en urgence absolue sous anesthésie générale (< 6 heures pour prévenir l'ostéonécrose) — scanner post-réduction systématique. Luxation du genou : urgence vasculaire — AngioTDM systématique — réduction immédiate. Luxation sur PTH récidivante : révision chirurgicale des implants (orientation cotyle/tige, changement pour tête grand diamètre 36-40 mm ou double mobilité, reconstruction capsulaire). Luxation sur PTG : révision avec implants contraints si instabilité persistante.",
    deroulement: "Réduction orthopédique en urgence sous anesthésie générale pour les luxations traumatiques. Chirurgie de révision pour les luxations prothétiques récidivantes : durée 2h à 3h, hospitalisation 3 à 5 jours selon reconstruction nécessaire.",
    suites: "Luxation traumatique de hanche : immobilisation 4 à 6 semaines, appui différé, surveillance IRM à 3 mois pour dépistage d'une ostéonécrose secondaire. Luxation sur PTH opérée : précautions anti-luxation renforcées 3 mois, appui immédiat autorisé. Kinésithérapie de stabilisation musculaire prioritaire."
  }]
}];

/* ============================================================
   Hero
   ============================================================ */
function InterventionsHero() {
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
      opacity: 0.42,
      mixBlendMode: 'screen',
      filter: 'hue-rotate(180deg) saturate(1.4) contrast(1.15) brightness(1.1)',
      pointerEvents: 'none',
      zIndex: 0,
      maskImage: 'radial-gradient(ellipse 75% 85% at 70% 55%, black 30%, rgba(0,0,0,0.6) 65%, transparent 95%)',
      WebkitMaskImage: 'radial-gradient(ellipse 75% 85% at 70% 55%, black 30%, rgba(0,0,0,0.6) 65%, transparent 95%)'
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: "assets/chirurgie-hero.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow reveal"
  }, "\u25CD Chirurgie \xB7 Membres inf\xE9rieurs"), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display"
  }, "Interventions")), /*#__PURE__*/React.createElement("div", {
    className: "line-mask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display soft-dynamic",
    style: {
      color: 'var(--gold)',
      fontStyle: 'italic',
      display: 'inline-block'
    }
  }, "chirurgicales.")), /*#__PURE__*/React.createElement("p", {
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
  }, "De la proth\xE8se \xE0 l'arthroscopie \u2014 chaque geste, expliqu\xE9.")));
}

/* ============================================================
   Section header (entre les groupes)
   ============================================================ */
function SectionHeader({
  section,
  index
}) {
  const deeper = index % 2 === 1;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: deeper ? 'var(--bg-deep)' : 'var(--bg)',
      borderTop: '1px solid var(--line)',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 100,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '-15%',
      top: '50%',
      transform: 'translateY(-50%)',
      opacity: 0.35,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(JointGlyph, {
    kind: section.kind,
    size: 620
  })), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow gold reveal"
  }, "\u25CD /", String(index + 1).padStart(2, '0'), " \u2014 ", section.name), /*#__PURE__*/React.createElement(Heading, {
    className: "display",
    tag: "h2"
  }, section.name, ".", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic",
    style: {
      color: 'var(--gold)'
    }
  }, section.tagline))));
}

/* ============================================================
   Accordion item
   ============================================================ */
function InterventionRow({
  item,
  isOpen,
  onToggle,
  deeper
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: deeper ? 'var(--bg-deep)' : 'var(--bg)',
      borderBottom: '1px solid var(--line)',
      transition: 'background 0.4s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggle,
    className: "hoverable",
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      color: 'var(--ink)',
      padding: '32px 0',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto auto',
      gap: 28,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--gold)',
      opacity: 0.6,
      fontSize: 12
    }
  }, isOpen ? '−' : '+'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 'clamp(24px, 3vw, 36px)',
      lineHeight: 1.15,
      fontWeight: 500,
      letterSpacing: '-0.01em'
    }
  }, item.name), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.14em',
      padding: '6px 12px',
      border: '1px solid rgba(0, 212, 255, 0.4)',
      background: 'rgba(0, 212, 255, 0.08)',
      color: 'var(--gold)',
      borderRadius: 999
    }
  }, item.tag.toUpperCase()), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--gold)',
      fontSize: 18,
      transition: 'transform 0.4s ease',
      transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
      display: 'inline-block',
      width: 14,
      textAlign: 'center'
    }
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: isOpen ? '1fr' : '0fr',
      transition: 'grid-template-rows 0.5s cubic-bezier(0.7, 0, 0.2, 1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "intervention-grid",
    style: {
      padding: isOpen ? '8px 0 56px' : '0',
      transition: 'padding 0.4s',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement(Column, {
    label: "01 / Principe",
    body: item.principe
  }), /*#__PURE__*/React.createElement(Column, {
    label: "02 / D\xE9roulement",
    body: item.deroulement,
    bordered: true
  }), /*#__PURE__*/React.createElement(Column, {
    label: "03 / Suites op\xE9ratoires",
    body: item.suites,
    bordered: true
  }))))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 900px) {
          .intervention-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .intervention-col-bordered { border-left: 0 !important; padding-left: 0 !important; padding-top: 24px; border-top: 1px solid var(--line); }
        }
      `));
}
function Column({
  label,
  body,
  bordered
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: bordered ? 'intervention-col-bordered' : '',
    style: {
      paddingLeft: bordered ? 36 : 0,
      paddingRight: 36,
      borderLeft: bordered ? '1px solid rgba(0, 212, 255, 0.25)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--gold)',
      fontSize: 11,
      letterSpacing: '0.16em',
      marginBottom: 16
    }
  }, "\u2014 ", label.toUpperCase()), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--ink)',
      margin: 0
    }
  }, body));
}

/* ============================================================
   App
   ============================================================ */
function App() {
  useReveal();
  const [openKey, setOpenKey] = useState(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Cursor, null), /*#__PURE__*/React.createElement(Nav, {
    active: "chirurgie"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(InterventionsHero, null), /*#__PURE__*/React.createElement(Marquee, {
    items: ['PTH', 'PTG', 'LCA', 'Arthroscopie', 'Ostéotomie', 'Cartilage', 'Tendon', 'Ligament', 'Prothèse']
  }), SECTIONS.map((sec, si) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: sec.id
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    section: sec,
    index: si
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: si % 2 === 1 ? 'var(--bg-deep)' : 'var(--bg)'
    }
  }, sec.items.map((it, ii) => {
    const key = `${sec.id}-${ii}`;
    return /*#__PURE__*/React.createElement(InterventionRow, {
      key: key,
      item: it,
      isOpen: openKey === key,
      onToggle: () => setOpenKey(openKey === key ? null : key),
      deeper: si % 2 === 1
    });
  }))))), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('app')).render(/*#__PURE__*/React.createElement(App, null));
