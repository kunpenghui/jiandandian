import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dishes from '@/components/jdd/Dishes'
import Cart from "@/components/jdd/Cart"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Dishes},
    {path: '/Dishes',component: Dishes},
    {path:'/Cart',component:Cart},
  ]
})
