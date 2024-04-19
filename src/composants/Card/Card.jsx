import React from 'react';
import './card.style.scss';
import PropTypes from 'prop-types';

const Card = ({ title, cover }) => {
	return (
		<article className="card" style={{ backgroundImage: `url(${cover})` }}>
			<h2 className="card__title">{title}</h2>
		</article>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	cover: PropTypes.string,
};
Card.defaultProps = {
	title: 'Titre de la location',
};
export default Card;
