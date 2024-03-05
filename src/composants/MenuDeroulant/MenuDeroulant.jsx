import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './menu.style.scss';
import arrowUp from '../../assets/images/arrows/arrowUp.svg';

const MenuDeroulant = ({ categorie, contenu }) => {
	const [isMenuOpen, setMenu] = useState(false);

	function toggleMenu() {
		setMenu(!isMenuOpen);
	}

	return (
		<div className="menu">
			<h2 className="menu__categorie">
				{categorie}
				<img
					src={arrowUp}
					alt="arrow icon"
					className="menu__categorie-arrow"
					onClick={toggleMenu}
				></img>
			</h2>

			<p
				className={
					isMenuOpen ? `menu__contenu menu__contenu-anime` : 'menu__contenu'
				}
			>
				{contenu}
			</p>
		</div>
	);
};

MenuDeroulant.propTypes = {
	categorie: PropTypes.string,
	contenu: PropTypes.string,
};
MenuDeroulant.defaultProps = {
	categorie: 'Catégorie manquante',
	contenu: 'Aucun contenu disponible pour le moment.',
};
export default MenuDeroulant;
