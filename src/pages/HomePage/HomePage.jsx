import React from 'react';
import Header from '../../composants/Header/Header';
import Banniere from '../../composants/Banniere/Banniere';
import Gallerie from '../../composants/Gallerie/Gallerie';
import Footer from '../../composants/Footer/Footer';
import background_image from '../../assets/images/bannieres/image-desktop-accueil.webp';
import './homepage.style.scss';
const HomePage = () => {
	const banniere_text = (
		<p className="banniere__text">
			Chez vous,
			<br className="br__mobile" /> partout et ailleurs
		</p>
	);
	return (
		<>
			<main className="homepage">
				<Header />
				<Banniere background_image={background_image} text={banniere_text} />
				<Gallerie />
			</main>
			<Footer />
		</>
	);
};

export default HomePage;
