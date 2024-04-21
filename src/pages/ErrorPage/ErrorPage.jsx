import React from 'react';
import Header from '../../composants/Header/Header';
import Footer from '../../composants/Footer/Footer';
import './error.style.scss';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<main className="errorPage main">
			<section className="errorPage__content">
				<Header />
				<ul className="errorPage__content-list">
					<li className="errorPage__content-list-image"></li>
					<li>
						<p className="errorPage__content-list-paragraph">
							Oups! La page que
							<br className="br__mobile" /> vous demandez n'existe pas.
						</p>
					</li>
					<li>
						<Link to="/" className="errorPage__content-list-link">
							Retourner à la page d'accueil
						</Link>
					</li>
				</ul>
			</section>
			<Footer />
		</main>
	);
};

export default Error;
