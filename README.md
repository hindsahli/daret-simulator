# Daret — Simulateur de cercle d’épargne

## Présentation du projet

Daret est une application web monopage qui permet de simuler un cercle d’épargne, un système traditionnel dans lequel plusieurs participants versent régulièrement la même somme d’argent. À chaque tour, un participant reçoit la totalité de la cagnotte, jusqu’à ce que chaque membre ait reçu son tour.

L’objectif du projet est de remplacer la gestion manuelle d’une daret par un outil simple permettant de configurer un cercle, de gérer ses participants et de générer un calendrier des tours.

## Objectifs pédagogiques

- Manipuler le DOM avec JavaScript.
- Créer, modifier et supprimer des éléments HTML dynamiquement.
- Gérer les événements utilisateur avec `addEventListener`.
- Utiliser la délégation d’événements.
- Valider les formulaires et afficher des messages d’erreur accessibles.
- Organiser le code avec des fonctions réutilisables et des fonctions pures pour les calculs.
- Utiliser Git et GitHub pour gérer les branches, les commits et les Pull Requests.

## Technologies utilisées

- HTML5
- Tailwind CSS
- JavaScript
- Git et GitHub

Aucun framework JavaScript ni aucune bibliothèque externe de dates ne sont nécessaires.

## Fonctionnalités

### US-01 — Paramétrer un cercle

- Saisir le nom du cercle.
- Définir la cotisation par tour en MAD.
- Choisir la périodicité : hebdomadaire, tous les 15 jours ou mensuelle.
- Définir la date de début.
- Valider les champs avec JavaScript et afficher des messages d’erreur.

### US-02 — Gérer les participants

- Afficher trois champs de participants au démarrage.
- Ajouter des participants, jusqu’à un maximum de 20.
- Retirer des participants, avec un minimum de 2.
- Mettre à jour automatiquement le compteur de participants.
- Utiliser la délégation d’événements pour gérer les boutons « Retirer ».
- Vérifier que chaque prénom contient entre 2 et 30 caractères.

### US-03 — Calculer le cercle

**En cours de développement.**

Cette fonctionnalité doit calculer et afficher :

- Le montant reçu par chaque bénéficiaire.
- Le total versé par chaque participant sur l’ensemble du cycle.
- Le nombre total de tours.
- La date du premier et du dernier tour.

Les calculs seront effectués dans des fonctions pures, indépendantes du DOM.

### Fonctionnalités prévues

- **US-04 :** Générer le calendrier des tours.
- **US-05 :** Choisir l’ordre des bénéficiaires ou tirer cet ordre au sort.
- **US-06 :** Suivre les tours terminés et le prochain tour.
- **US-07 :** Afficher le détail d’un tour dans une fenêtre de dialogue.
- **US-08 :** Réinitialiser le simulateur.

## Installation et lancement

1. Cloner le dépôt :

   ```bash
   git clone https://github.com/hindsahli/daret-simulator.git
   ```

2. Accéder au projet :

   ```bash
   cd daret-simulator
   ```

3. Installer les dépendances :

   ```bash
   npm install
   ```

4. Lancer le projet avec la commande prévue dans `package.json`.

   Vérifier les scripts disponibles avec :

   ```bash
   npm run
   ```

   Si le projet utilise un script `dev`, lancer :

   ```bash
   npm run dev
   ```

## Structure du projet

```text
daret-simulator/
├── assets/
│   └── style.css
├── src/
│   ├── app.js
│   └── input.css
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

Le fichier `index.html` contient la structure de l’interface. Le fichier `src/app.js` gère les interactions, les validations et les calculs du simulateur.

## Workflow Git

Le développement est organisé autour d’une branche par User Story.

Exemple :

```bash
git switch main
git pull origin main
git switch -c feature/us-03
```

Les commits suivent la convention Conventional Commits :

```text
feat: add participant management
fix: correct form validation
docs: update project README
refactor: simplify calculation functions
```

Chaque fonctionnalité est proposée dans une Pull Request avant son intégration dans la branche principale.

## État d’avancement

- [x] US-01 — Paramétrage du cercle
- [x] US-02 — Ajout et retrait des participants
- [ ] US-03 — Calcul du cercle
- [ ] US-04 — Génération du calendrier
- [ ] US-05 — Choix de l’ordre des tours
- [ ] US-06 — Suivi de l’avancement
- [ ] US-07 — Détail d’un tour
- [ ] US-08 — Réinitialisation

*Les fonctionnalités cochées correspondent à l’avancement du développement ; leur conformité complète au cahier des charges reste à vérifier.*

## Auteur

Projet individuel réalisé dans le cadre d’un exercice pédagogique de développement web JavaScript.

Dépôt GitHub : https://github.com/hindsahli/daret-simulator
