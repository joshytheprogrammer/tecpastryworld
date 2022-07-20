export default {
  namespaced: true,
  state : () => ({
    cart: [
      {
        id: '', // product_id
        thumbnail: '',
        name: '',
        data: {
          size: '',
          type: '',
          message: ''
        }
      }
    ]
  }),
  mutations: {
    ADD_ITEMS(state, payload) {
      
    }
  },
  actions: {
    addToCart() {
      console.log("in cart")
    }
  },
  getters: {
    
  }
}