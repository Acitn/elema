<template>
    <div>
        <header class="top">
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
            <Tabs :active = "active">
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
													:title="item.title"
													:info="item.info"/>
							</van-sidebar>
							<ScrollList headline="热销" describe="大家喜欢吃,才叫真的好吃">
								<ListItem v-for="(item,i) in scrollItem"
											:key="i" 
											:title="item.title"
											:sales="item.sales"
											:price="item.price"
											:original="item.original"
											:img_url="item.img_url"
											:describe="item.describe"
											:limit="item.limit"
											:minimun="item.minimun"
											:discount="item.discount"
											:rating="item.rating">
								</ListItem>
							</ScrollList>
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
export default {
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
            active:0,
			activeKey: 0,
			scrollItem:[],
            list:[{text:"点餐"},{text:"评价",count:"3899"},{text:"商家",label:"有故事"}],
			sliderList:[{title:"热销",info:"2"},{title:"优惠",info:""},{title:"新品上市",info:""},{title:"套餐组合",info:""},{title:"热卖主食",info:""},{title:"小食精选",info:""}]
        }
    },
    created() {
		this.getScrollItem()
        this.$store.commit('setShow', false)
		console.log(this.$store.getters.tip)
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
		}
	}
 }

</script>

<style lang="scss" scoped>
.top{
    position: relative;
    font-size: 16px;
    .toolbar{
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 60px;
        padding-top: .2rem;
        color: #FFFAF8;
        justify-content: space-between;
        .iconfont{
            font-size: .20rem;
            margin-left: .15rem;
        }
        .icon-pin{
            margin-right: .15rem;
        }
    }
    .bg{
        background-color:rgb(206,206,206) ;
        height: 1rem;
    }
    .photo{
        width: 1rem;
        height: 1rem;
        background: red;
        position: absolute;
        top:.4rem;
        left: 50%;
        margin-left: -.5rem;
    }
    .shoucang{
        position: absolute;
        top: 1.3rem;
        right: .2rem;
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
        font-size: .2rem;
    }
    .textBox{
        margin-top: .5rem;
        .title{
            font-size: .2rem;
            font-weight: bold;
        }
        .info{
            font-size: .12rem;
            margin: .1rem 0;
            span{
                margin-left: .1rem;
                color: #8B8B8B;
            }
        }
        .discountBox{
            font-size: .12rem;
            display: flex;
            justify-content: space-between;
            padding: 0 .4rem;
            margin-bottom: .1rem;
            color: #BCBCBC;
            span{
                margin-left: .1rem;
                color: #CB736E;
                border:1px solid #E4E4E4;
                padding: .05rem;
            }
            span:nth-child(1){
                margin-left: 0;
            }
        }
        .bottomText{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:nowrap; 
            padding: 0 .4rem;
            font-size: .12rem;
            color: #BCBCBC;
        }
    }
}
.content{
    .ad{
        width: 100%;
        height: 1rem;
        background: url("../assets/images/ad.jpg") no-repeat;
        background-size: cover;
        border-radius: 10px;
    }
	/deep/ .van-sidebar-item--select{
		border: none;
	} 
	.slider-content{
		display: flex;
	}
}
</style>