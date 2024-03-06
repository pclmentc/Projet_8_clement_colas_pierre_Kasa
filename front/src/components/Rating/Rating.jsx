import star from '../../assets/star.svg'
import emptyStar from '../../assets/empty-star.svg'
import './Rating.scss'
import PropTypes from 'prop-types';

function Rating({ rating }) {
   const totalStar = 5;
   const fullStarNumber = Math.round(rating);
   const emptyStarNumber = totalStar - fullStarNumber;

   return (
      <div className="rating-wrapper">
         {/* Rendu du nombre d'étoiles pleines. */}
         {[...Array(fullStarNumber)].map((_, i) => (
            <img
               className="star"
               key={'full-star-' + i}
               src={star}
               alt="Notation par étoiles pleines"
            />
         ))}
         {/* Rendu du nombre d'étoiles vides. */}
         {[...Array(emptyStarNumber)].map((_, i) => (
            <img
               className="star-empty"
               key={'empty-star-' + i}
               src={emptyStar}
               alt="Notation par étoiles vides"
            />
         ))}
      </div>
   );
}
Rating.propTypes = {
    rating: PropTypes.array.isRequired,
};
export default Rating;