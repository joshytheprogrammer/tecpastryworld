export default {
  namespaced: true,
  state : () => ({
    notification: {
      type: null, // success, warning, error, neutral
      message: null
    }
  }),
  mutations: {
    CLEAR_NOTIFICATION(state) {
      state.notification.type = null
      state.notification.message = null
    },
    SET_NOTIFICATION(state, payload) {
      state.notification.type = payload.type
      state.notification.message = payload.message
    }
  },
  actions: {
    setNotification({ commit }, notification) {
      commit('SET_NOTIFICATION', notification)
      // this.$store.dispatch("global/notification/setNotification", {type: "error", message: error.message}, {root: true})
    },
    clearNotification({ commit }) {
      commit('CLEAR_NOTIFICATION')
    }
  },
  getters: {
    notyData(state) {
      return state.notification
    }
  }
}