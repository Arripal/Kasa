import React from 'react';
import Header from '../../composants/Header/Header';
import Banniere from '../../composants/Banniere/Banniere';
import Footer from '../../composants/Footer/Footer';
import background_image from '../../assets/images/bannieres/image-desktop-accueil.webp';
const HomePage = () => {
	return (
		<>
			<Header />
			<Banniere background_image={background_image} />
			<Footer />
		</>
	);
};

export default HomePage;
