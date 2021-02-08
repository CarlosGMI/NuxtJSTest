import { buildResults } from '~/services/race';
import { saveInLocalStorage, getFromLocalStorage } from '~/services/utils';

export default {
  async fetchResults({ commit, rootGetters }, { searchTerm }) {
    commit('SET_RACE_STARTED', true);
    commit('SET_SEARCHING_RESULTS', true);

    let sellers = rootGetters['sellers/getSellersList'];

    if (sellers && sellers.length > 0) {
      // let images = await this.$race.getResults({ query: searchTerm, per_page: sellers.length });
      // Delete from here
      // saveInLocalStorage('images', images.data.photos);
      let lala = getFromLocalStorage('images');
      let results = buildResults(JSON.parse(lala), sellers);
      commit('SET_RESULTS', results);
      // Delete end
      // let results = buildResults(images.data.photos, sellers);

      // commit('SET_RESULTS', results);
      commit('SET_SEARCHING_RESULTS', false);
    }
  },
};
