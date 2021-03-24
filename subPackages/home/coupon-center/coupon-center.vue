<template>
	<view class="coupon-center flex">
		<view class="coupon-center-menu">
			<text>待领取</text>
			<text>待使用</text>
		</view>
		<view class="scan-qr-code  flex flex-ai-center flex-jc-center">扫码领券</view>
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
.coupon-center{
	background-color: #E6DEDB;
	height: 100vh;
	text-align: center;
	.scan-qr-code{
		width: 80%;
		height: 51px;
		background: #FFFFFF;
		border-radius: 15px;
		opacity: 0.5;
		font-size: 16px;
		font-weight: 500;
		color: #737373;
	}
}
</style>
