const mutations = {
  setUsers(state, payload) {
    state.data = payload
  },
  setNewUser(state, payload) {
    state.data = state.data
      .filter(user => user.id !== payload.id)
      .concat([payload])
  }
}

export default mutations