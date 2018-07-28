import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Go from '@/components/Go'
import Show from '@/components/Show'
import Err404 from '@/components/errors/err404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/go/:alias',
      name: 'Go',
      component: Go
    },
    {
      path: '/show/:alias',
      name: 'SHow',
      component: Show
    },
    {
      path: '*',
      name: 'Err404',
      component: Err404
    }
  ]
})
