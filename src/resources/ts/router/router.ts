import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home/index.vue'
import MyPage from '@/views/MyPage/index.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router
