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
    handleSearchBar({dispatch, commit}) {
      commit("HANDLE_SEARCH_BAR")
      
      // Remove all notifications when search bar is toggled
      dispatch("global/notification/clearNotification", null, {root: true})
    },
    search({dispatch, commit}, search_term) {
      if(search_term.length > 3) {
        commit("SEARCH", search_term)
      }else {
        
        // Error message for searchterm when search term is to short
        let error = {
          type: 'error',
          message: 'Search term should be greater than 3 characters'
        }

        // remove search bar to allow error show
        commit("HANDLE_SEARCH_BAR")

        // Send error message
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