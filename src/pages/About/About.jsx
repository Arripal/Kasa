import React from 'react';
import Header from '../../composants/Header/Header';
import AboutBanner from '../../composants/AboutBanner/AboutBanner';
import Footer from '../../composants/Footer/Footer';
import Collapse from '../../composants/Collapse/Collapse';
import data from './data';
import './about.style.scss';

const About = () => {
	const categorieList = data.map((data, index) => {
		return (
			<Collapse
				categorie={data.categorie}
				contenu={data.contenu}
				key={`${data.categorie}--${index}`}
			/>
		);
	});
	return (
		<main className="about main">
			<section className="about__content">
				<Header />
				<AboutBanner />
				<section className="about__content-collapses">{categorieList}</section>
			</section>
			<Footer />
		</main>
	);
};

export default About;
