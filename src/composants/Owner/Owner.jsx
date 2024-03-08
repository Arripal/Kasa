import React from 'react';
import './owner.style.scss';
const Owner = ({ owner }) => {
	const { name, picture } = owner;
	/*
	let fullName = name.split(' ');
	let firstName = fullName[0];
	let lastName = fullName[1];
	fullName = (
		<span>
			{firstName}
			<br className="br__mobile" />
			{lastName}
		</span>
	);
	*/
	return (
		<article className="owner">
			<span className="owner__name">{name}</span>
			<img src={picture} alt={`${name} photo`} className="owner__photo" />
		</article>
	);
};

export default Owner;
