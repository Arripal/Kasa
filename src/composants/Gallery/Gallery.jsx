import React from 'react';
import './gallery.style.scss';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import appartements from '../../assets/appartements/appartements.json';

const Gallery = () => {
	const cardsList = appartements?.map((appartement) => {
		return (
			<div className="card__container" key={appartement.id}>
				<Link to={`/logements/${appartement.id}`}>
					<Card title={appartement.title} cover={appartement.cover} />
				</Link>
			</div>
		);
	});
	return <section className="gallery">{cardsList}</section>;
};

export default Gallery;
