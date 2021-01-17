import React from 'react';

const Title = ({ title }) => {
	return (
		<div className="section-title">
			<h2 data-sal="slide-right" data-sal-delay="300" data-sal-duration="500" data-sal-easing="easeOutQuart">
				{title}
			</h2>
			<div
				className="underline"
				data-sal="slide-left"
				data-sal-duration="500"
				data-sal-delay="300"
				data-sal-easing="easeOutQuart"
			/>
		</div>
	);
};

export default Title;
