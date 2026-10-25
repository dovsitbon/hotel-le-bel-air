# Prompt Claude Code : site « Le Bel Air » (hôtel, restaurant, bar à cocktails, Saint-Brice-sous-Forêt)

Tu es un développeur front-end et directeur artistique senior. Crée le site vitrine complet du **Bel Air**, à Saint-Brice-sous-Forêt. Objectif business : faire connaître la nouvelle équipe et le restaurant / bar à cocktails, remplir les chambres, et exploiter une histoire que personne n'a : **c'est l'hôtel du film culte « Itinéraire d'un enfant gâté » de Claude Lelouch (1988), avec Jean-Paul Belmondo et Richard Anconina**.

## Fiche d'identité (informations vérifiées)
- **Nom** : Le Bel Air (fiche Google : « Hôtel LE BEL AIR saint brice sous forêt »)
- **Type** : hôtel + restaurant (cuisine méditerranéenne, plats frais, crêpes) + bar à cocktails avec grande terrasse
- **Adresse** : 67 avenue du Général de Gaulle, 95350 Saint-Brice-sous-Forêt (le long de l'ancienne Nationale 1)
- **Téléphone** : 09 50 51 08 86
- **Horaires** : non renseignés sur Google → `[À CONFIRMER]` (un annuaire indique le restaurant/bar ouvert jusqu'à 23h)
- **Note** : 4,2/5 sur ~38 avis Google (fiche Google non revendiquée → le signaler dans `A_COMPLETER.md`)
- **Changement récent** : nouveau propriétaire, **décor entièrement refait**, ambiance « cocooning »
- **Pratique** : parking facile, terrasse
- **Schema.org** : `Hotel` + `Restaurant` (ou `LodgingBusiness` avec `containsPlace` Restaurant/BarOrPub)

## L'histoire à raconter (sourcée)
- Wikipédia (« Itinéraire d'un enfant gâté ») : une partie du tournage a eu lieu à Saint-Brice-sous-Forêt, dans l'hôtel Le Bel-Air.
- RTBF (2023) : la scène culte « On dit bien… » a été tournée le long de la Nationale 1 à Saint-Brice-sous-Forêt, dans l'hôtel Le Bel-Air.
- Hôtel & Lodge : Belmondo et Anconina sont en tête-à-tête dans une chambre au deuxième étage du Bel Air.
→ Section « Une scène de cinéma » : raconte-le **avec tes propres mots, sans photo ni extrait du film** (droits), sans réplique longue du film, et sans laisser entendre un partenariat officiel. Une idée : proposer « la chambre du film » `[À CONFIRMER avec le propriétaire]`.

## Ce que disent les clients
Accueil très chaleureux, patron et équipe aimables, cuisine de qualité, plats frais et goûteux, prix corrects, décor magnifique refait à neuf, **terrasse apaisante**, cocktails « à tomber par terre », crêpes délicieuses, literie confortable, draps propres, parking accessible, idéal soirée romantique ou anniversaire.

Extraits d'avis utilisables (« Avis Google ») :
- « Enfin un bar à cocktails dans le coin ! Une superbe terrasse pour prendre un verre au soleil. Les cocktails sont à tomber par terre ! »
- « Le cadre est magnifique avec un très joli décor et une terrasse apaisante, et l'ambiance est au rendez-vous. »
- « Le décor est entièrement refait et très cocoon. Les prix sont corrects. »
- « Literie confortable, draps propres ! Parking accessible. Personnel accueillant. »
- « Endroit mythique… pour les amoureux du film Itinéraire d'un enfant gâté. »

⚠️ Plusieurs vieux avis négatifs datent d'avant le changement de propriétaire : ne les cite pas, n'y fais pas allusion.

## Direction artistique
- Inspiration : **hôtel de bord de nationale des années 70–80 version chic**, cinéma français, enseigne néon *dessinée* (pas d'effet néon flashy), affiches de film typographiques, clé de chambre à pampille.
- Palette : vert sapin ou bleu nuit, crème, laiton/or, rouge cerise en accent.
- Typo : une serif cinéma/Art déco pour les titres (ex. Bodoni Moda, Playfair Display) + une sans élégante.
- Idée signature : un **générique de film** en intro discrète (le nom apparaît comme un titre de film), et des numéros de chambre en laiton comme éléments graphiques de navigation.

## Structure
1. **Accueil** : « Hôtel, restaurant et bar à cocktails à Saint-Brice-sous-Forêt », 3 entrées claires : Dormir / Manger / Boire un verre.
2. **Les chambres** : types, équipements, tarifs `[À CONFIRMER]`, bouton « Demander une disponibilité » (formulaire + tel:). Pas de moteur de réservation inventé.
3. **Le restaurant** : cuisine méditerranéenne, plats frais, crêpes, carte `[À CONFIRMER]` dans `src/data/carte.json`.
4. **Le bar & la terrasse** : cocktails (carte `[À CONFIRMER]`), terrasse au soleil, soirées.
5. **Une scène de cinéma** : l'histoire du film (voir plus haut).
6. **Le renouveau** : nouvelle équipe, décor refait.
7. **Avis** : extraits ci-dessus.
8. **Événements privés** : anniversaires, soirées romantiques, groupes.
9. **Infos pratiques** : adresse, accès (N1, A1, gare de Sarcelles–Saint-Brice `[À CONFIRMER]`), parking, horaires `[À CONFIRMER]`, carte.

---

## Règles communes (à respecter strictement)

### 1. Avant de coder
- Liste les skills et plugins disponibles dans ta session et **utilise toutes celles qui s'appliquent** : design frontend (ex. `frontend-design`), tests navigateur / captures (Playwright, `webapp-testing`), images, déploiement, etc. Dis-moi lesquelles tu utilises.
- Propose-moi en 10 lignes max la direction artistique (palette en hex, 2 polices, ambiance, 1 idée de mise en page signature) **puis enchaîne sans attendre ma validation**.

### 2. Stack technique
- **Astro + Tailwind CSS**, site statique, zéro framework JS lourd côté client (îlots JS seulement si nécessaire).
- Polices auto-hébergées (`@fontsource`), pas d'appel Google Fonts.
- Images en AVIF/WebP via `astro:assets`, `loading="lazy"` sauf la première image.
- Déploiement prévu sur **Vercel** (ajoute la config si besoin). Si un accès Vercel est connecté dans ta session, fais un déploiement **preview** et donne-moi l'URL.
- Objectif Lighthouse : ≥ 95 sur les 4 scores, mobile.

### 3. Design qui NE FAIT PAS « site généré par IA » (priorité n°1)
Interdit :
- dégradés violet/bleu, « glassmorphism », blobs flous en fond, néons, ombres molles partout ;
- la grille « 3 cartes avec une icône + titre + 2 lignes » ;
- les emojis comme icônes, les icônes génériques type Heroicons/Lucide posées partout ;
- Inter/Poppins/Montserrat seules, tout centré, tout arrondi en `rounded-2xl` ;
- les phrases creuses : « Bienvenue chez… », « Découvrez… », « Plongez dans… », « Votre partenaire de confiance », « Une expérience unique », « Notre passion, votre satisfaction » ;
- les fausses stats (« +500 clients satisfaits »), les faux témoignages, les photos de banque d'images clichés (poignée de main, personnes en costume qui sourient).

À faire :
- une **identité propre au lieu** (voir la direction artistique plus haut), avec un ou deux partis pris forts : typographie éditoriale, mise en page asymétrique, détails réels (ardoise, ticket, plaque, carte routière, numéro de rue en très grand…) ;
- des textes **courts, concrets, à la voix du commerçant**, avec de vrais détails (horaires, plats, adresses, noms de rues, parkings) ;
- du rythme : alterner sections pleines et aérées, une grande typo, des espaces généreux ;
- des micro-interactions sobres (hover, apparition légère au scroll), rien de plus ;
- `prefers-reduced-motion` respecté.

### 4. Contenu : zéro invention
- Utilise **uniquement** les informations fournies dans ce prompt.
- Tout ce qui manque (prix, plats exacts, photos, nom du gérant, SIRET…) = un marqueur visible **`[À CONFIRMER]`** et une entrée dans le fichier `A_COMPLETER.md` à la racine.
- Avis clients : n'utilise **que** les extraits fournis, attribués « Avis Google ». Jamais d'avis inventé, jamais de nom inventé.

### 5. Photos
- **Ne télécharge pas et n'intègre pas** de photos Google Maps / Facebook / Instagram (droits d'auteur des clients et du commerce).
- Mets des emplacements propres (bloc couleur + légende du cliché attendu, pas de gris « placeholder ») et crée `PHOTOS_A_PRENDRE.md` : la liste précise des photos à faire (cadrage, lumière, format), pour que je les prenne moi-même chez le commerçant.

### 6. SEO local (indispensable)
- `<html lang="fr">`, title + meta description uniques, Open Graph, favicon.
- **JSON-LD schema.org** adapté (type indiqué plus haut) avec nom, adresse, téléphone, horaires `openingHoursSpecification`, géolocalisation, `sameAs` (réseaux sociaux).
- Nom / adresse / téléphone identiques partout (NAP), pied de page compris.
- Carte : iframe Google Maps chargée **au clic** (façade légère) pour ne pas plomber la perf.
- `sitemap.xml`, `robots.txt`, URLs propres, H1 unique, balises `alt` descriptives.
- Mots-clés locaux naturels : la ville + les communes voisines (Groslay, Montmorency, Saint-Brice-sous-Forêt, Sarcelles, Deuil-la-Barre, Montmagny, Domont, Ézanville).

### 7. Conversion et mobile
- Mobile d'abord. **Bouton d'appel fixe en bas d'écran sur mobile** (`tel:`), + bouton itinéraire (lien Google Maps).
- Horaires lisibles, avec indication « Ouvert maintenant / Fermé » calculée en JS léger (fuseau Europe/Paris).
- Accessibilité AA : contrastes, focus visibles, navigation clavier, tailles de cibles ≥ 44 px.

### 8. Légal
- Page **Mentions légales** (éditeur, hébergeur Vercel, SIRET `[À CONFIRMER]`) et **Politique de confidentialité**.
- Pas de traceur, donc pas de bandeau cookies. Si un formulaire existe : consentement RGPD + envoi via un service sans backend (ex. Formspree / Web3Forms, clé `[À CONFIRMER]`).

### 9. Livraison
1. `npm run build` sans erreur ni warning.
2. Captures Playwright **mobile (390 px) et desktop (1440 px)** de chaque page ; regarde-les toi-même et corrige ce qui fait « template » ou « IA » avant de me rendre la main.
3. Un `README.md` court : lancer en local, déployer, où changer textes / photos / horaires.
4. Les fichiers `A_COMPLETER.md` et `PHOTOS_A_PRENDRE.md`.
5. Un résumé final de 10 lignes max : ce qui est fait, ce qui manque.
