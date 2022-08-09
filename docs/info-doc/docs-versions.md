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

**En Construction**

## Éléments de la barre de navigation

**En Construction**