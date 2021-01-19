import React from 'react';
import SocialLinks from '../constants/socialLinks';
const Footer = () => {
	return (
		<footer className="footer">
			<div>
				<SocialLinks styleClass="footer-links" />
				<h4>
					Sedki Sghairi copyright&copy;{new Date().getFullYear()} all rights reserved.{' '}
					<p>
						Built with
						<a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">
							{' '}
							Gatsby
						</a>
						&amp;
						<a href="https://strapi.io/" target="_blank" rel="noopener noreferrer">
							Strapi
						</a>
					</p>
				</h4>
			</div>
		</footer>
	);
};

export default Footer;
