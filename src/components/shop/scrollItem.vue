<template>
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
	.scrollItem{
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		text-align: left;
		margin-right: 5px;
		&:last-child{
			margin-right: 0;	
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
					.number{
						// width: 50px;
					}
				}
			}	
		}	
	}
</style>
