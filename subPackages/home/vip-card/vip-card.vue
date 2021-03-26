<template>
	<view class="vip-card">
		<view class="qr-code flex align-center justify-center">
			<image style="height:225px;width:225px;" src="/static/img/home/qr-code.jpg"></image>
		</view>
		<view class="shape-code flex align-center justify-center">
			<image style="height:75px;width:225px;" src="/static/img/home/shape-code.jpg"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
.vip-card{
	background-color: #E6DEDB;
	height: 100vh;
	padding-top:35px;
	.qr-code{
		width: 346px;
		height: 346px;
		background: #FFFFFF;
		border-radius: 15px;
		opacity: 0.5;
		margin: 0 auto;
	}
	.shape-code{
		width: 346px;
		height: 134px;
		background: #FFFFFF;
		border-radius: 15px;
		opacity: 0.5;
		margin: 15px auto;
	}
}
</style>
