export default {
  namespaced: true,
  state : () => ({
    cart: []
  }),
  mutations: {
    ADD_ITEM(state, payload) {

      state.cart.push(payload)
      localStorage.setItem('cart', JSON.stringify(state.cart))
      // console.log(JSON.parse(localStorage.getItem('cart')))
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
          price: details.price,
          message: details.message
        }
      }

      commit('ADD_ITEM', item)

      // Dispatch Notification
      dispatch("global/notification/setNotification", {type: "success", message: 'Item added successfully'}, {root: true})
    }
  },
  getters: {
    getCartItems(state) {
      return state.cart
    },
    getCartNo(state) {
      return state.cart.length
    },
    
  }
}