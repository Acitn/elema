<template>
	<div class="scrollList">
		<div class="title">
			<div class="headline">{{headline}}</div>
			<div class="describe">{{describe}}</div>
		</div>
		<slot></slot>
	</div>
</template>

<script>
export default{
	props:{
		headline:{
			type:String
		},
		describe:{
			type:String
		}
	},
	methods:{
		fixed(){
			
		}
	}
}
</script>

<style lang="scss" scoped>
	.scrollList{
		margin-left: 8px;
		max-height: 100vh;
		overflow: scroll;
		.title{
			display: flex;
			.headline{
				font-size: 14px;
			}
			.describe{
				margin-left: 8px;
				font-size: 12px;
			}
		}
	}
</style>
