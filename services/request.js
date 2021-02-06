import axios from 'axios';

export const makeAlegraRequest = (url, method, params = {}, data = {}) => {
  let base64Auth = btoa(
    `${process.env.ALEGRA_EMAIL}:${process.env.ALEGRA_API_KEY}`
  );

  return axios({
    url,
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${base64Auth}`,
    },
    baseURL: 'https://api.alegra.com/api/v1',
    params,
    data,
  });
};
