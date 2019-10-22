<template>
  <div class="container">
    <header>
      <div class="header">
        <div class="addressBox">
          <i class="iconfont icon-didian"></i>
          <span class="address">广东省茂名市茂南</span>
          <i class="iconfont icon-arrow-left" style="color:#A2A2A2;font-size:.18rem"></i>
        </div>
        
        <div class="rightBox">
          <div class="scan">
            <i class="iconfont icon-saoma"></i>
            <span>扫码</span>
          </div>
          <div class="weather">
            <i class="iconfont icon-taiyang"></i>
            <span>27℃</span>
          </div>
        </div>
      </div>
      <van-search :class="{headerFixed:!header}" placeholder="搜索商家、商品名称" v-model="value"/>
    </header>

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

    <section style="position: relative;">
      <div style="font-size:24px;padding-left:15px;text-align:left;font-weight:blod;      background: #fff;">推荐商家</div>
      <div class="dropMenu">
        <div class="menuItem">
          <van-dropdown-menu style="padding:0 10px">
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
          <div class="menuText">距离</div>
          <div class="menuText">销量</div>
        </div>
        <div class="menuItem">
          <pullDown :title="title" :dataList="option2" :itemTitle="title2"></pullDown>
        </div>
      </div>
      <shopList :shopValue="shop" :load="!query"></shopList>
    </section>
  </div>
</template>
<script>
import pullDown from '../shop/pullDown'
export default {
  components:{
    pullDown
  },
  data(){
    return {
      value:'',
      header:true,
      value1:0,
      query:true,
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
      title:"筛选",
      title2:["优惠活动","商家服务"],
      option2: [
        {"value":['首单立减','津贴联盟','门客新客立减','满减优惠','下单返红包','进店领红包','配送费优惠','赠品优惠','特价商品','品质联盟红包']},
        {"value":['蜂鸟专送','到店自取','品牌商家','新店','接收预定','食安保','开发票']} 
      ],
      newsList:[],
      gridText:[{name:'美食'},{name:'晚餐'},{name:'卖场便利'},{name:'水果'},{name:'买菜'},{name:'甜品饮品'}]
    }
  },
  created(){
    this.getNewsList();
    this.getShopList();
    this.$store.state.showBottomNav = true
  },
  mounted () {
    // 添加滚动事件，检测滚动到页面底部
    window.addEventListener('scroll', this.loadMore)
    // 添加滚动事件，检测滚动到页面底部
    window.addEventListener('scroll', this.fixed)
  },
  methods:{
    onConfirm() {
      this.$refs.item.toggle();
    },
    fixed(){
      if(document.body.scrollTop>= 60){
        this.header = false;
      }else if(document.body.scrollTop <= 60){
        this.header = true;
      }
    },
    loadMore(){
      if (((window.screen.height + document.body.scrollTop) > (document.body.clientHeight - 100)) && this.query) {
        this.query = false;
        this.getShopList();
      }
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
          
          for(let item of shop){
             this.shop.push(item);
          }
         
          this.query = true;
          // this.shop = shop;
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
.headerFixed{
  position: fixed;
  width: 100%;
  top: 0;
  height: 55px;;
  z-index: 9999;
}
.header{
  display: flex;
  justify-content: space-between;
  height:60px;
  padding:  15px;
  box-sizing: border-box;
  .addressBox{
    font-size: .2rem;
    width: 2.1rem;
    display: flex;
    align-items: center;
    .address{
      font-weight: bold;
      overflow:hidden;
      text-overflow:clip;
      white-space:nowrap; 
      padding-right: 5px;
      border-right: 2px solid #DBDBDB;
    }
    .iconfont{
      font-size: .22rem;
      color: #07A9FF;
    }
  }
  .rightBox{
    font-size: .16rem;
    display: flex;
    align-items: center;
    color: #07A9FF;
    .iconfont{
      font-size: .22rem;
      margin-right: .02rem
    }
    .weather{
      margin-left: .08rem
    }
  }
}
.container{
  background-color: #fff;
  .van-swipe{
    margin: 0 15px;
    padding-top: 10px;
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
