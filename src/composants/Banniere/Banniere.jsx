import React from 'react';
import './banniere.style.scss';

const Banniere = ({ background_image, text }) => {
	return (
		<section
			className="banniere"
			style={{ backgroundImage: `url(${background_image})` }}
		>
			{text}
		</section>
	);
};

export default Banniere;
