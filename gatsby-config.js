require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Tabler.`,
    description: `A personal blogging theme for Gatsby with great typography and dark mode.`,
    siteUrl: process.env.SITE_URL || `http://localhost`,
    startUrl: `/`,
    copyright: `© YYYY Tabler. All rights reserved.`,
    icon: `src/images/icon.png`,
    color: `#3C64F1`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `Blog`,
        link: `/blog`,
      },
      {
        name: `About`,
        link: `/about`,
      },
      {
        name: `Contact`,
        link: `/contact`,
      },
    ],
    socialLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com`,
        icon: `twitter`,
      },
      {
        name: `Github`,
        url: `https://github.com`,
        icon: `github`,
      },
      {
        name: `Youtube`,
        url: `https://youtube.com`,
        icon: `youtube`,
      },
    ],
  },
  plugins: [
    // This is a list of all themes that this starter is using.
    // To disable a theme, remove it here and run `yarn remove @cangir/gatsby-theme-NAME`.
    `@cangir/gatsby-theme-page-core`,
    `@cangir/gatsby-theme-tabler`,
  ],
}
