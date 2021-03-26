<template>
	<view class="advert-notice  flex justify-center">
		<view class="swiper-item-notice flex align-center">
				<image style="width: 22px; height: 22px;margin-left:13px;" src="/static/img/home/notice.png"></image>
				<swiper class="advert-notice-swiper" :indicator-dots="false" :autoplay="true" :interval="interval" :duration="duration" :vertical="true" >
				<swiper-item v-for="item in noticesList">
					提示：<text>{{item}}</text>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		name:"hll-notice",
		props:['noticesList'],
		data() {
			return {
				autoplay: true,
				interval: 3000,
				duration: 1000,
			};
		}
	}
</script>

<style lang="less">
.advert-notice{
	z-index: 999;
	height: 20px;
	width: 100%;
	.swiper-item-notice{
		position: absolute;
		width: 90%;
		height: 24px;
		line-height: 24px;
		background: #4D4D4D;
		border-radius: 12px;
		opacity: 0.3;
		z-index: 99;
		margin: auto;
		font-size: 12px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 24px;
		.advert-notice-swiper{
			width: 100%;
			height: 25px;
		}
	}
}
</style>
