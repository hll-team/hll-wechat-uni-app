<template>
	<view class="advert">
		<view class="advert-notice  flex flex-jc-center">
			<view class="swiper-item-notice flex flex-ai-center">
					<image style="width: 22px; height: 22px;margin-left:13px;" src="/static/img/index/notice.png"></image>
					<swiper class="advert-notice-swiper" :indicator-dots="false" :autoplay="true" :interval="interval" :duration="duration" :vertical="true" >
					<swiper-item v-for="item in noticesList">
						<text style="margin-left: 13px;">{{item}}</text>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<swiper class="advert-swiper" :indicator-dots="false" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<view class="swiper-item uni-bg-red">
					<image class="banner" src="/static/img/banner.png"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">
					<image class="banner" src="/static/img/index/test1.png"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">
					<image class="banner" src="/static/img/index/test2.jpeg"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">
					<image class="banner" src="/static/img/index/test3.jpg"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
	    data() {
	        return {
	            background: ['color1', 'color2', 'color3'],
	            autoplay: true,
	            interval: 3000,
	            duration: 1000,
				noticesList:[
					'1.秋冬新品上市，好利来超值献礼！',
					'2.秋冬新品上市，好利来超值献礼！',
					'3.秋冬新品上市，好利来超值献礼！',
					'4.秋冬新品上市，好利来超值献礼！'
				]
	        }
	    },
	    methods: {
	        
	    }
	}
</script>

<style lang="less">
	.advert{
		.advert-notice{
			position: absolute;
			z-index: 999;
			height: 20px;
			width: 100%;
			top:96px;
			.swiper-item-notice{
				position: absolute;
				width: 300px;
				height: 24px;
				line-height: 24px;
				background: #4D4D4D;
				border-radius: 12px;
				opacity: 0.7;
				z-index: 99;
				margin: auto;
				font-size: 16px;
				font-family: SourceHanSansCN-Regular, SourceHanSansCN;
				font-weight: 400;
				color: #FFFFFF;
				line-height: 24px;
				.advert-notice-swiper{
					width: 100%;
					height: 25px;
				}
			}
		}
		.advert-swiper{
			height: 628px;
			.swiper-item{
				.banner{
					width: 100%;
					height: 628px;
				}
			}
			
		}
	}
</style>
