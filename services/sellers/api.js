import { alegraOptions } from '../request';

export const Seller = $axios => ({
    getSellers() {
        return $axios.get('/sellers', alegraOptions());
    }
})