import { alegraOptions } from '../request';

export const Seller = $axios => ({
    getSellers() {
        console.log(alegraOptions());
        return $axios('/sellers', {
            ...alegraOptions(),
            method: 'GET',
        });
    }
})