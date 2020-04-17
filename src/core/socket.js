import SocketIO from 'socket.io-client'
import store from '@/store'

let io = SocketIO(process.env.VUE_APP_SOCKET_URL, {
  transport: ['websocket'],
  path: '/socket.io'
})

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

export default {
  io
}