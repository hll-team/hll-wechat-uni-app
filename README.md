# 好利来微信小程序
> 参与该项目开发，请认真阅读开发规范，并严格遵守本项目前端开发规范

## 环境依赖
> - base
	- vue
	- vuex
	- vue-router
> - css
	- less
	- colorui
> - network
	- axios
> - npm: >= 6.14.4
> - node: >= 12.18.0

## 目录结构
<pre>
├── api					// 接口
├── colorui				// colorui组件
├── components			 // 公共组件
│   ├── components		 // 公共组件，必须通用降低特性
├── pages				  // 生产目录
│   ├── home		   	// 主页
│   ├── mine		  	 // 我的
│   ├── order			  // 订单
│   ├── pick-up			// 自提
│   └── shop			   // 商城
├── static 
│   ├── css				// 资源文件
│   └── img 			   // 资源文件
├── unpackage			  // uniapp打包文件
├── utils				  // 公用处理方法
│   ├── ajax			   // 网络请求
│   └── index		 	 // 工具
├── App.vue				// 项目入口文件
├── main.js				// 项目主入口
└── package.json	   	// 项目配置文件
</pre>


## git
> 分支说明
 - main: 生产分支 
	- 由发布人员控制，其他开发人员不允许操作
 - dev: 开发合并分支
	- 所有开发人员从此分支check code
 - xxxDev: 开发者名称 + Dev  
	- sample: cwzDev

--- 

> 提交说明

```
<type>: <subject>
- add: 新功能
- fix: 修复 bug
- docs: 文档注释
- perf: 性能优化
- test: 增加测试
- refactor: 重构、优化(既不增加新功能，也不是修复bug)
```

--- 

> tips:
- main分支除发布人员外,其他开发者勿动。
- 开发人员完成某个功能后, 务必add commit记录功能内容。
- 线上只有main分支和dev分支的存在啊，其余分支提交和dev合并后,自行删除。
- 以上说明暂不加入git强行提示, 需自己保持此项目的提交规范。
- 本地的unpackage不用添加到commit中
---