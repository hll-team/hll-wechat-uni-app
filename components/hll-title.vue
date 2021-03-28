<template>
	<view class="hll-title menu flex justify-between" >
		<text class="font-en-ak hll-title-en" :class="size==='small' ? 'text-sm' : ''">{{info.enName}}</text>
		<text :class="size==='small' ? 'text-df hll-title-cn-small' : ''">{{info.cnName}}</text>
	</view>
</template>

<script>
	export default {
		name:"hll-title",
		props:{
			info:{
				type:Object,
			},
			size:{
				type:String,
				default:''
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.hll-title{
	width:90%;
	border-top: 1px solid #000; 
	margin:15px auto 0;
	padding:10px;
	.hll-title-cn-small{
		font-weight: 600;
	}
}
</style>
