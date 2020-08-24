import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addBook',
    name: 'BookAddingView',
    component: () => import('../views/BookAddingView.vue')
  },
  {
    path: '/bookList',
    name: 'BookListView',
    component: () => import('../views/BookListView.vue')
  },
  {
    path: '/getFromUser',
    name: 'GetFromUserView',
    component: () => import('../views/GetFromUserView.vue')
  },
  {
    path: '/setToUser',
    name: 'SetToUserView',
    component: () => import('../views/SetToUserView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
