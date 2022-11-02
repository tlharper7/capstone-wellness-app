import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/profile',
      component: () => import('@/views/Profile.vue'),
    },
    {
      path: '/activity',
      component: () => import('@/views/Activity.vue'),
    },
  ],
})
