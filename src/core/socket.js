import SocketIO from 'socket.io-client'
import store from '@/store'

const defaultOptions = {
  transport: ['websocket'],
  path: '/socket.io',
  query: {}
}
let io;

const connect = (token) => {
  defaultOptions.query.token = token

  if (io) {
    io.disconnect()
  }

  io = SocketIO(process.env.VUE_APP_SOCKET_URL, defaultOptions)

  io.on('connect', () => console.log('Socket connected'));
  io.on('disconnect', console.log('Socket disconnected'));

  io.on('messages.new', (data) => {
    console.log('==> messages.new', data)
    store.commit('messages/setMessage', data)
  })

  io.on('users', (data) => {
    console.log('==> users', data)
    store.commit('users/setUsers', data)
  })

  io.on('users.new', (data) => {
    console.log('==> users.new', data)
    store.commit('users/setNewUser', data)
  })
}

export {
  io,
  connect
}