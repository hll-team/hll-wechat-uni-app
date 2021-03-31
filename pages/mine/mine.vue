<template>
	<view class="mine main-content">
		<hll-header type="black"></hll-header>
		<view class="mine-header flex justify-between padding-lr">
			<view>
				<view class="mine-header-hello">HELLO.</view>
				<view class="mine-header-name">Jim Luo</view>
				<view>
					<text class="ellipse">会员码</text>
					<image style="height:19px;width:19px;margin-left: 9px; " src="/static/img/mine/qr-code.png"></image>
				</view>
			</view>
			<image style="height:70px;width:70px;" src="/static/img/mine/avator.png"></image>
		</view>
		<view class="mine-content-line flex justify-around" style="margin-top:8px;">
			<view style="flex:0.45;height:102px">
				<HllCard :cardData="cardData[0]"/>
			</view>
			<view style="border-right:1px solid #000;"></view>
			<view style="flex:0.45;height:102px">
				<HllCard :cardData="cardData[1]"/>
			</view>
		</view>
		<view class="mine-content-line flex justify-around" style="margin-top:8px;">
			<view style="flex:0.45;height:102px">
				<HllCard :cardData="cardData[2]"/>
			</view>
			<view style="border-right:1px solid #000;"></view>
			<view style="flex:0.45;height:102px">
				<HllCard :cardData="cardData[3]"/>
			</view>
		</view>
		<view class="mine-content-split flex justify-between align-center">
			<text>HOLILAND *</text> <text>HOLILAND *</text><text>HOLILAND</text>
		</view>
		<view class="mine-content-gift">
			<image style="height:170px;width:272px;" src="/static/img/gift-card.png"></image>
		</view>
		<view class="mine-content-menu">
			<view class="mine-content-menu-item flex justify-between" v-for="(item,i) in menuList" :key="i">
				<text>{{item.enName}}</text>
				<text>{{item.cnName}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import HllCard from '@/components/hll-card.vue'
	
	export default {
		components:{
			HllCard,
		},
		data() {
			return {
				cardData:[
					{enName:'BALANCE',cnName:'充值',num:'￥150',url: '/subPackages/home/coupon-center/coupon-center'},
					{enName:'GIFT\nCARD',cnName:'礼品卡',num:12,icon: '/static/img/home/gift-card.png'},
					{enName:'COUPONS',cnName:'优惠券',num:12,icon: '/static/img/home/gift-card.png'},
					{enName:'POINTS',cnName:'积分',num:12,icon: '/static/img/home/gift-card.png'}],
				menuList: [
					{enName:'BIND GIFT CARD .',cnName:'绑定礼品卡→',url:''},
					{enName:'RECORD .',cnName:'消费记录→',url:''},
					{enName:'ADDRESS BOOK .',cnName:'我的地址→',url:''},
					{enName:'TERMS & CONDITIONS .',cnName:'使用条款→',url:''},
					{enName:'OFFLINE STORES .',cnName:'门店查询→',url:''},
					{enName:'CONTACT US .',cnName:'联系客服→',url:''},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
.mine{
	padding: 15px;
	.mine-header{
		border-bottom: 1px solid #000000;
		padding-bottom: 20px;
		.mine-header-hello{
			font-size: 26px;
			font-weight: normal;
			color: #000000;
			line-height: 31px;
		}
		.mine-header-name{
			font-size: 21px;
			font-family: SourceHanSansCN-Regular, SourceHanSansCN;
			font-weight: 400;
			color: #1A1A1A;
		}
	}
	.mine-content-line{
		padding-bottom: 10px;
		border-bottom: 1px solid #000000;
	}
	.mine-content-split{
		padding: 10px 0;
		border-bottom: 1px solid #000000;
	}
	.mine-content-gift{
		display: flex;
		margin-top: 15px;
		:nth-child(1) {
			margin-right: 20px;
		}
	}
	.mine-content-menu{
		padding: 10px 0;
		border-top: 1px solid #000000;
		.mine-content-menu-item{
			padding: 10px 0;
			border-bottom: 1px solid #000000;
		}
	}
	
}
</style>
