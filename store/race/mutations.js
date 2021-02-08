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

  SET_VOTE_GRID(state, grid) {
    state.votesGrid = grid;
  },

  CHANGE_VOTE_GRID(state, sellerId) {
    let votesGrid = state.votesGrid;

    votesGrid[sellerId]++;
    state.votesGrid = votesGrid;
  },

  SET_RACE_GRID(state, raceGrid) {
    state.raceGrid = raceGrid;
  },

  SET_RACE_FINISHED(state, finished) {
    state.raceFinished = finished;
  },
};
