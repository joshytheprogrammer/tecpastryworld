import axios from "axios"

export default {
  namespaced: true,
  state : () => ({
    order: {
      phone: '',
      amount: null,
      payment_mode: "online",
      fulfillment: "pickup",
      products: []
    },
    process: {
      loading: false,
      error: '',
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

      cart.forEach(item => {

        let product = {
          id: item.id,
          size: item.data.size,
          type: item.data.type,
          writing: item.data.message
        }

        state.order.products.push(product)
      })
    },
    EDIT_PROCESS(state, process) {
      state.process.loading = process.loading
      state.process.error = process.error
    }
  },
  actions: {
    async initiateCheckout({commit, dispatch, getters}) {
      let order = getters["returnOrder"]

      await axios.post('http://127.0.0.1:8000/api/order', {
        order: order
      }).then(async (res) => {

        if(res.data.error) {
          commit("EDIT_PROCESS", { loading: false, error: res.data.error})
        }else {
          commit("EDIT_PROCESS", { loading: false, error: ''})
          dispatch("global/cart/clearCart", 0, {root: true})

          // Create user at this point


          let url = res.data.url
          let order_no = res.data.order_id

          if(url) {
            window.location.href = url
          }

          this.$router.push({path: '/order', query: {order_no: order_no}})

          // Wait three seconds before redirecting the user
          // setTimeout(() => {
          //   this.$router.push({path: '/order', query: {order_no: order_no}})
          // }, 3000)

          dispatch("global/notification/setNotification", {type: "success", message: res.data.message}, {root: true})
        }
      }).catch((err) => {
        dispatch("global/notification/setNotification", {type: "error", message: err}, {root: true})
        commit("EDIT_PROCESS", { loading: false, error: err})
      })
    },
    handleOrder({commit, dispatch}) {
      let process = { loading: true, error: '' }

      dispatch("mountCheckout")
      commit("EDIT_PROCESS", process)

      dispatch("initiateCheckout")
    },
    addPhone({ commit, dispatch }, phone) {
      commit("ADD_PHONE", phone)

      // Store user phone number in localstorage
      dispatch("global/user/storePhone", phone, {root: true})
      // dispatch("global/notification/setNotification", {type: "success", message: 'phone number added'}, {root: true})
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
      return state.order.fulfillment
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
