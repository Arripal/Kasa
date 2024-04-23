import { useParams, Navigate } from 'react-router-dom';
import appartements from '../../assets/appartements/appartements.json';
import Header from '../../composants/Header/Header';
import Carousel from '../../composants/Carousel/Carousel';
import Footer from '../../composants/Footer/Footer';
import Collapse from '../../composants/Collapse/Collapse';
import Tag from '../../composants/Tag/Tag';
import Rating from '../../composants/Rating/Rating';
import Owner from '../../composants/Owner/Owner';
import './logement.style.scss';

const Logement = () => {
	const { locationID } = useParams();
	// Vérification de l'existence du logement
	const appart = appartements.find((appart) => appart.id === locationID);
	//
	if (!appart) {
		return <Navigate replace to="*" />;
	}
	// Création de la liste des équipements disponibles dans le logement
	const equipmentsList = (
		<ul className="logement__equipments">
			{appart.equipments.map((equipment, index) => {
				return (
					<li
						className="logement__equipments-li"
						key={`${equipment}--${index}`}
					>
						{equipment}
					</li>
				);
			})}
		</ul>
	);

	return (
		<>
			<main className="logement">
				<Header />
				<Carousel pictures={appart.pictures} />
				<div className="logement__container ">
					<div className="logement__container-infos">
						<h2 className="logement__container-infos-title ">{appart.title}</h2>
						<h3 className="logement__container-infos-location ">
							{appart.location}
						</h3>
						<div className="logement__container-infos-tags">
							{appart.tags.map((tag, index) => {
								return <Tag name={tag} key={`${tag}--${index}`} />;
							})}
						</div>
					</div>

					<section className="logement__container-infos-owner">
						<Rating rating={appart.rating} />
						<Owner owner={appart.host} />
					</section>
				</div>

				<section className="logement__collapses">
					<div className="logement__collapses-container">
						<Collapse categorie="Description" contenu={appart.description} />
					</div>
					<div className="logement__collapses-container">
						<Collapse categorie="Équipements" contenu={equipmentsList} />
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Logement;
