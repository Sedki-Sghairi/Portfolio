module.exports = {
	siteMetadata: {
		title: 'Sedki',
		description: 'Full stack web development, Portfolio',
		author: '@SedkiSghairi',
		twitterUsername: '@SedkiSghairi',
		image: '/sedki.png',
		siteUrl: 'https://sedkisghairi.netlify.app'
	},
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-scroll-reveal`,
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [ 'G-8XW63WY124' ],
				// This object gets passed directly to the gtag config command
				// This config will be shared across all trackingIds
				// gtagConfig: {
				// 	optimize_id: 'OPT_CONTAINER_ID',
				// 	anonymize_ip: true,
				// 	cookie_expires: 0
				// },
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: true
				}
			}
		},
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
