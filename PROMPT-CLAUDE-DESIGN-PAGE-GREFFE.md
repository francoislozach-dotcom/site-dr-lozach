# PROMPT CLAUDE DESIGN — Page "Greffe Cartilagineuse"
# Site drlozach.fr · Fichier : greffe-cartilagineuse.html

---

## CONTEXTE GÉNÉRAL

Tu crées une nouvelle page pour le site **drlozach.fr** du Dr François Lozach, chirurgien orthopédique à Sète.
Le site existant utilise React 18 (production build CDN), CSS custom avec variables, HTML statique multi-pages, hébergé sur Hostinger via GitHub.
**La nouvelle page doit être parfaitement cohérente avec la charte graphique et la navigation existantes du site.**

Le nom de la page dans la navigation : **"Greffe"**
Le fichier : `greffe-cartilagineuse.html`

---

## OBJECTIF DE LA PAGE

Cette page doit être **LA référence internet sur la greffe de cartilage autologue (technique AutoCart™)**, pour le genou et la cheville. Elle s'adresse à des patients qui cherchent une solution durable à une lésion cartilagineuse. Le ton est scientifique mais accessible, jamais condescendant. Pas de jargon inutile — analogies simples si besoin.

---

## ARCHITECTURE DE LA PAGE (9 sections dans l'ordre)

---

### SECTION 1 — HERO

**Titre principal :**
Greffe de cartilage du genou et de la cheville

**Sous-titre :**
Une technique autologue en une seule opération — votre propre cartilage pour réparer votre cartilage.

**Texte d'accroche :**
Vous souffrez d'une douleur chronique du genou ou de la cheville, sans amélioration malgré les traitements habituels ? Il existe aujourd'hui une solution chirurgicale de régénération — en une seule intervention, sans matériau étranger, avec vos propres cellules cartilagineuses.

**CTA :** Prendre rendez-vous en consultation → lien Doctolib

**Visuel :** placeholder pour photo arthroscopique ou illustration anatomique genou/cheville

**Style :** Hero sombre, titre en dégradé blanc → bleu cyan, ambiance technique et précise.

---

### SECTION 2 — LE PROBLÈME

**Titre :** Le cartilage ne se répare pas tout seul

**Texte :**
Le cartilage est un tissu particulier : il n'est pas vascularisé, c'est-à-dire qu'il ne reçoit pas de sang. Sans vaisseaux sanguins, il ne peut pas se régénérer spontanément comme un os ou un muscle. Une fois abîmé par un traumatisme, une ostéochondrite ou une usure localisée, le cartilage reste lésé — et la douleur s'installe durablement.

**Analogie :** Le cartilage, c'est comme le revêtement en téflon d'une poêle : si vous le rayez, il ne se répare pas. Il faut intervenir.

**Visuel :** placeholder pour photo arthroscopique d'une lésion cartilagineuse

---

### SECTION 3 — POURQUOI LES AUTRES TRAITEMENTS NE SUFFISENT PAS

**Titre :** Ce qu'on vous a peut-être déjà proposé — et pourquoi ça ne résout pas le problème

Présenter en 4 blocs/cards comparatifs (style sobre, icône + titre + texte + verdict) :

**Bloc 1 — Les infiltrations (cortisone, PRP, acide hyaluronique)**
Ce qu'elles font : Diminuent l'inflammation, lubrifient l'articulation, soulagent temporairement.
Ce qu'elles ne font pas : Elles ne réparent pas le cartilage. L'effet s'estompe, la lésion reste — et souvent s'aggrave.
Verdict : Utiles pour gérer la douleur à court terme, pas pour traiter la cause.

**Bloc 2 — Les microfractures**
Ce qu'elles font : On perce l'os sous-chondral pour faire saigner. Le caillot produit du fibrocartilage.
Le problème : Le fibrocartilage n'est PAS du vrai cartilage. C'est un tissu de moindre qualité, moins résistant, qui se dégrade en 2 à 5 ans — en particulier pour les lésions de plus de 2 cm².
Les études le confirment : La greffe de cartilage autologue haché donne des résultats cliniques et en IRM supérieurs aux microfractures.
Verdict : Acceptable pour les très petites lésions, insuffisant au-delà.

**Bloc 3 — La prothèse de genou ou de cheville**
Ce qu'elle fait : Remplace toute l'articulation.
Le problème : Solution irréversible, inadaptée à un patient jeune ou actif avec une lésion localisée. On ne remplace pas une pièce entière de moteur pour une rayure sur un piston.
Verdict : Dernier recours, réservé aux arthroses diffuses et sévères.

