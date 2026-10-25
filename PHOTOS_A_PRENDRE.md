# Photos à prendre au Bel Air

Règles générales : photos prises par vous (ou un photographe mandaté), jamais reprises de Google Maps, Facebook ou Instagram. Aucune image du film. Clients de dos ou flous, sans visage reconnaissable sans accord écrit. Format JPEG ou HEIC en pleine résolution ; le site les convertit en AVIF/WebP via `astro:assets`. Horizon droit, pas de flash, pas de filtre.

| # | Où sur le site | Sujet | Cadrage | Lumière | Format |
|---|---|---|---|---|---|
| 1 | Accueil, « Nouvelle équipe, décor refait » | La salle refaite | Vue large depuis l'entrée, tables dressées, on doit lire le décor | Soir, lumières de la salle allumées | Vertical 4:5 |
| 2 | Chambres | Une chambre refaite | Depuis la porte, lit fait au centre, fenêtre visible | Jour, lumière naturelle, lampes de chevet allumées | Horizontal 3:2 |
| 3 | Chambres (option) | Détail literie / draps | Plan serré sur la tête de lit et les draps | Lumière naturelle douce | Horizontal 3:2 |
| 4 | Restaurant | Une assiette du moment | Trois quarts, assiette nette, fond de salle flou | Lumière naturelle près d'une fenêtre | Horizontal 4:3 |
| 5 | Restaurant | Les crêpes | Vue de dessus, crêpe pliée sur une table de terrasse | Jour, ombre douce | Carré 1:1 |
| 6 | Bar & terrasse | Un cocktail au comptoir | Verre au premier plan, bar et bouteilles flous derrière | Soir, éclairage du bar | Vertical 4:5 |
| 7 | Bar & terrasse | La terrasse au soleil | Vue large, tables occupées de dos | Fin d'après-midi, soleil rasant | Horizontal 3:2 |
| 8 | Événements | Une table dressée pour un groupe | Longue table, bougies, avant l'arrivée des invités | Soir | Horizontal 4:3 |
| 9 | Partage (Open Graph, optionnel) | La façade et l'enseigne | De l'autre côté de l'avenue, façade entière | Heure bleue, enseigne allumée | Horizontal 1200×630 |
| 10 | Le film (optionnel) | Le couloir ou la porte d'une chambre du 2e étage | Plan serré, porte et numéro | Lumière du couloir | Horizontal 3:2 |

Une fois les photos prêtes : les mettre dans `src/assets/photos/` et remplacer chaque `<PhotoSlot … />` par `<Image src={…} alt="description précise" />` (la première image visible sans `loading="lazy"`).
