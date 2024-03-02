import React from 'react';
import './card.style.scss';
import { NavLink } from 'react-router-dom';
const Card = ({ title }) => {
	return (
		<NavLink to="">
			<article className="card">
				<h2 className="card__title">{title}</h2>
			</article>
		</NavLink>
	);
};

export default Card;
