export default {
  namespaced: true,
  state : () => ({
    searching: false,
  }),
  mutations: {
    handleSearchBar(state) {
      state.searching = !state.searching
    },
    search(state, payload) {
      if(payload.length > 2) {
        this.$router.push({path: '/s', query: {k: payload}})
        state.searching = false
      }
    }
  },
  getters: {
    isSearchOpen(state) {
      return state.searching
    }
  }
}