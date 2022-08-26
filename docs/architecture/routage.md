---
title: Routage des docs
sidebar_position: 1
---
# Routage des docs

Le système de routage de Docusaurus suit les conventions d'une application mono-page: une route, un composant. 

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
  alt="Diagramme Architecture"
  sources={{
    light: useBaseUrl('/img/routage_light.png#center'),
    dark: useBaseUrl('/img/routage_dark.png#center'),
  }}
/>
```
Le plugin de docs créer des routes imbriquées. Au plus haut niveau, les chemins de versions sont enregistrés: `/`, `/next`, `/1.1.0-beta.9`... ce qui fournit le contexte pour la mise en page et la barre latérale. Le composant utilisé est `@theme/DocPage`.

Les documents remplissent l'espace restant de la page après que les composantes (barre de navigation, barre latérale, pied de page, etc.) sont fournies par `DocPage`. Prenons exemple sur cette page. Si la gestion des version était mise en place, cette page `/docs/architecture/` pourrait être générée à partir du fichier `./versioned_docs/version-1.0/architecture/architecture.md`. Dans le cas actuel, elle est générée à partir du fichier `./docs/architecture/architecture.md`.

## Chemins des fichiers et des URL

Les plugins de contenu, soit le plugin de docs, mappent les chemins de fichiers directement aux chemins d'URL (`./docs/info-doc/créer-document.md` devient `docs/info-doc/créer-document`). Cependant, losque l'ont écrit des liens dans un fichier Markdown, il s'agit d'un **chemin d'accès à un fichier** ou d'un **chemin d'accès à un URL**. Docusaurus différentit ces deux cas en appliquant les règles suivantes:
- Si le chemin a un préfixe `@site`, c'est toujours un chemin de fichier de ressource
- Si le chemin a un préfixe `http(s)://`, c'est toujours un chemin d'URL
- Si le chemin n'a pas d'extension, c'est un chemin d'URL. Un lien `[link](../info-doc)` sur une page avec l'URL `/docs/architecture/routage` sera lié à `/docs/info-doc`.
- Si le chemin a une extension `.md(x)`, Docusaurus essaiera de résoudre le fichier Markdown en un URL.
- Si le chemin a une autre extension, Docusaurus le traitera comme [une ressource](../info-doc/fonctions-md/ressources.mdx).

## Conversion en fichiers HTML

Puisque Docusaurus est un _server-side rendering framework_, toutes les routes générées seront affichées du côté serveur en fichier HTML statique. Le comportement est identique aux serveur HTTP comme Apache 2. Lorsque le navigateur envoit une requête à la route `docs/architecture/routage`, le serveur l'interprète comme une requête pour le fichier `docs/architecture/routage/index.html`.