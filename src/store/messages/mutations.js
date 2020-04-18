const mutations = {
  setMessages(state, payload) {
    state.data = payload
  },
  addMessage(state, payload) {
    state.data = state.data.concat([payload])
  }
}

export default mutations