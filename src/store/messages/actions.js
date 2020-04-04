import socket from '@/core/socket'

const actions = {
  fetchMessages() {

  },
  sendMessage(context, payload) {
    socket.io.emit('messages', payload);
  }
}

export default actions