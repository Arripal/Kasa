import React from 'react';
import './banner.style.scss';

const Banner = ({ background_image, text }) => {
	return (
		<section className="banner">
			<div
				className="banner__background"
				style={{ backgroundImage: `url(${background_image})` }}
			></div>
			{text}
		</section>
	);
};

export default Banner;
