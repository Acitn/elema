<template>
	<div>
		<header class="card">
			<div class="left">
				<div class="score">{{data.score}}</div>
				<div class="box">
					<div class="text">商家评分</div>
					<Grade :score="data.score" v-if="data.score"></Grade>
				</div>
			</div>
			<div class="right">
				<div class="box">
					<div class="text">味道</div>
					<div class="score">{{data.taste}}</div>
				</div>
				<div class="box">
					<div class="text">包装</div>
					<div class="score">{{data.pack}}</div>
				</div>
				<div class="box2">
					<div class="text">配送</div>
					<div class="score">{{data.delivery}}</div>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
import Grade from './Grade';
export default{
	name:"Card",
	components:{Grade},	
	props:{
		data:{
			type:Object,
			required:true
		}
	},
	methods:{
		
	}
}
</script>

<style lang="scss" scoped>
	.card{
		display: flex;
		justify-content: space-between;
		background: #fff;
		padding: 0.2rem 0.2rem;
		margin-bottom: 10px;
		.left{
			display: flex;
			align-items: flex-start;
			.score{
				color: #FF5400;
				font-size:38px;
				padding-right:8px;
			}
			.box{
				display: flex;
				align-items: flex-start;
				flex-direction: column;
				.text{
					margin-bottom:15px;
					color:#4E4E4E;
				}
			}
		}
		.right{
			display: flex;
			.box{
				display: flex;
				flex-direction: column;
				margin-right: 25px;
				.text{
					color:#4E4E4E;
				}
				.score{
					font-size: 23px;
				}
			}
			.box2{
				display: flex;
				flex-direction: column;
				padding:0 25px;
				border-left: 1px solid #EDEDED;
				.text{
					color:#4E4E4E;
				}
				.score{
					font-size: 23px;
				}
			}
		}
	}
</style>
