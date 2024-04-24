import React from 'react';
import Header from '../../composants/Header/Header';
import Banner from '../../composants/Banner/Banner';
import Gallery from '../../composants/Gallery/Gallery';
import Footer from '../../composants/Footer/Footer';
import backgroundImage from '../../assets/images/bannieres/image-desktop-accueil.webp';
import './homepage.style.scss';

const HomePage = () => {
	return (
		<main className="homepage">
			<section className="homepage__content">
				<Header />
				<Banner img={backgroundImage} brightness={50}>
					<div className="banner__brightness"></div>
					<h1 className="banner__text">
						Chez vous,
						<br className="br__mobile" />
						partout et ailleurs
					</h1>
				</Banner>
				<Gallery />
			</section>
			<Footer />
		</main>
	);
};

export default HomePage;
