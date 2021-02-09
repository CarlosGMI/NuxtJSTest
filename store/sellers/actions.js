export default {
  async fetchSellersList({ commit }) {
    let sellers = await this.$seller.getSellers();

    commit('SET_SELLERS_LIST', sellers.data);
  },
};
