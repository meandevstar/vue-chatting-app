import Vue from 'vue'
import Router from 'vue-router'
import LayoutPage from './Layout'
import store from '@/store'
import WelcomePage from '@/pages/welcome'
import ChatsPage from '@/pages/chats'
import { LoginPage, SignupPage } from '@/pages/auth'

Vue.use(Router)

let entryUrl = null;
const guard = async (to, from, next) => {
  if (store.state.auth.token !== null) {
    if (entryUrl) {
      const url = entryUrl;
      entryUrl = null;
      return next(url);
    } else {
      return next();
    }
  }

  await store.dispatch('auth/hydrate'); 

  if (store.state.auth.token !== null) {
    next();
  } else {
    entryUrl = to.path;
    next('/login');
  }
};

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
          component: WelcomePage,
          beforeEnter: guard
        },
        {
          path: 'chats',
          name: 'Chats',
          component: ChatsPage,
          beforeEnter: guard
        },
        {
          path: 'login',
          name: 'Login',
          component: LoginPage
        },
        {
          path: 'signup',
          name: 'Signup',
          component: SignupPage
        }
      ]
    }
  ]
})

export default router