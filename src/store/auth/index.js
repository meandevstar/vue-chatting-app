import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  data: {},
  token: null,
  loading: false
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

