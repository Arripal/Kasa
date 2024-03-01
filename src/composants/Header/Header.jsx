import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.style.scss';
import mobileKasaLogo from '../../assets/images/logos/kasa-mobile.webp';
import desktopKasaLogo from '../../assets/images/logos/kasa-desktop.webp';
const Header = () => {
	return (
		<header className="header">
			<img
				src={mobileKasaLogo}
				alt="Logo Kasa"
				srcSet={`${desktopKasaLogo} 550w,${mobileKasaLogo} 300w,`}
				className="header__image"
			/>
			<nav className="nav">
				<NavLink to="/" className="nav__link">
					Accueil
				</NavLink>
				<NavLink to="/about" className="nav__link">
					A propos
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
