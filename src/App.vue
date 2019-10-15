<template>
  <div id="app">
    <router-view></router-view>
	<footer>
		<van-tabbar v-model="active">
			<van-tabbar-item icon="home-o">
				<router-link to="/home">Home</router-link>
			</van-tabbar-item>
			<van-tabbar-item icon="search">
				<router-link to="/about">About</router-link>
			 </van-tabbar-item>
			<van-tabbar-item icon="friends-o"><router-link to="/about">用户</router-link></van-tabbar-item>
			<van-tabbar-item icon="setting-o"><router-link to="/about">设置</router-link></van-tabbar-item>
		</van-tabbar>
	</footer>
  </div>
</template>
<script>
	export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
a{
  color: #7d7e80;
}
footer{
  padding-top: 50px;
}
</style>
