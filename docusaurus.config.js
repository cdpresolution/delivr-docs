import 'dotenv/config';
// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  customFields: {
    MIX_PANEL_KEY: process.env.MIX_PANEL_KEY,
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    AUTH0_REDIRECT_URL: process.env.AUTH0_REDIRECT_URL,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  },
  title: 'Delivr',
  tagline: 'Delivr Docs, Guides & How-tos',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.delivr.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cdpresolution', // Usually your GitHub org/user name.
  projectName: 'delivr-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/cdpresolution/delivr-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/cdpresolution/delivr-docs/tree/main/blog',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/delivr.svg',
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Delivr Logo',
          src: 'img/delivr.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Resolution Pixel',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://app.cdpresolution.com',
            label: 'Dashboard',
            position: 'right',
          },
          {
            href: 'https://delivr.ai',
            label: 'delivr.ai',
            position: 'right',
          },
          {
            href: 'https://github.com/cdpresolution/delivr-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Resolution Pixel',
        //         to: '/docs/category/resolution-pixel',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'App',
        //     items: [
        //       {
        //         label: 'CDP Resolution',
        //         href: 'https://app.cdpresolution.com',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/cdpresolution/delivr-docs',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Delivr, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
