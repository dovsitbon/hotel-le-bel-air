# À compléter avant mise en ligne

Chaque point correspond à un marqueur `[À CONFIRMER]` visible sur le site (ou à une donnée volontairement absente).

## Informations de base (`src/data/site.json`)
- [ ] **Horaires** du restaurant et du bar, jour par jour (un annuaire indique « jusqu'à 23 h », non vérifié). Tant qu'ils sont vides, le site affiche « Horaires à confirmer, appelez-nous » au lieu du statut Ouvert / Fermé.
- [ ] **Horaires de la réception** de l'hôtel (arrivée / départ).
- [ ] **Clé Web3Forms** (`web3formsKey`) : sans elle, les formulaires affichent un message invitant à appeler. Créer la clé sur web3forms.com avec l'e-mail de l'hôtel.
- [ ] **E-mail** de contact éventuel.
- [ ] **Coordonnées GPS** (`geo` : `{ "@type": "GeoCoordinates", "latitude": …, "longitude": … }`) pour le JSON-LD.
- [ ] **Réseaux sociaux** (`sameAs` : Instagram, Facebook…).
- [ ] **Fiche Google non revendiquée** : la revendiquer sur Google Business Profile (catégories Hôtel + Restaurant + Bar à cocktails, horaires, photos, lien vers le site). Mettre à jour la note (4,2 / ~38 avis) si elle évolue.

## Chambres (`src/data/carte.json` → `chambres`, page Chambres)
- [ ] Types de chambres, couchage, tarifs par nuit.
- [ ] Équipements de chaque chambre (ne rien afficher qui ne soit pas vérifié).
- [ ] « La chambre du film » : peut-on la réserver ? Laquelle ? (à valider avec le propriétaire)

## Restaurant et bar (`src/data/carte.json`)
- [ ] Plats du moment et prix.
- [ ] Crêpes et prix.
- [ ] Carte des cocktails et prix.
- [ ] Programme des soirées à thème, s'il y en a.

## Événements
- [ ] Capacité (salle, terrasse) et formules pour les groupes.

## Accès (page Infos pratiques)
- [ ] Sortie d'autoroute A1 conseillée.
- [ ] Gare de Sarcelles – Saint-Brice : ligne et temps de trajet à pied.

## Le film (page « Une scène de cinéma »)
- [ ] Liens exacts des articles RTBF (2023) et Hôtel & Lodge cités comme sources.
- [ ] Le nom du propriétaire / de la nouvelle équipe pour signer le bloc « Le renouveau » (accueil).

## Légal (`src/pages/mentions-legales.astro`, `confidentialite.astro`)
- [ ] Raison sociale, forme juridique, capital, SIRET, TVA intracommunautaire, directeur de la publication.
- [ ] Nom de l'exploitant (responsable du traitement).
- [ ] Durée de conservation des demandes envoyées par formulaire.

## Photos
- [ ] Voir `PHOTOS_A_PRENDRE.md`.

## Après déploiement
- [ ] Remplacer `https://hotel-le-bel-air.vercel.app` par le domaine final (`astro.config.mjs`, `public/robots.txt`, `public/llms.txt`).
- [ ] Déclarer le sitemap dans Google Search Console.
