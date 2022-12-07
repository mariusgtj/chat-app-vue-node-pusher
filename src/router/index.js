import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginView from '../views/LoginView.vue'
import ChatDashboard from '../views/ChatDashboard.vue'
import PusherExampleView from '../views/PusherExampleView.vue'
import PusherLoginView from '../views/PusherLoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: ChatDashboard
  },
  {
    path: '/pusher-example',
    name: 'pusher-example',
    component: PusherExampleView
  },
  {
    path: '/pusher-login',
    name: 'pusher-login',
    component: PusherLoginView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
