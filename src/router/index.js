import { createRouter, createWebHistory } from 'vue-router'
import PollPage from '@/views/PollPage.vue'
import HomePage from '@/views/HomePage.vue'

const routes = [
  {
    path: '/poll/:pollID',
    name: 'Poll',
    component: PollPage,
  },
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