**Bloc 4 — La transplantation de chondrocytes (MACI / ACI)**
Ce qu'elle fait : Prélever du cartilage, cultiver les cellules en laboratoire, réimplanter lors d'une deuxième opération.
Le problème : Deux interventions chirurgicales, plusieurs mois d'attente entre les deux, coût élevé.
Les études le confirment : Pour les grandes lésions, la technique de cartilage haché avec PRP et fibrine donne des résultats supérieurs à 24 mois — en une seule intervention.
Verdict : Technique dépassée sur le plan pratique.

---

### SECTION 4 — LA SOLUTION AUTOCART™

**Titre :** La greffe de cartilage autologue : la seule technique qui restaure du vrai cartilage

**Texte :**
La technique AutoCart™ repose sur un principe simple mais puissant : utiliser votre propre cartilage pour réparer votre cartilage. On prélève des fragments de cartilage sain dans votre articulation, on les mélange avec votre propre sang centrifugé (PRP), et on les fixe sur la lésion avec une colle de fibrine naturelle issue de votre sang.
Aucun produit étranger. Aucune culture en laboratoire. Une seule opération. Moins de 45 minutes.

**La "triade de guérison" :** Présenter sous forme de triangle ou de 3 colonnes :
- Chondrocytes fragmentés (votre cartilage) → Cellules régénératrices
- PRP — Plasma Riche en Plaquettes (votre sang) → Facteurs de croissance
- Colle de fibrine autologue (votre sang) → Matrice de fixation

Sous-texte : Ces trois éléments réunis déclenchent la régénération du cartilage hyalin — le vrai cartilage, solide et durable.

---

### SECTION 5 — LA PROCÉDURE PAS À PAS (TIMELINE FUTURISTE)

**⚠️ SECTION CRITIQUE — design spécifique imposé :**

Cette section utilise une **timeline futuriste en zigzag** (alternance gauche/droite) avec un **signal électrique animé** qui parcourt le chemin entre les étapes.

**Spécifications techniques du signal électrique :**
- Le chemin entre les nœuds est un SVG path en courbe de Bézier cubique
- Animation via `stroke-dashoffset` sur 3 couches superposées :
  1. Cœur blanc intense (stroke-width 3, filtre drop-shadow cyan)
  2. Halo bleu large (stroke-width 10, blur 4px)
  3. Traîne estompée (stroke-width 6, blur 3px, opacity 0.25)
