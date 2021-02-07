export default function ({ $axios }) {
  $axios.onError((error) => {
    if (error.response) {
      console.error(
        `Data: ${error.response.data}\nStatus: ${error.response.status}`
      );
    } else if (error.request) {
      console.error(`Request: ${error.request}`);
    } else {
      console.error(`Error ${error.message}`);
    }

    return Promise.resolve(false);
  });
}
