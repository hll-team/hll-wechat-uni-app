<template>
	<view class="card">
		<view class="line1">
			<text class="card-line1-en font-en-ak">{{cardData.enName}}</text>
			<image @click="goTo" style="width: 40px;height: 40px;" class="banner" :src="cardData.icon? cardData.icon : '/static/img/card.png'"></image>
		</view>
		<view class="line2">
			<text class="number ellipse">{{cardData.num}}</text>
			<text>{{cardData.cnName}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"card",
		data() {
			return {
				
			};
		},
		props:['cardData'],
		methods:{
			goTo(){
				console.log(this.cardData.url)
				if(this.cardData.url) {
					uni.navigateTo({
						url: this.cardData.url,
						animationType: 'slide-in-right',
						animationDuration: 200
					});
				}
			}
		}
	}
</script>

<style lang="less">
.card{
	background: #ece7e5;
	border-radius: 15px;
	padding:15px 5px;
	.line1{
		display: flex;
		justify-content: space-around;
		align-items: center;
		.card-line1-en{
			font-size: 14px;
			font-weight: 900;
		}
	}
	.line2{
		margin-top: 5px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
}
</style>
