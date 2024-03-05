import React from 'react';
import Header from '../../composants/Header/Header';
import Footer from '../../composants/Footer/Footer';
import errorPhoto from '../../assets/images/logos/error-404.png';
import { NavLink } from 'react-router-dom';
import './errorPage.style.scss';
const ErrorPage = () => {
	let error_span = "Oups! La page que vous demandez n'existe pas.";
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

export default ErrorPage;
