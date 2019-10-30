//编译时调用
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Personal from '../views/Personal.vue'
// import shopDetail from '../views/shopDetail.vue'

//按需引入路由界面
function load(component) {
    return resolve => require([`../views/${component}`], resolve);
}

const routes = [
    {path:'/',redirect:'/home'},
    {
		path: '/home',
		component:load('Home'),
		meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
	},
    {path:'/shopDetail', component:load('shopDetail')},
    {path: '/about',component:load('About')},
    {path: '/personal',component:load('Personal')},

];
export default routes;
