import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sjbd from '@/components/sjbd'
import home from '@/components/home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
             path:'/sjbd',
              name:'sjbd',
            component:resolve=>{
              require(['@/components/sjbd'],resolve)
            }
     },
     {
      path:'/home',
       name:'home',
     component:resolve=>{
       require(['@/components/home'],resolve)
     }
}

  ],
  
  
})
