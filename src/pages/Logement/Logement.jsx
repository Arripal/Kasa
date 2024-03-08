import { useParams } from 'react-router-dom';
import appartements from '../../assets/appartements/appartements.json';
import Header from '../../composants/Header/Header';
import Carousel from '../../composants/Carousel/Carousel';
import Footer from '../../composants/Footer/Footer';
import ErrorPage from '../ErrorPage/ErrorPage';
import Collapse from '../../composants/Collapse/Collapse';
import Tag from '../../composants/Tag/Tag';
import Rating from '../../composants/Rating/Rating';
import Owner from '../../composants/Owner/Owner';
import './logement.style.scss';

const Logement = () => {
	const { locationID } = useParams();

	const appart = appartements.find((appart) => appart.id === locationID);

	if (!appart) {
		return <ErrorPage />;
	}

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
		appart && (
			<>
				<main className="logement">
					<Header />
					<Carousel pictures={appart.pictures} />

					<h2 className="logement__title ">{appart.title}</h2>
					<h3 className="logement__location ">{appart.location}</h3>

					<div className="logement__tags">
						{appart.tags.map((tag, index) => {
							return <Tag name={tag} key={`${tag}--${index}`} />;
						})}
					</div>
					<section className="logement__owner">
						<Rating rating={appart.rating} />
						<Owner owner={appart.host} />
					</section>
					<Collapse categorie="Description" contenu={appart.description} />
					<Collapse categorie="Équipements" contenu={equipmentsList} />
				</main>

				<Footer />
			</>
		)
	);
};

export default Logement;
