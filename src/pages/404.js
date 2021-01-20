import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import SEO from '../components/SEO';

const Error = () => {
	return (
		<Layout>
			<SEO title="Page Not Found" description="this is the error page" />
			<main className="error-page">
				<div className="error-container">
					<h1>Page Not Found!</h1>
					<Link to="/" className="btn">
						back home
					</Link>
				</div>
			</main>
		</Layout>
	);
};

export default Error;
