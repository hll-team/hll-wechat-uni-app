<template>
	<view class="index">
		<HllTitle></HllTitle>
		<view class="index-header">
			<AdvertSwiper></AdvertSwiper>
		</view>
		<view class="flex-row flex-jc-sa" style="margin-top:8px;">
			<view style="border-right:1px solid #000;padding-right:10px;">
				<HllCard :cardData="cardData[0]"/>
			</view>
			<view>
				<HllCard :cardData="cardData[1]"/>
			</view>
		</view>
		<view class="menu flex-row flex-jc-sb" style="width:85%;border-top: 1px solid #000; margin:15px auto 0;padding:10px;">
			<text style="font-family: 'AkzidenzGroteskBQ-Ext';">NEWS.</text>
			<text>品牌动向</text>
		</view>
		<image style="height: 210px;width:100%;" src="/static/img/HLL 08 04.png"></image>
	</view>
</template>

<script>
	import HllCard from '@/components/hll-card.vue'
	import HllTitle from '@/components/hll-title.vue'
	import AdvertSwiper from './components/advert-swiper.vue'
	export default {
		components:{
			HllTitle,
			HllCard,
			AdvertSwiper,
		},
		data() {
			return {
				title: 'Hello',
				cardData:[{enName:'COUPON\nCENTER',cnName:'领劵中心',num:15},
				{enName:'GIFT\nCARDR',cnName:'礼品卡',num:12,icon: '/static/img/index/gift-card.png'}],
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less">
.index {
	background: #E6DEDB;
}
</style>
