import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './collapse.style.scss';
import arrow from '../../assets/images/arrows/arrowUp.svg';

const Collapse = ({ categorie, contenu }) => {
	const [isCollapseOpen, setCollapse] = useState(false);

	//Gestion de la class permettant l'affichage du texte du Collapse
	const content = (
		<div
			className={`collapse__contenu-text ${isCollapseOpen ? 'displayed' : ''}`}
		>
			{contenu}
		</div>
	);
	function toggleCollapse() {
		setCollapse(!isCollapseOpen);
	}

	return (
		<div className="collapse">
			<h2 className="collapse__categorie">
				{categorie}
				<img
					src={arrow}
					alt="arrow icon"
					className={
						isCollapseOpen
							? 'collapse__categorie-arrow rotate'
							: 'collapse__categorie-arrow'
					}
					onClick={toggleCollapse}
				></img>
			</h2>
			{/* Gestion de la class permettant l'affichage du conteneur du contenu*/}
			<div className={`collapse__contenu ${isCollapseOpen ? 'open' : ''}`}>
				{content}
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
