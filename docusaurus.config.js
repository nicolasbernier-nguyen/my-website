// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gestion Documentaire',
  tagline: 'Prototype Site de Documentation',
  url: 'https://demo-gestion-doc.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logoIQ.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Investissement Québec', // Usually your GitHub org/user name.
  projectName: 'demo-gestion-doc', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
         sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
      }),
    ],
  ],

  plugins: [
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'profils',
      path: 'profils',
      routeBasePath: 'profils',
      sidebarPath: require.resolve('./sidebars.js')
    }
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'structurants',
      path: 'structurants',
      routeBasePath: 'structurants',
      sidebarPath: require.resolve('./sidebars.js')
    }
  ]
  ],
  /* themes: ['docusaurus-theme-search-typesense'], */
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true
        },
      },
      navbar: {
        title: 'Accueil',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logoIQ_light.png',
          srcDark: 'img/logoIQ_dark.png',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Info Doc'
          },
          {
            to: '/structurants/structurants',
            position: 'left',
            label: 'Structurants',
            /* activeBaseRegex: '/structurants' */
          },
          {
            to: '/profils/profils',
            position: 'left',
            label: 'Profils',
            /* activeBaseRegex: '/profils/' */
          },
        ],
      },
/*       typesense: {
        typesenseCollectionName: 'demo-gestion-doc', // Replace with your own doc site's name. Should match the collection name in the scraper settings.
        
        typesenseServerConfig: {
          nodes: [
            {
              host: 'host.docker.internal',
              port: 8108,
              protocol: 'https',
            },
          ],
          apiKey: 'xyz',
        },
          typesenseSearchParameters: {},
        contextualSearch: true,
      }, */
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Équipe Interface Client (IC)`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
