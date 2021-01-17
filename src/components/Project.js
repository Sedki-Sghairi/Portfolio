import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';
const Project = ({ description, title, github, stack, url, image, index }) => {
	return (
		<article className="project">
			<Image fluid={image.childImageSharp.fluid} className="project-img" />
			<div data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-back" className="project-info">
				<span className="project-number">0{index + 1}.</span>
				<h3>{title}</h3>
				<p className="project-desc">{description}</p>
				<div className="project-stack">
					{stack.map((x) => {
						return <span key={x.id}>{x.title}</span>;
					})}
				</div>
				<div className="project-links">
					<a href={github} target="_blank">
						<div className="padd">
							<FaGithubSquare className="project-icon" />
						</div>
						<span className="project-icon-txt">Source-Code</span>
					</a>
					<a href={url} target="_blank">
						<div className="padd">
							<FaShareSquare className="project-icon" />
						</div>
						<span className="project-icon-txt">Demo</span>
					</a>
				</div>
			</div>
		</article>
	);
};

Project.propTypes = {};

export default Project;
