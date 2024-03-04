import React from 'react';
import mobileFooterKasaLogo from '../../assets/images/logos/kasa-mobile-footer.webp';
import desktopFooterKasaLogo from '../../assets/images/logos/kasa-desktop-footer.webp';
import './footer.style.scss';
const Footer = () => {
	return (
		<footer className="footer">
			<img
				src={mobileFooterKasaLogo}
				alt="Logo Kasa"
				srcSet={`${desktopFooterKasaLogo} 550w,${mobileFooterKasaLogo} 300w,`}
				className="footer__image"
			/>
			<p className="footer__copyright">
				&copy; 2020 Kasa. All
				<br className="br__mobile" /> rights reserved
			</p>
		</footer>
	);
};

export default Footer;
