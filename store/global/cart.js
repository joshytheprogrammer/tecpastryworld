export default {
  namespaced: true,
  state : () => ({
    cart: [],
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
          price: details.price,
          message: details.message
        }
      }

      commit('ADD_ITEM', item)

      // Dispatch Notification
      dispatch("global/notification/setNotification", {type: "success", message: 'Item added successfully'}, {root: true})
    },
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
    }
  }
}