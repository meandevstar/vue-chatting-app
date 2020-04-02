import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '@/core/router'
import store from '@/store'
import App from '@/App'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
