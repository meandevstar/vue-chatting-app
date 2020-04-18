const mutations = {
  setUserInfo(state, payload) {
    if (!state.info ||
      state.info && state.info._id === state.payload._id) {
      state.info = payload
    }

    state.loading = false
  },
  setToken(state, payload) {
    state.token = payload
  },
  apiFailed(state, payload) {
    state.error = payload
    state.loading = false
  }
}

export default mutations