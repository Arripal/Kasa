import React from 'react';
import emptyStar from '../../assets/images/stars/star-empty.png';
import fullStar from '../../assets/images/stars/star-full.png';
import './rating.style.scss';

const Rating = ({ rating }) => {
	const ratings = [1, 2, 3, 4, 5];
	const isValidRating = ratings.includes(parseInt(rating));

	const displayRating = ratings.map((_, index) => {
		return isValidRating ? (
			// Si le rating est compris entre 1 et 5
			<div className="rating__container" key={`star--${index}`}>
				<img
					src={rating > index ? fullStar : emptyStar}
					alt="star icon"
					className="rating__container-star"
				/>
			</div>
		) : (
			// Si le rating est invalide ou égal à zero
			<div className="rating__container" key={`star--${index}`}>
				<img
					src={emptyStar}
					alt="star icon"
					className="rating__container-star"
				/>
			</div>
		);
	});

	return <section className="rating">{displayRating}</section>;
};

export default Rating;
