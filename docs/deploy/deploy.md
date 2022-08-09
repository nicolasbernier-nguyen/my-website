---
title: Déploiement
sidebar_position: 5
---

# Déployez votre site

Pour construire les fichiers statiques de votre site web pour la production, exécutez:

```
npm run build
```

Une fois terminé, les fichiers statiques se retrouverons dans le répertoire `/build`. Vous pouvez ensuite déployer votre site sur le sevice d'hébergement de votre choix.

## Configuration

Les paramètre suivant sont obligatoire dans `docusaurus.config.js`:
- `url` - URL de votre site. Pour un site déployé sur `https://my-org.com/my-projects/`, `url` est `https://my-org.com`
- `baseUrl` - URL de base pour votre projet avec un slash de fin. Pour un site déployé sur `https://my-org.com/my-projects/`, `baseUrl` est `/my-projects/`

## Tester votre construction localement

Pour tester votre construction avant de la déployer:

```
npm run serve
```
Par défaut, cela charge le sit sur `http://localhost:3000`.

## Auto-hébergement

Docusaurus peut être auto-hébergé. Utilisez `--port` pour changer de port et `--host` pour changer d'hôte

```
npm run serve -- --build --port 80 --host 0.0.0.0
```

## Déploiement sur Netlify

Pour déployer votre site sur [Netlify](https://www.netlify.com/), assurez-vous que les options suivantes sont correctement configurées:

```js title:"docusaurus.config.js"
module.exports = {
  url: 'https://docusaurus-2.netlify.app', // Url de votre site sans slash à la fin
  baseUrl: '/', // Répertoire de base de votre site relatif à votre depôt
  // ...
};
```

[Créez ensuite votre site Netlify](https://app.netlify.com/start).

Lors de la configuration, spécifiez les commandes de compilation et les répertoires comme suit:
- build command: `npm run build -- --locale fr`
- publish directory: `build`

Si vous n'avez pas configuré ces options, vous pouvez aller dans "Site settings" -> "Build & deploy" après la création de votre site. Il est aussi possible de lier un répertoire Github qui déploiera votre site avec chaque changement.

## Utiliser des pipelines Azure

**En construction**