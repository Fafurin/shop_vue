import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('../views/Main/Index.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('../views/Product/Index.vue')
    },
  ]
})

export default router
