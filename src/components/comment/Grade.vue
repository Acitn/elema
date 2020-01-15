<template>
	<div>
		<div class="grade">
			<i class="iconfont icon-xingxing_xuanzhong" v-for="(item,index) in full" :key="index"></i>
			<i class="iconfont icon-bankexing" v-for="(item2,index) in half" :key=" 'half' + index "></i>
			<i class="iconfont icon-kongxing" v-for="(item,index) in empty" :key=" 'empty' + index "></i>	
		</div>
	</div>
</template>

<script>
export default{
	name:"Grade",
	props:{
		score:{
			type:Number,
			required:true
		},
		edit:{
			type:Boolean
		},
	},
	data(){
		return {
			empty: 5,
			full : 0,
			half : 0,
		}
	},
	mounted(){
		if(this.score>0 && this.score<=5) {
			this.empty = parseInt(5 - this.score)
			this.full = parseInt(this.score)
			this.half = (5 - this.score - this.empty) == 0 ? 0:1
		}
	}
}
</script>

<style lang="scss" scoped>
	.grade{
		display: flex;
		.iconfont{
			color: #FEB258;
			font-size: 10px;
			padding-right: 2px;
		}
	}
</style>
