export default {
  namespaced: true,
  state : () => ({
    isMobile: true,
    menu : {
      showing: false,
    }
  }),
  mutations: {
    checkWidth(state) {
      let w = window.innerWidth

      // If statement to check width
      w >= 768 ? state.isMobile = false : state.isMobile = true
      
      return
    },
    toggleMenu(state) {
      state.menu.showing = !state.menu.showing
    }
  },
  getters: {
    mobile(state) {
      return state.isMobile
    },
    isOpen(state) {
      return state.menu.showing
    }
  }
}