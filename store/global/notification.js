export default {
  namespaced: true,
  state : () => ({
    notification: {
      type: 'error', // success, warning, error
      message: 'Product cannot be found'
    }
  }),
  mutations: {
    
  },
  getters: {
    notyData(state) {
      return state.notification
    }
  }
}