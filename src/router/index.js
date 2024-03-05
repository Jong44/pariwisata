import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/page/Homepage/HomeIndex.vue'
import DestinasiMain from '../views/page/Destinasipage/MainDestinasi.vue'
import InspirasiMain from '../views/page/Inspirasi/InspirasiMain.vue'
import SejarahMain from '../views/page/Sejarah/SejarahMain.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/artikel/:id',
      name: 'artikel',
      component: () => import('../views/page/Destinasipage/Article/DetailArticle.vue'),
      props: true
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
        {
          path: '/inspirasi/tourtrip/detail/:id',
          name: 'inspirasitourtripdetail',
          component: () => import('../views/page/Inspirasi/TourTrip/DetailTourTrip.vue'),
          props: true
        },
      ],
    },
    {
      path: '/sejarah',
      name: 'sejarah',
      component: SejarahMain,
      children: [
        {
          path: '/sejarah/warisanbudaya',
          name: 'sejarahwarisanbudaya',
          component: () => import('../views/page/Sejarah/WairasanBudaya.vue'),
        },
        {
          path: '/sejarah/ceritarakyat',
          name: 'sejarahceritarakyat',
          component: () => import('../views/page/Sejarah/CeritaRakyat.vue'),
        },
        {
          path: '/sejarah/umkm',
          name: 'sejarahumkm',
          component: () => import('../views/page/Sejarah/UMKM.vue'),
        },
        {
          path: '/sejarah/kuliner',
          name: 'sejarahkuliner',
          component: () => import('../views/page/Sejarah/Kuliner.vue'),
        },
        {
          path: '/sejarah/bahasa',
          name: 'sejarahbahasa',
          component: () => import('../views/page/Sejarah/Bahasa.vue'),
        },
      ],
    },
    
  ]
})

export default router
