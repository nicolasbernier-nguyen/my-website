---
title: Recherche
sidebar_position: 4
---

# Engin de recherche

## Typesense DocSearch

Typesense est un moteur de recherche instantanée open source que l'ont peut auto-héberger sur nos serveurs ou utiliser la version SaaS hébergée [Typesense Cloud](https://cloud.typesense.org/).

Typesense DocSearch à deux composantes:
- [typesense-docsearch-scraper](https://github.com/typesense/typesense-docsearch-scraper) qui balaye notre site et index les données dans notre cluster Typesense et
- [docusaurus-theme-search-typesense](https://github.com/typesense/docusaurus-theme-search-typesense), le composant UI de la barre de recherche à ajouter au site Web.

Référez-vous au document concernant la [configuration et le lancement](./recherche-config-dev.md) de l'engin de recherche Typesense pour apprendre étape par étape comment éxécuter le scraper et installer le composant UI à votre site.

## Recherche locale

Il est possible d'utiliser un plugin de recherche locale pour les sites statiques où l'index est de petite taille et peu être téléchargé au navigateur de l'utilisateur.

### Configuration recherche locale

#### `@easyops-cn`

Pour installer l'engin de recherche locale [`easyops-cn`](https://github.com/easyops-cn/docusaurus-search-local), il suffit d'éxécuter le code suivant dans une console à partir du répertoire de votre site, puis ajouter un élément `themes` dans le fichier de configuration `docusaurus.config.js`.

```
// exécuter dans le répertoire de votre site
npm install --save @easyops-cn/docusaurus-search-local
```

```js title:"docusaurus.config.js"
const config = {
themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],  
};
module.export = config;
```