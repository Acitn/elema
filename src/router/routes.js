//编译时调用
// import home from '../views/home.vue'
// import about from '../views/Aabout.vue'
// import personal from '../views/personal.vue'
// import shopDetail from '../views/shopDetail.vue'

//按需引入路由界面
function load(component) {
    return resolve => require([`../views/${component}`], resolve);
}

const routes = [
    {path:'/',redirect:'/home'},
    {
		path: '/home',
		component:load('home'),
		meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
	},
    {path:'/shopDetail', component:load('shopDetail')},
    {path: '/about',component:load('about')},
    {path: '/personal',component:load('personal')},

];
export default routes;
