import { useParams } from 'react-router-dom';
import { useReviews } from 'utils/hooks/useReviews';
import PropTypes from 'prop-types';

const Reviews = () => {
  const { movieId } = useParams();
  const { reviews } = useReviews(movieId);

  return (
    <div>
      {reviews?.length === 0 && (
        <p>We don't have any reviews for this movies</p>
      )}
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string,
};

export default Reviews;