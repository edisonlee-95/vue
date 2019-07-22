import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/Member'
import Shopcar from '@/components/Shopcar'
import Search from '@/components/Search'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/Home'},
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },{
      path: '/Member',
      name: 'Member',
      component: Member,
    },{
      path: '/Shopcar',
      name: 'Shopcar',
      component: Shopcar,
    },{
      path: '/Search',
      name: 'Search',
      component: Search,
    }
    
    
  ],
  linkActiveClass: 'mui-active'/* 覆盖默认的路由高亮类，默认的类叫做 rooter-link-active */
})
