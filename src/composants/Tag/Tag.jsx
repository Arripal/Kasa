import React from 'react';
import './tag.style.scss';

const Tag = ({ name }) => {
	return (
		<div className="tag">
			<span className="tag__name">{name}</span>
		</div>
	);
};

export default Tag;
