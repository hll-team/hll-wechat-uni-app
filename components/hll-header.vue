<template>
	<view class="hll-title">
		<image class="hll-title-logo" :src="type === 'white' ? '/static/img/logo-white.png' : '/static/img/logo-black.png'"></image>
	</view>
</template>

<script>
	export default {
		name:"hll-title",
		props:{
			type:{
				type:String,
				default: 'white'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.hll-title{
	width: 100%;
	height: 70px;
	text-align: center;
	position: relative;
	.hll-title-logo{
		position: absolute;
		width: 139px;
		height: 17px;
		margin:auto;
		top:55px;
		left:50%;
		transform: translateX(-50%);
		z-index: 999;
	}
}
</style>
