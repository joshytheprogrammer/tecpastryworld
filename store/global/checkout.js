export default {
  namespaced: true,
  state : () => ({
    order: {
      phone: null,
      amount: null,
      payment_mode: null,
      fulfillment_method: null,
      products: []
    },
  }),
  mutations: {
    ADD_FULFILLMENT(state, method) {
      state.order.fulfillment_method = method
    }

  },
  actions: {
    initiateCheckout() {

    },
    addPhone({ commit, dispatch }, phone) {

    },
    addFulfillment({commit}, method) {
      commit("ADD_FULFILLMENT", method)
    },
    addPayment({commit}, method) {
      
    }
  },
  getters: {
    returnPhone(state) {

    },
    returnFulfillment(state) {
      return state.fulfillment_method
    },
    returnPayment(state) {

    }
  }
}