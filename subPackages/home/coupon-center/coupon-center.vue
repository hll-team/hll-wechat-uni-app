<template>
	<view class="coupon-center">
		<hll-menu style="margin-top:20px;background-color: #FFFFFF;" :menuData="menuData" :active.sync="activeMenu">
		</hll-menu>
		<view class="scan-qr-code  flex justify-center align-center">
			<text>扫码领券</text>
		</view>
		<view class="discount-coupon-card">
			<view class="line1 flex justify-between align-start">
				<view class="flex align-end">
					<text class="number">5</text><text class="text-xs" style="margin-bottom: 15px;">元</text>
					<view style="margin-bottom: 15px;margin-left: 10px;">
						<text class="name block">优惠券名称</text>
						<text class="desc block text-xs">简短说明</text>
					</view>
				</view>
				<button class="button-hll-small">领取</button>
			</view>
			<hr>
			<view class="line3 flex text-xs justify-between">
				<view>2020.05.06-2020.06.01</view>
				<view>使用详情></view>
			</view>
		</view>
	</view>
</template>

<script>
	import hllMenu from '@/components/hll-menu.vue'
	export default {
		components:{
			hllMenu,
		},
		data() {
			return {
				menuData:[{id:1,name:'待领取'},{id:2,name:'待使用'}],
				activeMenu: 1,
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
	.scan-qr-code{
		width: 346px;
		height: 51px;
		background: #f1eeed;
		border-radius: 15px;
		font-size: 16px;
		font-weight: 500;
		color: #737373;
		margin: 14px auto;
	}
	.discount-coupon-card{
		position: relative;
		width: 346px;
		height: 128px;
		background: #f1eeed;
		border-radius: 15px;
		margin: 14px auto 0;
		padding: 20px;
		.line3{
			color: #858585;
			margin-top: 10px;
		}
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
