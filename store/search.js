export default {
  namespaced: true,
  state : () => ({
    searching: false,
  }),
  mutations: {
    HANDLE_SEARCH_BAR(state) {
      state.searching = !state.searching
    },
    search(state, payload) {
      if(payload.length > 3) {
        this.$router.push({path: '/s', query: {k: payload}})
        state.searching = false
      }else {
        let error = {
          type: 'error',
          message: 'Search term should be greater than 3 characters'
        }
        context.commit("global/notification", error)
        // console.log(this.$store)
      }
    }
  },
  actions: {
    handleSearchBar({commit}) {
      commit("HANDLE_SEARCH_BAR")
    }
  },
  getters: {
    isSearchOpen(state) {
      return state.searching
    }
  }
}