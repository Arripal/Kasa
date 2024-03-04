import React from 'react';
import Header from '../../composants/Header/Header';
import Banniere from '../../composants/Banniere/Banniere';
import Footer from '../../composants/Footer/Footer';
import banniereAbout from '../../assets/images/bannieres/image-mobile-about.webp';
import MenuDeroulant from '../../composants/MenuDeroulant/MenuDeroulant';
const About = () => {
	return (
		<>
			<main className="main">
				<Header />
				<Banniere text="" background_image={banniereAbout} />
				<MenuDeroulant />
			</main>
			<Footer />
		</>
	);
};

export default About;
