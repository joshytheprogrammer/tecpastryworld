export default {
  namespaced: true,
  state : () => ({
    searching: false,
  }),
  mutations: {
    handleSearchBar(state) {
      state.searching = !state.searching
    }
  },
  getters: {
    isSearchOpen(state) {
      return state.searching
    }
  }
}