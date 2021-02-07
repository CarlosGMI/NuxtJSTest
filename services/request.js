export const alegraOptions = () => {
  let base64Auth = btoa(
    `${process.env.ALEGRA_EMAIL}:${process.env.ALEGRA_API_KEY}`
  );

  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${base64Auth}`,
    },
    baseURL: process.env.ALEGRA_API_URL
  };
};

export const imagesOptions = () => {
  return {
    headers: {
      Authorization: process.env.PEXELS_API_KEY
    },
    baseURL: process.env.PEXELS_API_URL,
  };
}
