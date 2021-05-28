/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Ergo Documentation',
  tagline: 'Dinosaurs are cool',
  url: 'https://ergoplatform.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ergoplatform',
  projectName: 'ergo',
  themeConfig: {
    navbar: {
      title: 'Documentation',
      logo: {
        alt: 'Ergo Logo',
        src: 'img/logo_black.svg',
        srcDark: 'img/logo_white.svg'
      },
      items: [
        {
          href: 'https://github.com/ergoplatform/ergo',
          label: 'Edit on GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `ErgoPlatform © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ergopltform/docs-ergoplatform/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
