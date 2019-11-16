<template>
	<footer class="footBox">
		<div class="left" >
			<div class="photo" ref="cart"></div>
			<div class="text">
				<div class="topText"  v-show="total == 0">未选购商品</div>
				<div class="fill" v-show="total > 0">
					<div class="total">&yen;{{total}}</div>
					<div class="originalTotal" v-show="originalShow">&yen;{{originalTotal}}</div>
				</div>
				<div class="bottomText">另需配送费1.5元</div>
			</div>
		</div>
		<div class="right">{{cartContent}}</div>
	</footer>
</template>

<script>
export default{
	name:"shopCart",
	props:{
		selctList:{
			type:String
		}
	},
	methods:{

	}
}
</script>

<style lang="scss" scoped>
	
</style>
