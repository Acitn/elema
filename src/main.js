import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
// 导入路由包
import VueRouter from 'vue-router'
import store from './store/index.js';
//改用axios
import './api/axios';
// import VueSource from 'vue-resource';
// Vue.use(VueSource)
import rem from './rem';
// import 'css/base/base.scss';
import './assets/iconfont/iconfont.css';

// import mixins from './mixins';
// Vue.mixin(mixins);
//全局安装自定义组件
import ShopList from './components/shop/index.js';
Vue.use(ShopList)
// 安装路由
Vue.use(VueRouter)
import { Row, Col,Grid,GridItem,Search,Swipe,SwipeItem,Lazyload,Tabbar,TabbarItem,DropdownMenu,DropdownItem,Icon,SwitchCell,Button,Sidebar,SidebarItem } from 'vant';
Vue.use(Row).use(Col).use(Grid).use(GridItem).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(Tabbar).use(TabbarItem).use(DropdownMenu).use(DropdownItem).use(Icon).use(SwitchCell).use(Button).use(Sidebar).use(SidebarItem);
// Vue.use( Row, Col,Tab,Tabs,Grid, GridItem,Search,Swipe,SwipeItem,Lazyload,Tabbar,TabbarItem,DropdownMenu,DropdownItem,Icon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')




