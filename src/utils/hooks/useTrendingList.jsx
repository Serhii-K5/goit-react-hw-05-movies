import * as API from '../api/api';
import { useState, useEffect } from 'react';

export const useTrendingList = () => {
  const [trendingMovies, setTrending] = useState([]);

  useEffect(() => {
    API.getTrending().then(value => setTrending(value));
  }, []);

  return { trendingMovies };
};  