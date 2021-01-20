/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'Sedki Sghairi',
		description: 'This is the portfolio of a web developer',
		author: 'sedki',
		twitterUsername: '@SedkiSghairi',
		image: '/hero.JPG',
		siteUrl: 'https://sedkisghairi.netlify.app'
	},
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-scroll-reveal`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets/`
			}
		},
		{
			resolve: `gatsby-source-strapi`,
			options: {
				apiURL: `http://localhost:1337`,
				queryLimit: 1000, // Default to 100
				contentTypes: [ `jobs`, `projects` ],
				singleTypes: [ `about` ]
			}
		},
		{
			resolve: `gatsby-plugin-webfonts`,
			options: {
				fonts: {
					google: [
						{
							family: 'Roboto',
							variants: [ '400', '700' ]
						},
						{ family: 'Open Sans' }
					]
				}
			}
		}
	]
};
