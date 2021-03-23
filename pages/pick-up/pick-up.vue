<template>
	<view class="pick-up">
		<view class="pick-up-header" style="height:164px;">
			<view class="flex-row">
				<image style="height: 17px; width: 140px; margin:0 auto;margin-top: 45px;" src="/static/img/hll_logo.png"></image>
			</view>
			<view style="padding-left:20px;margin-top:20px;">
				<view style="font-size: 24px;font-weight: 500;color: #333333;">
					<text>常营鹿港城店</text>
					<text style="font-size: 12px;font-weight: 400;color: #858585;line-height: 17px;">12.07km</text>
					<text style="float: right; display: inline-block; text-align: center; font-size: 12px;color:#FFFFFF;margin-right: 10px;width: 67px;height: 20px;line-height: 20px;background: #E4C2A9;border-radius: 10px;">更换门店</text>
				</view>
				<view>
					<view style="font-size: 12px;font-weight: 400;color: #858585;line-height: 17px;">营业时间：9：00-22：00</view>
					<view style="font-size: 12px;font-weight: 400;color: #858585;line-height: 17px;">常营鹿港城店店铺测试地址1</view>
				</view>
				</view>
		</view>
		
		<view class="VerticalBox">
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh - 375upx)">
				<view class="cu-item" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in list" :key="index" @tap="TabSelect"
				 :data-id="index">
				 DIM SUMS.
					新品蛋糕-{{item.name}}
				</view>
			</scroll-view>
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 375upx)"
			 :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
				<view class="padding-top padding-lr" v-for="(item,index) in list" :key="index" :id="'main-'+index">
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green"></text> Tab-{{item.name}}</view>
					</view>
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<goods-card></goods-card>
						</view>
						<view class="cu-item">
							<goods-card></goods-card>
						</view>
						<view class="cu-item ">
							<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
							<view class="content">
								<view class="text-pink"><text class="text-cut">莫甘娜</text></view>
								<view class="text-gray text-sm flex"> <text class="text-cut">凯尔，你被自己的光芒变的盲目！</text></view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-red sm">5</view>
							</view>
						</view>
						<view class="cu-item grayscale">
							<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg);"></view>
							<view class="content">
								<view><text class="text-cut">伊泽瑞尔</text>
									<view class="cu-tag round bg-orange sm">断开连接...</view>
								</view>
								<view class="text-gray text-sm flex"> <text class="text-cut"> 等我回来一个打十个</text></view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-red sm">5</view>
							</view>
						</view>
						<view class="cu-item cur">
							<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
								<view class="cu-tag badge"></view>
							</view>
							<view class="content">
								<view>
									<text class="text-cut">瓦罗兰大陆-睡衣守护者-新手保护营</text>
									<view class="cu-tag round bg-orange sm">6人</view>
								</view>
								<view class="text-gray text-sm flex">
									<text class="text-cut"> 伊泽瑞尔：<text class="cuIcon-locationfill text-orange margin-right-xs"></text> 传送中...</text></view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cuIcon-notice_forbid_fill text-gray"></view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import GoodsCard from '@/components/common/goods-card.vue'
	export default {
		components:{
			GoodsCard,
		},
		data() {
			return {
				list: [],
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
			let list = [{}];
			for (let i = 0; i < 26; i++) {
				list[i] = {};
				list[i].name = String.fromCharCode(65 + i);
				list[i].id = i;
			}
			this.list = list;
			this.listCur = list[0];
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

	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: center;
		background-color: #fff;
		margin: 0;
		border: none;
		height: 95px;
		position: relative;
	}

	.VerticalNav.nav .cu-item.cur {
		background-color: #E6DEDB;
	}

	.VerticalNav.nav .cu-item.cur::after {
		content: "";
		width: 8upx;
		height: 30upx;
		border-radius: 10upx 0 0 10upx;
		position: absolute;
		background-color: currentColor;
		top: 0;
		right: 0upx;
		bottom: 0;
		margin: auto;
	}

	.VerticalBox {
		display: flex;
	}

	.VerticalMain {
		background-color: #E6DEDB;
		flex: 1;
	}
</style>
