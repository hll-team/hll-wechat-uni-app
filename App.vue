<script>
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
	@import url('./static/css/flex.less');
	@import "components/colorui/main.css";
	
	@import "components/colorui/icon.css";
	
	@font-face {
	     font-family: 'AkzidenzGroteskBQ';
	     src: url('~@/static/css/AkzidenzGrotesk-Extended.otf');
	 }
	 .big-icon{
		 width: 32px;
		 height: 32px;
	 }
</style>
