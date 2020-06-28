module.exports = {
  siteMetadata: {
    description: "Daniel Kapexhiu Portfolio",
    locale: "en",
    title: "Daniel Kapexhiu",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      },
    },
  ],
}
