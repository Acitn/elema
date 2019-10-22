import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/tabbar/index.vue'
import About from './views/About.vue'
import Personal from './views/Personal.vue'
import shopDetail from './components/shop/shopDetail.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path: '/home',component:Home,children:[
      
    ]},
    {path:'/shopDetail', component:shopDetail},
    {path: '/about',component:About},
    {path: '/personal',component:Personal},
  ]
})


