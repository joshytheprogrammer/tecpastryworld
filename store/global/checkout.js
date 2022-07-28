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

  },
  actions: {
    initiateCheckout() {

    },
    addPhone({ commit, dispatch }, phone) {

    },
    addFulfillment({commit, dispatch}, method) {
      
    },
    addPayment({commit, dispatch}, method) {
      
    }
  },
  getters: {
    returnPhone(state) {

    },
    returnFulfillment(state) {

    },
    returnPayment(state) {

    }
  }
}