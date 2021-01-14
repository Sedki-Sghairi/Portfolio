import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import SocialLinks from '../constants/socialLinks';

const query = graphql`
	{
		file(relativePath: { eq: "hero.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

const Hero = () => {
	const data = useStaticQuery(query);
	return (
		<header className="hero">
			<div className="section-center hero-center">
				<article className="hero-info">
					<div>
						<div className="underline" />
						<h1>hi, i am Sedki</h1>
						<h4>full stack web developer</h4>
						<Link to="/contact" className="btn">
							Contact me
						</Link>
					</div>
				</article>
				<Image fluid={data.file.childImageSharp.fluid} className="hero-img" />
				<SocialLinks />
			</div>
		</header>
	);
};

export default Hero;
