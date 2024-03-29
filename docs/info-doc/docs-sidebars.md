---
sidebar_position: 2
---

# Barre latérale

Les barres latérales vous permettent de naviguer facilement à travers la documentation de votre site web. Pour utiliser des barres latérales sur votre site, il faut:

1. Définir un fichier qui exporte un dictionnaire d'objets de la barre latérale
2. Passer ce fichier dans le plugin `@docusaurus/preset-classic`.

```js title="docusaurus.config.js"
presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
      }),
    ],
  ],
```
:::note
Si vous utilisez aussi le plugin [`@docusaurus/plugin-content-docs`](./docs-plugins.md), il faut aussi spécifier le fichier de sidebar à utiliser.
```js title="docusaurus.config.js"
plugins: [
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'docId1',
      path: 'dossier1',
      routeBasePath: 'dossier1',
      sidebarPath: require.resolve('./sidebars.js')
    }
  ],
]
```
:::

## Barre latérale autogénérée

Par défaut, Docusaurus génère une barre latérale automatiquement selon votre structure de fichier dans `docs`.

```js title="sidebars.js"
module.exports = {
  myAutogeneratedSidebar: [
    {
      type: 'autogenerated',
      dirName: '.', // '.' signifie le dossier docs courant
    },
  ],
};
```
<details>
<summary>Un exemple de barre latérale autogénérée</summary>
Considérez la structure de fichier suivante:

```bash
docs
├── dossier1
│   └── doc1-1.md
│   └── doc1-2.md
├── dossier2
│   └── doc2-2.md
├── dossier3
│   └── doc3-1.md
│   └── doc3-2.md
│   └── doc3-3.md
```

Une barre latérale générée automatiquement selon la structure de fichiers ci-dessus aura l'air de ceci: 

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: useBaseUrl('/img/arborescence_light.png#center'),
    dark: useBaseUrl('/img/arborescence_dark.png#center'),
  }}
/>
```

</details>

### Document d'index de catégorie

Docusaurus peut lier automatiquement une catégorie à son document d'index. C'est-à-dire, lorsque l'utilisateur clique sur la catégorie dans la barre latérale, il sera redirigé vers le document en question. Pour se faire, le document d'index doit suivre l'une des conventions de nommages suivantes: 
- Même nom que le dossier parent: `docs/intro/intro.md`.
- Nommé `README` (non sensible à la casse): `docs/intro/readme.mdx`
- Nommé `index` (non sensible à la casse): `docs/intro/index.md`

### Métadonnées de l'élément doc

Vous pouvez insérer des métadonnées à votre document par le biais du [frontmatter](./fonctions-md/fonctions-md.mdx#frontmatter). Vous pouvez spécifier la position et le titre du document dans la barre latérale avec `sidebar_position = #` et `sidebar_label = titre`, respectivement.

```md title="exemple.md"
---
sidebar_position = 2
sidebar_label = Exemple
---

# Titre 1
 
Lorem Ipsum
```

### Métadonnées de l'élément catégorie

Ajouter un fichier `_category_.json` ou `_category_.yml` dans le dossier respectif. Vous pouvez spécifier les métadonnées de la catégorie ainsi que les métadonnées de la `position`.  `label`, `className`, `position` et `customProps` seront par défaut les valeurs respectives du doc lié à la catégorie, s'il y en a une.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JSON">

```json title="docs/tutorials/_category_.json"
{
  "position": 2.5,
  "label": "Tutorial",
  "collapsible": true,
  "collapsed": false,
  "className": "red",
  "link": {
    "type": "generated-index",
    "title": "Tutorial overview"
  },
  "customProps": {
    "description": "This description can be used in the swizzled DocCard"
  }
}
```

</TabItem>
<TabItem value="YAML">

```yml title="docs/tutorials/_category_.yml"
position: 2.5 # float position is supported
label: 'Tutorial'
collapsible: true # make the category collapsible
collapsed: false # keep the category open by default
className: red
link:
  type: generated-index
  title: Tutorial overview
customProps:
  description: This description can be used in the swizzled DocCard
```

</TabItem>
</Tabs>

:::info

Si `link` est explicitement spécifié, Docusaurus n'appliquera aucune convention par défaut.

Les liens vers les docs peuvent être spécifiés de manière relative, par exemple, si la catégorie est générée avec le répertoire `guides`, `"link": {"type": "doc", "id": "intro"}` sera résolu vers l'ID `guides/intro`, ne retombant sur `intro` que si un doc avec l'ancien ID n'existe pas.

Vous pouvez également utiliser `link : null` pour ne pas respecter les conventions par défaut et ne pas générer de page d'index de catégorie.

:::

:::info

Les métadonnées de position ne sont utilisées **qu'à l'intérieur d'une section de barre latérale** : Docusaurus ne réorganise pas les autres éléments de votre barre latérale.

:::

### Organisation à l'aide des préfixes de nombre

Une autre façon d'organiser vos fichiers dans le répertoire `/docs` pour qu'ils apparaissent dans l'ordre désiré dans votre sidebar, est d'utiliser des préfixes de nombre. Par défaut, Docusaurus supprimera les préfixes de nombres pour ne pas qu'ils apparaissent lors de la publication.

```
docs
├── 01-Intro.md
├── 02-Dossier-1
│   ├── 01-Doc-1.md
│   ├── 02-Doc-2.md
│   └── 03-Conclusion.md
├── 03-Dossier-2
│   ├── 01-Doc-3.md
│   ├── 02-Doc-4.md
│   ├── 03-Doc-5.md
│   └── 04-Conclusion.md
└── 04-Conclusion.md
```