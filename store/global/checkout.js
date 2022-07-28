import axios from "axios"

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
    process: {
      loading: false,
      error: '',
      message: 'Proceed to checkout'
    }
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
    ADD_AMOUNT(state, amount) {
      state.order.amount = amount
    },
    ADD_PRODUCTS(state, cart) {
      state.order.products = []
      state.order.products.push(...cart)
    },
    EDIT_PROCESS(state, process) {
      state.process.loading = process.loading
      state.process.error = process.error
      state.process.message = process.message
    }

  },
  actions: {
    async initiateCheckout({commit, dispatch, getters}) {
      let order = getters["returnOrder"]

      await axios.post('http://127.0.0.1:8000/api/order', {
        order: order
      }).then((res) => {
        console.log(res.data)
      }).catch((e) => {
        console.log(e)
      })
    },
    handleOrder({commit, dispatch}) {
      // let process = { loading: true, error: '', message: "Verifing Price..." }

      dispatch("mountCheckout")
      commit("EDIT_PROCESS", process)

      dispatch("initiateCheckout")
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
    },
    mountCheckout({commit}) {
      let amount = this.getters["global/cart/getTotal"]
      let cart = this.getters["global/cart/getCartItems"]

      commit("ADD_AMOUNT", amount)
      commit("ADD_PRODUCTS", cart)
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
    },
    returnProcess(state) {
      return state.process
    },
    returnOrder(state) {
      return state.order
    }
  }
}