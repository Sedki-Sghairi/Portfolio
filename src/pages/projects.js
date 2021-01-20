import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import Projects from '../components/Projects';
import SEO from '../components/SEO';

const ProjectsPage = ({ data: { allStrapiProjects: { nodes: projects } } }) => {
	return (
		<Layout>
			<SEO title="Projects" description="this is the projects page" />
			<section className="projects-page">
				<Projects projects={projects} title="my recent projects" />
				<div className="home-btn">
					<Link to="/" className="btn">
						Back to Home
					</Link>
				</div>
			</section>
		</Layout>
	);
};
export const query = graphql`
	{
		allStrapiProjects {
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
export default ProjectsPage;
