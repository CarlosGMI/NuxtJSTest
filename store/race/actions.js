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

  buildInitialVotesGrid({ commit, rootGetters }) {
    let raceVotes = {};
    let sellers = rootGetters['sellers/getSellersList'];

    if (isInLocalStorage('raceVotes')) {
      raceVotes = getFromLocalStorage('raceVotes');

      commit('SET_VOTE_GRID', JSON.parse(raceVotes));
    } else {
      raceVotes = buildGrid(sellers);

      saveInLocalStorage('raceVotes', raceVotes);
      commit('SET_VOTE_GRID', raceVotes);
    }
  },

  changeVotesGrid({ commit, getters }, sellerId) {
    commit('CHANGE_VOTE_GRID', sellerId);
    saveInLocalStorage('raceVotes', getters.getVotesGrid);
  }
};
