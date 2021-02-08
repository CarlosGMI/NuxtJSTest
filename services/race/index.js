export const buildResults = (images, sellers) => {
    let results = [];

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

    return results;
}

export const buildGrid = (sellers) => {
    let grid = {};

    for (let seller of sellers) {
        grid[seller.id] = 0;
    }

    return grid;
}

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