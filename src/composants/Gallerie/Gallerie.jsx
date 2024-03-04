import React from 'react';
import './gallerie.style.scss';
import { NavLink } from 'react-router-dom';
import Card from '../Card/Card';
import appartements from '../../assets/appartements/appartements.json';
const Gallerie = () => {
	const cardsList = appartements.map((appartement) => {
		return (
			<NavLink to={`/logements/${appartement.id}`} key={appartement.id}>
				<Card title={appartement.title} cover={appartement.cover} />
			</NavLink>
		);
	});
	return <section className="gallerie">{cardsList}</section>;
};

export default Gallerie;
