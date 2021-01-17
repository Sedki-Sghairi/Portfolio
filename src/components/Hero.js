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
					<div className="console">
						{/* <div className="underline" /> */}
						<h1 className="line1 console_line">
							<span>hi, i am sedki</span>
							<span className="cursor1 cursor-type"> _</span>
						</h1>

						<h4 className="line2 console_line">
							full stack web developer<span className="cursor2 cursor-type"> _</span>
						</h4>
						<Link to="/contact" className="btn pop-up">
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
