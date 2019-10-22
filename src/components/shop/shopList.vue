<template>
  <div> 
    <router-link class="shopItem" :to=item.url  v-for="(item,i) in shopValue" :key="i">
      <img :src="item.img_url" alt="">
      <div class="content">
        <div class="title">{{item.name}}</div>
        <div class="second">
          <div>
            <div class="secondLeft">
              <i class="iconfont icon-xingxing" style="font-size:12px;"></i>
              <span>{{item.grade}}</span>
            </div>
            <span>月售{{item.sales}}</span>
          </div>
          <div class="btn-blue" v-if="item.courier">
            蜂鸟专送
          </div>
        </div>
        <div class="third">
          <div>
            <span class="thirdLeft">起送&yen;{{item.upToSend}}</span>
            <span v-if="item.free == true" class="thirdLeft2">免配送费<span style="margin-left:.03rem;text-decoration:line-through;">&yen;{{item.deliveryCost}}</span></span>
            <span v-else class="thirdLeft2">配送&yen;{{item.deliveryCost}}</span>
          </div>
          <div class="thirdRight">
            <span>{{item.deliveryTime}}分钟</span>
            <span style="margin-left:.05rem">{{item.distance}}</span>
          </div>
        </div>
        <div class="description">"{{item.description}}"</div>
        <div class="tagBox">
          <div class="tag" v-for="(tag,id) in item.tag" :key="id">{{tag}}</div>
        </div>
      </div>
    </router-link >
    <div v-if="load" class="load">
      <div class="circle">   
        <div class="box"></div>
      </div>
      <span>加载中</span> 
    </div>
  </div>
</template>

<script>
  export default{
    name:"shopList",
    props:{
      shopValue:{
        type:Array,
        required:true //  设置为必填
      },
      load:{
        type:Boolean,
        required:true
      }
    },
    data(){
      return{
        
      }     
    },
  }
</script>

<style lang="scss" scoped>
  .btn-blue{
    background-color: #00A5FF;
    border-radius: 3px;
    display: inline-block;
    color: #fff;
    padding: .02rem .04rem;
    font-size: 9px;
  }
  .shopItem{
    // font-family:Arial;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    display: -webkit-flex; /* Safari */
    padding: .1rem;
    padding-right: .058rem;
    font-size: 16px;
    background: #fff;
    img{
      width: .8rem;
      height: .8rem;
      border-radius: 5px;
      margin-right: .05rem;
    }
    .content{
      flex: 2;
      text-align: left;
      .title{
        color: #444;
        font-size: 16px;
        font-weight:bold;
        // margin-bottom: .05rem;
      }
      .second{
        color: #666;
        font-size: 12px;
        display: flex;
        display: -webkit-flex; /* Safari */
        justify-content: space-between;
        // margin-bottom: .05rem;
        .secondLeft{
          display: inline-block;
          color: #FF6300;
          margin-right: .05rem;
          
        }
        .secondRight{

        }
      }
      .third{
        color: #666;
        font-size: 11px;
        display: flex;
        display: -webkit-flex; /* Safari */
        justify-content: space-between;
        // margin-bottom: .01rem;
        .thirdLeft2{
          margin-left: .05rem;
        }
      }
      .description{
        display: inline-block;
        background-color: #FFF2E7;
        color: #FEA55F;
        font-size: 10px;
        margin-bottom: .05rem;
        padding: .02rem .08rem;
      }
      .tagBox{
        display: flex;
        font-size: 10px;
        .tag{
          border: 1px solid #FFF4F2;
          color: #FF978A;
          padding: 2px;
          margin: 0 .02rem;
          &:first{
            margin-left:0; 
            padding-left: 0;
          }
        }
      }
    }
  }
  .load{
    height: 30px;
    position: relative;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    .circle{
      width: 30px;
      height: 20px;
      .box {
        position: absolute;
        border-radius: 50%;
        border-style: solid;
        animation: ship 1.5s linear infinite;
      }
      .box:nth-child(1) {
        width: 20px;
        height: 20px;
        color: #C1C1C1;
        border-width: 0.02rem 0.02rem 0.02em 0em;
        --deg: -45deg;
        animation-direction: normal;
      }
    }
 
  }
 

  @keyframes ship {
    to{
      /* 1turn是一圈的意思 */
      transform: rotate(1turn);
    }
  }
</style>

