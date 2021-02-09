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