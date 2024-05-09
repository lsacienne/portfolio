import { createRouter, createWebHashHistory } from 'vue-router'
import HomePageView from '@/views/HomePageView.vue'
import ProjectPageView from '@/views/ProjectPageView.vue'
import HobbysPageView from '@/views/HobbysPageView.vue'
import SkillsPageView from '@/views/SkillsPageView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePageView
  },
  {
    path: '/projects',
    name: 'Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProjectPageView
  },
  {
    path: '/hobbys',
    name: 'Hobbys',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HobbysPageView
  },
  {
    path: '/skills',
    name: 'Skills',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SkillsPageView
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
