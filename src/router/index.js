import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/page/Homepage/HomeIndex.vue'
import DestinasiView from '../views/page/Destinasipage/DestinasiIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/destinasi',
      name: 'destinasi',
      component: DestinasiView
    }
  ]
})

export default router
