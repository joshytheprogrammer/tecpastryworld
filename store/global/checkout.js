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
    ready: false // Returns whether phone number is valid
  }),
  mutations: {
    ADD_FULFILLMENT(state, method) {
      state.order.fulfillment_method = method
    },
    ADD_PAYMENT(state, mode) {
      state.order.payment_mode = mode
    },
    ADD_PHONE(state, phone) {
      state.order.phone = phone
      this.ready = true
    }

  },
  actions: {
    initiateCheckout() {

    },
    addPhone({ commit, dispatch }, phone) {
      commit("ADD_PHONE", phone)
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
      return state.order.phone
    },
    returnFulfillment(state) {
      return state.order.fulfillment_method
    },
    returnPayment(state) {
      return state.order.payment_mode
    }
  }
}