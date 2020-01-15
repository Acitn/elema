<template>
	<div style="flex: 1;">
		<ScrollBar title="商家推荐" :data="data"></ScrollBar>
		<div class="slider-content">	
			<van-sidebar v-model="activeKey">
				<van-sidebar-item v-for="(list,i) in data" :key="i" :id="i" :title="list.title" :info="list.info" @click="scrollTo($event)" ref="siderBar"/>
			</van-sidebar>
			<!-- @scroll.passive -->
			<div class="scrollList"  ref="scrollList" @scroll.passive="fnScroll">
				<div class="scrollItem2" v-for="(item,index) in data" :key="index" :id="index" ref="text">
					<div :class="{fixed: activeKey == index}" class="title">
						<div class="headline">{{item.title}}</div>
						<div class="describe">{{item.describe}}</div>
					</div>
					<div class="bigBox" v-for="(item2,index2) in item.items" :key="index2">
						<img :src="item2.img_url" alt="">
						<div class="box">
							<span class="scrollText">{{item2.name}}</span>
							<span class="scrollDescribe">{{item2.describe}}</span>
							<span class="scrollSales">月售{{item2.sales}}</span>
							<div class="bottom">
								<div class="price">
									<span class="discount" >&yen;{{item2.price}}</span>
									<span class="original" v-if="item2.original">&yen;{{item2.original}}</span>
								</div>
								<div :class="{account: item2.num>0 }">
									<i class="iconfont icon-jianshao" v-show="item2.num>0"  @click="reduce(index, index2,$event)" :parentId="index"></i>
									<span class="number" v-show="item2.num>0">{{item2.num}}</span>
									<i class="iconfont icon-add-fill" @click="add(index, index2, $event)" :parentId="index"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
        <!-- 运动的小球 -->
        <!-- <div id="points" v-for="(num,i) in 7" :key="i">
            <div class="pointOuter pointPre">
                <div class="point-inner"></div>
            </div>   
        </div> -->
		<div id="points">
			<div class="pointOuter pointPre">
				<div class="point-inner"></div>
			</div>  
			<div class="pointOuter pointPre">
				<div class="point-inner"></div>
			</div>  
			<div class="pointOuter pointPre">
				<div class="point-inner"></div>
			</div>  
			<div class="pointOuter pointPre">
				<div class="point-inner"></div>
			</div>  
			<div class="pointOuter pointPre">
				<div class="point-inner"></div>
			</div>  
			<div class="pointOuter pointPre">
				<div class="point-inner"></div>
			</div>  
			<div class="pointOuter pointPre">
				<div class="point-inner"></div>
			</div>  
		</div>
		//遮罩层与底部弹窗
		<div class="shade" v-show="bottomShow" @click="bottomUpShow(false)"></div>
		<div class="shopBox" :style="{height:boxHeight +'px'}">
			<div class="bottomUp" ref="bottomUp">
				<div class="headline">
					<div class="left">已选商品</div>
					<div class="right" @click="clear()">
						<i class="iconfont icon-lajitong"></i>
						清空
					</div>
				</div>
					
				<div class="item" v-for="(item,id) in cart" :key="id">
					<div class="shop">{{item.data.name}}</div>
					<div class="right">
						<div class="price">
							<span class="discount" >&yen;{{item.data.num * item.data.price}}</span>
						</div>
						<div class="account">
							<i class="iconfont icon-jianshao" @click="reduce(item.parentId, item.id,$event)" :parentId="item.parentId"></i>
							<span class="number">{{item.data.num}}</span>
							<i class="iconfont icon-add-fill" @click="add(item.parentId, item.id, $event)" :parentId="item.parentId"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<footer class="footBox">
			<div class="left"  @click="bottomUpShow(!bottomShow)">
				<div class="photo" ref="cart"></div>
				<div class="text">
					<div class="topText"  v-show="total == 0">未选购商品</div>
					<div class="fill" v-show="total > 0">
						<div class="total">&yen;{{total}}</div>
						<div class="originalTotal" v-show="originalShow">&yen;{{originalTotal}}</div>
					</div>
					<div class="bottomText">另需配送费1.5元</div>
				</div>
			</div>
			<div class="right" :class="{green: cartContent == '去结算' }" @click="account" >{{cartContent}}</div>
		</footer>
	</div>
