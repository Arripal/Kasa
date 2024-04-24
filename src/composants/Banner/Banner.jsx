import React from 'react';
import './banner.style.scss';

const Banner = ({ img, brightness, children }) => {
	return (
		<section className="banner">
			<div
				className="banner__background"
				style={{
					backgroundImage: `url(${img})`,
					filter: `brightness(${brightness}%)`,
				}}
			></div>
			{children}
		</section>
	);
};

export default Banner;
