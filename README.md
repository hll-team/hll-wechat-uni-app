# 好利来微信小程序

> 好利来微信小程序
  参与该项目开发，请认真阅读开发规范，并严格遵守本项目前端开发规范
##### 开发前需要注意的内容
    > javaScript书写规范
       命名规范
       常量名
          全部大写并单词间用下划线分隔
          如：CSS_BTN_CLOSE、TXT_LOADING
       对象的属性或方法名
          小驼峰式（little camel-case）
          如：init、bindEvent、updatePosition
          例：
            Dialog.prototype = {
              init() {},
              bindEvent() {},
              updatePosition() {}
              …
            }
       类名（构造器）
          -->小驼峰式但首字母大写
          -->如：Current、DefaultConfig
       函数名
          -->小驼峰式
          -->如：current()、defaultConfig()
       私有函数名
          -->小驼峰式
          -->如：_current()、_defaultConfig()
       变量名
          -->小驼峰式
          -->如：current、defaultConfig
       私有变量名
          -->小驼峰式但需要用_开头
          -->如：_current、_defaultConfig
       代码风格
          文本缩进，一次缩进两个空格，已添加到 eslint 规则
          例：
            constructor() {
               super()
            } √
          语句结束省略掉 ;，已添加到 eslint 规则
          例：
            let obj = {}  √
            let obj = {}; X
          {}的使用，if else try catch switch 后面必须添加不可省略且{}要换行，已添加到 eslint 规则
          例：
            if(typeof obj === object) {
              return true
            } √
            if(typeof obj === object) return true X
            if(typeof obj === object)
              return true X
            if(typeof obj === object) { return true } X
          this别名，统一使用that，已添加到 eslint 规则
          例：
            let that  = this √
            let self  = this X
            let _me   = this X
            let _this = this X
            let _that = this X
          函数定义时括号前后不应有空行，已添加到 eslint 规则
          例：
            function fun(a, b) {
              return a + b
            } √
            function fun(a, b) {
            // 空行
              return a + b
            // 空行
            } X
            function fun(a, b) {
              return a + b
            // 空行
            } X
            function fun(a, b) {
            // 空行
              return a + b
            } X 


## 环境依赖
 > - node: >= 12.18.0
 > - npm: >= 6.14.4

## 组件依赖
##### 基本组件
   > - vue
   > - vue-router
   > - vuex

##### 处理ajax请求
  > -  axios

##### UI组件
 > - colorui

##### 样式管理
 > - less
***
## 目录结构
<pre>
├── api         		        // 接口
├── colorui         		    // colorui组件
├── components        		    // 公共组件
│   ├── components     		    // 公共组件，必须通用降低特性
├── pages                		// 生产目录
│   ├── home         		    // 主页
│   ├── mine     		        // 我的
│   ├── order                   // 订单
│   ├── pick-up          		// 自提
│   └── shop     		        // 商城
├── static 
│   ├── css
│   └── img 
├── store
├── type
├── unpackage 
├── utils  	                 // 公用处理方法
│   ├── img         		  // 图片资源
│   └── json        		  // 用来测试的json数据
├── App.vue     			// 项目入口文件
├── main.js        		     // 项目主入口  		
└── package.json       		// 项目配置文件

</pre>


### 公共组件说明

>存放路径：src/components

  组件名称  | 组件说明
  ---:| :---
  goods-card.vue        | 商品卡片
  hll-card.vue          | 项目特殊卡片
  hll-title.vue         | 项目标题

`cu-custom` 页面可以直接调用了
```
<cu-custom bgColor="bg-gradual-blue" :isBack="true">
	<block slot="backText">返回</block>
	<block slot="content">导航栏</block>
</cu-custom>
```
| 参数       | 作用   |类型    |  默认值 |
| --------   | -----:  |-----:  | :----:  |
| bgColor    | 背景颜色类名 |String  |   ''    |
| isBack     | 是否开启返回 | Boolean |   false |
| bgImage    | 背景图片路径 | String  |  ''     |

| slot块       | 作用   |
| --------   | -----:  |
| backText    | 返回时的文字 | 
| content     | 中间区域 | 
| right    | 右侧区