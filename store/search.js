export default {
  namespaced: true,
  state : () => ({
    searching: false,
  }),
  mutations: {
    HANDLE_SEARCH_BAR(state) {
      state.searching = !state.searching
    },
    SEARCH(state, payload) {
      this.$router.push({path: '/s', query: {k: payload}})
      state.searching = false
      
    }
  },
  actions: {
    handleSearchBar({commit}) {
      commit("HANDLE_SEARCH_BAR")
    },
    search({dispatch, commit}, search_term) {
      if(search_term.length > 3) {
        commit("SEARCH", search_term)
      }else {
        let error = {
          type: 'error',
          message: 'Search term should be greater than 3 characters'
        }
        commit("HANDLE_SEARCH_BAR")
        dispatch("global/notification/setNotification", error, {root: true})
      }
      
    }
  },
  getters: {
    isSearchOpen(state) {
      return state.searching
    }
  }
}