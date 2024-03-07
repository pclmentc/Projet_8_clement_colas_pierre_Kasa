import { useFetch } from '../../services/useFetch'
import { useParams } from 'react-router-dom'

import Error from '../../components/Error'
import Error404 from '../404/index'

import Gallery from '../../components/Gallery/Gallery'
import Tag from '../../components/Tag/Tag'
import Rating from '../../components/Rating/Rating'
import Collapse from '../../components/Collapse/Collapse'

import './Annonces.scss'

function Annonce() {

	const annonces = useFetch(window.location.origin + '/annonces.json')
	console.log(annonces);
	const { annonceId } = useParams()
	console.log(annonceId);
	let thisAnnonce
	if (annonces.fetchedData) {
		thisAnnonce = annonces.fetchedData.find(
			(annonce) => annonce.id === annonceId
		)
	}
	console.log(thisAnnonce);

	if (annonces.error) {
		return <Error />
	}

	if (!thisAnnonce) {
		return <Error404 />
	} else {

		const [firstName, lastName] = thisAnnonce.host.name.split(' ')

		document.title = thisAnnonce.title + ' - Kasa'
		return (
			<section className='sectionAnnonce'>
				<Gallery images={thisAnnonce.pictures} />
				<div className="annonce-info-rating-host-wrapper">
					<div className="annonce-info-wrapper">
						<h1 className="annonce-title">{thisAnnonce.title}</h1>
						<div className="host-wrapper">
							<div className="host-name">
								{firstName}
								<br />
								{lastName}
							</div>
							<img
								className="host-picture"
								src={thisAnnonce.host.picture}
								alt="Host"
							/>
						</div>
					</div>
					<p className="annonce-location">
						{thisAnnonce.location}
					</p>
					<div className="tagTag">
					<div className="tag-wrapper">
						{thisAnnonce.tags.map((tag, index) => (
							<Tag tagName={tag} key={`${tag}-${index}`} />
						))}
					</div>

					<div className="rating-host-wrapper">
						<Rating rating={thisAnnonce.rating} />

					</div>
					</div>

				</div>
				<div className="description-equipments-wrapper">

					<Collapse title="Description" content={thisAnnonce.description} />

					<Collapse title="Équipements" content={
						<ul>
							{thisAnnonce.equipments.map((equipment, index) => (
								<li key={index}>{equipment}</li>
							))}
						</ul>} />

				</div>
			</section>
		)
	}
}

export default Annonce