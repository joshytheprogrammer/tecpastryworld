export default {
  namespaced: true,
  state : () => ({
    cart: []
  }),
  mutations: {
    ADD_ITEM(state, payload) {
      // Check cart if item is already there.
      if(state.cart.length) {
        state.cart.forEach(item => {
          console.log(item.id)
        });
      }else {
        state.cart.push(payload)
      }
      // If item isn't in cart, push item to cart
      
      // Update local storage
      // localStorage.setItem('cart', JSON.stringify(state.cart))
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
  }
}