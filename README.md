# ImagenesPorElMundo

This was a technical test for [Alegra](https://www.alegra.com/en/usa/) made with Nuxt.js.

The goal was to build a web app that simulates a photo competition between different sellers where each user can vote for a favorite photo. Each vote gives 3 points to a specific seller and the one that gets to 20 points is the winner and an Alegra invoice is created for them.

[Alegra](https://www.alegra.com/en/usa/) is a billing system where small to medium companies can manage their business and accountability. This app makes use of a personal account that has an API key we are using to retrieve the sellers and also create the invoices. The images are being fetched from the [Pexels API](https://www.pexels.com/api/)

## Build Setup

Use Node 14.19.2

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
