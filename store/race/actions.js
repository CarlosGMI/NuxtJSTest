import { buildResults } from '~/services/race';

export default {
  async fetchResults({ commit, rootGetters }, { searchTerm }) {
    let sellers = rootGetters['sellers/getSellersList'];

    if (sellers && sellers.length > 0) {
      let images = await this.$race.getResults({ query: searchTerm, per_page: sellers.length });
      let results = buildResults(images.data.photos, sellers);

      commit('SET_RESULTS', results);
    }
  },
};
