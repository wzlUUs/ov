<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
/*每个页面公共css */
<style lang="scss">
	* {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	@import "./uni_modules/vk-uview-ui/index.scss";
</style>
