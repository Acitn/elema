<template>
	<div style="flex: 1;">
		<slot></slot>
		<div class="slider-content">	
			<van-sidebar v-model="activeKey">
				<van-sidebar-item v-for="(list,i) in data" :key="i" :title="list.title"/>
			</van-sidebar>
			<!-- @scroll.passive -->
			<div class="scrollList"  ref="scrollList" @scroll.passive="fnScroll">
				<div class="scrollItem" v-for="(item,index) in data" :key="index" :id="index">
					<div :class="{fixed: activeKey == index}" class="title">
						<div class="headline">{{item.title}}</div>
						<div class="describe">{{item.describe}}</div>
					</div>
					<div class="box" v-for="(item2,index2) in item.items" :key="index2">
						<img :src="item2.img_url" alt="">
						<div class="box">
							<span class="scrollText">{{item2.name}}</span>
							<span class="scrollDescribe">{{item2.describe}}</span>
							<span class="scrollSales">月售{{item2.sales}}</span>
							<div class="bottom">
								<div class="price">
									<span class="discount" >&yen;{{item2.price}}</span>
									<span class="original">&yen;{{item2.original}}</span>
								</div>
								<div :class="{account: item2.num>0 }">
									<i class="iconfont icon-jianshao" v-show="item2.num>0"  @click="reduce(index, index2)"></i>
									<span class="number" v-show="item2.num>0">{{item2.num}}</span>
									<i class="iconfont icon-add-fill" @click="add(index, index2, $event)"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
        <!-- 运动的小球 -->
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
		
		<footer class="footBox">
			<div class="left">
				<div class="photo" ref="cart"></div>
				<div class="text">
					<div class="topText">未选购商品</div>
					<div class="bottomText">另需配送费1.5元</div>
				</div>
			</div>
			<div class="right">&yen;10元起送</div>
		</footer>
	</div>
</template>

<script>
import {throttle} from 'assets/js/utils'
	export default{
		name:"listBox",
		props: {
			data:{
				type: Array,
				required: true
			}
		},
		data(){
			return {
				activeKey: 0,
				fnScroll: () => {}
			}
		},
		mounted(){
			this.fnScroll = throttle(this.side, 1000)
			// this.$refs.scrollList.addEventListener('scroll', throttle(this.side,1000))
		},
		methods:{
			side(){
				// var date=new Date();//获取系统时间
				// var s=date.getSeconds();//获取秒
				// console.log(s)
			},
			add(index, index2, event){
				this.data[index].items[index2].num++;
				// 小球动画 
				var top = event.srcElement.offsetTop, // 小球降落起点
					left = event.srcElement.offsetLeft,
					endTop = this.$refs.cart.offsetTop - event.clientY + this.$refs.cart.scrollHeight/2,  // 小球降落终点
					endLeft = this.$refs.cart.offsetLeft + this.$refs.cart.scrollWidth/2; 
				// // 小球到达起点
				let outer = document.getElementById("points").getElementsByClassName("pointPre")[0];
				outer.classList.remove("pointPre");
				outer.setAttribute('style', `left: ${left}px; top: ${top}px`);
				let inner = outer.getElementsByClassName("point-inner")[0];
				const _this = this
				setTimeout(function() { 
					// 将jquery对象转换为DOM对象
					outer.style.webkitTransform = 'translate3d(0,' + endTop  + 'px,0)';
					inner.style.webkitTransform = 'translate3d(' + (endLeft - left) + 'px,0,0)';			
					// 小球运动完毕恢复到原点
					setTimeout(function() {
						outer.removeAttribute("style")
						outer.classList.add("pointPre")
						inner.removeAttribute("style")
					}, 800);  //这里的延迟值和小球的运动时间相关
				}, 1);
			},
			
			reduce(index, index2){
				if(this.data[index].items[index2].num > 0){
					this.data[index].items[index2].num--;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.slider-content{
		display: flex;
		height: calc(100vh - 50px); ;
		overflow: scroll;
		margin-top: 20px;
		margin-bottom: 50px;
		position: relative;
		.fixed{
			position: absolute;
			top: 0;
			width:100%;
			box-shadow: 0 -1px #fff; //解决移动端计算错误留有1px空隙问题
			background: #fff;
			z-index: 3;
		}
		.scrollList{
			flex: 1;
			margin-left: 8px;
			overflow: scroll;
			margin-top: 30px;
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
		}
		.box{
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
						flex: 1;
						display: flex;
						justify-content: space-between;
						padding-left: 5px;
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
	.footBox{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		z-index: 9;
		.left{
			background-color: #414143;
			color: #A8A7A7;
			flex: 1;
			.photo{
				width: 40px;
				height: 40px;
				background: red;
				position: fixed;
				bottom: 15px;
				left: 30px;
			}
			.text{
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				margin-left: 85px;
				.topText{
					font-size: 14px;
				}
				.bottomText{
					font-size: 12px;
				}
			}
		}
		.right{
			background-color: #535356;
			color: #A9A9AB;
			padding: 0 18px;
			font-size: 16px;
			line-height: 50px;
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
