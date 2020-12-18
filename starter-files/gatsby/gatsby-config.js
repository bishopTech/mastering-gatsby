import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Slicks Slices',
    siteUrl: 'https://gatsby.pizza',
    description: 'Super cool Pizza place!',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // Name of the plugin
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'v7vq0cm0',
        dataset: 'production',
        watchMode: true,
        // any token that starts with gatsby_ will be loaded into the browser by gatsby which is why we need dotenv package and this token name
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
