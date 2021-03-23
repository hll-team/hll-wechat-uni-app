<template>
	<view class="goods-card">
		<image src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5ICg4NjEyNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+UmVjdGFuZ2xlIDIyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IumCgOivt+mTvuaOpSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iuafpeeci+aJgOacieWIh+WbvuWkh+S7vSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc0LjAwMDAwMCwgLTgxMC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Imxhbmh1LWljb24tU2xpY2luZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzQuMDAwMDAwLCA4MTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uEIj4KICAgICAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yMiIgeD0iMCIgeT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMS44MTM4NzIyLDQuMTU2NDM1NiBDMTIuMTI0ODQxOSw0LjQ1NTEwOTU1IDEyLjA0NjE1MTMsNC44NzY0NjU5NiAxMS41Nzc4MDAzLDUuNDIwNTA0ODEgTDkuOTU3LDcuMjkyIEw5Ljk2MjA4NTA3LDcuMjk3ODUxOTUgTDkuMzQzODEwNTYsNy45NzcwNTUzMyBMMTAuNTI3NTY0MSw5LjI5OTU1NDIxIEM5LjYyMTAzNTc3LDEwLjE5NDg3OTcgOC42ODM4MDUxMywxMC45MTEwNjc3IDcuNzE1ODcyMTgsMTEuNDQ4MTE3OSBDNi43NDc5MzkyMiwxMS45ODUxNjgyIDUuNTA5MzE1MTYsMTIuMTMwMjU1NyA0LDExLjg4MzM4MDMgTDguODk1LDYuMzQyIEw4Ljg5MjA1ODUsNi4zMzk0OTgxNCBMMTAuNTU2NjExNyw0LjU0MzQ1Nzk0IEMxMS4wODM4MTU2LDMuOTg2NzY5MSAxMS41MDI5MDI0LDMuODU3NzYxNjUgMTEuODEzODcyMiw0LjE1NjQzNTYgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjAwMDAwMCwgOC4wMDAwMDApIHJvdGF0ZSgyLjAwMDAwMCkgdHJhbnNsYXRlKC04LjAwMDAwMCwgLTguMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt=""></image>
		<text class="goods-card-title" style="">阿华田天鹅蛋</text>
		<text class="goods-card-desc" style="">含乳制品、大豆、牛奶</text>
		<view class="flex solid-bottom padding justify-between">
			<text class="goods-card-price padding-sm margin-xs">￥44.00</text>
			<button class="cu-btn round sm">购买</button>
		</view>
	</view>
</template>

<script>
	export default {
		name:"goods-card",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.goods-card{
	width: 170px;
	height: 220px;
	background: #FFFFFF;
	border-radius: 25px;
	opacity: 0.3;
	.goods-card-img{
		width: 170px;
		height: 148px;
	}
	.goods-card-title{
		height: 22px;
		font-size: 16px;
		font-weight: 500;
		color: #000000;
		line-height: 22px;
	}
}
</style>
