import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import ContactDetails from '@/pages/ContactDetails.vue'
const routerOptions = {
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/contact/:id',
      name: 'ContactDetails',
      component: ContactDetails
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutPage.vue')
    },
    {
      path: '/contacts',
      name: 'ContactIndex',
      component: () => import('../pages/ContactIndex.vue')
    },
    {
      path: '/Statistics',
      name: 'StatisticsPage',
      component: () => import('../pages/StatisticsPage.vue'),
      children: [
        {
          path: "bar",
          name: "BarChart",
          component: () => import('../cmps/BarChart.vue')
        },
        {
          path: "line",
          name: "LineChart",
          component: () => import('../cmps/LineChart.vue')
        },
      ]
    }
  ]
}
const router = createRouter(routerOptions)

export default router
