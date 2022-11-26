// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ドラゴンホース(Dragon Horse)',
  tagline: '楽しいキャンペーンを',
  url: 'https://www.google.co.jp',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/favicon.ico',
  organizationName: 'Dragon Horse', // Usually your GitHub org/user name.
  projectName: '',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
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
      metadata: [{ name: 'keywords', content: 'spicetify, spotify, customization, documentation, blog' }],
      image: 'images/logo.png',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: false,
        },
      },
      navbar: {
        title: 'Dragon Horse',
        logo: {
          alt: 'DragonHorse Logo',
          src: 'images/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'products',
            position: 'left',
            label: 'Products',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://www.amazon.co.jp/s?me=A1IDMRJMJY7ZQH&marketplaceID=A1VC38T7YXB528',
            label: 'Shopping',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'about',
            position: 'left',
            label: 'About',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} . Built with Spicetify.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
