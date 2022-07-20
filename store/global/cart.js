export default {
  namespaced: true,
  state : () => ({
    cart: []
  }),
  mutations: {
    ADD_ITEMS(state, payload) {
      // {
      //   id: '', // product_id
      //   thumbnail: '',
      //   name: '',
      //   data: {
      //     size: '',
      //     type: '',
      //     message: ''
      //   }
      // }

      localStorage.setItem('cart', state.cart)
    }
  },
  actions: {
    addToCart({ commit }, product) {
      console.log("in cart")
    }
  },
  getters: {
    
  }
}