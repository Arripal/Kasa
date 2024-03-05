import React from 'react';
import Header from '../../composants/Header/Header';
import Banniere from '../../composants/Banniere/Banniere';
import Footer from '../../composants/Footer/Footer';
import banniereAbout from '../../assets/images/bannieres/image-mobile-about.webp';
import MenuDeroulant from '../../composants/MenuDeroulant/MenuDeroulant';
import data from './dataAbout';
import './about.style.scss';
const About = () => {
	const categorieList = data.map((data, index) => {
		return (
			<MenuDeroulant
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
				<Banniere text="" background_image={banniereAbout} />
				{categorieList}
			</main>
			<Footer />
		</>
	);
};

export default About;
