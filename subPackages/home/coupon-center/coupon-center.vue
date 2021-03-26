<template>
	<view class="coupon-center">
		<view class="coupon-center-menu">
			<text>待领取</text>
			<text>待使用</text>
		</view>
		<view class="scan-qr-code  flex flex-ai-center flex-jc-center">扫码领券</view>
		<view class="discount-coupon-card">
			<view class="flex">
				<view class="flex flex-item">
					<text class="number">5元</text>
					<view>
						<text class="block">优惠券名称</text>
						<text class="block">简短说明</text>
					</view>
				</view>
				<button class="button-hll-small">领取</button>
			</view>
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
.coupon-center{
	background-color: #E6DEDB;
	height: 100vh;
	width: 100%;
	text-align:center;
	.scan-qr-code{
		width: 346px;
		height: 51px;
		background: #f1eeed;
		border-radius: 15px;
		font-size: 16px;
		font-weight: 500;
		color: #737373;
		margin: 0 auto;
	}
	.discount-coupon-card{
		position: relative;
		width: 346px;
		height: 128px;
		background: #f1eeed;
		border-radius: 15px;
		margin: 14px auto 0;
		.number{
			font-size: 48px;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #FF9300;
		}
	}
	.discount-coupon-card::before
	{
	    content: "";                //利用这句代码撑开容器
	    width: 25px;
	    height: 25px;
	    background: #E6DEDB;
	    position: absolute;
	    bottom:40px;
	    left:-10px;
	    display: block;
	    border-radius:0px 20px 20px 0px;         //来设置往里凹的部分的大小
	}
	.discount-coupon-card::after
	{
	    content: "";                //利用这句代码撑开容器
	    width: 25px;
	    height: 25px;
	    background: #E6DEDB;
	    position: absolute;
	    bottom:40px;
	    right:-10px;
	    display: block;
	    border-radius:20px 0px 0px 20px;         //来设置往里凹的部分的大小
	}
}
</style>
