import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/index.vue' 

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: index },
  { path: '/welcome', component: index }, // 复用同一组件，实际可拆分
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router