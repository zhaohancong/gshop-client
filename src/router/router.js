/*路由器对象模块*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
/*必须声明使用*/
Vue.use(VueRouter)
export default new VueRouter({
  mode :"history",
  /*配置应用所有的路由*/
  routes:[
    {
      path:'/msite',
      component:Msite
    },
   {
      path:'/Order',
      component:Order
    },
   {
      path:'/Profile',
      component:Profile
    },
   {
      path:'/Search',
      component:Search
    },
    {
      path:'/',
      component:Msite
    }
  ]
})
