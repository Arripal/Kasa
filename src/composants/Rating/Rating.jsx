import React from 'react';
import emptyStar from '../../assets/images/stars/star-empty.png';
import fullStar from '../../assets/images/stars/star-full.png';
import './rating.style.scss';
const Rating = ({ rating }) => {
	const ratings = [1, 2, 3, 4, 5];
	const starsList = ratings.map((_, index) => {
		return (
			<img
				src={rating > index ? fullStar : emptyStar}
				alt="star icon"
				key={`star--${index}`}
			/>
		);
	});
	return <section className="rating">{starsList}</section>;
};

export default Rating;
