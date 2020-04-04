import socket from '@/core/socket'
import axios from 'axios'

const actions = {
  async getUsers(context) {
    let users;

    try {
      users = await axios.get('http://localhost:8000/v1/users')
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