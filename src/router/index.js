import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/page/Homepage/HomeIndex.vue'
import DestinasiMain from '../views/page/Destinasipage/MainDestinasi.vue'
import InspirasiMain from '../views/page/Inspirasi/InspirasiMain.vue'

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
      component: DestinasiMain,
      children: [
        {
          path: '',
          name: 'destinasi',
          component: () => import('../views/page/Destinasipage/DestinasiIndex.vue'),
        },
        {
          path: '/destinasi/article/:id',
          name: 'article',
          component: () => import('../views/page/Destinasipage/Article/DetailArticle.vue'),
          props: true
        },
        {
          path: '/destinasi/detail/:query',
          name: 'detaildestinasi',
          component: () => import('../views/page/Destinasipage/DetailDestinasi/DetailDestinasi.vue'),
          props: true
        },
      ],
    },
    {
      path: '/inspirasi',
      name: 'insipirasi',
      component: InspirasiMain,
      children: [
        {
          path: '/inspirasi/ideliburan',
          name: 'inspirasiideliburan',
          component: () => import('../views/page/Inspirasi/IdeLiburan/IdeLiburan.vue'),
          props: true
        },
        {
          path: '/inspirasi/tourtrip',
          name: 'inspirasitourtrip',
          component: () => import('../views/page/Inspirasi/TourTrip/TourTrip.vue'),
        },
      ],
    },
  ]
})

export default router
