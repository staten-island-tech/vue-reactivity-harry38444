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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CheckoutView.vue')
    }
  ]
})

export default router