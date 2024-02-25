import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/page/Homepage/HomeIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
