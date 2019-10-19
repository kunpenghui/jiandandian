import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import welcome from '@/components/jdd/welcome'
import Dishes from '@/components/jdd/Dishes'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Dishes},
    {path: '/Dishes',component: Dishes},
    {path: '/welcome',component: welcome},
  ]
})
