# Conversation — Fix pages noires drlozach.fr
**Date :** 12 mai 2026  
**Session :** Fix missing website pages display

---

## Problème
3 pages affichaient un écran noir après un push :
- `drlozach.fr/faq.html`
- `drlozach.fr/chirurgie.html`
- `drlozach.fr/pathologies.html`

## Diagnostic
`shared.js` déclare en scope global :
```js
const { useState, useEffect, useRef } = React;
```
Les fichiers `faq-app.js`, `chirurgie-app.js` et `pathologies-app.js` re-déclaraient les mêmes variables avec `const` → `SyntaxError: Identifier 'useState' has already been declared` → React ne se monte pas → page noire.

## Cause racine
Un commit antérieur ("Perf: pre-compile JSX") avait ajouté ces déclarations en tête des 3 fichiers JS. Le site fonctionnait le soir avant ce commit, et était cassé le matin après le déploiement automatique Hostinger.

## Correction appliquée
Suppression des lignes dupliquées :
- `faq-app.js` : lignes 1-5 supprimées
- `chirurgie-app.js` : lignes 1-3 supprimées  
- `pathologies-app.js` : lignes 1-4 supprimées

## Commit pushé
```
commit 3fac849
Fix: supprimer re-déclaration hooks React (useState/useEffect) dans les 3 apps JS — page noire résolue
```

## Règle à retenir
**Ne jamais re-déclarer `useState`/`useEffect`/`useRef` dans un fichier JS si `shared.js` est chargé avant.** Ces variables sont déjà disponibles globalement. Le script inline ou le fichier app doit commencer directement par les données ou `function App()`.

## Backup site
`backup_site_2026-05-12.zip` — 32 Mo (sans vidéos ni .git)
