export default {
  namespaced: true,
  state : () => ({
    notification: {
      type: 'success', // success, warning, error
      message: 'Product imparted'
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