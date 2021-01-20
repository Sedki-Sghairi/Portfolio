import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Title from '../components/Title';
import Image from 'gatsby-image';
import SEO from '../components/SEO';

const About = ({ data: { allStrapiAbout: { nodes } } }) => {
	const { title, image, stack, info } = nodes[0];
	return (
		<Layout>
			<SEO title="About" description="this is the about page" />
			<section className="about-page">
				<div className="section-center about-center">
					<div
						className="move"
						data-sal="slide-up"
						data-sal-delay="300"
						data-sal-duration="500"
						data-sal-easing="easeOutQuart"
					>
						<Image fluid={image.childImageSharp.fluid} className="about-img" />
					</div>
					<article className="about-text">
						<Title title={title} />
						<p>{info}</p>
						<div className="about-stack">{stack.map((x) => <span key={x.id}>{x.title}</span>)}</div>
					</article>
				</div>
			</section>
		</Layout>
	);
};

export const query = graphql`
	{
		allStrapiAbout {
			nodes {
				stack {
					id
					title
				}
				title
				info
				image {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
export default About;
