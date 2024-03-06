import { useState } from 'react';
import PropTypes from 'prop-types';
import sliderArrow from '../../assets/slider-arrow.svg';
import './Gallery.scss';

function Gallery({ images }) {

    // Index de l'image actuelle
    const [current, setCurrent] = useState(0);

    // Calcul de la longueur du tableau d'images
    const length = images.length;

    // Fonction pour passer à la diapositive suivante
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    // Fonction pour passer à la diapositive précédente
    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    // Si le tableau d'images n'est pas un tableau ou est vide, ne rien afficher
    if (!Array.isArray(images) || length <= 0) {
        return null;
    }

    return (
        <div className="gallery">

            {/* Flèche de gauche (précédente) */}
            {length > 1 && (
                <img
                    src={sliderArrow}
                    className="left-arrow"
                    onClick={previousSlide}
                    alt="Flèche précédente"
                />
            )}

            {/* Flèche de droite (suivante) */}
            {length > 1 && (
                <img
                    src={sliderArrow}
                    className="right-arrow"
                    onClick={nextSlide}
                    alt="Flèche suivante"
                />
            )}

            {/* Mapping des images pour créer les diapositives */}
            {images.map((slider, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={`slider-${index}`}
                    >
                        {/* Afficher l'image uniquement si elle est active */}
                        {index === current && (
                            <img
                                src={slider}
                                alt={`diapo ${index + 1}`}
                                className="image"
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

// Validation des types de prop avec PropTypes pour règler l'erreur..
Gallery.propTypes = {
    images: PropTypes.array.isRequired,
};

export default Gallery;
