export default {
    SET_WINNER_INVOICE(state, invoice) {
        state.winnerInvoice = invoice;
    },

    SET_CREATING_INVOICE(state, creatingInvoice) {
        state.creatingInvoice = creatingInvoice;
    }
}