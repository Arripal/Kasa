import React from 'react';
import { useState } from 'react';
import './carousel.style.scss';
import angleLeft from '../../assets/images/arrows/angle-left.svg';
import angleRight from '../../assets/images/arrows/angle-right.svg';

const Carousel = ({ pictures }) => {
	const [imageIndex, setImageIndex] = useState(0);

	//Création des balises img du Carousel

	const imagesList = pictures.map((picture, index) => {
		return (
			<img
				src={picture}
				alt="photo logement"
				key={index}
				className={
					imageIndex === index ? 'carousel__image' : 'carousel__image hidden'
				}
			/>
		);
	});

	//Fonctions permettant de passer à l'image suivante ou précédente

	const prevImage = () => {
		imageIndex === 0
			? setImageIndex(imagesList.length - 1)
			: setImageIndex(imageIndex - 1);
	};

	const nextImage = () => {
		imageIndex === imagesList.length - 1
			? setImageIndex(0)
			: setImageIndex(imageIndex + 1);
	};

	const carouselContent = (
		<>
			{imagesList.length > 1 && (
				<>
					<button onClick={prevImage} className="arrow arrow__left">
						<img src={angleLeft} alt="arrow left" />
					</button>

					<button onClick={nextImage} className="arrow arrow__right">
						<img src={angleRight} alt="arrow right" />
					</button>
				</>
			)}

			{imagesList}

			{imagesList.length > 1 && (
				<span className="carousel__indicator">{`${imageIndex + 1} / ${
					imagesList.length
				}`}</span>
			)}
		</>
	);

	const noContentMessage = (
		<span className="carousel__error">Aucune photo disponible.</span>
	);
	return (
		<section className="carousel">
			{imagesList.length ? carouselContent : noContentMessage}
		</section>
	);
};

export default Carousel;
