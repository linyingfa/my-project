import Vue from 'vue'
import Router from 'vue-router'
import CustomRouter from '../components/CustomRouter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/components',
      name: 'cus_router',
      component: CustomRouter
    }
  ]
})
