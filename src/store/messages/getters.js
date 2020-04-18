const getters = {
  messages(state, getters, rootState, rootGetters) {
    const users = rootGetters['users/users']
    return state.data.map(message => {
      let sender = {};

      if (users.length) {
        sender = users.find(v =>
          v._id === message.sender._id || message.sender
        )
      } else {
        sender = message.sender;
      }

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