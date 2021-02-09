import { buildResults, buildGrid, buildRaceGrid } from '~/services/race';
import { saveInLocalStorage, getFromLocalStorage, isInLocalStorage } from '~/services/utils';

export default {
  async fetchResults({ commit, rootGetters }, { searchTerm }) {
    commit('SET_RACE_STARTED', true);
    commit('SET_SEARCHING_RESULTS', true);

    let sellers = rootGetters['sellers/getSellersList'];

    if (sellers && sellers.length > 0) {
      let images = await this.$race.getResults({ query: searchTerm, per_page: sellers.length });
      let results = buildResults(images.data.photos, sellers);

      commit('SET_RESULTS', results);
      commit('SET_SEARCHING_RESULTS', false);
    }
  },

  buildInitialVotesGrid({ commit, rootGetters }) {
    let raceVotes = {};
    let sellers = rootGetters['sellers/getSellersList'];

    if (isInLocalStorage('raceVotes')) {
      let raceVotesFromStorage = getFromLocalStorage('raceVotes');
      raceVotes = buildGrid(sellers, JSON.parse(raceVotesFromStorage));

      saveInLocalStorage('raceVotes', raceVotes);
      commit('SET_VOTE_GRID', raceVotes);
    } else {
      raceVotes = buildGrid(sellers);

      saveInLocalStorage('raceVotes', raceVotes);
      commit('SET_VOTE_GRID', raceVotes);
    }
  },

  changeVotesGrid({ commit, getters }, sellerId) {
    commit('CHANGE_VOTE_GRID', sellerId);
    saveInLocalStorage('raceVotes', getters.getVotesGrid);
  },

  buildRaceGrid({ commit, getters, rootGetters, dispatch }) {
    let raceGrid = [];
    let sellers = rootGetters['sellers/getSellersList'];
    let votes = getters.getVotesGrid;
    raceGrid = buildRaceGrid(sellers, votes);

    commit('SET_RACE_GRID', raceGrid);
    dispatch('isThereAWinner');
  },

  isThereAWinner({ commit, getters, dispatch }) {
    let raceGrid = getters.getRaceGrid;
    let winningSeller = raceGrid[0];

    if (winningSeller.points >= process.env.RACE_TOTAL_POINTS) {
      commit('SET_RACE_FINISHED', true);
      dispatch('invoices/createInvoice', winningSeller.id, { root: true });
    }
  }
};
