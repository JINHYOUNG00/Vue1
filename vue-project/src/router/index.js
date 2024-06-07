import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import NestedView from '../views/NestedComponent.vue'
import EmpFormView from '../views/EmpForm.vue'
import EmpUpdateFormView from '../views/EmpUpdateForm.vue'


const routes = [
  {
    path: '/empUpdateForm',
    name: 'empUpdateForm',
    component: EmpUpdateFormView
  },
  {
    path: '/empForm',
    name: 'empForm',
    component: EmpFormView
  },
  {
    path: '/nested',
    name: 'nested',
    component: NestedView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/emp',
    name: 'emp',
    component: ()=> import (/* webpackChunkName: "emp", webpackPrefetch: true */'../views/EmpView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
