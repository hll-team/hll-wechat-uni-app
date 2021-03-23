<template>
	<view class="content">
		<image  class="banner" src="/static/img/banner.png"></image>
		<view class="flex-row flex-jc-sa" style="margin-top:4px;">
			<view style="border-right:1px solid #000;padding-right:10px;">
				<HllCard/>
			</view>
			<view>
				<HllCard/>
			</view>
		</view>
		<view class="menu flex-row flex-jc-sb" style="width:85%;border-top: 1px solid #000; margin:15px auto 0;padding:10px;">
			<text>NEWS.</text>
			<text>品牌动向</text>
		</view>
		<image  style="height: 210px;width:100%;" src="/static/img/HLL 08 04.png"></image>
	</view>
</template>

<script>
	import HllCard from '@/components/hll-card.vue'
	export default {
		components:{
			HllCard
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less">
	.content {
		background: #E6DEDB;
		.banner{
			width: 100%;
			height: 628px;
		}
	}

	
</style>
