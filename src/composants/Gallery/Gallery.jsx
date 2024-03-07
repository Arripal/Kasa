import React from 'react';
import './gallery.style.scss';
import { NavLink } from 'react-router-dom';
import Card from '../Card/Card';
import appartements from '../../assets/appartements/appartements.json';

const Gallery = () => {
	const cardsList = appartements.map((appartement) => {
		return (
			<NavLink to={`/logements/${appartement.id}`} key={appartement.id}>
				<Card title={appartement.title} cover={appartement.cover} />
			</NavLink>
		);
	});
	return <section className="gallery">{cardsList}</section>;
};

export default Gallery;
