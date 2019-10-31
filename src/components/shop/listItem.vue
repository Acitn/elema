<template>
	<div class="item">
		<img :src="img_url" alt="">
		<div class="box">
			<span class="text">{{title}}</span>
			<div class="describe">{{describe}}</div>
			<div class="textBox">
				<span class="sales">月售{{sales}}</span>
				<span class="rating">好评率{{rating}}%</span>
			</div>
			<div class="discountsBox">
				<div class="discount"></div>
				<div class="limit"></div>
			</div>

			<div class="bottom">
				<div class="price">
					<span class="discount" >&yen;{{price}}</span>
					<span class="original">&yen;{{original}}</span>
				</div>
				<div :class="{ 'account': isShow }">
					<i class="iconfont icon-jianshao" v-show="num > 0" @click="reduce()"></i>
					<span class="number" v-show="num > 0">{{num}}</span>
					<i class="iconfont icon-add-fill" @click="add()"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"item",
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
			},
			describe:{
				type: String,
			},
			rating:{
				type: Number,
			},
			discount:{
				type: Number,
			},
			limit:{
				type: Number,
			},
			minimun:{
				type: Number,
			},
		},
		data(){
			return {
				num:0,
				isShow:false
			}
		},
		methods:{
			add(){
				this.num = this.num + 1;
				this.isShow = true;
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
	.item{
		border-radius: 10px;
		display: flex;
		text-align: left;
		margin-right: 5px;
		margin: 8px;
		&:last-child{
			margin-right: 0;	
		}
		img{
			width: 120px;
			height: 120px;
			border-radius: 5px;
		}
		.box{
			padding: 0 8px;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			flex: 1;
			.text{
				padding: 5px 0;
				font-size: 16px;
			}
			.describe{
				width: 100%;
				white-space: nowrap;
				overflow: hidden;
				text-overflow:ellipsis;
			}
			.sales{
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
					.number{
						// width: 50px;
					}
				}
			}	
		}	
	}
</style>
