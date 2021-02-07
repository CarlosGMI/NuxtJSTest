import { Race } from '~/services/race/api';
import { Seller } from '~/services/sellers/api';

export default function ({ $axios }, inject) {
    const apis = {
        'race': Race($axios),
        'seller': Seller($axios)
    }

    for (let api in apis) {
        inject(api, apis[api]);
    }
}