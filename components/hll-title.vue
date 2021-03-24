<template>
	<view class="hll-title">
		<image class="hll-title-logo" src="/static/img/logo-white.png"></image>
	</view>
</template>

<script>
	export default {
		name:"hll-title",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.hll-title{
	width: 100%;
	text-align: center;
	.hll-title-logo{
		position: absolute;
		width: 139px;
		height: 17px;
		margin:auto;
		top:55px;
		left:32%;
		z-index: 999;
	}
}
</style>
