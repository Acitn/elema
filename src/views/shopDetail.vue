<template>
    <div style="height: 100vh;">
        <header class="top" @scroll.passive="fnScroll" ref="top">
			<div class="topMain" v-show="!adsorbValue">
				<div class="toolbar">
				    <i class="iconfont icon-left-arrow" @click="back()"></i>
				    <div class="right">
				        <i class="iconfont icon-sousuo"></i>
				        <i class="iconfont icon-fenxiang"></i>
				        <i class="iconfont icon-pin"></i>
				    </div>
				</div>
				<div class="bg"></div>
				<div class="photo"></div>
				<div class="shoucang">
				    <i class="iconfont icon-shoucang"></i>
				</div>
			</div>
			<div class="absorbTop" v-show="adsorbValue">
				<i class="iconfont icon-left-arrow" @click="back()"></i>
				<van-search shape="round" input-align="center" placeholder="想吃什么搜一搜"/>
				<i class="iconfont icon-pin"></i>
			</div>
            <div class="textBox">
                <div class="title">华莱士炸鸡汉堡(双山店)</div>
                <div class="info">
                    <span>评价4.6</span>
                    <span>月售1713</span>
                    <span>蜂鸟专送约30分钟</span>
                </div>
                <div class="discountBox">
                    <div class="discount">
                        <span>25减6</span>
                        <span>40减10</span>
                        <span>60减20</span>
                    </div>
                    <div class="count">3个优惠</div>
                </div>
                <div class="bottomText">公告：(一)您的满意好评是我们和骑手小哥的服务目标，如有</div>
            </div>
        </header>
        <Tabs :active = "active">
            <TabsPane title="点餐" >
                <div class="content">
                    <div class="ad"></div>
					<ListBox :data="scrollItem" :sendingPrice="sendingPrice"></ListBox>
                </div>
            </TabsPane>
            <TabsPane title="评价" count="3899">
				<Card :data="card"></Card>
				<Comment :commentList="commentList"></Comment>
			</TabsPane>
            <TabsPane title="商家" text="有故事">内容三</TabsPane>
        </Tabs>
    </div>
</template>

<script>
import Tabs from 'components/tab/Tabs';
import TabsPane from 'components/tab/TabsPane';
//商品列表
import ListBox from 'components/shop/ListBox';
//评论
import Comment from 'components/comment/Comment';
import Card from 'components/comment/Card';

import * as API from 'api/demo';
import {throttle} from 'assets/js/utils'
export default {
	// mixins:[Mixins],
    components:{
        Tabs,
        TabsPane,
		ListBox,
		Comment,
		Card
    },
    data(){
        return {
			fnScroll: () => {},
			adsorbValue:true,
            active: 0,
			activeKey: 0,
			scrollItem:[],
			commentList:[],
			card:{},
			sendingPrice:0,
            list:[{text:"点餐"},{text:"评价",count:"3899"},{text:"商家",label:"有故事"}],
			sliderList:[{title:"热销",info:"2"},{title:"优惠",info:""},{title:"新品上市",info:""},{title:"套餐组合",info:""},{title:"热卖主食",info:""},{title:"小食精选",info:""}]
        }
    },
    created() {
		this.getScrollItem()
		this.getComment()
		this.getCard()
        this.$store.commit('setShow', false)
    },
	// mounted(){		
	// 	//这种方法不适用于节流返回的匿名函数，这样换页面时删除不了这个监听
	// 	// window.addEventListener('scroll', throttle(this.adsorb,1000))
	// 	this.fnScroll = throttle(this.adsorb, 0)
	// 	window.addEventListener('scroll', this.fnScroll)
	// },
	// destroyed(){
	// 	window.removeEventListener('scroll', this.fnScroll)
	// },
    methods:{
        back(){
            this.$router.go(-1)
        },
		getScrollItem(){
			API.post("/scrollItem2").then(result => {
			  if(result.code === 200){
				  this.scrollItem = result.data;
				  this.sendingPrice = result.sendingPrice;
			  }
			})
		},
		getComment(){
			API.post("/commentList").then(result => {
			  if(result.code === 200){
				  this.commentList = result.data;
			  }
			})
		},
		getCard(){
			API.post("/card").then(result => {
			  if(result.code === 200){
				  this.card = result.data;
			  }
			})
		}
	}
 }

</script>

<style lang="scss" scoped>
.top{
    position: relative;
    font-size: 16px;
	padding-bottom: 15px;
	background-color: #fff;
    .toolbar{
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 60px;
        padding-top: 20px;
        color: #FFFAF8;
        justify-content: space-between;
        .iconfont{
            font-size: 20px;
            margin-left: 15px;
        }
        .icon-pin{
            margin-right: 15px;
        }
    }
    .bg{
        background-color:rgb(206,206,206) ;
        height: 100px;
    }
    .photo{
        width: 100px;
        height: 100px;
        background: red;
        position: absolute;
        top: 40px;
        left: 50%;
        margin-left: -50px;
    }
    .shoucang{
        position: absolute;
        top: 130px;
        right: 20px;
        width: 40px;
        height: 40px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
         color: #D64C6C;
    }
    .icon-shoucang{
        color: #D64C6C;
        font-size: 20px;
    }
    .textBox{
        padding-top: 60px;
        .title{
            font-size: 20px;
            font-weight: bold;
        }
        .info{
            font-size: 12px;
            margin: 10px 0;
            span{
                margin-left: 10px;
                color: #8B8B8B;
            }
        }
        .discountBox{
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            padding: 0 40px;
            margin-bottom: 10px;
            color: #BCBCBC;
            span{
                margin-left: 10px;
                color: #CB736E;
                border:1px solid #E4E4E4;
                padding: 5;
            }
            span:nth-child(1){
                margin-left: 0;
            }
        }
        .bottomText{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:nowrap; 
            padding: 0 40px;
            font-size: 12px;
            color: #BCBCBC;
        }
    }
}
.content{
	background: #fff;
    .ad{
        height: 100px;
        background: url("../assets/images/ad.jpg") no-repeat;
        background-size: cover;
        border-radius: 10px;
		margin: 0 15px;
    }
	/deep/ .van-sidebar-item--select{
		border-color: #1989FA;
	} 

}

.headerFixed{
  position: fixed;
  width: 100%;
  top: 0;
  height: 55px;;
  z-index: 9;
}
.absorbTop{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
	background: #fff;
	position: fixed;
	width: 100%;
	z-index: 9;
	box-sizing: border-box;
	height: .6rem;
	.van-search__content--round{
		background-color: #E6E6E6;
	}
}

</style>
