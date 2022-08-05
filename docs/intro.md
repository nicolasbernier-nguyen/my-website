---
title: Introduction
sidebar_position: 0
---

# Présentation des requis

La liste de requis suivante nous a poussé à adopter Docusaurus comme solution pour la gestion documentaire:
1. Architecture agnostique
2. Facile à configurer
3. Peu d'entretien
4. Bien documenté

Ces requis se réflètent dans les caractéristiques principales de Docusaurus. Il suffit de construire le site, créer une structure de dossiers et la remplir avec des documents Markdown. Le site est ensuite déployé vers l'hébergeur de nôtre choix (Apache 2, Nginx, Netlify, etc.).

D'autres caractéristiques de Docusaurus rendent cette solution intéressante, soit l'engin de recherche, la gestion des versions de documents intégrée et l'environnement low-code.

La documentation qui suit présentera les caractéristiques principales de Docusaurus: l'architecture, la mise en route et le déploiement. D'autres fonctionalités pertinentes seront abordées en détails, dont l'engin de recherche, la création de documents, la personalisation du site et les fonctionalités de Markdown.

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