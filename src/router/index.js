import { createRouter, createWebHistory } from 'vue-router'
import PollPage from '@/views/PollPage.vue'

const routes = [
  {
    path: '/poll/:pollID',
    name: 'Poll',
    component: PollPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
