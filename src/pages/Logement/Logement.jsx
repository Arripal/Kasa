import { useParams } from 'react-router-dom';
import appartements from '../../assets/appartements/appartements.json';
import ErrorPage from '../ErrorPage/ErrorPage';

const Logement = () => {
	const { locationID } = useParams();

	const appart = appartements.find((appart) => appart.id === locationID);
	if (!appart) {
		return <ErrorPage />;
	}
	//Insérer ici code pour afficher toutes les informations d'un logement
	return appart && <p>appartement id : {locationID}</p>;
};

export default Logement;
