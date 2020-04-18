import { io } from '@/core/socket'
import { getMessages } from '@/core/api'

const actions = {
  async getMessages(context) {
    try {
      const messages = await getMessages()
      context.commit('setMessages', messages)
    } catch (err) {
      context.commit('setMessages', [])
    }
  },
  sendMessage(context, payload) {
    io.emit('messages', payload);
  }
}

export default actions