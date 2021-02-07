import { imagesOptions } from '../request';

export const Race = $axios => ({
    getResults(searchTerm, totalResults) {
        return $axios.get('/search', {
            ...imagesOptions(),
            params: {
                query: searchTerm,
                per_page: totalResults
            },
        });
    }
})