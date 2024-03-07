import React from 'react';
import './banner.style.scss';

const Banner = ({ background_image, text }) => {
	return (
		<section
			className="banner"
			style={{ backgroundImage: `url(${background_image})` }}
		>
			{text}
		</section>
	);
};

export default Banner;
