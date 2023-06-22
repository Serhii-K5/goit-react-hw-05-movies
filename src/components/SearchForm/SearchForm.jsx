import { useSearchParams } from 'react-router-dom';
import * as API from '../../utils/api/api';
import { useEffect, useState } from 'react';
import { TrendingList } from 'components/TrendingList/TrendingList';

export const SearchForm = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = evt => {
    setSearchParams({ query: evt.target[0].value });
    evt.preventDefault();
    return;
  };

  useEffect(() => {
    const movieTitle = searchParams.get('query');
    if (movieTitle) {
      API.getSearch(movieTitle).then(value => setMovies(value));
    }
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..."></input>
        <button type="submit">Search</button>
      </form>
      <TrendingList movies={movies} />
    </div>
  );
};