import React from 'react';
import logo from '../assets/log0.png';
import { FaAlignRight } from 'react-icons/fa';
import PageLinks from '../constants/links';
const Navbar = ({ light, toggle }) => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<img
						src={logo}
						alt="logo"
						data-sal="slide-right"
						data-sal-duration="400"
						data-sal-easing="easeOutQuart"
					/>
					<button type="button" className="toggle-btn" onClick={toggle}>
						<FaAlignRight />
					</button>
				</div>
				<PageLinks styleClass={`${light ? 'light-links' : ''} nav-links`} />
			</div>
		</nav>
	);
};

export default Navbar;
