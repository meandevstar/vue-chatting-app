import socket from '@/core/socket'
import { getUsers } from '@/core/api'

const actions = {
  async getUsers(context) {
    let users;

    try {
      users = await getUsers()
    } catch (err) {
      users = []
    }

    context.commit('setUsers', users)
  },
  setName(context, payload) {
    socket.io.emit('users.name', payload)
  }
}

export default actions