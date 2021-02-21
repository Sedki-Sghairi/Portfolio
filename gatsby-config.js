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
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'GTM-MVCCCTK',

				// Include GTM in development.
				//
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: false,

				// datalayer to be set before GTM is loaded
				// should be an object or a function that is executed in the browser
				//
				// Defaults to null
				defaultDataLayer: { platform: 'gatsby' },

				// Specify optional GTM environment details.
				gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
				gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
				dataLayerName: 'YOUR_DATA_LAYER_NAME',

				// Name of the event that is triggered
				// on every Gatsby route change.
				//
				// Defaults to gatsby-route-change
				routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME'
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
