<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.loadFontFace({
			  family: 'AkzidenzGroteskBQ',
			  source: 'url("http://www.letonglexue.com/upload/hll/AkzidenzGroteskBQ-MedExt.otf")',
			  success() {
			      console.log('success')
			  }
			})
			uni.getSystemInfo({
					success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 70;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 70;
					};
					// #endif
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./static/css/index.css";
	@import "components/colorui/main.css";
	@import "components/colorui/icon.css";
	
	@font-face {
	     font-family: 'AkzidenzGroteskBQ';
	     src: url('~@/static/css/AkzidenzGrotesk-Extended.otf');
	 }
</style>
