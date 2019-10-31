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
	created(){
		
	},
	mounted(){
		this.getWinHeight()
	},
	methods:{
		getWinHeight(){
			document.getElementsByClassName("scrollList")["0"].style.height= window.innerHeight+ "px"
			// document.getElementsByClassName("scrollList")["0"].style.height= (window.innerHeight - 50) + "px"
			console.log(document.getElementsByClassName("scrollList"))
		},
		fixed(){
			
		}
	}
}
</script>

<style lang="scss" scoped>
	.scrollList{
		margin-left: 8px;
		// max-height: 100vh;
		overflow: scroll;
		.title{
			display: flex;
			align-items: baseline;
			margin: 8px 0;
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
</style>
