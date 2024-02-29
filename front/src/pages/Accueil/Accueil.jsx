import Banner from '../../components/Banner/Banner';
import "./Accueil.scss";
import { useFetch } from '../../utils/useFetch';
import Thumb from '../../components/Thumb/Thumb';

function Accueil() {
    document.title = 'Accueil - Kasa';
    const annonces = useFetch(window.location.origin + '/annonces.json');
    
    try {
        
        if (annonces.fetchedData) {
            console.log('Données récupérées avec succès:', annonces.fetchedData);
        }
    } catch (error) {
        console.error('Erreur de parsing JSON :', error);        
        console.error('Response status:', annonces.responseStatus);
        console.error('Texte de la réponse :', annonces.responseText);
    }
    
    return (
        <section className='home'>  
            <Banner/>
            {annonces.isLoading && <p>Loading...</p>}
            {annonces.error && <p>Une erreur s'est produite lors du chargement des données.</p>}
            {annonces.fetchedData && (
                <div className="thumb-wrapper">
                    {annonces.fetchedData.map((annonce) => (
                        <Thumb
                            key={annonce.id}
                            link={`/annonce/${annonce.id}`}
                            title={annonce.title}
                            cover={annonce.cover}
                        />
                    ))}
                    {annonces.fetchedData.length % 3 === 2 && <div className="filler"></div>}
                </div>
            )}
        </section>
    );
}

export default Accueil;
