import * as API from '../api/api';
import { useState, useEffect } from 'react';

export const useReviews = id => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.getReviews(id).then(value => setReviews(value));
  }, [id]);
  return { reviews };
};