<template>
	<div>
		<main class="content">
			<div class="item" v-for="(item,index) in commentList" :key="index">
				<img :src="item.headPhoto" alt="" />
				<div class="itemBox">
					<div class="head">
						<div class="left">
							<div class="textBox">
								<div class="name">{{item.userName}}</div>						
								<Grade :score="item.score"></Grade>
							</div>
						</div>
						<div class="date">{{item.date}}</div>
					</div>
					<div class="commentBox">
						<div class="text">{{item.comment}}</div>
						<div class="photoBox" v-if="item.img_url != ''">
							<img class="photo" :src="item2" v-for="(item2,i) in item.img_url" :key="i" />
						</div>
					</div>
				</div>
					
			</div>
		</main>
	</div>
</template>

<script>
import Grade from './Grade';
export default{
	name:"Comment",
	components:{Grade},
	props:{
		commentList:{
			type:Array,
			required:true
		}
	},
	methods:{

	}
}
</script>

<style lang="scss" scoped>
	.content{
		background: #fff;
		.item{
			display: flex;
			padding: 5px 12px;
			margin-bottom: 10px;
			border-bottom: 1px solid #F6F6F6;
			img{
				width: 35px;
				height: 35px;
				border-radius: 5px;
			}
			.itemBox{
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: flex-start;
				width: 100%;
				.head{
					display: flex;
					width: 100%;
					justify-content: space-between;
					.left{
						display: flex;
						.textBox{
							display: flex;
							flex-direction: column;
							align-items: flex-start;
							margin-left: 8px;
							.name{
								font-size: 14px;
								margin-bottom: 5px;
							}
						}
					}
					.date{
						font-size: 11px;
						color: #B6B6B6;
					}
				}
				.commentBox{
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					margin-left: 8px;
					margin-top: 10px;
					.photo{
						width: 90px;
						height: 90px;
						box-sizing: border-box;
						margin-right: 5px;
					}
					.text{
						text-align: left;
						margin-bottom: 5px;
					}
				}
			}
		}
	}
</style>
