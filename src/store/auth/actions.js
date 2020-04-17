import { connect } from '@/core/socket'
import { login, signup, setToken } from '@/core/api'
import router from '@/core/router'

const actions = {
  async login(context, payload) {
    try {
      const { token, user } = await login(payload)

      localStorage.setItem('chatting-auth', JSON.stringify({ token, user }))

      context.commit('setUserInfo', user)
      context.commit('setToken', token)

      connect(token)
      setToken(token)

      router.push('chats')
    } catch (err) {
      context.commit('apiFailed', err)
    }
  },

  async signup(context, payload) {
    try {
      const res = await signup(payload)

      localStorage.setItem('chatting-auth', JSON.stringify({ token, user }))

      context.commit('setUserInfo', user)
      context.commit('setToken', token)

      connect(token)
      setToken(token)

      router.push('chats')
    } catch (err) {
      context.commit('apiFailed', err)
    }
  },

  hydrate(context) {
    try {
      const info = localStorage.getItem('chatting-auth')
      const { token, user } = JSON.parse(info)
      setToken(token)
      connect(token)
      context.commit('setUserInfo', user)
      context.commit('setToken', token)
    } catch (err) {}
  }
}

export default actions