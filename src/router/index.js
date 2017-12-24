import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import faq from '@/components/faq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/faq',
      name: 'faq',
      component: faq
    }
  ]
})
