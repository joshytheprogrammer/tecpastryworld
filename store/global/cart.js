export default {
  namespaced: true,
  state : () => ({
    cart: [],
    summary: {
      subtotal: 0,
      taxes: 0,
      total: 0
    },
  }),
  mutations: {
    ADD_ITEM(state, payload) {
      let inCart = state.cart.find(p => p.id === payload.id)

      if(!inCart) {
        state.cart.push(payload)
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }else {
        console.log("Item already added")
      }
    },
    DELETE_ITEM(state, id) {
      let item = state.cart.find(p => p.id === id)
      let index = state.cart.indexOf(item)
      state.cart.splice(index, 1)

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    CALCULATE_CART(state){
      let subtotal = 0
      let taxes = 0
      let total = 0

      // Calculate subtotal
      state.cart.forEach(item => {
        let price = item.data.price
        
        subtotal = Number(subtotal) + Number(price)
      });

      // Calculate taxes
      taxes = (subtotal / 100) * 12

      // Calculate total
      total = subtotal + taxes

      // Assign Values

      state.summary.subtotal = subtotal
      state.summary.taxes = taxes
      state.summary.total = total

    },
    INITIATE_CART(state) {
      if(localStorage.getItem('cart')){
        state.cart = JSON.parse(localStorage.getItem('cart'))
      }
    }
  },
  actions: {
    addToCart({ commit, dispatch }, product) {
      let info = product[0]
      let details = product[1]

      // assigning variables
      let item = {
        id: info._id,
        img: info.thumbnail,
        name: info.name,
        data: {
          size: details.size,
          type: details.type,
          price: details.price.replace('₦', '').replace(',', ''),
          message: details.message
        }
      }

      commit('ADD_ITEM', item)
      commit('CALCULATE_CART')

      // Dispatch Notification
      dispatch("global/notification/setNotification", {type: "neutral", message: 'Item added successfully'}, {root: true})
    },
    deleteFromCart({ commit, dispatch }, id) {
      commit('DELETE_ITEM', id)
      commit('CALCULATE_CART')
      dispatch("global/notification/setNotification", {type: "neutral", message: 'Item deleted successfully'}, {root: true})
    },
    initializeCart({commit}) {
      commit("INITIATE_CART")
      commit("CALCULATE_CART")
    }
  },
  getters: {
    getCartItems(state) {
      return state.cart
    },
    getCartNo(state) {
      return state.cart.length
    },
    inCart: (state) => (id) => {
      // return id
      let check = state.cart.find(p => p.id === id)

      if(check) {
        return true
      }else {
        return false
      }
    },
    getSummary(state) {
      return state.summary
    },
    getTotal(state) {
      return state.summary.total
    }
  }
}