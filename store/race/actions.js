import { buildResults, buildGrid, buildRaceGrid } from '~/services/race';
import { saveInLocalStorage, getFromLocalStorage, isInLocalStorage } from '~/services/utils';

export default {
  /**
   * If there is Sellers available we make a GET request to the images API to look for the term that the user entered in the
   * form. When the API is done we build the final results array and commit all the changes.
   * 
   * @param {*} searchTerm The term to search images related to 
   */
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

  /**
   * While reloading the web app the sellers could have changed and this action takes that into account. We get the Sellers
   * (no matter if the Sellers changed or not) and build the votes grid with these Sellers. But if there are votes in local
   * storage that means that a new Seller entered to the race or an old one got out and we need to reflect that in the 
   * votes grid.
   */
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

  /**
   * Updates the votes grid when an user votes for a given Seller
   * 
   * @param {*} sellerId The Seller ID that got a vote
   */
  changeVotesGrid({ commit, getters }, sellerId) {
    commit('CHANGE_VOTE_GRID', sellerId);
    saveInLocalStorage('raceVotes', getters.getVotesGrid);
  },

  /**
   * Build the race grid based on the Sellers list and the votes that each Seller has and then dispatch the action that
   * checks if there is a winner.
   */
  buildRaceGrid({ commit, getters, rootGetters, dispatch }) {
    let raceGrid = [];
    let sellers = rootGetters['sellers/getSellersList'];
    let votes = getters.getVotesGrid;
    raceGrid = buildRaceGrid(sellers, votes);

    commit('SET_RACE_GRID', raceGrid);
    dispatch('isThereAWinner');
  },

  /**
   * Check if the first position of the race grid (the winner) has the required points to win the race and if this is the case
   * we finish the race and dispatch the action to create the Invoice.
   */
  isThereAWinner({ commit, getters, dispatch }) {
    let raceGrid = getters.getRaceGrid;
    let winningSeller = raceGrid[0];

    if (winningSeller.points >= process.env.NUXT_ENV_RACE_TOTAL_POINTS) {
      commit('SET_RACE_FINISHED', true);
      dispatch('invoices/createInvoice', winningSeller.id, { root: true });
    }
  }
};
