// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Team Playbook',
  tagline: 'En ressurssamling for team i NAV IT',
  url: 'https://holene.github.io',
  baseUrl: '/team-playbook/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'navikt', // Usually your GitHub org/user name.
  projectName: 'team-playbook', // Usually your repo name.

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/holene/team-playbook.git',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Team Playbook',
        logo: {
          alt: 'Team Playbook Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            label: 'Introduksjon',
            position: 'left'
          },
          {
            href: '/docs/new-team/',
            label: 'Nytt team ⭐️',
            position: 'left'
          },
          {
            href: '/docs/fremragende-team/',
            label: 'Fremragende team 🚀',
            position: 'left'
          },
          {
            href: '/docs/toolbox/',
            label: 'Verktøykasse 🛠',
            position: 'left',
          },
          // {
          //   type: 'doc',
          //   docId: 'new-team',
          //   position: 'left',
          //   label: 'Nytt team',
          // },
          // {
          //   type: 'doc',
          //   docId: 'toolbox/toolbox',
          //   position: 'left',
          //   label: 'Verktøykasse'
          // },
          // {
          //   type: 'doc',
          //   docId: 'fremragende-team',
          //   position: 'left',
          //   label: 'Fremragende team',
          // },
          {to: '/blog', label: 'Blogg', position: 'left'},
          {
            href: 'https://github.com/holene/team-playbook.git',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Fremragende team',
                to: '/docs/index',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://nav-ikt.slack.com',
              },
              // {
              //   label: 'Slack',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NAV IT `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
