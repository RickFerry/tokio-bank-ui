import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import AgendarTransferencia from '../pages/AgendarTransferencia.vue'
import ExtratoTransferencias from '../pages/ExtratoTransferencias.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/agendar', component: AgendarTransferencia },
  { path: '/extrato', component: ExtratoTransferencias },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
