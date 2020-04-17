const getters = {
  messages(state, getters, rootState, rootGetters) {
    const users = rootGetters['users/users']
    return state.data.map(message => {
      const sender = users.find(v => v._id === message.sender)

      return {
        ...message,
        sender
      }
    })
  },

  loading(state) {
    return state.loading
  }
}

export default getters