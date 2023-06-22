import * as API from '../api/api';
import { useState, useEffect } from 'react';

export const useDetails = id => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    API.getDetails(id).then(value => setDetails(value));
  }, [id]);

  return { details };
};
