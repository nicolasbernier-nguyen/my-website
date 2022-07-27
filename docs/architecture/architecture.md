---
sidebar_position: 1
---

# Architecture

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
  alt="Diagramme Architecture"
  sources={{
    light: useBaseUrl('/img/architecture_light.png#center'),
    dark: useBaseUrl('/img/architecture_dark.png#center'),
  }}
/>
```
Le diagramme ci-dessus montre comment Docusaurus fait pour construire notre site. Les plugins collectent leur contenu respectif du système de fichiers et émettent des données en JSON. Les thèmes, eux, fournissent des composantes de mise en page qui reçoivent les données JSON en tant que route modules. Le bundler emballe les composantes et émet un paquet serveur et un paquet client.

Bien que l'ont écris en JS en permanence, différentes parties du code sont exécutées dans différents environnements:
- L'entièreté des méthodes de cycle de vie des plugins sont exécutées dans Node.
- Le code du thème est construit avec Webpack.

Cela dit, le code du thème et celui des plugins ne s'importent jamais directement. Ils ne communiquent qu'à travers des protocoles, dans ce cas-ci des fichiers temporaires JSON et des appels à `addRoute`. En tant qu'utilisateur, le seul moyen d'intéragir avec les plugins est de passer par `docusaurus.config.js`.