</template>

<script>
import {throttle} from 'assets/js/utils'
import ScrollBar from './ScrollBar';
	export default{
		name:"listBox",
		components:{ 
			ScrollBar
		},
		props: {
			data:{
				type: Array,
				required: true
			},
			sendingPrice:{
				type: Number,
				required: true
			}
		},
		data(){
			return {
				activeKey: 0,
				instead:false,
				cart:[],
				bottomShow:false,
				total:0,
				originalTotal:0,
				originalShow:false,
				cartContent:"",
				boxHeight: 0,
				fnScroll: () => {}
			}
		},
		mounted(){
			this.fnScroll = throttle(this.side, 0)
		},
		updated(){	
			this.setCartContent();
		},
		methods:{
			//点击左侧导航跳转到指定位置
			scrollTo(e){
				let scrollList = this.$refs.scrollList
				const container = this.$refs.text,
					  height = this.$refs.text["0"].offsetTop
				for(let item of container){
					if(item.id == e){
						if(scrollList.scrollHeight >= item.offsetTop + item.clientHeight){
							if(this.instead){
								scrollList.scrollTop = item.offsetTop - height
								this.instead = false
								
							}else if(item.id != this.activeKey ){
								//从后面往回按此时标题处于absoulute状态脱离文件流,计算高度忽略它
								if(item.id <= this.activeKey){	
									scrollList.scrollTop = item.offsetTop - height
								}else{
									scrollList.scrollTop = item.offsetTop
								}
							}
						}
						else{
							this.instead = true
							scrollList.scrollTop = item.offsetTop + (scrollList.scrollHeight - item.offsetTop - item.clientHeight)	
						}
						break
					}
				}
			},
			
			side(){
				//商品列表滑动title滚动
				const scrollTop = this.$refs.scrollList.scrollTop,
					  container = this.$refs.text,
					  height = this.$refs.text["0"].offsetTop
				for(let item of container){
					if(scrollTop > (item.offsetTop - height) && scrollTop < (item.offsetTop - height + item.offsetHeight)){
						this.activeKey = item.id
						break
					}
				}
			},
			//动态改变购物车右下角内容
			setCartContent(){
				if(this.total == 0){
					this.cartContent = `￥${this.sendingPrice}起送`
				}else if(this.total < this.sendingPrice){
					let price = this.sendingPrice - this.total;
					this.cartContent = `还差￥${price}起送`
				}else if(this.total >= this.sendingPrice){
					this.cartContent = '去结算'
				}
			},
			//添加商品
			add(index, index2, event){
				//左侧导航栏数量添加
				let children = event.currentTarget.attributes.parentId.value
				
				for(let item of this.data){
					if(item.id == children){
						item.info ++
						break
					}
				}
				
				//商品列数量添加
				this.data[index].items[index2].num++;
				this.total += this.data[index].items[index2].price;
				this.setCartContent();
				
				let select ={"parentId":index,"id":index2,"data":this.data[index].items[index2]};
				if(this.data[index].items[index2].num <= 1){
					this.cart.push(select)
				}
				//购物车的原价和总价显示
				if(this.data[index].items[index2].original > 0){
					this.originalTotal += this.data[index].items[index2].original;
					this.originalShow = true;
				}else{
					if(this.originalTotal == 0){
						this.originalShow = false;
					}
					this.originalTotal += this.data[index].items[index2].price;		
				}
				// 小球动画 
				var top = event.pageY - event.currentTarget.offsetHeight, // 小球降落起点
					left = event.clientX - event.currentTarget.offsetWidth/2,
					endTop = this.$refs.cart.offsetTop - event.clientY + this.$refs.cart.scrollHeight/2,  // 小球降落终点
					endLeft = this.$refs.cart.offsetLeft + this.$refs.cart.scrollWidth/2; 
				// // 小球到达起点
				let outer = document.getElementById("points").getElementsByClassName("pointPre")[0]
				outer.classList.remove("pointPre")
				outer.setAttribute('style', `left: ${left}px; top: ${top}px`)
				
				let inner = outer.getElementsByClassName("point-inner")[0]
				const _this = this
				setTimeout(function() { 
					// 将jquery对象转换为DOM对象
					outer.style.webkitTransform = 'translate3d(0,' + endTop  + 'px,0)'
					inner.style.webkitTransform = 'translate3d(' + (endLeft - left) + 'px,0,0)'			
					// 小球运动完毕恢复到原点
					setTimeout(function() {
						outer.removeAttribute("style")
						outer.classList.add("pointPre")
						inner.removeAttribute("style")
					}, 800);  //这里的延迟值和小球的运动时间相关
				}, 1);
			},
			//减少商品
			reduce(index, index2,event){
				//左侧导航栏数量减少
				let children = event.currentTarget.attributes.parentId.nodeValue
				for(let item of this.data){
					if(item.id == children){
						item.info --
						if(item.info == 0){
							item.info = ""
						}
						break
					}
				}
				if(this.data[index].items[index2].num > 0){
					this.data[index].items[index2].num--;
					this.total -= this.data[index].items[index2].price;
					//计算数量变为0时去掉cart的数据
					// if(this.data[index].items[index2].num == 0){
						this.cart = this.cart.filter((list)=>{
							if(list.data.num > 0){
								return list
							}
						})
					// }
					//计算原价
					if(this.data[index].items[index2].original > 0){
						this.originalTotal -= this.data[index].items[index2].original;
					}else {
						this.originalTotal -= this.data[index].items[index2].price;
					}
					//是否有打折
					if(this.originalTotal == this.total){
						this.originalShow = false
					}else{
						this.originalShow = true
					}
				}
				if(this.cart == ""){
					this.bottomShow = false
				}
				this.setCartContent();
			},
			//购物车顶部弹窗
			bottomUpShow(val){
				if(this.cart != ""){
					if(val) {
						this.boxHeight = this.$refs.bottomUp.offsetHeight
					}else {
						this.boxHeight = 0
					}
					this.bottomShow = val;
				}			
			},
			//清空
			clear(){
				for(let item of this.cart){
					item.data.num = 0
				}
				for(let item2 of this.data){
					item2.info = ""
				}
				this.cart = []
				this.total = 0,
				this.originalTotal = 0,
				this.bottomShow = false
			},
			
			account() {
				this.$router.push('/Settlement')
			}
		},
	}
