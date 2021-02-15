import React from 'react';
import { FaLinkedin, FaTwitterSquare, FaBlogger, FaGithubSquare, FaStackOverflow } from 'react-icons/fa';

const data = [
	{
		id: 2,
		icon: <FaLinkedin className="social-icon" />,
		url: 'https://www.linkedin.com/in/sedki-sghairi-9a4059190/'
	},
	{
		id: 3,
		icon: <FaGithubSquare className="social-icon" />,
		url: 'https://github.com/Sedki-Sghairi'
	},
	{
		id: 5,
		icon: <FaTwitterSquare className="social-icon" />,
		url: 'https://twitter.com/SedkiSghairi'
	},
	{
		id: 4,
		icon: <FaBlogger className="social-icon" />,
		url: 'https://sedki.medium.com/'
	},
	{
		id: 6,
		icon: <FaStackOverflow className="social-icon" />,
		url: 'https://stackoverflow.com/u/15120820'
	}
];
const links = data.map((link) => {
	return (
		<li key={link.id}>
			<a href={link.url} className="social-link" target="_blank" rel="noopener noreferrer">
				{link.icon}
			</a>
		</li>
	);
});

export default ({ styleClass }) => {
	return <ul className={`social-links ${styleClass ? styleClass : ''}`}>{links}</ul>;
};
