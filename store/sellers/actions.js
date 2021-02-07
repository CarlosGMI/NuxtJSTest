import { fetchSellers } from '~/services/sellers';

export default {
  async fetchSellersList({ commit }) {
    let sellers = await fetchSellers();

    commit('SET_SELLERS_LIST', sellers.data);
  },
};
