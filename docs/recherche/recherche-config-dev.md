---
sidebar_position: 1
---

# Configuration de Typesense DocSearch (Dev)

Le lancement de l'engin de recherche Typesense DocSearch sur votre site Web se fait en trois étapes:
- [Éxécuter Typesense](./recherche-config-dev.md#éxécuter-typesense)
- [Éxécuter le scraper](./recherche-config-dev.md#éxécuter-le-scraper)
- [Ajouter l'élément UI à votre site](./recherche-config-dev.md#ajouter-lélément-ui)

L'installation de l'engin de recherche sur Windows 10 requiert [Docker](https://docs.docker.com/get-docker/), [jq](https://stedolan.github.io/jq/download/) et [Git Bash](https://git-scm.com/downloads).

:::tip
Je recommande l'installation de jq à l'aide de [Chocolatey](https://chocolatey.org/install#install-step2)
:::

:::info
Les étapes d'installation et d'éxécution de Typesense DocSeach dans se document sont à des fins de développement seulement. Pour la configuration de Typesense pour le déploiement du site sur un hébergeur, référez-vous à ce [document]
:::

## Éxécuter Typesense

Il y a deux options pour installer et exécuter Typesense:

### Option 1: Typesense Cloud

**En construction**

### Option 2: Machine local / Self-Hosting

À partir d'un _Command Prompt_, suivez les étapes suivantes pour installer et exécuter Typesense après avoir démarré Docker:

1. Installer l'image Docker
```
docker pull typesense/typesense:0.23.1
```

2. Exécuter Typesense
```
mkdir \tmp\typesense-data

docker run -p 8108:8108 -v/tmp/typesense-data:/data typesense/typesense:0.23.1 \ --data-dir /data --api-key=xyz --enable-cors
```

## Éxécuter le scraper

Il faut créer deux documents dans le répertoire de votre site web avant d'éxécuter le scraper. Suivez les étapes suivantes pour exécuter le scraper avec succès:

1. Créez le fichier de configuration DocSearch

Vous pouvez copier le fichier `config.json` suivant. Il suffit de changer le `index-name` pour le vôtre. L'élément `start_urls` pointe vers l'URL de départ pour que le scraper débute l'indexation de votre site dans le cluster Typesense. Dans ce cas si l'URL de départ est un URL local à des fins de développement.

```json title="config.json"
{
  "index_name": "index-name",
  "start_urls": [
    "http://host.docker.internal/"
  ],
  "stop_urls": [],
  "selectors": {
    "lvl0": {
      "selector": ".menu__link--sublist.menu__link--active",
      "global": true,
      "default_value": "Documentation"
    },
    "lvl1": "header h1",
    "lvl2": "article h2",
    "lvl3": "article h3",
    "lvl4": "article h4",
    "lvl5": "article h5",
    "lvl6": "article h6",
    "text": "article p, article li"
  },
  "strip_chars": " .,;:#",
  "custom_settings": {
    "separatorsToIndex": "_",
    "attributesForFaceting": [
      "language",
      "version",
      "type"
    ],
    "attributesToRetrieve": [
      "hierarchy",
      "content",
      "anchor",
      "url",
      "url_without_anchor",
      "type"
    ]
  }
}
```

2. Créez le fichier `.env`
```title=".env"
TYPESENSE_API_KEY=xyz
TYPESENSE_HOST=host.docker.internal
TYPESENSE_PORT=8108
TYPESENSE_PROTOCOL=http
```

3. Rediriger le port local 80 vers le port local 3000

Docsearch ne supporte que le scraping de sites web sans aucun port spécifé et utilise le port 80 par défaut. Cela dit, puisque notre site web est hébergé en local sur le port 3000, il faut rediriger les accès au port 80 vers le port 3000. Dans un _Command Prompt_ élevé, exécutez la commande suivante:

```
netsh interface portproxy add v4tov4 listenaddress=127.0.0.1 listenport=80 connectaddress=127.0.0.1 connectport=3000
```

4. Changer l'`url` dans `docusaurus.config.js`

Pour le développement local, il faut changer l'url de notre site web pour qu'il corresponde à notre addresse locale.

```js title:"docusaurus.config.js"
const config = {
  url: 'http://host.docker.internal:3000/',
};
module.export = config;
```

5. Construction et déploiement en local

Pour que le scraper puisse indexer notre site, il faut qu'il soit construit et déployé en local avec la suite de commande suivante:

```
# exécuter les commandes à partir du répertoire de votre site
npm run build
npm run serve
```

6. Exécuter le scraper

Dans une fenêtre de commande _Git Bash_ exécuter la commande suivante à partir du répertoire de votre site web:

```
$ winpty docker run -it --env-file=./.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" typesense/docsearch-scraper
```

## Ajouter l'élément UI

Pour ajouter la barre de navigation à votre site, il suffit d'ajouter un thème et une options sous le champs `themeConfig` comme suit:

```js title:"docusaurus.config"
const config = {
  themes: ['docusaurus-theme-search-typesense'],
  
  //...

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      typesense: {
        typesenseCollectionName: 'demo-gestion-doc', // doit être le même nom que index_name dans le fichier config.json
        
        typesenseServerConfig: {
          nodes: [
            {
              host: 'localhost',
              port: 8108,
              protocol: 'http',
            },
          ],
          apiKey: 'xyz',
        },
        typesenseSearchParameters: {},
        contextualSearch: true,
      },
    }),
};
module.export = config;
```