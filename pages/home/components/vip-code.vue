<template>
	<view>
		<view class="cu-modal" :class="showModal?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar justify-end">
					<view class="close-button flex flex-jc-center flex-ai-center" @click="hideModal"> 
						<text class="cuIcon-close "></text>
					</view>
				</view>
				<view class="padding-l ">
					<image style="height: 134px;width:134px;" src="/static/img/home/vip-code.png"></image>
					<text class="block">请向店员出示此会员码</text>
					<view class="pay-button" @click="goToPay('vip')">会员卡支付</view>
					<view class="pay-button" @click="goToPay('gift')">礼品卡支付</view>
					<view class="pay-button" @click="goToPay('wechat')">微信支付</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			showModal:{
				type:Boolean,
				default: false,
			}
		},
		methods: {
			hideModal(){
				this.$emit('update:showModal', false)
			},
			goToPay(type){
				switch(type){
					case 'vip':
						uni.navigateTo({
							url: '/subPackages/index/vip-card/vip-card',
							animationType: 'slide-in-right',
							animationDuration: 200
						});
						break;
					case 'gift':
						uni.navigateTo({
							url: '/pages/mall/mall'
						});
						break;
					case 'wechat':
						uni.navigateTo({
							url: '/pages/mine/mine'
						});
						break;
				}
			}
		}
	}
</script>

<style scoped>
	.close-button{
		background-color: #E6DEDB;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		margin-right: 15px;
		color: #4D4D4D;
		font-size: 22px;
	}
	.pay-button{
		width: 224px;
		height: 48px;
		background: #E6DEDB;
		border-radius: 12px;
		font-size: 16px;
		font-weight: 500;
		color: #1A1A1A;
		line-height: 48px;
		margin: 19px auto;
	}
</style>
