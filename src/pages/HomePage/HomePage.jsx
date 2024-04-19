import React from 'react';
import Header from '../../composants/Header/Header';
import Banner from '../../composants/Banner/Banner';
import Gallery from '../../composants/Gallery/Gallery';
import Footer from '../../composants/Footer/Footer';
import './homepage.style.scss';
const HomePage = () => {
	return (
		<main className="homepage">
			<section className="homepage__content">
				<Header />
				<Banner />
				<Gallery />
			</section>
			<Footer />
		</main>
	);
};

export default HomePage;
