import socket from '@/core/socket'
import { login, signup, setToken } from '@/core/api'

const actions = {
  async login(context, payload) {
    try {
      const { token, user } = await login(payload)
      localStorage.setItem('token', token)
      context.commit('setUserInfo', user)
      context.commit('setToken', token)
    } catch (err) {
      context.commit('apiFailed', err)
    }
  },

  async signup(context, payload) {
    try {
      const res = await signup(payload)
      localStorage.setItem('token', token)
      context.commit('setUserInfo', user)
      context.commit('setToken', token)
    } catch (err) {
      context.commit('apiFailed', err)
    }
  },

  hydrate(context) {
    const token = localStorage.getItem('token')
    setToken(token)
    context.commit('setToken', token)
  }
}

export default actions