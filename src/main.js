import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '@/core/router'
import store from '@/store'
import App from '@/App'

Vue.config.productionTip = false
Vue.use(VueRouter)

// insert dummy data
import users from '@/dump/users.json'
import messages from '@/dump/messages.json'

store.commit('users/setUsers', users)
store.commit('messages/setMessages', messages)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
