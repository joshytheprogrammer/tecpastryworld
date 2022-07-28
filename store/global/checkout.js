export default {
  namespaced: true,
  state : () => ({
    order: {
      phone: '',
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
    },
    ADD_PHONE(state, phone) {
      state.order.phone = phone
    },
    ADD_PRODUCTS(state, cart) {
      state.order.products.push(cart)
    }

  },
  actions: {
    initiateCheckout() {

    },
    handleOrder({commit}) {
      let cart = this.getters["global/cart/getCartItems"]
      commit("ADD_PRODUCTS", cart)
    },
    addPhone({ commit, dispatch }, phone) {
      commit("ADD_PHONE", phone)
      dispatch("global/notification/setNotification", {type: "success", message: 'phone number added'}, {root: true})
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