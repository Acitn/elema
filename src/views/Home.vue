<template>
  <div class="home">
        	<footer>
		<van-tabbar v-model="active">
			<van-tabbar-item icon="home-o">
				<router-link to="/home">外卖</router-link>
			</van-tabbar-item>
			<van-tabbar-item icon="search">
				<router-link to="/about">超市</router-link>
			 </van-tabbar-item>
			<van-tabbar-item icon="setting-o"><router-link to="/order">订单</router-link></van-tabbar-item>
			<van-tabbar-item icon="friends-o"><router-link to="/personal">我的</router-link></van-tabbar-item>
		</van-tabbar>
	</footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/tabbar/index.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
