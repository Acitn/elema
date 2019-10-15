import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/tabbar/index.vue'
import About from './views/About.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path: '/home',component:Home},
    {path: '/about',component:About},
  ]
})


