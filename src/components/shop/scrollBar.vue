<template>
	<div class="scrollBar">
		<div class="title">{{title}}</div>
		<div class="scroll">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		title:{
			type:String
		}
	}	
}
</script>

<style lang="scss" scoped>
	.scrollBar{
		// display: flex;
		// overflow: auto;
		.title{
			text-align: left;
			font-size: 18px;
			font-weight: bold;
			margin: .08rem;
		}
		.scroll{
			display: flex;
			overflow: auto;
		}
	}
</style>
