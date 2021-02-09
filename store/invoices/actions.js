import { buildInvoiceBody } from '~/services/invoices';
import { saveInLocalStorage, getFromLocalStorage, isInLocalStorage } from '~/services/utils';

export default {
    async createInvoice({ commit, rootGetters }, sellerId) {
        let positions = rootGetters['race/getRaceGrid'];

        if (isInLocalStorage('invoice')) {
            let invoice = getFromLocalStorage('invoice');

            commit('SET_WINNER_INVOICE', JSON.parse(invoice));
        } else {
            let invoiceBody = buildInvoiceBody(positions, sellerId);
            let invoice = await this.$invoice.createInvoice(invoiceBody);

            saveInLocalStorage('invoice', invoice.data);
            commit('SET_WINNER_INVOICE', invoice.data);
        }

    }
}