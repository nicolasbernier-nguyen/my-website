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

Chaque instance de plugin stockera les documentations versionnées dans un dossier distinct.

L'instance de plugin par défaut utilisera ces chemins :

- `website/versions.json`
- `website/versioned_docs`
- `website/versioned_sidebars`

Les autres instances de plugin (avec un attribut id ) utiliseront ces chemins :

- `website/[pluginId]_versions.json`
- `website/[pluginId]_versioned_docs`
- `website/[pluginId]_versioned_sidebars`

## Taguer une nouvelle version

Chaque instance de plugin aura sa propre commande CLI pour taguer une nouvelle version. Ils sont alors affichés si vous vous exécutez :

```
npm run docusaurus -- --help
```

Pour la version de l'instance de product/par défaut :

```
npm run docusaurus docs:version 1.0.0
```

Pour la version de l'instance de community :

```
npm run docusaurus docs:version:community 1.0.0
```

## Éléments de la barre de navigation

Chaque élément du thème lié à la documentation prend un attribut facultatif `docsPluginId`.
Par exemple, si vous voulez avoir une liste déroulante pour chaque SDK mobile (iOS et Android), vous pouvez faire :

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'ios',
        },
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'android',
        },
      ],
    },
  },
};
```