import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './collapse.style.scss';
import arrow from '../../assets/images/arrows/arrowUp.svg';

const Collapse = ({ categorie, contenu }) => {
	const [isMenuOpen, setMenu] = useState(false);

	function toggleMenu() {
		setMenu(!isMenuOpen);
	}

	return (
		<div className="menu">
			<h2 className="menu__categorie">
				{categorie}
				<img
					src={arrow}
					alt="arrow icon"
					className="menu__categorie-arrow"
					onClick={toggleMenu}
				></img>
			</h2>

			<div
				className={
					isMenuOpen ? `menu__contenu menu__contenu-anime` : 'menu__contenu'
				}
			>
				{contenu}
			</div>
		</div>
	);
};

Collapse.propTypes = {
	categorie: PropTypes.string,
};
Collapse.defaultProps = {
	categorie: 'Catégorie manquante',
	contenu: 'Aucun contenu disponible pour le moment.',
};
export default Collapse;
