import Vue from 'vue'
import Router from 'vue-router'
import LayoutPage from './Layout'
import WelcomePage from '@/pages/welcome'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutPage,
      children: [
        {
          path: 'welcome',
          name: 'Welcome',
          component: WelcomePage
        }
      ]
    }
  ]
})

export default router