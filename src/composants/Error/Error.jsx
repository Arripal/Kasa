import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './error.style.scss';
import { Link } from 'react-router-dom';
const Error = () => {
	let error__link = "Retourner à la page d'accueil";
	return (
		<>
			<main className="errorPage">
				<Header />
				<ul className="errorPage__list">
					<li className="errorPage__list-image"></li>
					<li>
						<p className="errorPage__list-paragraph">
							Oups! La page que
							<br className="br__mobile" /> vous demandez n'existe pas.
						</p>
					</li>
					<li>
						<Link to="/" className="errorPage__list-link">
							{error__link}
						</Link>
					</li>
				</ul>
			</main>
			<Footer />
		</>
	);
};

export default Error;
