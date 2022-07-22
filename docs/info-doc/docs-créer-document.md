---
sidebar_position: 1
---
# Créer un document

Pour créer un document, il faut tout simplement créer un fichier Markdown `exemple.md` et le placer dans le répertoire `docs`. 

```
my-website # répertoire racine du site web
├── docs
│   └── exemple.md
├── src
│   └── pages
├── docusaurus.config.js
├── ...
```
:::info
Les fichiers Markdown peuvent être éditer à l'aide d'un éditeur de Markdown ou à même l'environnement de dev. [**Visual Studio Code**](https://code.visualstudio.com/docs/languages/markdown) supporte les fichiers Markdown nativement et vous permet de visualiser vos changements en temps réel. Les touches `Ctrl+Shift+V` permettent d'activer le mode aperçu.
:::

## Tags de document
Vous pouvez introduire des tags à vos documents, ce qui permet d'ajouter une dimension de catégorisation supplémentaire. Les tags sont inscrits dans le [frontmatter](./docs-fonctionnalit%C3%A9s-md.md) du document comme suit:

```md title="exemple.md"
---
tags:
    - tag1
    - tag2
---

Lorem ipsum
```

## Structure des fichiers
