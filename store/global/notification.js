export default {
  namespaced: true,
  state : () => ({
    notification: {
      type: 'error', // success, warning, error
      message: 'Product cannot be found'
    }
  }),
  mutations: {
    CLEAR_NOTIFICATION(state) {
      state.notification.type = null
      state.notification.message = null
    }
  },
  getters: {
    notyData(state) {
      return state.notification
    }
  }
}