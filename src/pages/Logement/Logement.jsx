import React from 'react';
import { useParams } from 'react-router-dom';
const Logement = () => {
	const { locationID } = useParams();

	return <div>Logement correspondant à l'id {locationID} </div>;
};

export default Logement;
