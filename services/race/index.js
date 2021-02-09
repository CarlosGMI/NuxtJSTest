/**
 * This function builds the results array that will be rendered in regard the term that the user entered in the form. For each
 * Seller we associate one image in its various sizes of medium, landscape, and original and push that object into the final
 * array that is returned.
 * 
 * @param {*} images The images from the API.
 * @param {*} sellers The Sellers list.
 */
export const buildResults = (images, sellers) => {
    let results = [];

    if (images.length > 0) {
        for (let i = 0; i < sellers.length; i++) {
            results.push({
                id: sellers[i].id,
                name: sellers[i].name,
                image: {
                    medium: images[i].src.medium,
                    landscape: images[i].src.landscape,
                    original: images[i].src.original
                }
            })
        }
    }

    return results;
}

/**
 * This function builds the votes grid based on the Sellers list and, if exists, the existing votes grid from the local
 * storage. For each Seller we check if exists in the stored votes grid and if exists we get the votes from that votes
 * grid. If not that means that the Seller is a new one and we need to add it to the votes grid with 0 votes.
 * 
 * @param {*} sellers The Sellers list.
 * @param {*} votesGridFromStorage The votes grid that is stored in local storage.
 */
export const buildGrid = (sellers, votesGridFromStorage = null) => {
    let grid = {};

    for (let seller of sellers) {
        let sellerExistsInVoteGrid = votesGridFromStorage && votesGridFromStorage[seller.id];

        grid[seller.id] = sellerExistsInVoteGrid ? votesGridFromStorage[seller.id] : 0;
    }

    return grid;
}

/**
 * This function builds the race grid that will have the Sellers sorted by points obtained. For each Seller we calculate the
 * points based on how many votes the Seller has and we return the sorted array.
 * 
 * @param {*} sellers The Sellers list.
 * @param {*} votes The votes grid for each Seller.
 */
export const buildRaceGrid = (sellers, votes) => {
    let raceGrid = [];

    for (let seller of sellers) {
        let sellerVotes = votes[seller.id];
        let sellerInRace = {
            id: seller.id,
            name: seller.name,
            points: calculatePoints(sellerVotes),
            pointsToWin: calculateRemainingPoints(sellerVotes)
        }

        raceGrid.push(sellerInRace);
    }

    return sortPositions(raceGrid);
}

function calculatePoints(votes) {
    return votes * process.env.RACE_VOTE_POINTS;
}

function calculateRemainingPoints(votes) {
    return process.env.RACE_TOTAL_POINTS - (votes * process.env.RACE_VOTE_POINTS);
}

function sortPositions(raceGrid) {
    return raceGrid.sort((a, b) => {
        return b.points - a.points;
    });
}