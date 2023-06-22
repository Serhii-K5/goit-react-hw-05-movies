import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { useDetails } from 'utils/hooks/useDetails';
import defaultImg from "images/not_available.png";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { details } = useDetails(movieId);

  const location = useLocation();
  const goBack = location.state?.from ?? '/';

  return (
    <div>
      <Link to={goBack}>
        {' '}
        <button type="button">Go back</button>
      </Link>

      <h2>
        {details.title} (
        {details.release_date
          ? details.release_date.substring(0, 4)
          : ''}
        )
      </h2>

      <img src={details.poster_path ?
        `https://image.tmdb.org/t/p/w300/${details.poster_path}`
        : defaultImg
        }
        alt="{details.original_title}"
      />

      <p>
        User Score:{' '}
        {details.vote_average
          ? Math.fround(details.vote_average * 10).toFixed(0)
          : ''}
        %
      </p>
      <h3>Overview</h3>
      <p>{details.overview}</p>

      <h4>Genres</h4>
      <p>
        {details.genres
          ? details.genres.map(genre => genre.name).join(' ')
          : ''}
      </p>

      <p>Additional information</p>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;