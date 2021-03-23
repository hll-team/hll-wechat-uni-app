<template>
	<view class="card">
		<view class="line1">
			<text>COUPON \nCENTER</text>
			<image style="width: 40px;height: 40px;" class="banner" src="/static/img/card.png"></image>
		</view>
		<view class="line2">
			<text class="number">15</text>
			<text>领劵中心</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"card",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.card{
	width: 170px;
	height: 88px;
	background: #ece7e5;
	border-radius: 15px;
	.line1{
		padding-top: 10px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.line2{
		margin-top: 5px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.number{
		width: 32px;
		height: 18px;
		line-height: 18px;
		border-radius: 9px;
		border: 1px solid #000000;
		text-align: center;
	}
}
</style>
