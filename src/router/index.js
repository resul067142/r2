import { createRouter, createWebHistory } from 'vue-router'
import {auth} from '../firebase/config'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Share from '../views/Share.vue'

const kullaniciKontrol=(to,from,next)=>{

  let kullanici=auth.currentUser;

  if(!kullanici){
    next({name:'Login'})
  }else{
    next()
  }
}
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/share',
    name: 'Share',
    component: Share
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/share',
    name: 'Share',
    component: Share,
    beforeEnter: kullaniciKontrol
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
