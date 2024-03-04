import { createRouter, createWebHistory } from 'vue-router'
import IngredientsView from '../views/IngredientsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ingredients',
      name: 'ingredients',
      component: IngredientsView
    },
    {
      path: '/checkout',
      name: 'checkout',

      component: () => import('../views/CheckoutView.vue')
    }
  ]
})

export default router