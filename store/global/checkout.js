export default {
  namespaced: true,
  state : () => ({
    order: {
      phone: null,
      amount: null,
      payment_mode: "online",
      fulfillment_method: "pickup",
      products: []
    },
  }),
  mutations: {
    ADD_FULFILLMENT(state, method) {
      state.order.fulfillment_method = method
    },
    ADD_PAYMENT(state, mode) {
      state.order.payment_mode = mode
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
    addPayment({commit}, mode) {
      commit("ADD_PAYMENT", mode)
    }
  },
  getters: {
    returnPhone(state) {

    },
    returnFulfillment(state) {
      return state.order.fulfillment_method
    },
    returnPayment(state) {
      return state.order.payment_mode
    }
  }
}