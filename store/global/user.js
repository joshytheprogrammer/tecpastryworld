export default {
  namespaced: true,
  state : () => ({
    user: {
      id: null,
      phone: null,
    }
  }),
  mutations: {
    STORE_PHONE(state, phone) {
      if(!state.user.id) {
        localStorage.setItem('phone', phone)
      }
    }
  },
  actions: {
    storePhone({commit}, phone) {
      commit("STORE_PHONE", phone)
    }
  },
  getters: {

  }
}
