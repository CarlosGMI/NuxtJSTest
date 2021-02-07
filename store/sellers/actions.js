import { fetchSellers } from '~/services/sellers';
import {
  saveInLocalStorage,
  isInLocalStorage,
  getFromLocalStorage,
} from '~/services/utils';

export default {
  async fetchSellersList({ commit }) {
    if (!isInLocalStorage('sellersList')) {
      let sellers = await fetchSellers();

      commit('SET_SELLERS_LIST', sellers.data);
      saveInLocalStorage('sellersList', sellers.data);
    } else {
      let sellers = getFromLocalStorage('sellersList');

      commit('SET_SELLERS_LIST', JSON.parse(sellers));
    }
  },
};
