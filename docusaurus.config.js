// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Site Démo',
  tagline: 'Prototype Gestion Documentaire',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logoIQ.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'IQ', // Usually your GitHub org/user name.
  projectName: 'gestion documentaire', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
/*           editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', */
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
            position: 'left',
            label: 'Caractéristiques'
          },
          {
            type: 'doc',
            docId: 'documents/docs-intro',
            position: 'left',
            label: 'Documentation',
            sidebarId: 'docSidebar'
          },
/*           {
            type: 'doc',
            docId: 'recherche/recherche-intro',
            position: 'left',
            label: 'Recherche'
          }, */
/*           {
            type: 'doc',
            docId: 'déploiement/déploiement-intro',
            position: 'left',
            label: 'Déploiement',
          }, */
          {
            href: 'https://github.com/nicolasbernier-nguyen/my-website',
            label: 'GitHub',
            position: 'right'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Tutoriel',
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
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
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
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
