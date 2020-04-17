const mutations = {
  setUserInfo(state, payload) {
    state.data = payload
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