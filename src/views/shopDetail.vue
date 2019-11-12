<template>
    <div>
        <header class="top">
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
                <div class="title">华莱士炸鸡汉堡(茂名双山店)</div>
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
        <main>
            <Tabs :active = "active" >
                <TabsPane title="点餐" >
                    <div class="content">
                        <div class="ad"></div>
						<ScrollBar title="商家推荐">
							<ScrollItem v-for="(item,i) in scrollItem" 
										:key="i" 
										:title="item.title"
										:sales="item.sales"
										:price="item.price"
										:original="item.original"
										:img_url="item.img_url">
							</ScrollItem>
						</ScrollBar>
						<div class="slider-content">
							<van-sidebar v-model="activeKey">
								<van-sidebar-item v-for="(item,i) in sliderList"
													:key="i"
													:title="item.title"/>
							</van-sidebar>
							<ListItem :data="scrollItem2"></ListItem>
<!-- 							<ScrollList v-for="(item,i) in scrollItem2" :key="i" :headline="item.title" :describe="item.describe">
								<ListItem :data="item.items"></ListItem>
							</ScrollList> -->
						</div>
						
                    </div>
                </TabsPane>
                <TabsPane title="评价" count="3899">内容二</TabsPane>
                <TabsPane title="商家" text="有故事">内容三</TabsPane>
            </Tabs>
        </main>
    </div>
</template>

<script>
import Tabs from '../components/shop/Tabs';
import TabsPane from '../components/shop/TabsPane';
import ScrollBar from '../components/shop/ScrollBar';
import ScrollItem from '../components/shop/ScrollItem';
import ScrollList from '../components/shop/ScrollList';
import ListItem from '../components/shop/ListItem';
import * as API from 'api/demo';
// import Mixins from '../mixins/index';
import {throttle} from '../assets/js/utils'
export default {
	// mixins:[Mixins],
    components:{
        Tabs,
        TabsPane,
		ScrollBar,
		ScrollItem,
		ScrollList,
		ListItem
    },
    data(){
        return {
			adsorbValue:false,
            active:0,
			activeKey: 0,
			scrollItem:[],
			scrollItem2:[],
            list:[{text:"点餐"},{text:"评价",count:"3899"},{text:"商家",label:"有故事"}],
			sliderList:[{title:"热销",info:"2"},{title:"优惠",info:""},{title:"新品上市",info:""},{title:"套餐组合",info:""},{title:"热卖主食",info:""},{title:"小食精选",info:""}]
        }
    },
    created() {
		this.getScrollItem()
		this.getScrollItem2()
        this.$store.commit('setShow', false)
    },
	mounted(){
		// 这种写法是错误的,下面写法只能在刚加载执行一次,应为this.absorb,要传参只能在方法里添加
		// window.removeEventListener("scroll",this.adsorb(60))
		// window.addEventListener('scroll', this.adsorb)
		// throttle(this.adsorb(),1000);
		// window.addEventListener('scroll', throttle(this.adsorb(),1000))
	},
	destroyed(){
		// window.removeEventListener("scroll",this.adsorb)
	},
    methods:{
        back(){
            this.$router.go(-1)
        },
		getScrollItem(){
			API.post("/scrollItem").then(result => {
			  if(result.code === 200){
				  this.scrollItem = result.data;
			  }
			})
		},
		getScrollItem2(){
			API.post("/scrollItem2").then(result => {
			  if(result.code === 200){
				  this.scrollItem2 = result.data;
			  }
			})
		},
		adsorb(){
			// debounce(() => {
			// 	console.log("防抖")
			// }, 1000)
			// alert("d")
			let top = document.getElementsByClassName("textBox")["0"].offsetTop;
			if(document.body.scrollTop>= top){
				// alert("d")
				this.adsorbValue = true;
			}else if(document.body.scrollTop <= top){
				this.adsorbValue = false;
			}
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
        margin-top: 50px;
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
    .ad{
        width: 100%;
        height: 100px;
        background: url("../assets/images/ad.jpg") no-repeat;
        background-size: cover;
        border-radius: 10px;
    }
	/deep/ .van-sidebar-item--select{
		border: none;
	} 
	.slider-content{
		display: flex;
		margin-top: 20px;
		margin-bottom: 50px;
	}
}

.headerFixed{
  position: fixed;
  width: 100%;
  top: 0;
  height: 55px;;
  z-index: 9999;
}
.absorbTop{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
	background: #fff;
	.van-search__content--round{
		background-color: #E6E6E6;
	}
}

</style>
