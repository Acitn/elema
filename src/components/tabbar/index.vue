<template>
  <div class="container">
    <header class="header">
      <van-search placeholder="搜索商家、商品名称" v-model="value"/>
    </header>
    <div>
      <div class="center-circle">
      <div class="youhui">
        <div style="display: inline-block;font-size:24px;">200</div>
        <div style="display: inline-block;font-size:10px;color: #F2A8A1;">元</div>
      </div>
      <div class="youhui2">优惠券</div>
      <div class="youhui3">满2000元可使用</div>
      <div class="youhui4">立即领取</div>
      <div class="center-circle2"></div>     
      </div>  
    </div>
    <nav>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item  v-for="(item,index) in newsList" :key="index">
          <!-- <img v-lazy="item.img_url" width="100%;" /> -->
          <img :src="item.img_url" width="100%;"/>
        </van-swipe-item>
      </van-swipe>
    </nav>
      <van-grid :column-num="3">
        <van-grid-item
          v-for="(item,index) in gridText"
          :key="index"
          icon="photo-o"
          :text="item.name"
        />
      </van-grid>

    <section >
      <div style="font-size:24px;padding-left:15px;text-align:left;font-weight:blod;">推荐商家</div>
      <div class="dropMenu">
        <div class="menuItem">
          <van-dropdown-menu style="padding:0 10px">
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
          <div class="menuText">距离</div>
          <div class="menuText">销量</div>
        </div>
        <div class="menuItem">
          <div class="menuText">
            筛选
            <i class="iconfont icon-shaixuan"></i>
          </div>
        </div>
      </div>
      <shopList :shopValue="shop"></shopList>
    </section>
  </div>
</template>
<script>
// import shopList from '../shop/shopList'
export default {
  // components:{
  //   shopList
  // },
  data(){
    return {
      value:'',
      value1:0,
      switch1: false,
      switch2: false,
      shop:[],
      option1: [
          { text: '综合排序', value: 0 },
          { text: '好评优先', value: 1 },
          { text: '起送价最低', value: 2 },
          { text: '配送最快', value: 3 },
          { text: '配送费最低', value: 4 },
          { text: '人均从低到高', value: 5 },
          { text: '人均从高到低', value: 6 },
          { text: '通用排序', value: 7 },
        ],
      newsList:[],
      gridText:[{name:'美食'},{name:'晚餐'},{name:'卖场便利'},{name:'水果'},{name:'买菜'},{name:'甜品饮品'}]
    }
  },
  created(){
    this.getNewsList();
    this.getShopList();
  },
  methods:{
    onConfirm() {
      this.$refs.item.toggle();
    },
    getNewsList(){
      this.$http.post("https://www.fastmock.site/mock/4888b53ba159c454e964bfb891bf22a2/elma/newsList").then(result => {
        if(result.status === 200){
          this.newsList = result.body.data;
        }else{
          console.log("轮播图获取失败")
        }
      })
    },
    getShopList(){
      this.$http.post("https://www.fastmock.site/mock/4888b53ba159c454e964bfb891bf22a2/elma/shopList").then(result => {
        if(result.status === 200){
          let shop = result.body.data;
          for (let value of shop) {
              if(value.distance >= 1000){
                let distance = (value.distance / 1000).toFixed(1);
                value.distance = `${distance}km`
              }else if(value.distance <100){
                value.distance = `100m以内`
              }else{
                value.distance = `${value.distance}m`
              }
          }
          this.shop = shop;
        }
      })
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.menuText{
  height:50px;
  line-height:50px;
  padding:0 10px;
  font-size: 15px;
}
.container{
  .center-circle {
    margin: 10px;
    height: 15vh; 
    margin-top: 10px;
    position: relative;
    background:
    radial-gradient(circle at right top, transparent 10px, #E93F2C 0) top left / 25% 51% no-repeat,
    radial-gradient(circle at right bottom, transparent 10px, #E93F2C 0) bottom left /25% 51% no-repeat,
    radial-gradient(circle at left top, transparent 10px, #E93F2C 0) top right /75% 51% no-repeat,
    radial-gradient(circle at left bottom, transparent 10px, #E93F2C 0) bottom right /75% 51% no-repeat;
    .youhui{
      position: absolute;
      top:-32px;
      left:5px;
      width: 60px;       
    }
    .youhui2{
      position: absolute;
      top:30px;
      left:40px;
      width: 200px;
      font-size: 18px;
      }
      .youhui3{
        position: absolute;
        top:55px;
        left:40px;
        width: 200px;
        font-size: 10px;
        color: #F2A8A1;
      }
      .youhui4{
        position: absolute;
        top:30px;
        right:10px;
        width: 90px;
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        border: 1px solid #fff;
        border-radius: 15px;
        text-align: center;
        color: #F2A8A1;
      }    
  } 
  .dropMenu{
    display:flex;
    justify-content: space-around;
    .menuItem{
      display: flex;
      align-items: center;
       &:nth-child(1){
        flex: 1;
      }
    }
  }
  .filtrate{
    position: absolute;
    width: 100%;
    height: 100px;
  }
  .van-swipe{
    font-size: 16px;
  }
}
</style>
