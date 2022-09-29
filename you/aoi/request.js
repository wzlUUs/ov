const api = (params) => {
	// http://m.mengxuegu.com/api/article/api
	let URL = "https://api-hmugo-web.itheima.net/api/public/v1/" //域名
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中',
		})
		uni.request({
			url: URL + params.url,
			method: params.method || "GET",
			data: params.data || '',
			success: res => {
				uni.hideLoading()
				resolve(res.data)
			}

		})
	})
}
export default api
