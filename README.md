# Portfolio Professionnel - Jonathan Lognon

Portfolio moderne et professionnel développé avec React, Tailwind CSS et Framer Motion.

## 🚀 Technologies utilisées

- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Outil de build rapide et moderne
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Bibliothèque d'animations
- **Lucide React** - Icônes modernes

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 🎨 Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Animations fluides avec Framer Motion
- ✅ Sections complètes : Hero, À propos, Compétences, Projets, Expérience, Contact
- ✅ Formulaire de contact fonctionnel
- ✅ Navigation smooth scroll
- ✅ Badge de vérification professionnel
- ✅ Optimisé pour mobile et desktop

## 📝 Personnalisation

### Modifier les informations personnelles

Éditez les composants dans `src/components/` pour mettre à jour :
- Informations de contact
- Projets
- Compétences
- Expériences

### Couleurs

Les couleurs peuvent être modifiées dans `tailwind.config.js` :
- `primary` : Couleur principale (bleu)
- `accent` : Couleur d'accent (violet)

### Formulaire de contact

Le formulaire de contact est actuellement en mode simulation. Pour l'intégrer avec un service réel :

1. **Formspree** : Ajoutez votre endpoint Formspree
2. **API personnalisée** : Intégrez votre backend
3. **Firebase** : Utilisez Firebase Functions

Modifiez la fonction `handleSubmit` dans `src/components/Contact.jsx`.

## 📄 Structure du projet

```
src/
├── components/
│   ├── Header.jsx      # Navigation
│   ├── Hero.jsx        # Section d'accueil
│   ├── About.jsx       # À propos
│   ├── Skills.jsx      # Compétences techniques
│   ├── Projects.jsx   # Projets réalisés
│   ├── Experience.jsx # Expérience & Formation
│   ├── Contact.jsx    # Formulaire de contact
│   └── Footer.jsx     # Pied de page
├── App.jsx            # Composant principal
├── main.jsx           # Point d'entrée
└── index.css          # Styles globaux
```

## 🌐 Déploiement

### Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Déployez le dossier dist/
```

### GitHub Pages

Utilisez `gh-pages` pour déployer automatiquement.

## 📧 Contact

- **Email** : levilognon7@gmail.com
- **GitHub** : [@jonathan-lognon](https://github.com/jonathan-lognon)
- **LinkedIn** : [Jonathan Lognon](https://linkedin.com/in/jonathan-lognon)

## 📜 Licence

Ce projet est sous licence MIT.

---

Développé avec ❤️ par Jonathan Lognon

