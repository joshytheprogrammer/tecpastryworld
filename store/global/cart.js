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
      console.log(localStorage.getItem('cart'))
    }
  },
  actions: {
    addToCart({ commit }, product) {
      let info = product[0]
      let details = product[1]

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
      
      console.log("in cart", item)
    }
  },
  getters: {
    
  }
}