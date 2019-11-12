<template>
	<div>
		<div class="scrollItem">
			<img :src="img_url" alt="">
			<div class="box">
				<span class="scrollText">{{title}}</span>
				<span class="scrollSales">月售{{sales}}</span>
				<div class="bottom">
					<div class="price">
						<span class="discount" >&yen;{{price}}</span>
						<span class="original">&yen;{{original}}</span>
					</div>
					<div :class="{account: num>0 }">
						<i class="iconfont icon-jianshao" v-show="num > 0" @click="reduce()"></i>
						<span class="number" v-show="num > 0">{{num}}</span>
						<i class="iconfont icon-add-fill" @click="add($event)"></i>
					</div>
				</div>
			</div>
		</div>						
	</div>
</template>

<script>
	export default{
		name:"ScrollItem",
		props: {
		    title: {
		        type: String,
		        required: true
		    },
		    sales: {
		        type: Number,
		        required: true
		    },
		    price: {
		        type: Number,
		        required: true
		    },
		    original: {
		        type: Number,
		        required: true
		    },
			img_url: {
			    type: String,
			    required: true
			}
		},
		data(){
			return {
				pointNum:[1,2,3,4,5,6,7],
				num:0,
				isShow:false
			}
		},
		methods:{
			add(e){
				this.num = this.num + 1;
				this.isShow = true;
				console.log(e)
				
				const target = e.srcElement,
					  carTop = this.$refs['car'].offsetTop,
					  carLeft = this.$refs['car'].offsetLeft,
					  carWidth = this.$refs['car'].offsetWidth/2,
					  carHeight = this.$refs['car'].offsetHeight/2,
					  itemWidth = target.offsetWidth/2,
					  itemHeight= target.offsetHeight/2;
				let ball = target.children[0];
				ball.style.bottom = carTop + carHeight - itemHeight;
				console.log(ball)
				console.log(target.children)
			},
			
			reduce(){
				if(this.num > 0){
					this.num = this.num - 1;
				}
				if(this.num == 0){
					this.isShow = false;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.scrollItem{
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		text-align: left;
		margin-right: 5px;
		// &:last-child{
		// 	margin-right: 0;	
		// }
		img{
			width: 140px;
			height: 140px;
			border-radius: 5px;
		}
		.box{
			padding: 0 8px;
			display: flex;
			flex-direction: column;
			.scrollText{
				padding: 5px 0;
				font-size: 16px;
			}
			.scrollSales{
				font-size: 10px;
				color: #B1B1B1;
			}
			.bottom{
				padding: 5px 0;
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
				flex-direction: rolumn;
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
</style>
