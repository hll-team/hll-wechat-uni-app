<template>
	<view class="pick-up">
		<hll-header type="black"></hll-header>
		<view class="pick-up-header">
			<view class="pick-up-header-shop">
				<text>{{shopData.name}}</text>
				<text class="pick-up-header-shop-desc">{{shopData.distance}}</text>
				<text class="pick-up-header-shop-btn">更换门店</text>
			</view>
			<view>
				<view class="pick-up-header-shop-desc">营业时间：{{shopData.businessHours}}</view>
				<view class="pick-up-header-shop-desc">{{shopData.address}}</view>
			</view>
		</view>
		
		<view class="VerticalBox">
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh - 375upx)">
				<view class="cu-item" :class="index==tabCur?'text-black cur':''" v-for="(item,index) in list" :key="index" @tap="TabSelect"
				 :data-id="index">
				 <view class="font-en-ak">{{item.enName}}</view>
				 <view style="margin-top:6px;font-size: 16px;">{{item.cnName}}</view>
				</view>
			</scroll-view> 
			
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 375upx)"
			 :scroll-into-view="'main-'+mainCur">
				<hll-notice style="margin-top:10px" :noticesList="noticesList"></hll-notice>
				<view class="text-center">
					<image class="advert" src="/static/img/pick-up/advert1.jpg"></image>
					<image class="advert" src="/static/img/pick-up/advert2.jpg"></image>
				</view>
				<hll-title :info="menuInfo" size="small"></hll-title>
				<view class="padding-lr" v-for="(item,index) in list" :key="index" :id="'main-'+index">
					<view class="goods-list padding-top" v-for="(el,i) in item" :key="i">
						<goods-card class="goods-list-item"></goods-card>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import GoodsCard from '@/components/goods-card.vue'
	import HllNotice from '@/components/hll-notice.vue'
	export default {
		components:{
			GoodsCard,
			HllNotice,
		},
		data() {
			return {
				shopData:{
					name:'常营鹿港城店',
					distance: '12.7km',
					businessHours: '9：00-22：00',
					address: '常营鹿港城店店铺测试地址'
				},
				list: [
					{id:1,enName:'NEW\nPRODUCTS.',cnName:'新品蛋糕',goods:[1,1,1]},
					{id:2,enName:'DIM\nSUMS.',cnName:'中点',goods:[1,1,1]},
					{id:3,enName:'PATRIES.',cnName:'西点',goods:[1,1,1]},
					{id:4,enName:'ICE\nCREAMS.',cnName:'冰淇淋',goods:[1,1,1]},
					{id:5,enName:'HOT\nSALES.',cnName:'热卖蛋糕',goods:[1,1,1]}],
				noticesList:['单笔订单满269元可选择上门配送'],
				menuInfo:{
					enName:'NEW PRODUCTS.',
					cnName: '新品蛋糕',
				},
				tabCur: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load: true
			};
		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
		},
		onReady() {
			uni.hideLoading()
		},
		methods: {
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.tabCur = this.list[i].id
						console.log(scrollTop)
						return false
					}
				}
			}
		},
	}
</script>

<style lang="less">
	.pick-up{
		.pick-up-header{
			background-color: #FFFFFF;
			padding:0 20px 20px 20px;
			margin-top:20px;
			.pick-up-header-shop{
				font-size: 24px;
				font-weight: 500;
				color: #333333;
				.pick-up-header-shop-btn{
					float: right;
					display: inline-block;
					text-align: center;
					font-size: 12px;
					color:#FFFFFF;
					width: 67px;
					height: 20px;
					line-height: 20px;
					background: #E4C2A9;
					border-radius: 10px;
				}
			}
			.pick-up-header-shop-desc{
				font-size: 12px;
				font-weight: 400;
				color: #858585;
				line-height: 17px;
			}
		}
	}
	.fixed {
		position: fixed;
		z-index: 99;
	}
	
	.VerticalNav.nav {
		width: 200upx;
		white-space: initial;
	}
	.advert{
		height:120px;
		width:90%;
		margin:10px auto 0;
	}
	.VerticalNav.nav .cu-item {
		padding-top:20px;
		width: 100%;
		opacity: 0.3;
		margin: 0;
		border: none;
		height: 95px;
		line-height:inherit;
		font-size: 12px;
		font-weight: 500;
		position: relative;
		background-color: #ece7e5;
		color:#4D4D4D;
		border-bottom: 1px solid #000;
	}

	.VerticalNav.nav .cu-item.cur {
		background-color: #E6DEDB;
		line-height:inherit;
		opacity: 1;
	}

	.VerticalBox {
		display: flex;
	}

	.VerticalMain {
		background-color: #E6DEDB;
		flex: 1;
	}
</style>
