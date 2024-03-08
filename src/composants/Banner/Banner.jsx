import React from 'react';
import './banner.style.scss';

const Banner = () => {
	return (
		<section className="banner">
			<div className="banner__background"></div>
			<p className="banner__text">
				Chez vous,
				<br className="br__mobile" /> partout et ailleurs
			</p>
		</section>
	);
};

export default Banner;
