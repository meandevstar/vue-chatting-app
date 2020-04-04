const mutations = {
  setMessage(state, payload) {
    state.data = state.data.concat([payload])
  }
}

export default mutations