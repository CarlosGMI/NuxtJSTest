import { makeAlegraRequest } from '../request';

export const fetchSellers = () => {
  const url = '/sellers';

  return makeAlegraRequest(url, 'GET');
};
