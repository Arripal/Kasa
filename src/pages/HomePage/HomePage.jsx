import React from 'react';
import Header from '../../composants/Header/Header';
import Banner from '../../composants/Banner/Banner';
import Gallery from '../../composants/Gallery/Gallery';
import Footer from '../../composants/Footer/Footer';
import background_image from '../../assets/images/bannieres/image-desktop-accueil.webp';
import './homepage.style.scss';
const HomePage = () => {
	const banner_text = (
		<p className="banner__text">
			Chez vous,
			<br className="br__mobile" /> partout et ailleurs
		</p>
	);
	return (
		<>
			<main className="homepage">
				<Header />
				<Banner background_image={background_image} text={banner_text} />
				<Gallery />
			</main>
			<Footer />
		</>
	);
};

export default HomePage;
