import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import errorPhoto from '../../assets/images/logos/error-404.png';
import './error.style.scss';
import { NavLink } from 'react-router-dom';
const Error = () => {
	let error__link = "Retourner à la page d'accueil";
	return (
		<>
			<main className="errorPage">
				<Header />
				<ul className="errorPage__list">
					<li>
						<img
							src={errorPhoto}
							alt="404 error"
							className="errorPage__list-image"
						/>
					</li>
					<li>
						<p className="errorPage__list-paragraph">
							Oups! La page que
							<br /> vous demandez n'existe pas.
						</p>
					</li>
					<li>
						<NavLink to="/" className="errorPage__list-link">
							{error__link}
						</NavLink>
					</li>
				</ul>
			</main>
			<Footer />
		</>
	);
};

export default Error;
