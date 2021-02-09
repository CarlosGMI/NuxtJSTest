import { imagesOptions } from '../request';

export const Race = $axios => ({
    getResults(params) {
        return $axios('/search', {
            ...imagesOptions(),
            method: 'GET',
            params,
        });
    }
})