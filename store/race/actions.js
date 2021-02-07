export default {
  async fetchResults({ commit }, { searchTerm }) {
    // let images = await searchImages(searchTerm);
    let images = await this.$race.getResults({ query: searchTerm, per_page: 6 });
    console.log('searched term: ' + searchTerm);
    console.log(images);
    // commit('SET_SELLERS_LIST', sellers.data);
  },
};
