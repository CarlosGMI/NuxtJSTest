export default {
  async fetchSellersList({ commit }) {
    commit('SET_SELLERS_LIST', ['v1', 'v2', 'v3']);
  },
};
