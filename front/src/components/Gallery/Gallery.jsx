import { useState } from 'react';
import PropTypes from 'prop-types';
import sliderArrow from '../../assets/slider-arrow.svg';
import './Gallery.scss';

function Gallery({ images }) {

    // Index de l'image actuelle
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };


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
                        key={`slider-${index}`}                    >

                        {index === current && (
                            <>
                                <img
                                    src={slider}
                                    alt={`diapo ${index + 1}`}
                                    className="image"
                                />
                                <div className="slide-counter-container">
                                    <div className="slide-counter">
                                        {current + 1}/{length}
                                    </div>
                                </div>
                            </>
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
