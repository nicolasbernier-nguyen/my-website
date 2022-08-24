---
sidebar_position: 3
---
# Gestion des versions documentaires

Docusaurus vous permets de créer et gérer différentes versions de votre documentation.
Un site typique  de documentation versionnée ressemble ceci:

```
my-website
├── sidebars.json        # barre latérale pour la version courante
├── docs                 # répertoire docs pour la version courante
│   ├── foo
│   │   └── bar.md       # https://mysite.com/docs/next/foo/bar
│   └── hello.md         # https://mysite.com/docs/next/hello
├── versions.json        # fichier pour indiquer quelles versions sont disponibles
├── versioned_docs
│   ├── version-1.1.0
│   │   ├── foo
│   │   │   └── bar.md   # https://mysite.com/docs/foo/bar
│   │   └── hello.md
│   └── version-1.0.0
│       ├── foo
│       │   └── bar.md   # https://mysite.com/docs/1.0.0/foo/bar
│       └── hello.md
├── versioned_sidebars
│   ├── version-1.1.0-sidebars.json
│   └── version-1.0.0-sidebars.json
├── docusaurus.config.js
└── package.json
```

Le fichier `version.json` contient une liste de noms de version. ordonée du plus récent au plus ancien. Le tableau ci-dessous explique comment un fichier versionné correspond à sa version et à son URL généré.

| Chemin                                  | Version        | URL               |
| --------------------------------------- | -------------- | ----------------- |
| `versioned_docs/version-1.0.0/hello.md` | 1.0.0          | /docs/1.0.0/hello |
| `versioned_docs/version-1.1.0/hello.md` | 1.1.0 (latest) | /docs/hello       |
| `docs/hello.md`                         | current        | /docs/next/hello  |

## Tutoriel

### Créer une nouvelle version

1. Avant de créer une nouvelle version, assurez-vous que la version actuelle de la documentation (répertoire `/docs`) est prête à être gelée.
2. Créez votre nouvelle version

```
npm run docusaurus docs:version 1.1.0
```
Lors de la création de votre nouvelle version, la mécanisme de gestion des versions:
- Copiera le contenu complet du dossier `docs/` dans un nouveau dossier `versioned_docs/version-[versionName]/`.
- Créera un fichier de barres latérales versionnées basé sur votre configuration actuelle sidebar (si elle existe) - enregistré sous le nom `versioned_sidebars/version-[versionName]sidebars.json`.
- Ajoutera le numéro de la nouvelle version à `versions.json`.

### Créer de nouveaux documents

Après avoir créé une nouvelle version, il suffit de:
1. Placez le nouveau fichier dans le dossier de la version correspondante.
2. Ajoutez la référence au nouveau fichier dans le fichier de la barre latérale correspondante. Dans notre cas, les barres latérales sont autogénérées.

### Mise à jour d'une version existante

Il est possible de mettre à jour plusieurs versions de documents en même temps puisqu'elles sont indépendantes l'une de l'autre. Vous pouvez modifier n'importe quel fichier, commettre et pousser vos changements et ils seront publiés avec la version.

Exemple: Lorsque vous changez n'importe quel fichier dans `versioned_docs/version-2.6/`, cela n'affectera que la documentation pour la version `2.6`.

### Supprimer une version existante

Pour supprimer ou retirer une version de documents:
1. Retirez la version depuis le fichier `versions.json`

Exemple:

```title="versions.json"
[
  "2.0.0",
  "1.9.0",
- "1.8.0"   // ajouter le "-" à la version que vous souhaitez retirer
]
```

2. Supprimez le répertoire de la documentation versionnée. Exemple: `versioned_docs/version-1.8.0`.
3. Supprimer le fichier des barres latérales versionnées. Exemple: `versioned_sidebars/version-1.8.0-sidebars.json`.

## Configuration du comportement des versions

La version _current_ est le nom de la version de la documentation qui se trouve dans le dossier `./docs`. Il y a différentes manières de gérer les versions, mais les deux pratiques courantes sont :

- Vous publiez la v1 et commencez immédiatement à travailler sur la v2 (y compris sa documentation). Dans ce cas, la version actuelle est v2, qui se trouve dans le dossier source `./docs`, et peut être parcouru via `example.com/docs/next`. La dernière version est v1, qui est dans le dossier source `./versioned_docs/version-1`, et est parcouru par la plupart de vos utilisateurs via `example.com/docs`.
    
- Vous publiez la v1, et la maintiendrez pendant une certain temps avant de penser à la v2. Dans ce cas, la **version actuelle** et la **dernière version** pointeront vers v1, car la v2 des docs n'existe pas encore !

La configuration par défaut de Docusaurus fonctionnent très bien pour le premier cas d'utilisation. Nous allons étiqueter la version actuelle comme "next" et vous pouvez même choisir de ne pas la publier.

**Pour le 2nd cas** : si vous publiez la v1 et ne prévoyez pas de travailler sur la v2 bientôt, au lieu de versionner la v1 et d'avoir à maintenir les fichiers dans deux dossiers (`./docs` + `./versioned_docs/version-1.0.0`), vous pouvez envisager de "prétendre" que la version actuelle est une version découpée en lui donnant un chemin et un libellé :

```js title="docusaurus.config.js"
module.exports = {
  presets: [
    '@docusaurus/preset-classic',
    docs: {
      lastVersion: 'current',
      versions: {
        current: {
          label: '1.0.0',
          path: '1.0.0',
        },
      },
    },
  ],
};
```

Les docs dans `./docs` seront servis depuis `/docs/1. . 0` au lieu de `/docs/next` et `1.0.` deviendra la version par défaut vers laquelle nous avons un lien dans le menu déroulant de la barre de navigation, et vous n'aurez besoin que de maintenir un seul dossier `./docs`.

## Éléments de la barre de navigation

Nous offrons plusieurs éléments de la barre de navigation pour vous aider à configurer rapidement la navigation sans vous soucier des routes versionnées.

- `doc` : un lien vers un doc.

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'introduction',
          label: 'Docs',
        },
      ],
    },
  },
};
```
- `docSidebar` : un lien vers le premier élément d'une barre latérale.

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'api',
          label: 'API',
        },
      ],
    },
  },
};
```

```js title="sidebars.js"
module.exports = {
  tutorial: [
    {
      type: 'autogenerated',
      dirName: 'guides',
    },
  ],
  api: [
    'cli', // L'élément de la barre de navigation sera lié à ce doc
    'docusaurus-core',
    {
      type: 'autogenerated',
      dirName: 'api',
    },
  ],
};
```

- `docsVersion` : un lien vers le doc principal de la version actuellement consultée.


```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        {
          type: 'docsVersion',
          position: 'left',
          to: '/path',
          label: 'label',
        },
      ],
    },
  },
};
```

- `docsVersionDropdown` : un menu déroulant contenant toutes les versions disponibles.

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          dropdownActiveClassDisabled: true,
        },
      ],
    },
  },
};
```

Ces liens rechercheront tous une version appropriée à laquelle se rattacher, dans l'ordre suivant :

1. Version active : la version sur laquelle l'utilisateur navigue actuellement, si elle se trouve sur une page fournie par ce plugin de doc. Si elle n'est pas sur une page de doc, elle se rabat sur la...
2. Version préférée : la version que l'utilisateur a consultée pour la dernière fois. S'il n'y a pas d'historique, elle se rabat sur la...
3. Dernière version : la version par défaut vers laquelle nous naviguons, configurée par l'option lastVersion.