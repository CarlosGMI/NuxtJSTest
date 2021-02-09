import { alegraOptions } from '../request';

export const Invoice = $axios => ({
    createInvoice(body) {
        return $axios('/invoices', {
            ...alegraOptions(),
            method: 'POST',
            data: body
        });
    }
})