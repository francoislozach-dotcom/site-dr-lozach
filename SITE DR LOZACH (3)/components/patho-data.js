/* ============================================================
   Contenu détaillé des pathologies — Dr Lozach
   Format : { region: { pathologyName: { description, signs[], exams[], medical[], surgical[] } } }
   ============================================================ */

window.PATHO_DETAILS = {
  'Hanche': {
    'Coxarthrose': {
      whatIsIt: `La coxarthrose, c'est l'usure progressive du cartilage de la hanche. Le cartilage est cette fine couche lisse et glissante qui recouvre les extrémités des os à l'intérieur de l'articulation. Tant qu'il est intact, la tête du fémur tourne sans frottement dans son logement osseux du bassin (le cotyle).

Avec le temps — par usure naturelle, après une malformation de naissance ou un traumatisme — ce cartilage s'amincit, se fissure, puis disparaît par endroits. Les deux os finissent par frotter directement l'un contre l'autre. C'est ce contact os-sur-os qui déclenche douleur et raideur.`,
      symptoms: `La douleur typique est localisée dans le pli de l'aine, parfois sur le côté de la hanche, et descend volontiers le long de la cuisse jusqu'au genou. Elle est mécanique : présente quand on marche, monte les escaliers ou se relève d'une chaise, soulagée par le repos.

Au début, la gêne est intermittente. Puis la marche devient plus difficile, le périmètre se réduit, on boite. Mettre ses chaussettes ou couper ses ongles de pied devient compliqué : la hanche perd en souplesse, surtout en rotation. Les nuits peuvent être perturbées quand on se retourne.`,
      untreated: `Sans prise en charge, la coxarthrose évolue toujours dans le même sens : aggravation progressive sur plusieurs années. La douleur devient plus fréquente, le périmètre de marche se restreint, l'autonomie diminue. À terme, certains gestes du quotidien (se chausser, conduire, marcher 5 minutes) deviennent impossibles.

L'usure peut aussi entraîner un raccourcissement du membre, des contractures musculaires de compensation et des douleurs lombaires secondaires.`,
      treatment: `Tant que la gêne est modérée, on commence par des moyens simples : antalgiques, anti-inflammatoires lors des poussées, kinésithérapie pour entretenir la mobilité et renforcer les muscles autour de la hanche. Les infiltrations échoguidées peuvent soulager temporairement.

Quand la douleur devient quotidienne, qu'elle gêne le sommeil ou que le périmètre de marche se réduit malgré le traitement médical, la prothèse totale de hanche est la solution de référence. Elle remplace la zone usée par une articulation artificielle et permet un retour rapide à une vie active. Une consultation permet d'évaluer le bon moment pour intervenir.`,
      // Compat ancien format
      description: "La coxarthrose est l'arthrose de la hanche, définie par la dégradation progressive du cartilage articulaire.",
      signs: ["Douleur inguinale", "Boiterie", "Raideur progressive"],
      exams: ["Radiographies de hanche", "IRM si doute"],
      medical: ["Antalgiques, AINS", "Kinésithérapie", "Infiltrations"],
      surgical: ["Prothèse totale de hanche"],
    },
    'Conflit fémoro-acétabulaire (CFA)': {
      whatIsIt: `Le conflit fémoro-acétabulaire, ou CFA, est une anomalie de forme de la hanche qui crée un accrochage mécanique à chaque mouvement. Soit la tête du fémur présente une bosse à sa jonction avec le col (type Cam), soit le bord du logement osseux est trop couvrant (type Pincer), soit les deux sont associés.

À chaque flexion ou rotation, ces deux pièces osseuses entrent en conflit et viennent pincer les structures molles de l'articulation, en particulier le bourrelet fibro-cartilagineux qu'on appelle le labrum.`,
      symptoms: `La douleur est typiquement inguinale, dans le pli de l'aine, parfois décrite en forme de C par le patient qui pose la main autour de la hanche. Elle apparaît surtout en position assise prolongée, en montant en voiture, en croisant les jambes ou lors des mouvements en amplitude (sport, étirements).

La hanche perd progressivement de sa souplesse, en particulier la rotation interne. Chez le sportif, la performance diminue : douleur à l'accroupissement, à la course, aux changements de direction.`,
      untreated: `Le conflit répété finit par abîmer le labrum (qui peut se déchirer) puis le cartilage situé juste à côté. C'est l'une des causes principales d'arthrose de hanche chez l'adulte jeune et le sportif.

Sans correction de l'anomalie de forme, le mécanisme d'usure se poursuit : ce qui n'était qu'un conflit mécanique devient une coxarthrose précoce, parfois dès 35-45 ans.`,
      treatment: `On commence toujours par un traitement non chirurgical : adaptation de l'activité sportive, kinésithérapie ciblée pour renforcer les fessiers et les muscles profonds de la hanche, anti-inflammatoires lors des crises. Cela suffit dans une partie des cas.

Si la douleur persiste et qu'une lésion du labrum ou du cartilage est confirmée à l'imagerie, une chirurgie sous arthroscopie permet de corriger l'anomalie de forme et de réparer le labrum, par deux ou trois petites incisions. L'objectif est double : soulager la douleur et préserver la hanche pour l'avenir. Une consultation spécialisée permet de préciser l'indication.`,
      description: "Anomalie morphologique de la jonction tête-col fémorale ou du bord acétabulaire générant un impact mécanique répété.",
      signs: ["Douleur inguinale en C", "Limitation rotation interne"],
      exams: ["Radiographies, profil de Dunn", "Arthro-IRM"],
      medical: ["AINS", "Kinésithérapie", "Adaptation sportive"],
      surgical: ["Ostéoplastie arthroscopique", "Réparation du labrum"],
    },
    'Ostéonécrose de la tête fémorale': {
      whatIsIt: `L'ostéonécrose de la tête fémorale correspond à la mort d'une zone d'os dans la tête du fémur, par interruption de sa vascularisation. L'os, qui est un tissu vivant, a besoin d'un apport sanguin permanent. Quand cet apport est coupé, la zone concernée se fragilise, puis peut s'effondrer.

Plusieurs causes sont identifiées : prise prolongée de corticoïdes, consommation excessive d'alcool, traumatisme, drépanocytose, plongée sous-marine, ou parfois aucune cause retrouvée. Elle touche souvent l'adulte jeune, entre 30 et 50 ans.`,
      symptoms: `Le premier signe est généralement une douleur inguinale qui apparaît assez brutalement, parfois la nuit, sans facteur déclenchant clair. Au stade précoce, elle peut être intermittente et passer pour une simple tendinite.

Quand la zone nécrosée commence à s'effondrer, la douleur devient permanente, mécanique, et s'accompagne d'une boiterie et d'une raideur. La hanche perd en mobilité.`,
      untreated: `Sans prise en charge, l'os fragilisé finit par s'affaisser : la sphéricité parfaite de la tête fémorale est perdue, l'articulation devient incongruente. À ce stade, l'évolution vers l'arthrose est rapide et inéluctable, en quelques mois à quelques années.

Plus le diagnostic est posé tôt, plus on peut espérer préserver la hanche du patient. C'est pour cela que toute douleur inguinale brutale et inexpliquée chez un adulte jeune mérite une IRM.`,
      treatment: `Au stade précoce, avant tout effondrement, un forage de décompression permet de relancer la circulation osseuse et peut stopper l'évolution. C'est un geste mini-invasif réalisé par une petite incision.

Si la tête s'est déjà effondrée et que l'arthrose est installée, la prothèse totale de hanche est la solution. Le diagnostic précoce est la clé : une consultation rapide en cas de douleur de hanche inhabituelle est toujours pertinente.`,
      description: "Interruption de la vascularisation de la tête fémorale entraînant la mort des ostéocytes et l'effondrement progressif.",
      signs: ["Douleur inguinale brutale", "Limitation des amplitudes"],
      exams: ["IRM (référence)", "Radiographies"],
      medical: ["Décharge", "AINS"],
      surgical: ["Forage de décompression", "Prothèse totale de hanche"],
    },
    'Lésions du labrum': {
      whatIsIt: `Le labrum est un anneau de fibrocartilage qui ceinture le bord du logement osseux de la hanche. Il joue trois rôles : il étanchéifie l'articulation (comme un joint), il amortit les chocs, et il participe à la stabilité.

Une lésion du labrum est une déchirure ou un détachement de cet anneau. Elle survient le plus souvent dans le cadre d'un conflit fémoro-acétabulaire, mais aussi après un traumatisme sportif ou en cas de dysplasie de hanche.`,
      symptoms: `La douleur est inguinale, mécanique, parfois associée à des sensations d'accrochage, de claquement ou de blocage en certaines positions. Le patient décrit souvent un "déclic" à certains mouvements.

La gêne est typique en position assise prolongée, à la conduite, lors des activités sportives en pivot ou en flexion forcée. Une sensation d'instabilité peut accompagner la douleur.`,
      untreated: `Une déchirure du labrum non traitée altère le fonctionnement mécanique de la hanche. La perte du joint étanche favorise l'agression du cartilage adjacent, et le labrum lésé peut s'effilocher davantage à chaque mouvement.

À moyen terme, le risque est l'apparition d'une arthrose précoce de la hanche.`,
      treatment: `En première intention : adaptation de l'activité, kinésithérapie pour renforcer les muscles stabilisateurs, anti-inflammatoires en crise. Cela permet souvent de diminuer la gêne sans intervention.

Si la lésion est invalidante et qu'un conflit osseux associé est démontré, une arthroscopie de hanche permet de réparer le labrum (suture)  tout en corrigeant la cause mécanique sous-jacente. Une consultation spécialisée et une imagerie ciblée précisent l'indication.`,
      description: "Lésion du bourrelet fibrocartilagineux acétabulaire, le plus souvent associée à un CFA ou un traumatisme.",
      signs: ["Douleur inguinale", "Sensation d'accrochage"],
      exams: ["Arthro-IRM", "Radiographies"],
      medical: ["Adaptation activité", "Kinésithérapie", "AINS"],
      surgical: ["Réparation arthroscopique du labrum"],
    },
    'Tendinopathies du moyen fessier': {
      whatIsIt: `Le moyen fessier est un muscle situé sur le côté de la hanche. Son tendon s'insère sur une saillie osseuse appelée grand trochanter, qu'on sent facilement sous la peau au-dessus de la cuisse. C'est ce muscle qui stabilise le bassin à chaque pas : sans lui, on tomberait du côté de la jambe qui s'avance.

Une tendinopathie du moyen fessier correspond à une souffrance de ce tendon : inflammation, dégénérescence ou rupture partielle. C'est l'équivalent au niveau de la hanche de ce qu'est la tendinite à l'épaule. Elle est très fréquente, surtout chez la femme après 50 ans.`,
      symptoms: `Douleur sur la face latérale de la hanche, juste sur le relief osseux du grand trochanter. Elle est typiquement réveillée la nuit lorsque le patient se couche sur le côté atteint, et apparaît en montant les escaliers, en se levant d'une chaise basse, ou en marchant longtemps.

Le simple fait d'appuyer avec le doigt sur le grand trochanter est douloureux. Une boiterie peut apparaître quand le tendon est très affaibli.`,
      untreated: `L'inflammation chronique peut conduire à une dégénérescence puis à une rupture partielle ou complète du tendon. Une rupture installée entraîne une boiterie permanente et une perte de force qui retentit sur l'autonomie.

Plus la prise en charge est précoce, meilleurs sont les résultats du traitement non chirurgical.`,
      treatment: `La kinésithérapie est le traitement de référence : exercices de renforcement excentrique, étirements, travail postural. Elle donne d'excellents résultats dans la majorité des cas, mais demande de la rigueur sur plusieurs semaines.

Les infiltrations échoguidées peuvent compléter le traitement. En cas de rupture confirmée à l'IRM ou d'échec du traitement médical bien conduit, une réparation chirurgicale du tendon (à ciel ouvert ou sous endoscopie) est possible. Une consultation permet d'orienter vers la stratégie la plus adaptée.`,
      description: "Souffrance des tendons du moyen et petit fessier au niveau de leur insertion sur le grand trochanter.",
      signs: ["Douleur latérale de hanche", "Réveils nocturnes"],
      exams: ["Échographie", "IRM si doute de rupture"],
      medical: ["Kinésithérapie excentrique", "Infiltrations"],
      surgical: ["Réparation tendineuse"],
    },
    'Tendinopathies du psoas': {
      whatIsIt: `Le muscle psoas est un muscle profond qui relie la colonne lombaire au fémur, en passant en avant de la hanche. C'est le principal fléchisseur de la hanche : c'est lui qui soulève la cuisse quand on monte une marche ou qu'on lève la jambe en position assise.

Une tendinopathie du psoas correspond à une souffrance du tendon de ce muscle, généralement à son passage devant la hanche. Elle peut survenir chez le sportif (course, danse, footballeur), après une prothèse de hanche (conflit avec l'implant), ou de manière isolée.`,
      symptoms: `Douleur profonde dans le pli de l'aine, parfois associée à une sensation de claquement audible ("hanche à ressaut") lors de certains mouvements. Elle est typiquement déclenchée par le passage assis-debout, la montée des escaliers, ou les exercices abdominaux.

La marche normale est rarement gênée, mais les activités sportives qui sollicitent la flexion de hanche (course, vélo, danse) deviennent douloureuses.`,
      untreated: `L'évolution est généralement favorable avec le temps et l'adaptation de l'activité. Toutefois, une tendinopathie chronique peut s'installer durablement et limiter la pratique sportive.

Dans le cas particulier d'un conflit avec une prothèse de hanche, l'inconfort peut persister tant que le conflit mécanique n'est pas résolu.`,
      treatment: `Repos relatif, étirements doux, kinésithérapie ciblée et anti-inflammatoires constituent le traitement de première intention. La grande majorité des cas se résout en quelques semaines.

Lorsque la gêne persiste plusieurs mois malgré un traitement bien conduit, ou en cas de conflit avéré avec un implant prothétique, un geste de ténotomie endoscopique du psoas peut être proposé. Une consultation permet de poser l'indication.`,
      description: "Souffrance du tendon du muscle psoas à son passage devant la hanche.",
      signs: ["Douleur inguinale profonde", "Hanche à ressaut"],
      exams: ["Échographie dynamique", "IRM"],
      medical: ["Repos relatif", "Étirements", "Kinésithérapie"],
      surgical: ["Ténotomie endoscopique du psoas"],
    },
    'Compressions dynamiques neurologiques (nerf sciatique)': {
      whatIsIt: `Le nerf sciatique est le plus gros nerf du corps. Il descend de la fesse vers la cuisse en passant à travers ou à proximité d'un muscle profond appelé piriforme. Chez certaines personnes, ce nerf peut être comprimé à ce niveau lors de certains mouvements ou positions : c'est la compression dynamique du nerf sciatique, parfois appelée syndrome du piriforme.

À la différence d'une sciatique d'origine lombaire (hernie discale), la compression se fait ici au niveau de la fesse, hors du dos.`,
      symptoms: `Douleur profonde dans la fesse, qui descend le long de la jambe, parfois jusqu'au pied. Elle peut s'accompagner de fourmillements, d'engourdissements ou d'une sensation de courant électrique.

Caractéristique : la douleur est aggravée par la position assise prolongée (volant, vélo, bureau), par la marche en montée, ou par certains mouvements de rotation de la hanche. Elle peut s'estomper en se levant ou en marchant un peu.`,
      untreated: `Une compression chronique non traitée peut aboutir à une souffrance durable du nerf, avec persistance des douleurs et, dans certains cas, des troubles sensitifs ou une faiblesse musculaire dans le territoire concerné.

Le diagnostic est souvent retardé car les patients sont d'abord traités pour une sciatique lombaire qui n'est pas la vraie cause.`,
      treatment: `La kinésithérapie spécialisée (étirements du piriforme, mobilisation neurale), les anti-inflammatoires et les infiltrations échoguidées suffisent dans la majorité des cas.

Lorsque la compression est confirmée et que les symptômes résistent à un traitement bien conduit pendant plusieurs mois, une neurolyse endoscopique permet de libérer le nerf sciatique de ses adhérences en sectionnant les fibres compressives du muscle piriforme. C'est un geste mini-invasif. Une consultation spécialisée permet de poser le diagnostic précis et d'orienter le traitement.`,
      description: "Compression du nerf sciatique au niveau de la fesse, distincte d'une sciatique d'origine lombaire.",
      signs: ["Douleur fessière irradiant à la jambe", "Aggravée en position assise"],
      exams: ["IRM neurographique", "EMG"],
      medical: ["Kinésithérapie", "Infiltrations échoguidées"],
      surgical: ["Neurolyse endoscopique"],
    },
  },

  'Genou': {
    'Gonarthrose': {
      whatIsIt: `La gonarthrose, c'est l'usure progressive du cartilage du genou. Le cartilage est cette couche lisse qui recouvre les surfaces des os à l'intérieur de l'articulation et permet aux deux os — le fémur en haut et le tibia en bas — de glisser sans frottement.

Avec les années, des microtraumatismes répétés, une ancienne lésion (méniscale ou ligamentaire) ou un défaut d'axe, ce cartilage s'use, se fissure, puis disparaît. Les os se mettent alors à frotter directement, ce qui provoque la douleur. La gonarthrose peut toucher l'un des trois compartiments du genou (interne, externe, ou rotulien) ou plusieurs à la fois.`,
      symptoms: `La douleur est mécanique : présente à la marche, à la montée et descente d'escaliers, en se relevant d'une chaise basse, et soulagée par le repos. Elle siège généralement à l'avant ou sur le côté du genou.

Le genou se raidit progressivement, surtout le matin au réveil ou après être resté assis longtemps. Le périmètre de marche se réduit. Des poussées inflammatoires (genou gonflé, chaud) peuvent survenir.`,
      untreated: `L'évolution naturelle est lente mais constante : sur plusieurs années, la douleur s'intensifie, les amplitudes diminuent, et le genou peut se déformer (s'enrouler vers l'intérieur ou vers l'extérieur).

À terme, marcher quelques minutes devient difficile, l'autonomie se réduit, et la qualité de vie diminue. Des douleurs de hanche ou de dos peuvent apparaître par compensation.`,
      treatment: `Tant que la gêne est modérée, on commence par des moyens simples : antalgiques, anti-inflammatoires en poussée, kinésithérapie pour entretenir la mobilité et renforcer les muscles, infiltrations (corticoïdes, acide hyaluronique), perte de poids quand elle s'impose.

Quand l'arthrose ne touche qu'un seul compartiment et que les ligaments sont intacts, une prothèse partielle (PUC) suffit. Quand l'usure concerne plusieurs compartiments ou que le genou se déforme, une prothèse totale du genou (PTG) est la solution. Une consultation permet d'évaluer le bon moment pour envisager une chirurgie.`,
      description: "Arthrose du genou définie par la destruction progressive du cartilage articulaire.",
      signs: ["Douleur mécanique", "Raideur matinale", "Boiterie"],
      exams: ["Radiographies en charge", "IRM si doute"],
      medical: ["Antalgiques, AINS", "Kinésithérapie", "Infiltrations"],
      surgical: ["Prothèse partielle (PUC)", "Prothèse totale du genou (PTG)"],
    },
    'Lésion du ligament croisé antérieur (LCA)': {
      whatIsIt: `Le ligament croisé antérieur (LCA) est l'un des deux ligaments situés au cœur du genou. Il joue un rôle essentiel dans la stabilité : c'est lui qui empêche le tibia d'avancer sous le fémur lors des changements de direction et des pivots.

Une rupture du LCA survient le plus souvent lors d'un traumatisme sportif : pivot du genou pied bloqué au sol (ski, football, rugby, handball) ou choc direct. Le ligament se déchire totalement ou partiellement.`,
      symptoms: `Au moment du traumatisme, le patient ressent souvent un craquement, suivi d'une douleur vive et d'un gonflement rapide du genou (en quelques heures). À ce stade, le diagnostic est souvent posé.

Une fois la phase aiguë passée, c'est l'instabilité qui domine : sensation de "genou qui se dérobe" lors des changements de direction, en descendant des escaliers ou en pivotant. La marche en ligne droite est généralement possible, mais le sport en pivot devient impossible sans appréhension.`,
      untreated: `Un LCA rompu ne cicatrise jamais spontanément. L'instabilité chronique du genou expose à des entorses à répétition, qui finissent par abîmer les ménisques (lésions secondaires) puis le cartilage. À moyen et long terme, le risque est l'apparition d'une arthrose précoce.

Pour les patients sédentaires acceptant de renoncer aux sports en pivot, une rééducation seule peut suffire. Pour les patients jeunes, sportifs ou actifs, la reconstruction est généralement recommandée.`,
      treatment: `En urgence : repos, glace, antalgiques, kinésithérapie pour récupérer la mobilité et la trophicité musculaire. Cette phase dure plusieurs semaines.

Ensuite, l'indication de reconstruction chirurgicale dépend du projet de vie : sport en pivot, âge, instabilité ressentie, lésions associées. La reconstruction se fait sous arthroscopie en utilisant un de vos propres tendons comme greffon. Une consultation permet de discuter de l'indication et des choix techniques.`,
      description: "Rupture totale ou partielle du LCA, principal stabilisateur du genou.",
      signs: ["Craquement initial", "Gonflement", "Instabilité"],
      exams: ["IRM", "Radiographies"],
      medical: ["Repos initial", "Kinésithérapie"],
      surgical: ["Reconstruction du LCA sous arthroscopie"],
    },
    'Lésion du ligament croisé postérieur (LCP)': {
      whatIsIt: `Le ligament croisé postérieur (LCP) est le pendant du LCA : il empêche le tibia de reculer sous le fémur. Il est anatomiquement plus épais et plus solide, ce qui le rend moins fréquemment lésé.

Sa rupture survient le plus souvent lors d'un choc direct sur la face avant du tibia, genou plié : accident de la voie publique (le tableau de bord), chute en avant en ski ou en moto, choc en sport de contact.`,
      symptoms: `En phase aiguë : douleur, gonflement, difficulté à plier ou à appuyer sur la jambe. Le diagnostic peut être méconnu car les signes sont parfois moins bruyants que pour un LCA.

À distance, c'est une sensation d'instabilité différente — moins du "genou qui se dérobe" que de la "jambe qui flanche", surtout dans les descentes ou en charge prolongée. Une douleur antérieure du genou (rotule) peut s'installer.`,
      untreated: `Comme pour le LCA, un LCP rompu ne cicatrise pas spontanément. Toutefois, la rupture isolée du LCP est mieux tolérée que celle du LCA, et de nombreux patients récupèrent une fonction satisfaisante avec une rééducation adaptée.

En revanche, en cas de lésions multiligamentaires associées (LCP + LCL ou autres ligaments), l'instabilité est sévère et l'évolution vers l'arthrose plus rapide.`,
      treatment: `En première intention, traitement non chirurgical : kinésithérapie spécifique pour renforcer le quadriceps (qui compense partiellement le LCP), attelle dans certains cas. Cela suffit dans la majorité des ruptures isolées.

La reconstruction chirurgicale est réservée aux instabilités persistantes, aux lésions multiligamentaires, ou aux patients très sportifs. Une consultation spécialisée précise l'indication.`,
      description: "Rupture du LCP, plus rare que celle du LCA, souvent par choc direct tibial antérieur.",
      signs: ["Douleur postérieure", "Gonflement", "Instabilité en charge"],
      exams: ["IRM", "Radiographies dynamiques"],
      medical: ["Kinésithérapie ciblée", "Attelle"],
      surgical: ["Reconstruction du LCP"],
    },
    'Lésions méniscales': {
      whatIsIt: `Les ménisques sont deux petits coussinets en forme de croissant situés entre le fémur et le tibia, à l'intérieur du genou (un interne, un externe). Ils jouent un rôle d'amortisseurs et de stabilisateurs : ils répartissent les charges, protègent le cartilage, et participent au "verrouillage" du genou.

Une lésion méniscale est une déchirure de l'un de ces ménisques. Elle peut survenir lors d'un traumatisme (entorse, accroupissement forcé, sport en pivot) — c'est la lésion traumatique du sujet jeune. Ou elle peut apparaître progressivement avec l'usure — c'est la lésion dégénérative, fréquente après 50 ans.`,
      symptoms: `Douleur localisée sur l'interligne du genou (intérieur ou extérieur), souvent réveillée par certains mouvements (s'accroupir, tourner sur la jambe d'appui). Sensation d'accrochage ou de blocage transitoire à certains gestes.

Dans certains cas, un fragment de ménisque peut se déplacer et bloquer le genou en flexion : impossibilité de tendre complètement la jambe. Un gonflement intermittent du genou est fréquent.`,
      untreated: `Les lésions traumatiques du sujet jeune, si elles sont importantes et symptomatiques, peuvent évoluer vers une dégradation progressive du ménisque et, à long terme, vers une arthrose précoce du compartiment concerné. Certaines lésions périphériques peuvent en revanche cicatriser spontanément.

Les lésions dégénératives, quant à elles, sont souvent le reflet d'une arthrose déjà installée et leur prise en charge ne change pas le pronostic à long terme du genou.`,
      treatment: `Pour les lésions dégénératives sans blocage : kinésithérapie, antalgiques, infiltrations. Le traitement médical est efficace dans la majorité des cas.

Pour les lésions traumatiques du sujet jeune, et pour les blocages mécaniques, l'arthroscopie permet soit de réparer (suturer) le ménisque lorsque c'est possible, soit de retirer uniquement le fragment lésé (méniscectomie partielle) en préservant au maximum le ménisque sain. Une consultation permet d'orienter vers le geste le plus adapté.`,
      description: "Déchirure d'un ménisque, soit traumatique (sujet jeune), soit dégénérative (après 50 ans).",
      signs: ["Douleur sur l'interligne", "Blocage", "Hydarthrose"],
      exams: ["IRM", "Radiographies"],
      medical: ["Kinésithérapie", "Infiltrations"],
      surgical: ["Suture méniscale ou méniscectomie partielle"],
    },
    'Lésions cartilagineuses focales': {
      whatIsIt: `Le cartilage articulaire est cette fine couche lisse qui recouvre l'extrémité des os. Lorsqu'une zone limitée et bien délimitée de cartilage est abîmée — sans atteinte généralisée comme dans l'arthrose — on parle de lésion cartilagineuse focale.

La cause peut être traumatique (entorse, choc direct) ou liée à un trouble de la vascularisation osseuse sous-jacente (ostéochondrite). Cette atteinte concerne typiquement le sujet jeune, sportif ou actif.`,
      symptoms: `Douleur localisée, mécanique, parfois associée à des sensations d'accrochage ou de blocages courts. Un épanchement intermittent du genou est fréquent.

Contrairement à l'arthrose, la gêne est souvent ciblée à un mouvement précis (descendre les escaliers, certaine flexion, course) plutôt que diffuse.`,
      untreated: `Une lésion focale non traitée peut s'agrandir progressivement, le fragment cartilagineux peut se détacher (corps étranger libre dans l'articulation), et à terme, l'arthrose précoce du compartiment concerné peut s'installer.

Plus la lésion est prise en charge tôt, meilleurs sont les résultats. La préservation du capital articulaire est l'objectif.`,
      treatment: `Pour les petites lésions stables : kinésithérapie, adaptation de l'activité, surveillance. Cela peut suffire à stabiliser la lésion.

Pour les lésions plus importantes ou symptomatiques, plusieurs techniques chirurgicales sous arthroscopie permettent de stimuler la réparation cartilagineuse : microfractures, greffe cartilagineuse autologue (AutoCart), réinsertion d'un fragment quand c'est possible. Une consultation spécialisée permet de poser l'indication précise.`,
      description: "Atteinte localisée du cartilage articulaire, souvent traumatique ou par ostéochondrite, distincte de l'arthrose diffuse.",
      signs: ["Douleur localisée", "Blocages courts", "Hydarthrose"],
      exams: ["IRM", "Arthro-scanner"],
      medical: ["Kinésithérapie", "Adaptation activité"],
      surgical: ["Microfractures", "AutoCart"],
    },
    'Instabilité rotulienne': {
      whatIsIt: `La rotule est l'os situé à l'avant du genou, encastré dans la trochlée du fémur (un sillon en forme de gouttière). Quand cet emboîtement est défectueux — trochlée trop plate, rotule trop haute, axe trop décalé — la rotule peut sortir de son rail, c'est ce qu'on appelle une luxation rotulienne.

L'instabilité rotulienne désigne la tendance répétée de la rotule à se déplacer ou à se luxer. Elle peut survenir après un traumatisme initial ou exister sur une morphologie particulière (souvent congénitale).`,
      symptoms: `Le premier épisode est typiquement une luxation : la rotule sort de son logement, le plus souvent en pivotant sur la jambe d'appui. Le genou se bloque, est très douloureux, et la rotule reprend parfois sa place spontanément (réduction).

À distance, c'est l'appréhension qui domine : peur que la rotule "saute" à nouveau, sensation d'instabilité dans certains mouvements (escaliers, accroupissement, sport). Des douleurs antérieures du genou et un gonflement intermittent peuvent apparaître.`,
      untreated: `Les luxations à répétition abîment progressivement le cartilage de la rotule et de la trochlée, ce qui expose à une arthrose fémoro-patellaire précoce. Chaque épisode peut détacher des fragments cartilagineux ou osseux.

L'instabilité chronique entraîne aussi une perte de confiance dans le genou et un retentissement fonctionnel important, surtout chez le sujet jeune et sportif.`,
      treatment: `Après un premier épisode : immobilisation puis kinésithérapie pour renforcer le quadriceps (en particulier le vaste interne) et stabiliser la rotule. Cela peut suffire.

En cas de récidives ou d'anomalies anatomiques importantes, une chirurgie de stabilisation est proposée. Plusieurs techniques existent (reconstruction du ligament fémoro-patellaire médial, transposition de la tubérosité tibiale, trochléoplastie), choisies selon les anomalies présentes. Une consultation spécialisée et un bilan d'imagerie précis sont indispensables pour planifier le geste.`,
      description: "Tendance répétée à la luxation ou subluxation de la rotule, par anomalie anatomique ou suite traumatique.",
      signs: ["Luxation rotulienne", "Appréhension", "Douleur antérieure"],
      exams: ["Radiographies, scanner TA-GT", "IRM"],
      medical: ["Kinésithérapie", "Genouillère"],
      surgical: ["Reconstruction MPFL", "Transposition TTA", "Trochléoplastie"],
    },
    'Déformations (genu varum / genu valgum)': {
      whatIsIt: `Normalement, vu de face, la jambe est presque droite. Quand l'axe est dévié vers l'extérieur (jambes "arquées", en parenthèses), on parle de genu varum. Quand il est dévié vers l'intérieur (genoux qui se touchent, "en X"), on parle de genu valgum.

Ces déformations peuvent être constitutionnelles (présentes depuis l'enfance), ou survenir progressivement avec l'usure asymétrique du cartilage du genou. Elles se renforcent souvent mutuellement : un axe dévié use davantage un compartiment, et l'usure accentue la déviation.`,
      symptoms: `La déformation est visible à l'œil nu, parfois bien avant la douleur. Quand celle-ci apparaît, elle se localise sur le compartiment surchargé : interne pour le genu varum, externe pour le genu valgum.

La gêne fonctionnelle (boiterie, périmètre de marche réduit, raideur) accompagne progressivement l'aggravation.`,
      untreated: `Une déformation non corrigée entretient et accélère l'usure asymétrique du cartilage. À terme, on évolue vers une arthrose unicompartimentale puis globale du genou.

Plus l'axe est corrigé tôt, mieux on préserve l'articulation et on peut retarder, voire éviter, le recours à une prothèse.`,
      treatment: `Pour des déformations modérées et peu symptomatiques : surveillance, semelles orthopédiques, kinésithérapie, perte de poids si nécessaire.

Pour des déformations symptomatiques chez le sujet encore jeune et avec un cartilage relativement préservé, une ostéotomie de réaxation permet de redresser l'axe en coupant et en redirigeant l'os. Cela soulage et préserve le genou pour de nombreuses années. Quand l'arthrose est trop avancée, une prothèse de genou est la solution. Une consultation et un bilan d'imagerie permettent de poser l'indication adaptée.`,
      description: "Déviation de l'axe de la jambe (varus ou valgus), constitutionnelle ou liée à l'usure asymétrique.",
      signs: ["Déformation visible", "Douleur compartimentale"],
      exams: ["Radiographie pangonométrique"],
      medical: ["Surveillance", "Semelles", "Kinésithérapie"],
      surgical: ["Ostéotomie de réaxation", "Prothèse si arthrose avancée"],
    },
  },

  'Cheville': {
    'Tendinopathies du tendon d\'Achille': {
      whatIsIt: `Le tendon d'Achille est le tendon qui relie les muscles du mollet au talon. C'est le tendon le plus puissant du corps : il transmet à chaque pas la force de propulsion.

La tendinopathie d'Achille est une souffrance de ce tendon. On distingue deux formes : la tendinopathie corporéale (sur le corps du tendon, environ 4 cm au-dessus du talon, zone moins bien vascularisée) et la tendinopathie d'insertion (juste à l'attache du tendon sur le talon). Les causes sont multiples : surmenage sportif, microtraumatismes répétés, chaussage inadapté, surcharge pondérale.`,
      symptoms: `Douleur à l'arrière du talon ou du mollet, typiquement matinale ("dérouillage" douloureux des premiers pas), qui s'atténue à l'échauffement puis revient en fin d'effort.

Au fil du temps, la douleur devient permanente, présente même au repos. Une grosseur ou un nodule peut être palpé sur le tendon, parfois sensible. Le tendon peut être épaissi.`,
      untreated: `Sans prise en charge, la tendinopathie chronique fragilise le tendon et expose à un risque de rupture, notamment lors d'un effort brusque ou d'un mauvais appui. La rupture est une urgence chirurgicale dans la majorité des cas.

Une tendinopathie négligée peut aussi rendre la pratique sportive impossible et limiter la marche au quotidien.`,
      treatment: `Le traitement de première intention est médical et long : repos relatif (mais pas immobilisation totale), kinésithérapie spécifique (étirements, travail excentrique du mollet), semelles, antalgiques. Les ondes de choc peuvent être proposées dans certaines formes.

Quand la douleur persiste plus de 6 mois malgré un traitement bien conduit, ou en cas de rupture, une chirurgie est discutée. Plusieurs techniques existent (peignage, suture, transfert tendineux selon le cas). Une consultation permet d'orienter vers la meilleure option.`,
      description: "Souffrance du tendon d'Achille, soit sur son corps soit à son insertion calcanéenne.",
      signs: ["Douleur matinale", "Nodule palpable", "Tendon épaissi"],
      exams: ["Échographie", "IRM"],
      medical: ["Kinésithérapie excentrique", "Semelles", "Ondes de choc"],
      surgical: ["Peignage", "Suture", "Transfert tendineux"],
    },
    'Instabilité chronique de cheville': {
      whatIsIt: `Les ligaments latéraux de la cheville (en particulier le ligament talo-fibulaire antérieur) stabilisent la cheville et empêchent l'entorse. Quand un patient présente des entorses à répétition, on parle d'instabilité chronique.

Cela survient souvent après une première entorse mal soignée : les ligaments cicatrisent dans une mauvaise position, la cheville reste laxe, et chaque mouvement de torsion déclenche une nouvelle entorse. Une instabilité chronique peut aussi être liée à une morphologie particulière (pied creux, varus calcanéen).`,
      symptoms: `Sensation de cheville "qui lâche" lors des appuis instables, surtout sur sol irrégulier, dans les escaliers ou en sport. Entorses à répétition, parfois pour des traumatismes mineurs.

Une appréhension permanente s'installe, qui modifie la marche. Des douleurs latérales et un gonflement chronique sont fréquents.`,
      untreated: `Les entorses à répétition usent progressivement le cartilage de la cheville et peuvent entraîner des lésions ostéochondrales (atteinte cartilage + os sous-jacent). À long terme, le risque est l'arthrose précoce de la cheville.

L'instabilité limite aussi la pratique sportive et expose au risque de chute, notamment chez le sujet âgé.`,
      treatment: `En première intention : kinésithérapie de proprioception (rééducation de l'équilibre et des appuis), renforcement musculaire des péroniers latéraux, attelle ou orthèse en sport.

Quand l'instabilité persiste malgré une rééducation bien conduite, une réparation ou reconstruction chirurgicale des ligaments est proposée (technique de Broström-Gould). Une consultation permet d'évaluer l'indication et la technique adaptée.`,
      description: "Entorses à répétition par déficience des ligaments latéraux de la cheville.",
      signs: ["Entorses récidivantes", "Cheville qui lâche", "Appréhension"],
      exams: ["Radiographies dynamiques", "IRM"],
      medical: ["Proprioception", "Renforcement péroniers", "Orthèse"],
      surgical: ["Réparation ligamentaire (Broström-Gould)"],
    },
    'Lésion ostéochondrale du dôme talien': {
      whatIsIt: `Le dôme talien est la partie supérieure de l'astragale (l'os de la cheville). Une lésion ostéochondrale, c'est une atteinte combinée du cartilage et de l'os juste sous le cartilage, sur ce dôme.

L'origine est le plus souvent traumatique (suite à une ou plusieurs entorses), mais peut aussi être liée à un trouble de la vascularisation osseuse. Cette pathologie touche fréquemment le sujet jeune et sportif.`,
      symptoms: `Douleur profonde et mécanique de la cheville, présente à l'appui, en sport, et soulagée par le repos. Sensation d'accrochage, de blocage parfois.

Un gonflement intermittent est fréquent. La douleur peut être longtemps modérée et négligée avant le diagnostic.`,
      untreated: `Sans traitement, la lésion s'aggrave : le fragment cartilagineux peut se détacher (corps étranger libre dans l'articulation) et l'os sous-jacent peut s'effondrer. À terme, l'évolution se fait vers une arthrose précoce de la cheville.

Une prise en charge précoce permet de préserver le capital articulaire.`,
      treatment: `Pour les petites lésions stables : décharge partielle, kinésithérapie, surveillance par imagerie. Cela peut suffire à la stabilisation.

Pour les lésions plus importantes ou symptomatiques, plusieurs techniques chirurgicales sous arthroscopie permettent de stimuler la cicatrisation : microfractures, comblement osseux, greffe cartilagineuse autologue (AutoCart). Une consultation spécialisée et une IRM précisent l'indication.`,
      description: "Atteinte combinée du cartilage et de l'os sous-jacent au sommet de l'astragale.",
      signs: ["Douleur profonde", "Accrochage", "Hydarthrose"],
      exams: ["IRM", "Arthro-scanner"],
      medical: ["Décharge", "Kinésithérapie"],
      surgical: ["Microfractures", "AutoCart talus"],
    },
    'Conflits antérieur et postérieur de la cheville': {
      whatIsIt: `Les conflits de cheville désignent une douleur déclenchée par un accrochage mécanique entre des structures osseuses ou tendineuses lors de certains mouvements. On distingue deux formes selon la localisation.

Le conflit antérieur de cheville survient lors de la flexion (quand on tire la pointe du pied vers soi). Une butée osseuse, souvent secondaire à des microtraumatismes répétés ou à d'anciennes entorses, vient s'accrocher à l'avant de l'articulation. C'est une pathologie typique du footballeur, du danseur ou de l'amateur de sports de pivot.

Le conflit postérieur de cheville survient à l'inverse lors de l'extension (pointe du pied vers le bas, en pointe). Il est dû à la présence d'un petit os surnuméraire (l'os trigone) ou d'un saillie osseuse à l'arrière de l'astragale, qui se retrouve coincée. Cette pathologie touche surtout les danseurs (en pointes), les footballeurs (frappes) et les amateurs de sports d'extension forcée.`,
      symptoms: `Pour le conflit antérieur : douleur sur la face avant de la cheville, déclenchée par la flexion forcée (s'accroupir, monter une pente, frappe au football). Sensation d'accrochage, parfois de blocage. La cheville peut être gonflée à l'avant.

Pour le conflit postérieur : douleur à l'arrière de la cheville, sous le tendon d'Achille, déclenchée par l'extension forcée (talon levé, pointe, frappe). Souvent confondue avec une tendinopathie d'Achille mais le siège exact de la douleur diffère.`,
      untreated: `Sans prise en charge, le conflit s'entretient : chaque mouvement déclencheur entretient l'inflammation et peut majorer la butée osseuse au fil du temps. La gêne fonctionnelle limite progressivement la pratique sportive et certains gestes du quotidien.

Le pronostic reste cependant favorable : ces conflits ne dégradent pas l'articulation dans son ensemble et leur traitement, médical ou chirurgical, donne de bons résultats.`,
      treatment: `En première intention : repos relatif, antalgiques, kinésithérapie (étirements, travail proprioceptif), parfois une infiltration cortisonée bien ciblée. L'adaptation temporaire de l'activité sportive est souvent nécessaire.

En cas d'échec ou de gêne persistante chez le sportif, une arthroscopie de cheville permet de retirer la butée osseuse antérieure ou l'os trigone postérieur. C'est un geste mini-invasif, avec une reprise rapide. Une consultation et une imagerie (radiographies, parfois scanner) permettent de confirmer le diagnostic et de poser l'indication.`,
      description: "Accrochage mécanique entre structures osseuses lors de certains mouvements de la cheville, en flexion (antérieur) ou extension (postérieur).",
      signs: ["Douleur en flexion ou extension forcée", "Sensation d'accrochage", "Limitation des amplitudes"],
      exams: ["Radiographies", "Scanner", "IRM si doute"],
      medical: ["Repos relatif", "Kinésithérapie", "Infiltrations"],
      surgical: ["Arthroscopie de cheville (résection butée osseuse / os trigone)"],
    },
  },

  'Pied': {
    'Hallux valgus': {
      whatIsIt: `L'hallux valgus, ce qu'on appelle communément "oignon", est la déformation la plus fréquente de l'avant-pied. C'est une déviation latérale du gros orteil (qui part vers les autres orteils) associée à une saillie sur le bord interne du pied (la tête du premier métatarsien qui dépasse).

Cette déformation est progressive et multifactorielle : prédisposition familiale (le facteur principal), morphologie du pied, chaussage à talons hauts ou trop étroits, vieillissement. Elle touche très majoritairement les femmes.`,
      symptoms: `Au début, c'est l'aspect esthétique et la difficulté à se chausser qui dominent. Puis apparaît la douleur sur la "bosse" interne (frottement avec la chaussure), parfois inflammatoire.

Avec l'évolution, le gros orteil peut chevaucher ou passer sous le deuxième orteil, créant des déformations en cascade (orteils en griffe), des cors, des durillons sous l'avant-pied (métatarsalgies).`,
      untreated: `La déformation s'aggrave avec le temps. Les chaussures deviennent de plus en plus difficiles à porter. Les douleurs s'étendent à tout l'avant-pied.

À un stade avancé, on observe l'arthrose de l'articulation du gros orteil et des déformations complexes des autres orteils, qui rendent la chirurgie plus lourde si elle est nécessaire.`,
      treatment: `Tant que la gêne est modérée : chaussage adapté (large, souple, sans talons hauts), semelles orthopédiques, orthoplasties (séparateurs en silicone). Cela soulage mais ne corrige pas la déformation.

Quand la douleur ou la déformation deviennent invalidantes, une chirurgie est proposée. Plusieurs techniques existent (ostéotomies du métatarsien, libération des parties molles), choisies selon la sévérité. Les techniques actuelles permettent une chirurgie peu invasive avec un appui immédiat. Une consultation permet de planifier le geste adapté.`,
      description: "Déformation la plus fréquente de l'avant-pied : déviation latérale du gros orteil avec saillie médiale de la tête métatarsienne.",
      signs: ["Bosse interne", "Douleur de chaussage", "Orteils en griffe associés"],
      exams: ["Radiographies du pied en charge"],
      medical: ["Chaussage adapté", "Semelles", "Orthoplasties"],
      surgical: ["Ostéotomie de réaxation (techniques mini-invasives)"],
    },
    'Orteils en griffe / en marteau': {
      whatIsIt: `Les orteils en griffe et en marteau sont des déformations des orteils latéraux (le 2e, 3e, 4e ou 5e orteil) qui se replient et ne posent plus à plat. La griffe est la déformation classique en "boule" sur le dessus de l'orteil ; le marteau est une variante.

Ces déformations résultent d'un déséquilibre entre les tendons qui plient et ceux qui tendent l'orteil. Elles accompagnent souvent l'hallux valgus, ou apparaissent isolément (chaussage étroit, pied creux, séquelles d'entorse).`,
      symptoms: `Cors et durillons sur la pointe de l'orteil ou sur le dessus (frottement avec la chaussure), souvent douloureux. Difficulté à se chausser. Métatarsalgies associées (douleurs sous l'avant-pied).

Au stade évolué, l'orteil devient raide et la déformation est irréductible (ne peut plus être redressée à la main).`,
      untreated: `La déformation se rigidifie progressivement et devient irréductible. Les douleurs s'aggravent et le chaussage devient impossible. Les cors peuvent s'infecter, surtout chez le diabétique.

Plus la prise en charge est tardive, plus la chirurgie est complexe.`,
      treatment: `Au stade souple (orteil encore réductible) : orthoplasties, séparateurs, chaussage large.

Au stade rigide ou en cas de douleurs invalidantes : chirurgie correctrice. Plusieurs techniques associées sont possibles (ténotomies tendineuses, ostéotomie de Weil, arthrodèse interphalangienne). Une consultation permet d'évaluer la réductibilité et de choisir la technique.`,
      description: "Déformations en flexion des orteils latéraux par déséquilibre tendineux.",
      signs: ["Cors dorsaux", "Métatarsalgies", "Difficulté de chaussage"],
      exams: ["Examen clinique", "Radiographies"],
      medical: ["Orthoplasties", "Chaussage large"],
      surgical: ["Ostéotomie de Weil", "Ténotomies", "Arthrodèse interphalangienne"],
    },
    'Névrome de Morton': {
      whatIsIt: `Le névrome de Morton est une irritation chronique d'un petit nerf situé entre deux têtes métatarsiennes, le plus souvent entre le 3e et le 4e (ou entre le 2e et le 3e). À force d'être comprimé entre les os, le nerf s'épaissit et s'enflamme.

Les facteurs favorisants sont le chaussage trop étroit, les talons hauts, la marche prolongée, la morphologie du pied. La pathologie touche très majoritairement les femmes.`,
      symptoms: `Le signe caractéristique est une douleur fulgurante, en "décharge électrique", entre deux orteils, déclenchée par la marche en chaussures fermées et soulagée par le déchaussage et le massage du pied.

La sensation de "marcher sur un caillou" ou sur un pli de chaussette est typique. Des engourdissements ou des fourmillements peuvent être ressentis sur les orteils concernés.`,
      untreated: `L'évolution est variable : certains névromes restent stables des années, d'autres deviennent invalidants. La douleur peut imposer une limitation de la marche et du chaussage.

Sans prise en charge, la douleur tend à augmenter en fréquence et en intensité.`,
      treatment: `En première intention : chaussage large, semelles orthopédiques avec barre rétro-capitale, infiltrations cortisonées (souvent efficaces, parfois suffisantes).

En cas d'échec du traitement médical, une chirurgie peut être proposée pour libérer ou retirer le nerf compressé. Le geste est court et permet une reprise rapide de la marche. Une consultation permet de poser l'indication.`,
      description: "Irritation chronique d'un nerf inter-métatarsien (le plus souvent entre 3e et 4e métatarsien).",
      signs: ["Douleur en décharge", "Sensation de caillou", "Engourdissement orteils"],
      exams: ["Échographie", "IRM"],
      medical: ["Semelles avec barre rétro-capitale", "Infiltrations"],
      surgical: ["Neurectomie ou libération du nerf"],
    },
    'Métatarsalgies': {
      whatIsIt: `Les métatarsalgies désignent les douleurs sous l'avant-pied, à la base des orteils, sur la zone d'appui des têtes métatarsiennes (l'extrémité des os longs du pied). Ce n'est pas une maladie en soi mais un symptôme qui peut avoir plusieurs causes.

On distingue les métatarsalgies statiques (les plus fréquentes), liées à un déséquilibre permanent d'appui — un métatarsien plus long ou plus bas que les autres, un avant-pied "rond", un effondrement du capiton plantaire avec l'âge — et les métatarsalgies dites "de propulsion", liées à une surcharge dynamique lors de la marche. Des déformations associées les aggravent souvent : hallux valgus qui transfère la charge sur les rayons voisins, orteils en griffe qui modifient l'appui, pied creux. Elles touchent particulièrement les femmes après la ménopause.`,
      symptoms: `Douleur sous l'avant-pied, en charge, aggravée par la marche prolongée et le port de talons. Sensation de "brûlure" ou de marche sur des cailloux.

Apparition de durillons localisés sous les têtes métatarsiennes douloureuses. Fatigue de l'avant-pied en fin de journée.`,
      untreated: `Les métatarsalgies persistantes peuvent entraîner des modifications progressives de la marche (boiterie d'esquive), avec retentissement sur le genou et la hanche. Les durillons peuvent se compliquer (infection, fissures), surtout chez le diabétique.

Sans correction de la cause, la douleur tend à s'aggraver.`,
      treatment: `En première intention : semelles orthopédiques avec décharge des têtes métatarsiennes douloureuses, chaussage adapté, perte de poids si nécessaire, kinésithérapie. Cela soulage la majorité des cas.

Quand la cause est une déformation osseuse identifiée (un métatarsien trop long ou trop bas), une ostéotomie de réaxation (Weil) peut être proposée. Une consultation et un bilan radiographique précisent l'indication.`,
      description: "Douleurs de l'avant-pied sous les têtes métatarsiennes, par déséquilibre d'appui ou pathologie associée.",
      signs: ["Douleur plantaire avant-pied", "Durillons", "Fatigue à la marche"],
      exams: ["Radiographies en charge", "Podoscopie"],
      medical: ["Semelles avec décharge", "Chaussage adapté"],
      surgical: ["Ostéotomie de Weil"],
    },
    'Arthrose du médio-pied': {
      whatIsIt: `Le médio-pied désigne la partie centrale du pied, située entre l'arrière-pied (talon) et l'avant-pied (métatarsiens et orteils). Il regroupe deux articulations principales : l'articulation de Chopart (entre l'arrière-pied et le médio-pied) et l'articulation de Lisfranc (entre le médio-pied et l'avant-pied). Ces articulations transmettent les forces lors de chaque pas et participent à l'adaptation du pied au terrain.

L'arthrose du médio-pied est l'usure du cartilage d'une ou plusieurs de ces articulations, le plus souvent au niveau de Lisfranc. Elle peut être primitive (liée au vieillissement) ou secondaire à un traumatisme ancien souvent négligé (entorse de Lisfranc passée inaperçue), à un trouble statique du pied (pied plat, pied creux), ou à une maladie inflammatoire.`,
      symptoms: `Douleur sur le dos du pied, dans sa partie moyenne, à la marche et à l'appui. Aggravée par la station debout prolongée, les terrains irréguliers.

Une bosse osseuse peut apparaître sur le dos du pied (conflit avec la chaussure). Raideur progressive du médio-pied.`,
      untreated: `L'arthrose de Lisfranc évolue lentement mais constamment. La douleur s'intensifie, la marche se réduit, et le pied peut s'aplatir (perte de la voûte longitudinale).

À terme, le retentissement fonctionnel devient important.`,
      treatment: `En première intention : semelles orthopédiques avec soutien de voûte, chaussage adapté (semelles rigides ou semi-rigides), antalgiques, infiltrations.

Quand le traitement médical ne suffit plus, une arthrodèse de Lisfranc (blocage de l'articulation usée) supprime durablement la douleur en sacrifiant une mobilité de toute façon devenue minime. Une consultation permet d'évaluer le bon moment pour la chirurgie.`,
      description: "Usure du cartilage des articulations du médio-pied (Lisfranc, Chopart), primitive ou post-traumatique.",
      signs: ["Douleur du médio-pied", "Bosse dorsale", "Raideur"],
      exams: ["Radiographies en charge", "Scanner"],
      medical: ["Semelles avec soutien de voûte", "Chaussage rigide", "Infiltrations"],
      surgical: ["Arthrodèse du médio-pied (Lisfranc et/ou Chopart)"],
    },
  },

  'Traumatologie': {
    'Fractures du membre inférieur': {
      whatIsIt: `Une fracture, c'est une rupture de continuité d'un os. Sur le membre inférieur, elle peut concerner le fémur (cuisse), le tibia ou le péroné (jambe), la cheville, ou les os du pied. La gravité dépend du siège, du déplacement, du caractère ouvert ou fermé (peau intacte ou non), et de l'état général.

Les causes sont variables : chute (notamment chez la personne âgée pour la fracture du col du fémur), accident de la voie publique, traumatisme sportif, accident de la vie quotidienne. Chez le sujet âgé, une chute banale peut suffire en raison de la fragilité osseuse (ostéoporose).`,
      symptoms: `Douleur intense et immédiate, impossibilité d'appuyer sur la jambe, déformation visible parfois (segment décalé, raccourci), gonflement et hématome qui apparaissent en quelques heures.

Une fracture est presque toujours évidente cliniquement. Le diagnostic est confirmé par radiographies, parfois complétées par un scanner pour les fractures complexes.`,
      untreated: `Une fracture non traitée ou mal traitée peut consolider dans une mauvaise position (cal vicieux), entraîner une raideur articulaire, une boiterie, voire une pseudarthrose (absence de consolidation). Les fractures articulaires non réduites évoluent vers une arthrose précoce.

Chez la personne âgée, une fracture du col du fémur non opérée est associée à une perte d'autonomie et à un risque vital majeur. C'est une urgence chirurgicale.`,
      treatment: `La prise en charge dépend du type de fracture. Pour les fractures peu déplacées et stables : immobilisation par plâtre ou attelle, repos, surveillance. Pour les fractures déplacées ou instables : ostéosynthèse chirurgicale (plaques vissées, clous centromédullaires, vis selon les cas) qui permet de remettre l'os en place et de stabiliser la fracture.

La prise en charge est urgente. Une consultation rapide est nécessaire pour orienter au mieux. Les suites comportent toujours une phase de rééducation.`,
      description: "Rupture de continuité osseuse touchant fémur, tibia, péroné ou pied.",
      signs: ["Douleur intense", "Impotence fonctionnelle", "Déformation"],
      exams: ["Radiographies", "Scanner si complexe"],
      medical: ["Immobilisation si stable"],
      surgical: ["Ostéosynthèse (plaques, clous, vis)"],
    },
    'Entorses bénignes de la cheville': {
      whatIsIt: `L'entorse de cheville est le traumatisme le plus fréquent en orthopédie. C'est un étirement, voire une déchirure partielle, des ligaments latéraux de la cheville. Le mécanisme typique est une torsion vers l'intérieur, pied en flexion, qui sollicite le ligament talo-fibulaire antérieur (le plus souvent atteint).

Les entorses bénignes correspondent à un étirement sans rupture complète du ligament. Elles guérissent dans la grande majorité des cas avec un traitement adapté.`,
      symptoms: `Douleur immédiate sur le bord externe de la cheville, gonflement rapide, hématome qui apparaît dans les heures suivantes (souvent visible sous la malléole). La marche est possible mais douloureuse.

Le bilan clinique permet de différencier entorse bénigne et entorse grave. Une radiographie est faite si on suspecte une fracture associée.`,
      untreated: `Une entorse mal soignée laisse des séquelles : douleurs chroniques, raideur, et surtout instabilité avec risque d'entorses à répétition (instabilité chronique de cheville). Le ligament cicatrise alors dans une mauvaise position et la cheville reste fragile.

La phase de rééducation après une entorse, même bénigne, est essentielle. C'est elle qui prévient les récidives.`,
      treatment: `Le traitement repose sur le protocole "GREC" : Glace, Repos relatif, Élévation, Compression (strapping ou orthèse). Antalgiques. Reprise progressive de l'appui dès que la douleur le permet.

La kinésithérapie est essentielle dès la phase aiguë : récupération de la mobilité, puis rééducation proprioceptive (rééducation de l'équilibre et des appuis) pour prévenir les récidives. Une consultation permet d'évaluer la gravité et d'orienter la rééducation.`,
      description: "Étirement ou déchirure partielle des ligaments latéraux de la cheville sans rupture complète.",
      signs: ["Douleur latérale", "Gonflement", "Marche possible"],
      exams: ["Examen clinique", "Radiographies si doute"],
      medical: ["Protocole GREC", "Strapping/orthèse", "Kinésithérapie proprioceptive"],
      surgical: ["Pas de chirurgie en aigu"],
    },
    'Entorses graves de la cheville': {
      whatIsIt: `L'entorse grave correspond à une rupture complète d'un ou plusieurs ligaments latéraux de la cheville. Le mécanisme est le même que pour l'entorse bénigne (torsion en varus) mais le traumatisme est plus violent.

Une entorse grave peut s'accompagner d'autres lésions : fracture associée, atteinte tendineuse, lésion ostéochondrale du dôme talien.`,
      symptoms: `Douleur très vive, gonflement important et immédiat, hématome étendu. Souvent une sensation de craquement au moment du traumatisme. Appui souvent impossible ou très limité.

Un bilan clinique précis (parfois différé en raison de la douleur) et des examens complémentaires (radiographies, parfois IRM) sont nécessaires.`,
      untreated: `Sans prise en charge correcte, l'entorse grave laisse une instabilité chronique sévère, des entorses à répétition, et expose à l'arthrose précoce de la cheville. La rééducation insuffisante est la cause principale de mauvais résultats.`,
      treatment: `Pour la majorité des entorses graves : immobilisation par botte ou attelle pendant 4 à 6 semaines, suivie d'une rééducation prolongée et complète. Le traitement non chirurgical donne de bons résultats dans la plupart des cas.

La chirurgie est réservée aux cas d'instabilité résiduelle après une rééducation bien conduite, ou aux lésions associées (fracture, atteinte cartilagineuse). Une consultation initiale et une réévaluation à distance permettent de poser les bonnes indications.`,
      description: "Rupture complète d'un ou plusieurs ligaments latéraux de la cheville.",
      signs: ["Douleur intense", "Gonflement majeur", "Appui impossible"],
      exams: ["Radiographies", "IRM si doute"],
      medical: ["Botte/attelle 4-6 semaines", "Rééducation prolongée"],
      surgical: ["Réparation ligamentaire si instabilité résiduelle"],
    },
    'Lésions ligamentaires aiguës du genou': {
      whatIsIt: `Le genou est stabilisé par quatre ligaments principaux : les deux ligaments croisés (LCA et LCP) au centre, et les deux ligaments collatéraux (interne et externe) sur les côtés. Un traumatisme violent peut léser un ou plusieurs ligaments de manière isolée ou combinée.

Les lésions multiligamentaires (deux ou plus) sont rares mais graves. La luxation du genou (perte de contact entre fémur et tibia) est une urgence absolue car elle peut s'accompagner d'une atteinte vasculaire (artère poplitée) qui menace la viabilité du membre.`,
      symptoms: `Douleur immédiate, gonflement parfois rapide (signe d'une lésion grave), instabilité majeure, parfois impossibilité de mobiliser le genou. Une luxation se réduit parfois spontanément, mais le genou reste très instable et douloureux.

Un examen clinique précis (souvent réalisé sous anesthésie en urgence) et une IRM précoce font le bilan exact.`,
      untreated: `Une lésion multiligamentaire non traitée laisse une instabilité majeure du genou, une perte de fonction sévère, et expose à une arthrose précoce. Pour la luxation, l'absence de prise en charge en urgence peut compromettre la jambe.`,
      treatment: `En urgence : immobilisation, bilan vasculaire et neurologique systématique en cas de luxation, prise en charge spécialisée.

À distance : reconstruction ligamentaire chirurgicale, parfois en plusieurs temps selon les lésions. Les résultats dépendent beaucoup de la précocité et de la qualité de la prise en charge. Une consultation spécialisée est indispensable.`,
      description: "Lésion d'un ou plusieurs ligaments du genou par traumatisme violent. La luxation du genou est une urgence absolue.",
      signs: ["Gonflement rapide", "Instabilité majeure", "Risque vasculaire si luxation"],
      exams: ["Examen clinique", "IRM", "Bilan vasculaire si luxation"],
      medical: ["Immobilisation initiale"],
      surgical: ["Reconstruction ligamentaire (souvent en plusieurs temps)"],
    },
    'Ruptures tendineuses (tendon d\'Achille, rotulien, quadricipital)': {
      whatIsIt: `Une rupture tendineuse est la rupture brutale d'un tendon, le plus souvent sur un terrain de tendinopathie chronique préexistante (tendon dégénératif). Trois localisations principales sur le membre inférieur :

— Le tendon d'Achille (le plus fréquent), entre 40 et 60 ans, lors d'un démarrage sportif (squash, tennis, course).
— Le tendon rotulien (sous la rotule), plus rare.
— Le tendon quadricipital (au-dessus de la rotule), surtout chez le sujet plus âgé.`,
      symptoms: `Sensation immédiate de "coup de fouet" ou de claquement à l'arrière de la jambe (Achille) ou à l'avant du genou (rotulien/quadricipital). Douleur vive. Impossibilité de monter sur la pointe des pieds (Achille) ou de tendre le genou (rotulien/quadricipital).

Une encoche peut être palpée sur le trajet du tendon. Le diagnostic clinique est souvent évident.`,
      untreated: `Une rupture tendineuse non traitée laisse une perte de fonction définitive : impossibilité de monter sur la pointe du pied, de courir, de sauter (Achille) ou de tendre la jambe contre résistance (rotulien/quadricipital). Le pronostic dépend de la précocité de la prise en charge.`,
      treatment: `Le traitement peut être chirurgical ou orthopédique selon le type de rupture, l'âge, le niveau d'activité et le délai. Pour le tendon d'Achille, le traitement non chirurgical (botte de marche en équin) est possible dans certaines formes ; la chirurgie (suture) est privilégiée chez le sportif. Pour les ruptures du rotulien et du quadricipital, la chirurgie est presque toujours indiquée.

Une consultation rapide après le traumatisme permet de poser l'indication. Les suites comportent toujours une phase d'immobilisation puis une rééducation prolongée.`,
      description: "Rupture brutale d'un tendon (Achille, rotulien ou quadricipital), souvent sur tendon dégénératif.",
      signs: ["Coup de fouet", "Encoche palpable", "Perte de fonction"],
      exams: ["Examen clinique", "Échographie", "IRM si doute"],
      medical: ["Botte de marche (Achille)"],
      surgical: ["Suture tendineuse"],
    },
    'Luxations (prothétiques et non prothétiques)': {
      whatIsIt: `Une luxation est la perte complète de contact entre les deux surfaces d'une articulation. Sur une articulation native, elle survient le plus souvent à la suite d'un traumatisme important (luxation de hanche, de genou, de cheville). Sur une articulation prothésée, elle peut survenir à l'occasion d'un mouvement extrême ou d'une chute, parfois pour un effort modéré quand l'orientation des pièces n'est pas optimale.

Les luxations sont des urgences car la prolongation de la luxation peut endommager les vaisseaux et les nerfs voisins, et les structures articulaires.`,
      symptoms: `Douleur très vive, déformation visible, impossibilité absolue de mobiliser l'articulation. La position du membre est caractéristique selon le type de luxation.

L'examen recherche systématiquement une atteinte vasculaire ou nerveuse (le diagnostic est clinique, complété par radiographies pour confirmer et chercher des lésions associées).`,
      untreated: `Une luxation non réduite rapidement expose à des lésions vasculaires et nerveuses définitives, à des nécroses osseuses, et à des séquelles articulaires majeures. Pour une prothèse luxée, la non-réduction peut endommager les pièces prothétiques.`,
      treatment: `Réduction en urgence, le plus souvent sous anesthésie générale (ou sédation). Bilan radiographique de contrôle, puis immobilisation pour permettre la cicatrisation des structures lésées.

En cas de luxations prothétiques à répétition, une révision chirurgicale peut être nécessaire (changement d'une pièce, repositionnement). Une consultation spécialisée est indispensable. Pour toute luxation aiguë, le passage aux urgences est impératif.`,
      description: "Perte de contact complète entre deux surfaces articulaires, sur articulation native ou prothésée.",
      signs: ["Douleur intense", "Déformation", "Impotence absolue"],
      exams: ["Radiographies", "Bilan vasculo-nerveux"],
      medical: ["Réduction en urgence"],
      surgical: ["Révision chirurgicale si récidives"],
    },
  },
};
