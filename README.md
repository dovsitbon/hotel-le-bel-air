# Hôtel Le Bel Air — site vitrine

Astro + Tailwind CSS v4, site statique. Polices auto-hébergées (Bodoni Moda, Jost).

## Lancer en local
```bash
npm install
npm run dev        # http://localhost:4321
```

## Construire et vérifier
```bash
npm run build      # génère dist/
npm run captures   # captures 390 px et 1440 px dans captures/ + tests (scroll, barre d'appel, statut, générique)
```
`npm run captures` régénère aussi `public/og.png` et `public/apple-touch-icon.png` (relancer `npm run build` ensuite).

## Déployer
Pousser le dépôt sur GitHub puis l'importer dans Vercel : Astro statique est détecté tout seul (aucun `vercel.json`). Après mise en ligne sur le domaine définitif, changer `site` dans `astro.config.mjs`, l'URL du sitemap dans `public/robots.txt` et les liens de `public/llms.txt`.

## Où changer quoi
| Quoi | Fichier |
|---|---|
| Adresse, téléphone, note Google, clé Web3Forms, coordonnées GPS, réseaux sociaux | `src/data/site.json` |
| Horaires (le statut « Ouvert / Fermé » et le JSON-LD se mettent à jour seuls) | `src/data/site.json` → `horaires.jours` |
| Carte du restaurant, cocktails, chambres et tarifs | `src/data/carte.json` |
| Avis affichés | `src/data/avis.json` |
| Textes des pages | `src/pages/*.astro` |
| Couleurs et polices | `src/styles/global.css` (bloc `@theme`) |
| Générique d'ouverture | `src/components/Generique.astro` |
| Photos | remplacer les composants `<PhotoSlot … />` par `<Image src={…} alt="…" />` d'`astro:assets` (photos dans `src/assets/`), voir `PHOTOS_A_PRENDRE.md` |

Tout ce qui reste à fournir est listé dans `A_COMPLETER.md` et marqué `[À CONFIRMER]` sur le site.
