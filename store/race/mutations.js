export default {
  SET_RESULTS(state, results) {
    state.results = results;
  },

  SET_SEARCHING_RESULTS(state, searchingResults) {
    state.searchingResults = searchingResults;
  },

  SET_RACE_STARTED(state, raceStarted) {
    state.raceStarted = raceStarted;
  },

  SET_GRID(state, grid) {
    state.grid = grid;
  }
};
