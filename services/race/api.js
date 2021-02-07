import { imagesOptions } from '../request';

export const Race = $axios => ({
    getResults(params) {
        return $axios.get('/search', {
            ...imagesOptions(),
            params,
        });
    }
})