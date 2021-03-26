<template>
	<view class="order h-full">
		<hll-header type="black"></hll-header>
		<hll-menu style="margin-top:20px" :menuData="menuData" :active.sync="activeMenu">
			<text slot="left">全部</text>
		</hll-menu>
		<view v-if="orderList.length>0" class="order-content main-content">
		</view>
		<view class="order-noData flex justify-center align-center  main-content" v-else>
			<image style="height:200px;width:200px;" src="/static/img/order/no-order.jpg"></image>
		</view>
	</view>
</template>

<script>
	import hllMenu from '@/components/hll-menu.vue'
	export default {
		components:{
			hllMenu,
		},
		data() {
			return {
				menuData:[{id:1,name:'当前订单'},{id:2,name:'历史订单'}],
				activeMenu: 1,
				orderList:[]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
.order-content{
	
}
.order-noData{
	height: calc(100vh - 120px);
}
</style>
