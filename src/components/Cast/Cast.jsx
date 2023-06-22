import { useParams } from 'react-router-dom';
import { useCredits } from 'utils/hooks/useCredits';
import PropTypes from 'prop-types';
import defaultImg from 'images/not_available.png';
import css from './Cast.module.css';

const Cast = () => {
  const { mId } = useParams();
  const { credits } = useCredits(mId);

  return (
    <div> 
      <ul className={css.castLict}>
        {credits.map(cast => {
          return (
            <div  key={cast.id} className={css.castLi}> 
              <li>
                <img src={cast.profile_path ?
                  `https://image.tmdb.org/t/p/w300/${cast.profile_path}`
                  : defaultImg
                  }
                  alt={cast.name}
                  width={cast.profile_path ? 150 : 50} 
                />
                <p>{cast.name}</p>
                <p>Character: {cast.character}</p>
              </li>
            </div>            
          );
        })}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;