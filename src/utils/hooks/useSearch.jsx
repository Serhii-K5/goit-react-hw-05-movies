import * as API from '../api/api';
import { useState, useEffect } from 'react';

export const useSearch = (input) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.getSearch(input).then(value => setMovies(value));
  }, [input]);
  return { movies };
};
