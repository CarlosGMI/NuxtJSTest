import { alegraOptions } from '../request';

export const Seller = $axios => ({
    getSellers() {
        return $axios('/sellers', {
            ...alegraOptions(),
            method: 'GET',
        });
    }
})