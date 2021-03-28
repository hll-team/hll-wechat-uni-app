<template>
	<view class="goods-card flex">
		<view>
			<image class="goods-card-img" src="../static/img/pick-up/goods-img.jpg" alt=""></image>
		</view>
		<view style="margin-left: 10px;">
			<view class="goods-card-title" style="">阿华田天鹅蛋</view>
			<view class="goods-card-desc" style="">含乳制品、大豆、牛奶</view>
			<view class="goods-card-info" style="">好利来特质密法低俗阿富汗爱服饰爱腹黑回…</view>
			<view class="flex justify-between">
				<text class="goods-card-price margin-xs">￥44.00</text>
				<button class="button-hll-small">购买</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"goods-card",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.goods-card{
	background: @hll-light-color;
	border-radius: 25px;
	padding: 14px 14px 10px;
	font-family: PingFangSC-Regular, PingFang SC;;
	.goods-card-img{
		width: 89px;
		height: 89px;
	}
	.goods-card-title{
		height: 22px;
		color: #000000;
		line-height: 22px;
		font-size: 14px;
		font-weight: 900;
	}
	.goods-card-desc{
		color:#FFFFFF;
		background: #E4C2A9;
		border-radius: 8px;
		font-size: 10px;
		font-weight: 400;
		padding-left: 6px;
	}
	.goods-card-info{
		font-size: 10px;
		font-weight: 400;
		color: #858585;
	}
	.goods-card-price{
		font-size: 14px;
	}
}
</style>
