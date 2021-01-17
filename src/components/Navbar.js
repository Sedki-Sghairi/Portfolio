import React from 'react';
import logo from '../assets/log0.png';
import { FaAlignRight } from 'react-icons/fa';
import PageLinks from '../constants/links';
const Navbar = ({ light }) => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} alt="logo" />
					<button type="button" className="toggle-btn">
						<FaAlignRight />
					</button>
				</div>
				<PageLinks styleClass={`${light ? 'light-links' : ''} nav-links`} />
			</div>
		</nav>
	);
};

export default Navbar;
