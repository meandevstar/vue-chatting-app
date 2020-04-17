import { io } from '@/core/socket'

const actions = {
  fetchMessages() {

  },
  sendMessage(context, payload) {
    io.emit('messages', payload);
  }
}

export default actions