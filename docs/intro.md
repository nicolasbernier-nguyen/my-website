---
title: Requis
sidebar_position: 0
---

# Présentation des requis

La liste de requis suivante nous a poussé à adopter Docusaurus comme solution pour la gestion documentaire:
1. Architecture agnostique
2. Facile à configurer
3. Peu d'entretien
4. Capacité de recherche
5. Gestion des versions
6. Sécurité (read-only)
7. Code source
8. Gérable avec des pipelines DevOps

Ces requis se réflètent dans les caractéristiques principales de Docusaurus. Il suffit de construire le site, créer une structure de dossiers et la remplir avec des documents Markdown. Le site est ensuite déployé vers l'hébergeur de nôtre choix (Apache 2, Nginx, Netlify, etc.). Docusaurus supporte la gestion des versions documentaire, la recherche et est sécuritaire, pour nos besoin de dev il permet seulement la lecture.

## Organisation du répertoire de fichier

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="À l'échelle d'une équipe de dev" default>
    Un exemple d'une structure de document:

  ```
    site-équipe # répertoire racine du site web
    ├── structurants
    │   └── architecture
    │   └── opération-bi
    │   └── ...
    ├── profils
    │   └── utilisateur
    │   └── super-utilisateur
    │   └── developpeur
    │   └── ...
    ├── infoDoc
    │   └── doc-docusaurus
    │   └── ...
    ├── ...
  ```
  </TabItem>
  <TabItem value="orange" label="À l'échelle du département">
  Un exemple d'une structure de document:

  ```
    site-architecture # répertoire racine du site web
    ├── architecture-bi
    │   └── ...
    ├── télécom
    │   └── ...
    ├── sécurité
    │   └── ...
    ├── ...
  ```
  </TabItem>
</Tabs>

## L'avantage de Docusaurus

Docusaurus fait beaucoup de choses correctement:
- Capacité de recherche, dont la recherche par titre et par contenu.
- Possibilité de gestion des versions documentaires.
- Facilité d'entretien grâce à ses barres latérales autogénérées.
- Configuration qui nécéssite peu de connaissance en web.
- _Read-only_.
- La documentation ne dépend pas de Docusaurus. Il est possible de changer de générateur de site statique avec un minimum d'ajustement.

Par contre, ces requis sont bien exécutés au sein d'une petite équipe. Si l'on désire appliquer cette solution à l'échelle d'un département, quelques problèmes font surface, particulièrement au niveau de la sécurité.

## Sécurité

Dans le cas de la sécurité sur Docusaurus, ce qui nous intéressait c'était d'empêcher la modification de document non-autorisé. À l'échelle d'une équipe de dev c'est suffisant. Cependant, à l'échelle du départment, ce ne l'est pas. Puisque Docusaurus n'est qu'un générateur de sites statiques il ne peut:
- Gérer le contrôle d'accès
- Restreindre l'accès aux documents
- Afficher la documentation selon le niveau d'accès d'un utilisateur

Cependant, il est possible de combattre certaines de ces lacunes en créant plusieurs sites qui se spécialisent dans une documentation au lieu d'un site global. 

Il est possible d'intégrer Docusaurus avec un écran d'authentification (_login screen_). Ceci pourrait mener à une intégration avec une gestion de contrôle d'accès par utilisateur et par document. Cependant ceci nécéssite plus de recherche et de tests:
- Intégration de la gestion du contrôle d'accès par l'hébergeur de site (AWS Amplify, Netlify, etc.)
- Utiliser des protocoles ou des plateformes d'authentification _third-party_ (Firebase, OAuth, etc.)

Quand à la recherche, Typesense DocSearch permet la création de clés d'API qui ne permettent la recherche que dans une collection de documents prédéterminée. Ceci est une piste vers l'intégration de le recherche selon le niveau d'accès.

## Alternatives

### Gatsby

[Gatsby](https://www.gatsbyjs.com/) est l'un des générateurs de site statique les mieux garnis, avec un grand nombre de fonctionnalités, un riche écosystème de plugins et une intégration native avec GraphQL à son coeur. Cependant, cette panoplie de fonctionnalités vient avec une plus grande courbe d'apprentissage. Gatbsy nous permet de construire plus qu'un site de documentation.

### VuePress

[VuePress](https://vuepress.vuejs.org/) est très similaire à Docusaurus, tous deux sont axés sur les sites documentaires. Cependant, VuePress est propulsé par Vue, tandis que Docusaurus est propulsé par React.

### MkDocs

[MkDocs](https://www.mkdocs.org/) est un générateur de site statique Python dont les fonctionnalités sont similaires à celles de Docusaurus. C'est une bonne option si l'on n'a pas besoin d'une application mono-page (SPA) et que nous ne prévoyons pas tirer profit des fonctionnalités de React.

[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) est un magnifique thème pour MkDocs où la personalisation du site est extrêmement bien documenté et requiert peu, et même aucune connaissance en CSS. Cependant, certaines fonctionnalités requièrent un abonnement mensuel pour y accéder. Ces fonctionnalités payantes sont un plus et ne sont pas obligatoires au bon fonctionnement du site documentaire. Voir ce [lien](https://squidfunk.github.io/mkdocs-material/insiders/#goals) pour une liste détaillée des fonctionnalités payantes.

### Jekyll

[Jekyll](https://github.com/jekyll/jekyll) est l'un des générateurs de sites statiques les plus matures et populaires. Démarrer le développement d'un site avec Jekyll est une expérience similaire à Docusaurus. Jekyll utilise Liquid pour le _templating_ au lieu de JSX(React) et offre une grande variété de thèmes. Cependant, comparé à Docusaurus, la documentation de Jekyll n'est pas aussi claire et requiert un peu plus de connaissances en CSS et en HTML.

### Sharepoint

Sharepoint n'est pas un générateur de site statique, mais il accomplit certaines fonctions de Docusaurus et plus dont:
- Capacité de recherche
- Gestion des versions
- Gestion des contrôle d'accès au niveau de l'utilisateur et des documents

Cependant, Sharepoint a ses défauts et ne rempli pas tous les critères tels que:
- Code source 
- Architecture agnostique
- Peu d'entretien
- Facile à configurer

De plus, Sharepoint agit plus comme un système de fichier et non un site de documentation. La documentation n'est pas facilement parcourable et accessible.