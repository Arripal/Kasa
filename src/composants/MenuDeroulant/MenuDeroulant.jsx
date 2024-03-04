import React from 'react';
import PropTypes from 'prop-types';
import './menu.style.scss';
import arrowUp from '../../assets/images/arrows/arrowUp.svg';
const MenuDeroulant = ({ categorie, contenu }) => {
	return (
		<div className="menu">
			<h2 className="menu__categorie">
				{categorie} <img src={arrowUp} alt="arrow icon"></img>
			</h2>

			<p className="menu__contenu">{contenu}</p>
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
