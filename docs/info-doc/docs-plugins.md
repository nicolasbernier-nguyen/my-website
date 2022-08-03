---
sidebar_position: 4
---

# Instances de plugins

Il est possible de vouloir héberger plusieurs ensembles distincts de documentation. Dans ce cas,  il faut faire appel au plugin `plugin-content-docs`.

## Configuration

Supposons que vous ayez deux documentations:

- Produit
- Communauté

Dans ce cas vous devez utiliser deux instances du plugin `plugin-content-docs`

:::caution
Si vous utilisez le preset `@docusaurus/preset-classic`, une instance de plugin docs est incluse.
:::

Avec l'utilisation du preset classique:

```js title = "docusaurus.config.js"
const config = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // id: 'produit', // omis => instance par défaut
          path: 'produit',
          routeBasePath: 'produit',
          sidebarPath: require.resolve('./sidebarsProduit.js'),
          // ... autres options
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'communauté',
        path: 'communauté',
        routeBasePath: 'communauté',
        sidebarPath: require.resolve('./sidebarsCommunauté.js'),
        // ... autres options
      },
    ],
  ],
};
module.exports = config;
```

Sans le preset classique:

```js title = "docusaurus.config.js"
const config = {
plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        // id: 'product', // omis => instance par défaut
        path: 'produit',
        routeBasePath: 'produit',
        sidebarPath: require.resolve('./sidebarsProduit.js'),
        // ... autres options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'communauté',
        path: 'communauté',
        routeBasePath: 'communauté',
        sidebarPath: require.resolve('./sidebarsCommunauté.js'),
        // ... autres options
      },
    ],
  ],
};
module.exports = config;
```

## Chemins versionnés

**En Construction**

## Élément de la barre de navigation

**En Construction**