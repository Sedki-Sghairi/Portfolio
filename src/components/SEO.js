import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
	{
		site {
			siteMetadata {
				author
				siteDescription: description
				image
				siteUrl
				siteTitle: title
				twitterUsername
			}
		}
	}
`;

const SEO = ({ title, description }) => {
	const { site } = useStaticQuery(query);

	const { siteUrl, siteDescription, image, siteTitle, twitterUsername } = site.siteMetadata;

	return (
		<Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | ${siteTitle}`}>
			<meta name="description" content={description || siteDescription} />
			<meta name="image" content={image} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={twitterUsername} />
			<meta name="twitter:title" content={siteTitle} />
			<meta name="twitter:description" content={siteDescription} />
			<meta name="twitter:image" content={`${siteUrl}${image}`} />
			<meta
				name="keywords"
				content="Sedki Sghairi,Dubai Web Developer,Web Development Dubai,Web Developer,Frontend,Front-End,Back-End,Backend,Full-Stack,Mobile Development,App Development,App Developer,Web Design,Web Designer,React Developer,JS Developer,JavaScript Developer,React-native Developer,Web Dev"
			/>
		</Helmet>
	);
};

export default SEO;
