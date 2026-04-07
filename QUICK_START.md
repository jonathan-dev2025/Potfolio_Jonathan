# 🚀 Guide de Démarrage Rapide

## Installation et Lancement

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir dans le navigateur
# Le site sera accessible sur http://localhost:5173
```

## 📝 Personnalisation Rapide

### 1. Modifier vos informations de contact

Éditez `src/components/Contact.jsx` :
- Ligne 19 : Remplacez `jonathan.lognon@example.com` par votre email
- Ligne 89 : Mettez à jour les liens sociaux (GitHub, LinkedIn, WhatsApp)

### 2. Ajouter vos projets réels

Éditez `src/components/Projects.jsx` :
- Remplacez les projets d'exemple par vos vrais projets
- Ajoutez vos liens GitHub et démos
- Personnalisez les descriptions et technologies

### 3. Mettre à jour vos compétences

Éditez `src/components/Skills.jsx` :
- Ajustez les niveaux de compétences (1-5 étoiles)
- Ajoutez ou supprimez des technologies
- Personnalisez les catégories

### 4. Intégrer le formulaire de contact

Le formulaire est actuellement en mode simulation. Pour l'activer :

**Option 1 : Formspree (Recommandé pour débuter)**
1. Créez un compte sur [Formspree](https://formspree.io)
2. Créez un nouveau formulaire
3. Dans `src/components/Contact.jsx`, remplacez la fonction `handleSubmit` :

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  const response = await fetch('https://formspree.io/f/VOTRE_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  
  if (response.ok) {
    setSubmitStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
  } else {
    setSubmitStatus('error')
  }
  
  setIsSubmitting(false)
}
```

**Option 2 : Votre propre API**
- Intégrez votre endpoint backend dans `handleSubmit`

### 5. Ajouter votre CV

1. Placez votre fichier CV dans le dossier `public/`
2. Renommez-le `cv-jonathan-lognon.pdf`
3. Le bouton "Télécharger mon CV" dans `Hero.jsx` fonctionnera automatiquement

### 6. Personnaliser les couleurs

Éditez `tailwind.config.js` pour changer les couleurs du thème :
- `primary` : Votre couleur principale
- `accent` : Votre couleur d'accent

## 🌐 Déploiement

### Vercel (Recommandé - Gratuit)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Netlify

1. Connectez votre repository GitHub
2. Configurez :
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Déployez !

## ✅ Checklist avant mise en ligne

- [ ] Toutes les informations de contact sont à jour
- [ ] Les liens GitHub et LinkedIn sont corrects
- [ ] Les projets sont personnalisés avec vos vrais projets
- [ ] Le formulaire de contact est fonctionnel
- [ ] Le CV est ajouté dans le dossier public
- [ ] Les images de projets sont ajoutées (optionnel)
- [ ] Le site est testé sur mobile et desktop

## 🎨 Améliorations futures possibles

- Ajouter des images réelles pour les projets
- Intégrer un blog
- Ajouter un mode sombre
- Intégrer Google Analytics
- Ajouter des animations supplémentaires
- Optimiser les performances (lazy loading, etc.)

---

Bon développement ! 🚀

