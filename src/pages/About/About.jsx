import React from 'react';
import Header from '../../composants/Header/Header';
import Banner from '../../composants/Banner/Banner';
import Footer from '../../composants/Footer/Footer';
import bannerAbout from '../../assets/images/bannieres/image-mobile-about.webp';
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
		<>
			<main className="about">
				<Header />
				<Banner text="" background_image={bannerAbout} />
				{categorieList}
			</main>
			<Footer />
		</>
	);
};

export default About;
