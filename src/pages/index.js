import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';
export default ({ data }) => {
	const { allStrapiProjects: { nodes: projects } } = data;

	return (
		<Layout light="true">
			<Hero />
			<Services />
			<Jobs />
			<Projects projects={projects} title="some of my projects" showLink />
		</Layout>
	);
};
export const query = graphql`
	{
		allStrapiProjects(filter: { featured: { eq: true } }) {
			nodes {
				github
				id
				description
				title
				url
				image {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
				stack {
					id
					title
				}
			}
		}
	}
`;
