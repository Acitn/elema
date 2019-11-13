<template>
	<div class="scrollBar">
		<div class="title">{{title}}</div>
		<div class="scroll">
			<div class="scrollItem" v-for="(item,index) in data" :key="index">
				<div v-for="(item2,index2) in item.items" :key="index2">
					<div v-if="item2.recommend" class="margin">
						<img :src="item2.img_url" alt="">
						<div class="box">
							<span class="scrollText">{{item2.name}}</span>
							<span class="scrollSales">月售{{item2.sales}}</span>
							<div class="bottom">
								<div class="price">
									<span class="discount" >&yen;{{item2.price}}</span>
									<span class="original">&yen;{{item2.original}}</span>
								</div>
								<div :class="{account: item2.num>0 }">
									<i class="iconfont icon-jianshao" v-show="item2.num > 0" @click="reduce()"></i>
									<span class="number" v-show="item2.num > 0">{{item2.num}}</span>
									<i class="iconfont icon-add-fill" @click="chlidAdd(index,index2,$event)"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
		</div>
	</div>
</template>

<script>
export default{
	props:{
		title:{
			type:String
		},
		data:{
			type: Array,
			required: true
		}
	},
	methods:{
		chlidAdd(index,index2,$event){
			this.$parent.add(index,index2,$event)
		}
	}	
}
</script>

<style lang="scss" scoped>
	.scrollBar{
		margin: 0 15px;
		.title{
			text-align: left;
			font-size: 18px;
			font-weight: bold;
			margin: 8px;
		}
		.scroll{
			display: flex;
			overflow: auto;
			.scrollItem{
					border-radius: 10px;
					display: flex;
					text-align: left;
					.margin{
						margin-right: 5px;
					}
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
		}
	}
</style>
