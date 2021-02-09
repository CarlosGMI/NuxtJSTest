import { buildInvoiceBody } from '~/services/invoices';
import { saveInLocalStorage, getFromLocalStorage, isInLocalStorage } from '~/services/utils';

export default {
    /**
     * If an invoice is in local storage get it and commit it. If not, we need to create it by calling the Alegra API and 
     * pass the invoice body to the request. This body is built based on the race grid (to get all the points from all the
     * other Sellers) and the Seller that won the race. After the invoice is created we save it in local storage and commit
     * all the mutations. While all of this takes place we modify (commit) a flag to render a loader while the Invoice is
     * being created. 
     * 
     * @param {int} sellerId The Seller ID that won the race
     */
    async createInvoice({ commit, rootGetters }, sellerId) {
        commit('SET_CREATING_INVOICE', true);
        if (isInLocalStorage('invoice')) {
            let invoice = getFromLocalStorage('invoice');

            commit('SET_WINNER_INVOICE', JSON.parse(invoice));
        } else {
            let positions = rootGetters['race/getRaceGrid'];
            let invoiceBody = buildInvoiceBody(positions, sellerId);
            let invoice = await this.$invoice.createInvoice(invoiceBody);

            saveInLocalStorage('invoice', invoice.data);
            commit('SET_WINNER_INVOICE', invoice.data);
        }
        commit('SET_CREATING_INVOICE', false);
    }
}