import React from 'react';
import './owner.style.scss';
const Owner = ({ owner }) => {
	const { name, picture } = owner;

	return (
		<article className="owner">
			<p className="owner__name">{name}</p>
			<img src={picture} alt={`${name} photo`} className="owner__photo" />
		</article>
	);
};

export default Owner;
