export const alegraOptions = () => {
  let base64Auth = btoa(
    `${process.env.NUXT_ENV_ALEGRA_EMAIL}:${process.env.NUXT_ENV_ALEGRA_API_KEY}`
  );

  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${base64Auth}`,
    },
    baseURL: process.env.NUXT_ENV_ALEGRA_API_URL
  };
};

export const imagesOptions = () => {
  return {
    headers: {
      Authorization: process.env.NUXT_ENV_PEXELS_API_KEY
    },
    baseURL: process.env.NUXT_ENV_PEXELS_API_URL,
  };
}
