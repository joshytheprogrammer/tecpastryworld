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
      w > 768 ? state.isMobile = false : state.isMobile = true
      
      return
    },
    TOGGLE_MENU(state) {
      state.menu.showing = !state.menu.showing
    }
  },
  actions: {
    toggleMenu({commit}) {
      commit('TOGGLE_MENU')
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