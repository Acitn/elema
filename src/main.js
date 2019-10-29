import Vue from 'vue';
import App from './App.vue';
import router from './router';
// 导入路由包
import VueRouter from 'vue-router'
import store from './store/index.js';
import VueSource from 'vue-resource';
// import './assets/iconfont/iconfont.js';
import rem from './rem';
import './assets/iconfont/iconfont.css';

//全局安装自定义组件
import shopList from './components/shop/index.js';
Vue.use(shopList)
// 安装路由
Vue.use(VueRouter)
import { Row, Col,Tab,Tabs,Grid, GridItem,Search,Swipe,SwipeItem,Lazyload,Tabbar,TabbarItem,DropdownMenu,DropdownItem,Icon,SwitchCell,Button,Sidebar,SidebarItem } from 'vant';
Vue.use(VueSource).use(Row).use(Col).use(Tab).use(Tabs).use(Grid).use(GridItem).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(Tabbar).use(TabbarItem).use(DropdownMenu).use(DropdownItem).use(Icon).use(SwitchCell).use(Button).use(Sidebar).use(SidebarItem);
// Vue.use( Row, Col,Tab,Tabs,Grid, GridItem,Search,Swipe,SwipeItem,Lazyload,Tabbar,TabbarItem,DropdownMenu,DropdownItem,Icon);

Vue.config.productionTip = false

//设置请求的根路径
Vue.http.options.root = 'https://www.fastmock.site/mock/4888b53ba159c454e964bfb891bf22a2/elma';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')




