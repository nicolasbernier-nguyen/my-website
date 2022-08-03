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

**En Construction**

### Créer de nouveaux documents

**En Construction**

### Mise à jour d'une version existante

**En Construction**

### Supprimer une version existante

**En Construction**

## Configuration du comportement des versions

**En Construction**

## Éléments de la barre de navigation