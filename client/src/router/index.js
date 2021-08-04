import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

import UserIndex from '@/components/Index'
import UserCreate from '@/components/CreateUser'
import UserEdit from '@/components/EditUser'
import UserShow from '@/components/ShowUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: '/users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'create-user',
      component: UserCreate
    },
    {
      path: '/user/edit',
      name: 'edit-user',
      component: UserEdit
    },
    {
      path: '/user',
      name: 'user',
      component: UserShow
    }
  ]
})
