import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Commend from './views/home/commend'
import Aborad from './views/home/aborad'
import Women from './views/home/women'
import Men from './views/home/men'
import Makeup from './views/home/makeup'
import Gear from './views/home/gear'
import Child from './views/home/child'
import Comingsoon from './views/home/comingsoon'
import Login from './views/login'
import Shopcar from './views/shopcar'
import Productlist from './views/productlist'
import Productdetail from './views/productdetail'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      // name: 'home',
      component: Home,
      children: [{
        path: 'commend',
        component: Commend
      },
      {
        path: 'aborad',
        component: Aborad
      },
      {
        path: 'women',
        component: Women
      },
      {
        path: 'men',
        component: Men
      },
      {
        path: 'makeup',
        component: Makeup
      },
      {
        path: 'gear',
        component: Gear
      },
      {
        path: 'child',
        component: Child
      },
      {
        path: 'comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: '/home/commend'
      }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shopcar',
      component: Shopcar
    },
    {
      path: '/productlist',
      component: Productlist
    },
    {
      path: '/productdetail',
      component: Productdetail
    },
    // {
    //   path: '/detail/:kerwinid', // 动态路由
    //   name: 'detail',
    //   component: Detail
    // },
    // {
    //   path: '/detail',
    //   name: 'detail', //命令路由
    //   component: Detail
    // },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: 'about' */ './views/About.vue')
    // }
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
