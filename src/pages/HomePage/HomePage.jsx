import React from 'react';
import Header from '../../composants/Header/Header';
import Banniere from '../../composants/Banniere/Banniere';
import Gallerie from '../../composants/Gallerie/Gallerie';
import Footer from '../../composants/Footer/Footer';
import background_image from '../../assets/images/bannieres/image-desktop-accueil.webp';
import './homepage.style.scss';
const HomePage = () => {
	return (
		<>
			<main className="main">
				<Header />
				<Banniere background_image={background_image} />
				<Gallerie />
			</main>
			<Footer />
		</>
	);
};

export default HomePage;
