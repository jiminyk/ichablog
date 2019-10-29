module.exports = {
  siteMetadata: {
    title: 'DigimonDB',
    description: 'Content API for tips tricks and guides - Digimon ReArise',
    author: 'Christian Gomez'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.DEPLOY_URL
        ? "https://ichabod-crane.herokuapp.com"
        : "http://localhost:1337",
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'digimon'
        ],
        queryLimit: 1000,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}