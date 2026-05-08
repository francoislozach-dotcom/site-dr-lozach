# Guide de déploiement : Claude Design → GitHub → Hostinger

> Objectif : publier votre site en ligne sur Hostinger, identique à la version Claude Design, fonctionnel sur desktop et mobile.

---

## ÉTAPE 1 — Exporter le code depuis Claude Design

### 1.1 Récupérer les fichiers HTML/CSS/JS

Dans votre session Claude Design (Cowork) :

1. Dites à Claude : **"Exporte mon site en fichiers HTML, CSS et JS prêts pour la production"**
2. Claude génère les fichiers dans votre dossier de travail (`SITE CLAUDE DESIGN`)
3. Vérifiez que vous avez au minimum :
   - `index.html` (page principale)
   - `style.css` ou le CSS intégré dans le HTML
   - Éventuellement `script.js`
   - Les images/assets dans un sous-dossier `/images` ou `/assets`

> 💡 Si votre site est en **HTML single-file** (tout dans un seul `.html`), c'est parfait — c'est le format le plus simple à déployer.

---

## ÉTAPE 2 — Préparer l'environnement local

### 2.1 Installer Git (si pas déjà fait)

Sur Mac, ouvrez le **Terminal** (cherchez "Terminal" dans Spotlight) et tapez :

```bash
git --version
```

- Si une version s'affiche → Git est déjà installé, passez à l'étape 2.2
- Sinon, installez-le depuis : https://git-scm.com/download/mac

### 2.2 Configurer Git avec votre identité (une seule fois)

```bash
git config --global user.name "François Lozach"
git config --global user.email "francois.lozach@gmail.com"
```

---

## ÉTAPE 3 — Créer le dépôt GitHub

### 3.1 Créer un compte GitHub (si pas déjà fait)

Allez sur https://github.com → **Sign up** avec votre email Gmail.

### 3.2 Créer un nouveau dépôt (repository)

1. Sur GitHub, cliquez sur **"New"** (bouton vert)
2. Nom du dépôt : `mon-site` (ou le nom de votre choix)
3. Visibilité : **Public** (nécessaire pour l'hébergement gratuit) ou **Private** si vous avez un plan payant
4. **Ne cochez rien** (pas de README, pas de .gitignore)
5. Cliquez **"Create repository"**
6. Copiez l'URL qui s'affiche, elle ressemble à :
   `https://github.com/votreusername/mon-site.git`

---

## ÉTAPE 4 — Pousser vos fichiers sur GitHub

### 4.1 Ouvrir le Terminal et naviguer vers votre dossier

```bash
cd "/Users/francoislozach/Desktop/SITE 2.0/SITE CLAUDE DESIGN"
```

Vérifiez que vos fichiers sont bien là :
```bash
ls -la
```
Vous devez voir `index.html` et les autres fichiers.

### 4.2 Initialiser Git et pousser vers GitHub

Exécutez ces commandes **une par une** dans le Terminal :

```bash
# Initialiser Git dans le dossier
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Premier commit - site initial"

# Connecter à votre dépôt GitHub (remplacez l'URL par la vôtre)
git remote add origin https://github.com/votreusername/mon-site.git

# Pousser vers GitHub
git push -u origin main
```

> ⚠️ Si git push vous demande un mot de passe, GitHub n'accepte plus les mots de passe depuis 2021. Vous devrez créer un **Personal Access Token** :
> - Allez sur GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
> - "Generate new token" → cochez `repo` → Générez et copiez le token
> - Utilisez ce token comme mot de passe

---

## ÉTAPE 5 — Déployer sur Hostinger

### Option A : Déploiement via GitHub (recommandé)

Cette méthode synchronise automatiquement votre site à chaque modification.

1. Connectez-vous à votre compte **Hostinger** (hpanel.hostinger.com)
2. Allez dans **"Hébergement"** → sélectionnez votre domaine
3. Dans le panneau, cherchez **"Git"** ou **"Deploy from Git"**
4. Cliquez sur **"Connect repository"**
5. Autorisez Hostinger à accéder à votre GitHub
6. Sélectionnez votre dépôt `mon-site`
7. Branche : `main`
8. Répertoire de déploiement : `/public_html` (racine de votre site)
9. Cliquez **"Deploy"**

> ✅ À chaque `git push`, votre site se mettra à jour automatiquement.

### Option B : Upload manuel via File Manager (plus simple, sans GitHub)

Si vous ne voulez pas utiliser GitHub :

1. Dans Hostinger → **File Manager**
2. Naviguez vers `/public_html`
3. Supprimez les fichiers existants (si c'est un nouveau site)
4. Cliquez **"Upload"** → sélectionnez tous vos fichiers
5. Attendez l'upload → votre site est en ligne

---

## ÉTAPE 6 — Vérifications finales

### 6.1 Tester sur desktop
Ouvrez votre domaine dans Chrome, Firefox et Safari.

### 6.2 Tester sur mobile
- Ouvrez votre domaine sur iPhone/Android
- Vérifiez que le menu, les images et les textes s'affichent correctement
- Testez la rotation portrait/paysage

### 6.3 Vérifier la responsive design
Dans Chrome : F12 → icône mobile (Ctrl+Shift+M) → testez différentes tailles

### 6.4 Checklist avant mise en ligne

- [ ] `index.html` est à la racine (pas dans un sous-dossier)
- [ ] Tous les chemins d'images sont relatifs (ex: `./images/photo.jpg` et non `/Users/...`)
- [ ] Le site se charge sans erreurs (F12 → Console → aucune erreur rouge)
- [ ] Les liens internes fonctionnent
- [ ] Le formulaire de contact (si présent) pointe vers la bonne adresse

---

## Commandes utiles pour les mises à jour futures

```bash
# Quand vous modifiez votre site, dans le Terminal :
cd "/Users/francoislozach/Desktop/SITE 2.0/SITE CLAUDE DESIGN"
git add .
git commit -m "Description de la modification"
git push
```
→ Le site se met à jour automatiquement sur Hostinger (si Option A).

---

## Résumé du flux

```
Claude Design (Cowork)
       ↓ export fichiers
Dossier local (SITE CLAUDE DESIGN)
       ↓ git push
GitHub (dépôt en ligne)
       ↓ déploiement automatique
Hostinger (site en ligne sur votre domaine)
```

---

*Guide créé le 08/05/2026 — Pour toute question, demandez à Claude dans Cowork.*
