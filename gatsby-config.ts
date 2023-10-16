import type { GatsbyConfig } from 'gatsby';

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: `.env.${activeEnv}`,
});

const config: GatsbyConfig = {
  pathPrefix: '/go-solr-client',
  siteMetadata: {
    title: `GoSolr Technical ZA`,
    siteUrl: process.env.SITE_URL,
    lang: `en`,
    titleTemplate: `Go Solr | %s`,
    description: `Energy Calculator`,
    url: process.env.SITE_URL,
    image: `/images/gosolr-logo-new.svg`,
    twitterUsername: '',
    copyright: `Copyright © 2023`,
    author: `Yenzokuhle`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.GATSBY_ADOBE_FONT_PROJECT_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Go Solr`,
        short_name: `GoSolr`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/gosolr-logo-new.svg`, // This path is relative to the root of the site.
      },
    },
  ],
};

export default config;
