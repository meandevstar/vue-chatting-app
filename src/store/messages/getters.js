const getters = {
  messages(state, getters, rootState, rootGetters) {
    const users = rootGetters['users/users']
    return state.data.map(message => {
      const user = users.find(v => v.id === message.user)

      return {
        ...message,
        user
      }
    })
  },
  loading(state) {
    return state.loading
  }
}

export default getters