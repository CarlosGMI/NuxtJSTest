import { buildResults, buildGrid } from '~/services/race';
import { saveInLocalStorage, getFromLocalStorage, isInLocalStorage } from '~/services/utils';

export default {
  async fetchResults({ commit, rootGetters }, { searchTerm }) {
    commit('SET_RACE_STARTED', true);
    commit('SET_SEARCHING_RESULTS', true);

    let sellers = rootGetters['sellers/getSellersList'];

    if (sellers && sellers.length > 0) {
      // let images = await this.$race.getResults({ query: searchTerm, per_page: sellers.length });
      // Delete from here
      // let results = buildResults(images.data.photos, sellers);
      // saveInLocalStorage('images', results);
      let lala = getFromLocalStorage('images');
      commit('SET_RESULTS', JSON.parse(lala));
      // Delete end
      // let results = buildResults(images.data.photos, sellers);

      // commit('SET_RESULTS', results);
      commit('SET_SEARCHING_RESULTS', false);
    }
  },

  buildInitialGrid({ commit, rootGetters }) {
    let raceGrid = {};
    let sellers = rootGetters['sellers/getSellersList'];

    if (isInLocalStorage('raceGrid')) {
      raceGrid = getFromLocalStorage('raceGrid');

      commit('SET_GRID', JSON.parse(raceGrid));
    } else {
      raceGrid = buildGrid(sellers);

      saveInLocalStorage('raceGrid', raceGrid);
      commit('SET_GRID', raceGrid);
    }
  }
};
