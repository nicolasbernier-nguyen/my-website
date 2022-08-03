---
sidebar_position: 2
---

# Mise en route

Docusaurus nécéssite [Node.js](https://nodejs.org/en/download/) version 16.14 ou supérieur. Vous pouvez vérifier la version en exécutant `node -v` si Node.js est déjà installé.

## Installation

Si vous désirez créer un site statique à partir de zéro, la façon la plus simple est d'exécuter la commande suivante dans le répertoire de votre choix. Vous pouvez subsituer `my-website` par le nom de votre projet.

```
npx create-docusaurus@latest my-website classic
```

Si vous avez nommé votre site `my-website`, la commande créer un nouveau répertoire `/my-website` dans lequel se trouve tous vos fichiers.

Si vous désirez créer un site à partir d'un template ou d'un site existant, il suffit de télécharger le dossier du site et d'exécuter la commande suivante dans le répertoire du site:

```
cd my-website # nom du répertoire du site
npm install
```

## Structure du répertoire site

Si vous avez créé un site à partir de zéro avec le nom `my-website`, vous verrez la structure suivante dans le répertoir `/my-website`:

```
my-website # répertoire racine du site web
├── blog
│   └── 2021-08-26-welcome
│   └── 2019-05-28-first-blog-post.md
│   └── 2019-05-29-long-blog-post.md
│   └── 2021-08-01-mdx-blog-post.mdx
│   └── authors.yml
├── docs
│   └── tutorial-basics
│   └── tutorial-extras
│   └── intro.md
├── src
│   └── components
│   └── css
│   └── pages
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
├── yarn.lock
├── ...
```

- `blog` contient les fichiers Markdown du blog. Puisque cette documentation concerne les documents vous pouvez supprimer ce répertoire (voir [mode-docs seulement]) 
- `docs` contient les fichiers Markdown de la documentation. Consulter la documentation sur les [documents](../intro.md) pour en savoir plus
- `src` contient les fichiers de non-documentation comme les pages ou les composants React personalisés
    - `src/components` contient le fichier `index.js` qui définit la structure de la page d'accueil (voir [lien])
    - `src/css` contient le fichier `custom.css` qui définit les couleurs de votre site
    - `src/pages` contient les fichiers JSX/TSX/MDX qui seront convertis en page de site
- `static` est un répertoire statique, tout contenu à l'intérieur sera copié à la racine du répertoire `/build`
    - `static/img` contient tous vos images 
- `docusaurus.config.js` est le fichier de configuration contenant la configuration du site (voir [configuration du site](./configuration.md))
- `package.json` contient les paquets npm. Puisque Docusaurus est une application React vous pouvez y installer les paquets que vous désirez.
- `sidebars.js` est utilisé par la documentation pour définir le comportement de la barre latérale (voir [barre latérale](../info-doc/docs-sidebars.md))

## Exécuter le serveur de développement

Il est possible de lancer un serveur de développement local pour visualiser les modifications que vous faites en temps réel à votre site web. Exécuter la commande suivante dans le répertoire de votre site:

```
npm run start
```

Par défaut, une fenêtre s'ouvrira depuis l'addresse `http://localhost:3000`. Pour fermer le serveur de développement appuyez les touches `Ctrl+C` dans la fenêtre de commande. Vous serez invité à acquiescer (`O`) ou non (`N`) la fermeture du serveur.

## Construction

Pour que notre site puisse être consulté, nous devons le construire dans un répertoire de contenu statique et le déployer sur un serveur web. Pour le construire:

```
npm run build
```

Le contenu sera généré dans le répertoire `/build` qui peut ensuite être copié dans un service d'hébergement web. Pour en apprendre d'avantage consultez la documentation sur le [déploiement](../deploy/deploy.md)