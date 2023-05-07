import { createRouter, createWebHistory } from 'vue-router'
import FilterSearch from '../views/FilterSearch.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FilterSearch
    }
  ]
})

export default router
