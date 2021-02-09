export default () => ({
  // The results when the user searches for a word in the form.
  results: [],
  // A flag to check if the API is searching the images and render a loader while the request is processing.
  searchingResults: false,
  // A flag to check if the user clicked the "Search" button, marking the start of the race.
  raceStarted: false,
  /**
   * The votes that the user has submitted indexed by the Seller ID. For every Seller we got the votes quantity that they got.
   * Is important to note that this grid does not represent points, it only represents votes.
   * 
   * @example {1: 0, 2: 4} | The Seller with ID 1 got 0 votes and the Seller with ID 2 got 4 votes 
   */
  votesGrid: {},
  /**
   * The Sellers ranked by points. For every Seller we calculate the points and remaining points based on the votes that 
   * the Seller has (@see votesGrid ). This race grid is used in the statistics and to check if a Seller won.
   * 
   * @example [{ id: 1, points: 14, pointsToWin: 6 }]
   */
  raceGrid: [],
  // A flag to activate when a Seller got the max points and the race finishes.
  raceFinished: false,
});