- Les 3 couches ont des offsets décalés → effet de front d'onde électrique
- Durée du cycle : ~2200ms, animation CSS requestAnimationFrame
- Les nœuds de connexion ont un anneau rotatif + halo lumineux
- Fond : dark (#03060f), particules animées, grille lumineuse
- Apparition au scroll (IntersectionObserver)

**Les 7 étapes (disposition zigzag : impaires à gauche, paires à droite) :**

**Étape 1 — Diagnostic**
Titre : Visualisation de la lésion sous arthroscopie
Texte : Une caméra miniaturisée est introduite dans l'articulation. On voit la lésion en direct : sa taille exacte, sa profondeur, ses bords. C'est l'étape de cartographie — on sait précisément ce qu'on va traiter avant de commencer.
Media : [PHOTO — vue arthroscopique de la lésion] + [VIDÉO — séquence diagnostique]

**Étape 2 — Préparation**
Titre : Débridement du site — on nettoie et on délimite
Texte : La zone lésée est débridée avec précision. On retire le cartilage nécrosé et instable jusqu'à obtenir des bords sains. Seuls les chondrocytes viables pourront régénérer. Comme préparer un champ avant de semer : le sol doit être propre et stable.
Media : [PHOTO Avant — lésion brute] + [PHOTO Après — bords débridés]

**Étape 3 — Prélèvement**
Titre : Récolte de votre cartilage sain
Texte : Un couteau-shaver spécifique prélève des micro-fragments de cartilage hyalin dans les zones non portantes de votre articulation. Ces copeaux sont collectés automatiquement dans un filtre stérile (GraftNet™) — environ 0,2 mL par cm² de lésion. Votre cartilage, pour réparer votre cartilage.
Media : [VIDÉO — séquence arthroscopique du prélèvement par shaver]

**Étape 4 — PRP**
Titre : Activation de votre plasma riche en plaquettes
Texte : Simultanément, 45 mL de votre sang sont prélevés et centrifugés. On obtient un PRP concentré en facteurs de croissance et pauvre en cellules inflammatoires. Ce plasma doré va enrichir la pâte de cartilage et servir à fabriquer la colle de fibrine naturelle.
Media : [PHOTO — double seringue ACP Arthrex, plasma doré]

**Étape 5 — Greffe**
Titre : Mise en place du greffon — la lésion est comblée
Texte : Les copeaux de cartilage sont mélangés au PRP pour former une pâte biologique. Cette pâte est introduite dans l'articulation via une canule, déposée précisément sur la zone lésée et ajustée avec un crochet palpeur. Un mastic vivant, sur mesure.
Media : [VIDÉO — application de la pâte en temps réel] + [PHOTO — lésion comblée avant fixation]

**Étape 6 — Stabilisation**
Titre : Fixation par fibrine et PRP — zéro produit étranger
Texte : Une colle de fibrine 100% autologue — fabriquée à partir de votre propre PRP via le système Thrombinator™ — est appliquée sur le greffon. Elle coagule en 15 secondes, forme un gel naturel et maintient les chondrocytes en place pendant la régénération. Aucun implant, aucun produit chimique.
Media : [PHOTO — application de la fibrine sur le greffon]

**Étape 7 — Résultat**
Titre : Résultat final — la surface articulaire est reconstituée
Texte : La lésion est comblée. La surface articulaire est reconstituée avec votre propre cartilage hyalin. L'opération est terminée — moins de 45 minutes. La régénération va se poursuivre pendant les mois suivants, guidée par les facteurs de croissance du PRP.
Media : [PHOTO Avant — lésion initiale] + [PHOTO Après — surface comblée]
Style nœud final : pulsation lumineuse cyan intense (différencié des autres nœuds)

---

### SECTION 6 — INDICATIONS

**Titre :** Cette technique est-elle faite pour vous ?

**Indiqué pour :**
- Lésions chondrales ou ostéochondrales de grade 3 à 4 (classification d'Outerbridge)
- Lésions de 2 cm² à 6 cm²
- Genou : condyle fémoral, plateau tibial, rotule (patella)
- Cheville : dôme du talus (lésion ostéochondrale du talus)
- Patient actif souhaitant préserver une articulation native
- Échec des traitements conservateurs (infiltrations, rééducation)
- Échec ou résultat insuffisant des microfractures

**Non indiqué si :**
- Arthrose diffuse de l'articulation
- Lésion < 2 cm²
- Axe mécanique fortement dévié non corrigé

Présenter en 2 colonnes (✓ vert / ✗ rouge) ou 2 cards distinctes.
Terminer par : "Une consultation spécialisée est nécessaire pour évaluer votre situation sur la base du bilan clinique et des imageries (IRM en particulier)."

---

### SECTION 7 — SUITES OPÉRATOIRES

**Titre :** Après l'opération : à quoi vous attendre ?

Présenter sous forme de **timeline horizontale** (desktop) / verticale (mobile) avec jalons temporels colorés.

**Genou — Lésion fémoro-tibiale :**
- J0–J2 : Repos, jambe en extension
- J2–6 semaines : Appui partiel (15 kg), béquilles
- 6 semaines–3 mois : Appui total progressif, vélo, natation
- 3 mois : Sports à faible impact
- 12–16 mois : Sports à fort impact (course, ski, football)

**Genou — Lésion fémoro-patellaire (rotule) :**
Même protocole + attelle ajustable en flexion progressive :
0/30° (sem. 1-2) → 0/60° (sem. 3-4) → 0/90° (sem. 5-6)

**Cheville :**
- 6 semaines : Appui partiel (max 20 kg), orthèse
- 6 semaines–3 mois : Appui total progressif, mobilisation complète
- 3 mois : Sports à faible impact
- 6 mois : Reprise de toute activité sportive

Placeholder photo : patient en rééducation ou avec attelle post-opératoire.

---

### SECTION 8 — RÉSULTATS ET DONNÉES SCIENTIFIQUES

**Titre :** Des résultats prouvés jusqu'à 5 ans

**Texte d'introduction :**
La technique de cartilage haché autologue est étudiée depuis 1983. Les données actuelles, issues de plusieurs études cliniques portant sur des centaines de patients, sont convergentes :

**4 points-clés à afficher en cards ou stats visuelles :**

1. **Supérieure aux microfractures** : résultats cliniques et IRM significativement meilleurs, notamment pour les lésions patellaires et les grandes lésions.

2. **Supérieure à la transplantation de chondrocytes (MACT)** : pour les lésions larges, la technique avec PRP et fibrine donne de meilleurs résultats à 24 mois — en une seule intervention.

3. **Stabilité à 5 ans** : les études à long terme confirment le maintien des résultats fonctionnels et l'absence de dégradation progressive.

4. **Faible taux de réopération** : à 5 ans, le taux de réintervention est très bas.

Placeholder photo : comparaison IRM avant/après si disponible.

---

### SECTION 9 — FAQ

**Titre :** Vos questions fréquentes

Présenter en accordéon (expand/collapse).

**Q1 : Est-ce que j'aurai mal après l'opération ?**
La douleur post-opératoire immédiate est gérée par un protocole antalgique adapté. Elle est généralement modérée et similaire à celle d'une arthroscopie standard. Le cap le plus difficile est souvent les premières 48 heures.

**Q2 : Combien de temps dure l'hospitalisation ?**
L'intervention est généralement réalisée en ambulatoire ou avec une nuit d'hospitalisation, selon les protocoles du site opératoire.

**Q3 : Pourquoi ne peut-on pas reprendre le sport avant 12–16 mois pour le genou ?**
La régénération du cartilage est un processus biologique lent. Le tissu est structurellement en place dès 3–6 mois, mais il faut 12 à 18 mois pour qu'il atteigne une résistance mécanique suffisante pour les sports à impact. Reprendre trop tôt, c'est risquer d'abîmer ce qu'on vient de construire.

**Q4 : Est-ce que la technique est remboursée par la Sécurité Sociale ?**
La prise en charge dépend du contexte clinique et du code acte utilisé. Ce point est discuté lors de la consultation préopératoire.

**Q5 : Peut-on traiter genou ET cheville avec cette technique ?**
Oui. Les deux articulations peuvent être traitées, lors de la même intervention ou lors d'interventions séparées, selon votre bilan.

**Q6 : Faut-il une IRM avant la consultation ?**
Une IRM récente (moins de 6 mois) de l'articulation concernée est indispensable pour évaluer la lésion. Si vous n'en avez pas, elle sera prescrite lors de la consultation.

---

### SECTION 10 — CTA FINAL

**Titre :** Vous avez une douleur du genou ou de la cheville qui ne passe pas ?

**Texte :**
Une consultation dédiée permet d'analyser vos imageries, d'évaluer votre lésion et de déterminer si la greffe de cartilage est la solution adaptée à votre situation. Chaque cas est unique — commençons par se voir.

**CTA principal :** Prendre rendez-vous en consultation → Doctolib
**CTA secondaire :** Contactez le secrétariat

---

## STYLE VISUEL GLOBAL

**Palette de couleurs :**
- Fond principal : #03060f (noir profond bleuté)
- Surface cards : rgba(8, 18, 40, 0.85)
- Accent principal : #00b4ff (bleu électrique)
- Accent secondaire : #0066ff
- Accent tertiaire / nœud final : #00e5ff (cyan)
- Texte principal : #e8f0ff
- Texte secondaire : #6b8ab0
- Bordures : rgba(0, 180, 255, 0.15)

**Effets globaux :**
- Fond animé : canvas de particules bleues flottantes + grille lumineuse fixe (1px, rgba(0,180,255,0.03))
- Cards : glassmorphism (backdrop-filter blur 20px, border 1px solid var(--border))
- Hover cards : translateY(-4px) + box-shadow bleutée + border plus lumineuse
- Typographie : Space Grotesk (titres), Inter (corps)
- Titres en dégradé blanc → bleu → cyan via background-clip text
- Radius général : 20px pour les cards, 12px pour les media zones
- Transitions : cubic-bezier(0.16, 1, 0.3, 1) — décelération rapide, élastique

**Timeline (Section 5) — rappel technique :**
- Grille CSS : 3 colonnes [1fr · 60px nœud · 1fr]
- Nœud : cercle 60px, border bleu, anneau rotatif ::before, halo glow
- Connecteur vertical entre nœuds : 3px, gradient bleu, particule blanche animée (flow-down)
- Path SVG Bézier entre nœuds : 3 couches (cœur blanc + halo large + traîne)
- Signal électrique : stroke-dashoffset animé via requestAnimationFrame (pas de point, un front d'onde)
- Apparition : IntersectionObserver threshold 0.15, opacity 0 → 1 + translateY(30px) → 0
- Zones media : dashed border bleu (photo) ou cyan (vidéo), aspect-ratio 16/9
- Mobile : grille passe à 2 colonnes [44px · 1fr], plus de zigzag

**Zones médias (placeholders) :**
Toutes les zones photo/vidéo sont des placeholders visuels clairs avec :
- Icône 📷 (photo) ou ▶ (vidéo)
- Label en majuscules
- Description courte du contenu attendu
- Style : fond semi-transparent + bordure dashed colorée

---

## CONTRAINTES TECHNIQUES

- HTML statique (pas de framework)
- React 18 production build via CDN (unpkg.com)
- Pas de type="text/babel", pas de Babel runtime
- CSS custom properties (variables)
- Compatible Hostinger sans serveur Node
- Responsive : breakpoints à 900px (tablette) et 720px (mobile)
- Images max 300KB (placeholders pour l'instant)
- Navigation identique au reste du site drlozach.fr
- Footer identique au reste du site drlozach.fr
- Bouton Doctolib flottant en bas à droite (présent sur toutes les pages)
- canonical : https://www.drlozach.fr/greffe-cartilagineuse.html
- meta description : "Dr Lozach, chirurgien orthopédique à Sète — Greffe de cartilage autologue AutoCart™ pour les lésions du genou et de la cheville. Technique en une seule intervention."

---

*Prompt rédigé le 14/05/2026 — Projet drlozach.fr · Page Greffe Cartilagineuse*
