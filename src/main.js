import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import router from '@/core/router'
import store from '@/store'
import App from '@/App'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
