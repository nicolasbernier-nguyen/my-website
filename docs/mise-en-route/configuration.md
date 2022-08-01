---
sidebar_position: 2
---

 # Configuration du site

 La configuration de votre site ce fait à partir du fichier `docusaurus.config.js`. La configuration peut être classée en trois catégories:

 - [Métadonnées du site](configuration.md/#métadonnées-du-site)
 - [Configuration de déploiement](configuration.md/#configuration-de-déploiement)
 - [Thème et configuration prédéfinie](configuration.md/#thème-plugins-et-configuration-prédéfinie)

Pour une référence en détail des champs obligatoires et optionels de la configuration du site, vous pouvez vous référer au document `docusaurus.config.js`(lien)

<details>
<summary>Un exemple de fichier de configuration</summary>
Par défault le fichier de configuration aura l'air de ceci:

```js title="docusaurus.config.js"
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Titre',
  tagline: 'tagline',
  url: 'http://exemple.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'Organization XYZ', // Usually your GitHub org/user name.
  projectName: 'projet-xyz', // Usually your repo name.

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
            sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false, // mode documents-seulement
      }),
    ],
  ],

  plugins: [
    'content-docs'
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true
        },
      },
      navbar: {
        title: 'Accueil',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo_light.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Item 1'
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Équipe Interface Client (IC)`,
      },
    }),
};

module.exports = config;
```
</details>

## Métadonnées du site

Les métadonnées du site contiennent les métadonnées globales et essentielles tel que `title`, `url`,`baseUrl` et `favicon`. Ces métadonnées représente le titre de votre site, l'icône de l'onglet du navigateur et l'URL de votre site lorsque qu'il est déployé

## Configuration de déploiement

Les configurations de déploiement `projectName`, `organizationName` et optionnellement `deploymentBranch` sont utilisées lors du déploiement de votre site avec la commande `deploy`. Vous pouvez consulter la [documentation sur le déploiement](../deploy/deploy.md) pour en savoirs d'avantage.

## Thème, plugins et configuration prédéfinie

Vous pouvez ajouter des **thèmes**, des **plugins** et des **presets** à votre site dans les champs respectifs `themes`, `plugins` et `presets`. 

```js title="docusaurus.config.js"
const config = {
  plugins: [
    '@docusaurus/plugin-content-docs',
    '@docusaurus/plugin-content-pages'
  ],
  themes: ['@docusaurus/theme-classic'],
};
module.export = config;
```

:::tip
Docusaurus prend en charge les **raccouris de modules**, ce qui vous permets de simplifier la syntaxe ci-dessus comme suit:

```js title="docusaurus.config.js"
const config = {
  plugins: ['content-docs', 'content-pages'],
  themes: ['classic'],
};
module.export = config;
```
:::

Vous pouvez aussi spécifier des options pour un plugin:

```js title="docusaurus.config.js"
const config = {
  plugins:[
    [
      'content-docs',
      {
        id: 'profils',
        path: 'profils',
        routeBasePath: 'profils',
        sidebarPath: require.resolve('./sidebars.js')
        //...
      }
    ]
  ]
};
module.export = config;
```

Pour spécifier des options pour un plugin ou un thème fournit dans une configuration prédéfinie, passez les options dans le champs `presets`. Ici, `docs` fait référence à `@docusaurus/plugin-content-docs` et `theme`, `@docusaurus/theme-classic`.

```js title="docusaurus.config.js"
const config = {
  presets: [
    'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')]
        }
      }),
  ]
};
module.export = config;
```

Vous pouvez configurer plus en détail votre site à l'aide du champs `themeConfig`. Pour plus d'information, visitez la documentation sur [`themeConfig`](./themeConfig.md).