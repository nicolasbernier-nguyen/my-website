---
sidebar_position: 2
---

# `themeConfig`

Le champs `themeConfig` dans le fichier de configuration `docusaurus.config.js` vous permets de configurer et personaliser d'avantage votre site avec la [barre de navigation](./themeConfig.md#barre-de-navigation), la [barre latérale](./themeConfig.md#barre-latérale) et le [bas de page](./themeConfig.md#bas-de-page). 

## Barre de navigation

Voici un exemple de configuration de la barre de navigation:

```js title="docusaurus.config.js"
const config = {
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'titre',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo_light.png',
          srcDark: 'img/logo_dark.png',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'doc-1',
            position: 'right',
            label: 'Label 1'
          },
          {
            to: '/dossier/dossier',
            position: 'left',
            label: 'Label 2'
          },
        ],
      },
    }),
}
```

- `title` - le titre de l'onglet qui mène à la page d'accueil. Consultez [lien] pour en apprendre d'avantage sur la personalisation de la page d'accueil

- `logo` - le logo de votre site. Vous pouvez définir une image de thème clair et sombre avec `src` et `scrDark` respectivement

- `hideOnScroll` - une option qui cache la barre de navigation lorsque vous défiller vers le bas.

- `items` - une collection d'onglets sur la barre de navigation
    - `label` - le titre de votre onglet
    - `position` - la position de l'onglet, soit à gauche ( `left`) soit à droite (`right`) 
    - `docId` - le _ID_ du document qui agiera comme document d'accueil lorsque vous cliquer sur l'onglet de la barre de navigation. Voir [frontmatter](../info-doc/fonctions-md/fonctions-md.mdx#frontmatter)
    - `type` - le type de contenu couvert sous l'onglet. Dans notre cas toujours mettre `doc`

:::info
Le deuxième objet sous `items` est un objet qui réfère à une instance du plugin `plugin-content-docs`. Le champ `to` pointe vers le document d'introduction du dossier `dossier`. Voir ce [lien](../info-doc/docs-plugins.md) pour plus d'information sur le plugin `plugin-content-docs`.
:::


## Barre latérale

Voici un exemple de configuration de la barre latérale:

```js title="docusaurus.config.js"
const config = {
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true
        },
      },
    }),
}
```

- `hideable` - une option qui permet de cacher la barre latérale

- `autoCollapseCategories` - une option qui referme les catégories de la barre latérale automatiquement lorsque vous en ouvrez une autre

## Bas de page

Voici un exemple de configuration du bas de page:

```js title="docusaurus.config.js"
const config = {
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Organisation XYZ`,
        links: [
          {
            title: 'Titre',
            items: [
              {
                label: 'Label 1',
                to: 'docs',
              },
              {
                label: 'Label 2',
                to: 'docs/installation',
              },
              {
                label: 'Label 3',
                href: 'https://lien-externe.com',
              },
            ],
          }
        ],
      },
    }),
}
```

- `style` - le style du bas de page, soit clair (`light`) ou foncé (`dark`)

- `copyright` - les droits d'auteurs de votre site web statique

- `title` - le titre de la collection `items`

- `items` - une collection d'objets en bas de page qui peuvent vous rediriger vers des liens sur le site lui-même ou des liens externes
    - `label` - le titre du lien
    - `to` - le chemin du lien vers un document sur le site
    - `href` - un lien externe
