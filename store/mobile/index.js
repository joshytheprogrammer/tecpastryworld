export default {
  namespaced: true,
  state : () => ({
    isMobile: true
  }),
  mutations: {
    checkWidth(state) {
      let w = window.innerWidth

      // If statement to check width
      w >= 768 ? state.isMobile = false : state.isMobile = true
      
      return
    }
  },
  getters: {
    mobile(state) {
      return state.isMobile
    }
  }
}