/**
 * This function builds the body that will be passed to the Invoice POST request from the Alegra API. We create and format 
 * the dates and calculate the accumulated points from all the Sellers that did not win the race.
 * 
 * @param {*} votes The race grid.
 * @param {*} sellerId The ID of the winner of the race.
 */
export const buildInvoiceBody = (votes, sellerId) => {
    let currentDate = new Date().toISOString().split('T')[0];
    let totalPoints = votes.reduce((total, seller) => {
        return total + seller.points;
    }, 0);

    return {
        date: currentDate,
        dueDate: currentDate,
        client: 1,
        seller: sellerId,
        items: [
            {
                id: 1,
                price: 20,
                quantity: totalPoints
            }
        ]
    }
}