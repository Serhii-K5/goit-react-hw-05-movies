import * as API from '../api/api';
import { useState, useEffect } from 'react';

export const useCredits = (id) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    API.getCredits(id).then(value => setCredits(value));
  }, [id]);
  return { credits };
};