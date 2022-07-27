// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gestion Documentaire',
  tagline: 'Prototype Site de Documentation',
  url: 'https://your-docusaurus-test-site.com',
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
/*           routeBasePath: '/',
 */          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
/*           editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', */
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
            activeBaseRegex: '/structurants'
          },
          {
            to: '/profils/profils',
            position: 'left',
            label: 'Profils',
            activeBaseRegex: '/profils/'
          },
/*           {
            href: 'https://github.com/nicolasbernier-nguyen/my-website',
            label: 'GitHub',
            position: 'right'
          }, */
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Doc',
            items: [
              {
                label: 'Documentation',
                to: 'https://docusaurus.io/docs',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
            ],
          },
          {
            title: 'Plus',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/nicolasbernier-nguyen/my-website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Équipe Interface Client (IC)`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
