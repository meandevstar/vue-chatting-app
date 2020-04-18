import SocketIO from 'socket.io-client'
import store from '@/store'

const defaultOptions = {
  transport: ['websocket'],
  path: '/socket.io',
  query: {}
}
let io;

const connect = (token) => {
  disconnect()

  defaultOptions.query.token = token

  io = SocketIO(process.env.VUE_APP_SOCKET_URL, defaultOptions)

  io.on('connect', () => console.log('Socket connected'));
  io.on('disconnect', console.log('Socket disconnected'));

  io.on('messages.new', (data) => {
    store.commit('messages/addMessage', data)
  })

  io.on('users', (data) => {
    store.commit('users/setUsers', data)
  })

  io.on('users.new', (data) => {
    store.commit('users/setNewUser', data)
  })
}

const disconnect = () => {
  if (io) {
    try {
      io.disconnect()
      io = null;  
    } catch (err) {}
  }
}

export {
  io,
  connect,
  disconnect
}