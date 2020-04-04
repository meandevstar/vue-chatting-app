const getters = {
  messages(state, getters, rootState, rootGetters) {
    const users = rootGetters['users/users']
    return state.data.map(message => {
      const sender = users.find(v => v.id === message.sender)
    console.log('==> current users', users, sender)

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