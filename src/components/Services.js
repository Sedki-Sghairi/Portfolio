import React from 'react';
import Title from './Title';
import services from '../constants/services';
// import { FaFontAwesomeLogoFull } from 'react-icons/fa';
const Services = () => {
	return (
		<section className="section bg-grey">
			<Title title="services" />
			<div className="section-center services-center">
				{services.map((x) => {
					const { id, icon, title, text } = x;
					return (
						<article key={id} className="service">
							{icon}
							<h4>{title}</h4>
							<div className="underline" />
							<p>{text}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
