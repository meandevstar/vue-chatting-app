import Vue from 'vue'
import Router from 'vue-router'
import LayoutPage from './Layout'
import WelcomePage from '@/pages/welcome'
import ChatsPage from '@/pages/chats'

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
          path: '/',
          redirect: '/chats'
        },
        {
          path: 'welcome',
          name: 'Welcome',
          component: WelcomePage
        },
        {
          path: 'chats',
          name: 'Chats',
          component: ChatsPage
        }
      ]
    }
  ]
})

export default router