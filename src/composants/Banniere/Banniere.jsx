import React from 'react';
import './banniere.style.scss';

const Banniere = ({ background_image }) => {
	return (
		<section
			className="banniere"
			style={{ backgroundImage: `url(${background_image})` }}
		>
			<p className="banniere__text">
				Chez vous,
				<br className="br__mobile" /> partout et ailleurs
			</p>
		</section>
	);
};

export default Banniere;