</script>

<style lang="scss" scoped>
	.slider-content{
		display: flex;
		height: calc(100vh - 110px); ;
		overflow: scroll;
		margin-top: 20px;
		position: relative;
		.fixed{
			position: absolute;
			top: 0;
			box-shadow: 0 -1px #fff; //解决移动端计算错误留有1px空隙问题
			background: #fff;
			z-index: 3;
		}
		.scrollList{
			flex: 1;
			margin-left: 8px;
			overflow: scroll;
			margin-top: 30px;
			.scrollItem2{
				&:last-child{
					padding-bottom: 100px;
				}
				.title{
					display: flex;
					height: 30px;
					align-items: center;
					.headline{
						font-size: 15px;
						font-weight: bold;
					}
					.describe{
						margin-left: 8px;
						font-size: 12px;
					}
				}
				.bigBox{
					border-radius: 10px;
					display: flex;
					text-align: left;
					margin-bottom: 5px;
					&:last-child{
						margin-right: 0;	
					}
					img{
						width: 100px;
						height: 100px;
						border-radius: 5px;
					}
					.box{
						padding: 0 8px;
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.scrollText{
							font-size: 16px;
						}
						.scrollDescribe{
							font-size: 11px;
							color: #B1B1B1;
						}
						.scrollSales{
							font-size: 11px;
							color: #B1B1B1;
						}
						.bottom{
							display: flex;
							justify-content: space-between;
							.price{
								.discount{
									font-size: 16px;
									color: #D9664E;
									margin-right: 3px;
								}
								.original{
									font-size: 11px;
									color: #B1B1B1;
									text-decoration: line-through;
								}
							}
							.iconfont{
								font-size: 18px;
								color: #279AFF;
							}
							.account{
								display: flex;
								justify-content: space-between;
								.number{
									padding: 0 10px;
									font-size: 16px;
								}
							}
							.icon-add-fill{
								position: relative;
								.add{
									display: none;
									position: absolute;
									right: 4px;
									bottom: 5px;
									width: 10px;
									height: 10px;
									border-radius: 50%;
									background-color: #279AFF;
									transition: all .4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
								}
							}
						}	
					}	
				}	
			}
		}
	}
	.footBox{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 55px;
		display: flex;
		justify-content: space-between;
		z-index: 9;
		.left{
			background-color: #414143;
			color: #A8A7A7;
			flex: 1;
			display: flex;
			.photo{
				width: 50px;
				height: 50px;
				background: red;
				position: fixed;
				bottom: 10px;
				left: 20px;
			}
			.text{
				display: flex;
				align-items: flex-start;
				justify-content: center;
				flex-direction: column;
				margin-left: 85px;
				height: 100%;
				.topText{
					font-size: 14px;
				}
				.fill{
					display: flex;
					align-items: baseline;
					.total{
						font-size: 20px;
						color: #fff;
						padding-left: 3px;
					}
					.originalTotal{
						font-size: 12px;
						text-decoration: line-through;
					}
				}
				.bottomText{
					font-size: 10px;
				}
			}
		}
		.right{
			background-color: #535356;
			color: #A9A9AB;
			width: 110px;
			font-size: 16px;
			line-height: 55px;
		}
		.green{
			background-color: #58D178;
			color: #fff;
		}
	}
	.shade{
		width: 100%;
		height: 100vh;
		background-color: rgba(0,0,0,0.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 3;
	}
	.shopBox {
		position: fixed;
		bottom: 55px;
		left: 0;
		z-index: 4;
		width: 100%;
		transition: all .8s ease-out;
		max-height: 440px;
	}
	.bottomUp {
		display: flex;
		flex-direction: column;
		overflow: auto;
		background: #F8F8F8;
		.headline{
			display: flex;
			justify-content: space-between;
			padding: 12px 10px;
		}
		.item{
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			padding: 18px 10px;
			font-size: 16px;
			.right{
				display: flex;
				.price{
					color: #FF563C;
				}
				.account{
					padding: 0 8px;
				}
				.number{
					padding: 0 5px;
				}
				.iconfont{
					color: #2396FF;
				}
			}
		}
	}
	.footBox{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 55px;
		display: flex;
		justify-content: space-between;
		z-index: 9;
		.left{
			background-color: #414143;
			color: #A8A7A7;
			flex: 1;
			display: flex;
			.photo{
				width: 50px;
				height: 50px;
				background: red;
				position: fixed;
				bottom: 10px;
				left: 20px;
			}
			.text{
				display: flex;
				align-items: flex-start;
				justify-content: center;
				flex-direction: column;
				margin-left: 85px;
				height: 100%;
				.topText{
					font-size: 14px;
				}
				.fill{
					display: flex;
					align-items: baseline;
					.total{
						font-size: 20px;
						color: #fff;
						padding-left: 3px;
					}
					.originalTotal{
						font-size: 12px;
						text-decoration: line-through;
					}
				}
				.bottomText{
					font-size: 10px;
				}
			}
		}
		.right{
			background-color: #535356;
			color: #A9A9AB;
			width: 110px;
			font-size: 16px;
			line-height: 55px;
		}
		.green{
			background-color: #58D178;
			color: #fff;
		}
	}
	/* 运动小球 */
	.pointPre {  /* 动画的小球 */
	    display: none;
	}
	.pointOuter {
	    position: absolute;  
	    z-index: 114;  
	    /* 当小球抛出时遵循贝塞尔曲线过渡 */
	    -webkit-transition: all .8s cubic-bezier(0.39,-0.4,0.83,0.23) 0s;
	    transition: all .8s cubic-bezier(0.39,-0.4,0.83,0.23) 0s; 
	}
	
	.point-inner {
	    width: 15px;
	    height: 15px;
	    border-radius: 50%;
	    background-color: #00a0dc;
	    /* 过渡属性名称 过渡时间 过渡曲线 延迟时间 */
	    transition: all .8s ease 0s;
	    -webkit-transition: all .8s ease 0s;     
	}  
</style>
