<template>
  <div id="app">
    <router-view></router-view>
    <footer v-show="$store.state.showBottomNav">
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
body{
  background-color: #f5f5f5;
  font-size: 14px;
}
a{
  color: #7d7e80;
}
footer{
  margin-top: 50px;
}
img{ 
  pointer-events: none; //阻止点击预览图片
}
</style>
