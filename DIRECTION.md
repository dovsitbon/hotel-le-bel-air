# Direction artistique — Le Bel Air (site 07)

**Angle en une phrase** : le site se lit comme le générique d'un film français de 1988 tourné dans un hôtel chic de bord de Nationale 1 ; on y entre par le tableau des clés de la réception.

## Palette
| Rôle | Hex | Usage |
|---|---|---|
| Bleu nuit (fond dominant) | `#0F1A2A` | fonds, header, générique |
| Bleu nuit relevé | `#18263B` | panneaux, tableau des clés |
| Laiton | `#B08D57` | filets, clés, chiffres, focus (texte OK sur bleu nuit, ratio ≈ 5,6) |
| Laiton foncé | `#7A5C2E` | texte laiton sur fond crème (ratio ≈ 5,4) |
| Crème | `#F1E9DA` | texte sur nuit, sections claires |
| Rouge cerise | `#A51E2F` | accent rare : tampon « Tourné ici », bouton d'appel (texte crème, ratio ≈ 6,7) |

## Polices
- Titres : **Bodoni Moda** (variable, axe optique, romain + italique) — titres de film, chiffres des clés, crédits.
- Texte : **Jost** (variable) — géométrique années 20/70, élégante, très lisible.

## Structure de la page d'accueil (ordre)
1. Générique d'ouverture (overlay plein écran, ~3,5 s, sautable : bouton, Échap, clic ; une seule fois par session ; absent si `prefers-reduced-motion` ou sans JS).
2. Carton-titre : « Le Bel Air » en Bodoni géant, H1 complet « Hôtel, restaurant et bar à cocktails à Saint-Brice-sous-Forêt », crédits factuels qui défilent lentement dans une colonne étroite (adresse, téléphone, terrasse, parking, 1988).
3. Le tableau des clés : 3 clés laiton à pampille numérotées 1 / 2 / 3 — Dormir, Manger, Boire un verre — accrochées à une barre de réception.
4. « Une scène de cinéma » : bandeau sombre, crédits de fin façon générique (rôle | nom), lien vers la page.
5. Le renouveau : nouvelle équipe, décor refait, cocooning (section crème, asymétrique, emplacement photo).
6. Avis Google : 5 extraits, mise en page de critiques de presse sur une affiche (citations Bodoni italique, pas de cartes).
7. Événements privés : anniversaire, soirée romantique, groupe.
8. Infos pratiques condensées : adresse, statut ouvert/fermé, accès, carte au clic.

## Élément graphique signature
La **clé de chambre à pampille en laiton** (SVG dessiné à la main, chiffre gravé en Bodoni) utilisée comme navigation principale, et le **générique** (crédits rôle | nom) réutilisé comme système typographique pour les infos factuelles.

## Ce qui le distingue des 6 autres
- 01 MSA (signalétique routière jaune, Barlow) / 02 Garage Universel (casiers kraft, Plex) / 04 Mon Auto (carnet beige, Sora) : univers industriel ou automobile clair ; ici fond nuit, serif didone, ton cinéma.
- 03 Porte Bonheur (menu imprimé crème + rouge laque, Fraunces) : pas de pointillés de menu ni de crème dominant ; le crème n'est qu'une respiration.
- 05 O Conquistador (azulejos cobalt, Playfair italique) : aucune frise, aucun motif carrelage, Bodoni (pas Playfair).
- 06 De Grapp'En Verre (ardoise, affiches punaisées, Abril) : pas d'ardoise ni d'affiche punaisée ; les avis sont composés comme un carton de critiques, pas comme des affiches.
- Seul site dont l'accueil s'ouvre sur un générique et dont la navigation est un tableau de clés.

## Garde-fous
Aucune photo ni réplique du film, aucune mention laissant croire à un partenariat ; pas de néon lumineux (enseigne seulement dessinée au trait) ; pas de capitales espacées en étiquette systématique ; mouvement unique (générique + défilement des crédits), coupé sous `prefers-reduced-motion`.
