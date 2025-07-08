import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Chat from '../pages/Chat.vue'
import Profile from '../pages/Profile.vue'

const routes = [
  { path: '/', redirect: '/chat' },
  { path: '/login', component: Login },
  { path: '/chat', component: Chat },
  { path: '/profile', component: Profile }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router