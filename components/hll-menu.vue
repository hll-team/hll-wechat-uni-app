<template>
	<view class="hll-menu flex justify-around">
		<slot name="left"></slot>
		<text @click="handlerTabClick(item.id)" :class="active === item.id ? 'hll-menu-active' : 'hll-menu-text'" v-for="(item,i) in menuData" :key="i">{{item.name}}</text>
	</view>
</template>

<script>
	export default {
		name:"hll-menu",
		props:['menuData','active'],
		data() {
			return {
				
			};
		},
		methods:{
			handlerTabClick(val){
				this.$emit('update:active',val)
			}
		}
	}
</script>

<style>
.hll-menu{
	padding: 11px;
	font-size: 18px;
}
.hll-menu-active{
	position: relative;
	padding-left: 8px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 900;
	color: #000000;
}
.hll-menu-active::before{
	content: '';
	position: absolute;
	left: 0;
	width: 3px;
	top:4px;
	height: 18px;
	background: #E1D9D6;
	
}
.hll-menu-text{
	color: #CCCCCC;
	line-height: 25px;
}
</style>
