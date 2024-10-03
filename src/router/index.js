import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AprovView from '@/views/AprovView.vue'
import AlmoxView from '@/views/AlmoxView.vue'
import SalcView from '@/views/SalcView.vue'
import TesourariaView from '@/views/TesourariaView.vue'
import FiscAdmView from '@/views/FiscAdmView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/set-aprov',
      name: 'setAprov',
      component: AprovView
    },
    {
      path: '/almox',
      name: 'almox',
      component: AlmoxView
    },
    {
      path: '/salc',
      name: 'salc',
      component: SalcView
    },
    {
      path: '/tesouraria',
      name: 'tesouraria',
      component: TesourariaView
    },
    {
      path: '/fisc-adm',
      name: 'fiscAdm',
      component: FiscAdmView
    },
    {
      path: '/LoginView',
      name: 'loginView',
      component: LoginView
    }
  ]
})

export default router
