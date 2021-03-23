import store from '../store/index'
const request = {}

const headers = {
	'Content-Type': 'application/x-www-form-urlencoded',
}
const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://yg-api.test.zydl-tec.cn:8089/zydl_trade' :
	'http://yg-api.test.zydl-tec.cn:8089/zydl_trade'

request.ajax = (url, data, method = 'POST', power) => {
	headers['token'] = uni.getStorageSync('token')
	return uni.request({
		url: BASE_URL + url,
		method: method,
		data: data,
		dataType: 'json',
		header: headers
	}).then(res => {
		if (res[1].data.status && res[1].data.status == 1) {
			return res[1].data
		} else {
			if (res[1].data.status == 0 && res[1].data.code == 2001) {
				uni.reLaunch({
					url: '../login/login',
				});
			}
			throw res[1].data
		}
	}).catch(parmas => {
		switch (parmas.code) {
			case 401:
				uni.clearStorageSync()
				break
			default:
				uni.showToast({
					title: parmas.info,
					icon: 'none'
				})
				return Promise.reject()
				break
		}

	})
}
request.post = (url, data) => {
	headers['token'] = uni.getStorageSync('token')
	return uni.request({
		url: BASE_URL + url,
		method: 'POST',
		data: data,
		dataType: 'json',
		header: headers
	}).then(res => {
		if (res[1].data.status && res[1].data.status == 1) {
			return res[1].data
		} else {
			if (res[1].data.status == "2001") {
				uni.reLaunch({
					url: '../login/login',
				});
			}
			throw res[1].data
		}
	}).catch(parmas => {
		switch (parmas.status) {
			case 401:
				uni.clearStorageSync()
				break
			case "2001":
				uni.clearStorageSync()
				return Promise.reject()
				break
			default:
				uni.showToast({
					title: parmas.info,
					icon: 'none'
				})
				return Promise.reject()
				break
		}

	})
}
request.get = (url, data) => {
	headers['token'] = uni.getStorageSync('token')
	return uni.request({
		url: BASE_URL + url,
		method: 'GET',
		data: data,
		dataType: 'json',
		header: headers
	}).then(res => {
		if (res[1].data.status && res[1].data.status == 1) {
			return res[1].data
		} else {
			if (res[1].data.status == "2001") {
				uni.reLaunch({
					url: '../login/login',
				});
			}
			throw res[1].data
		}
	}).catch(parmas => {
		switch (parmas.status) {
			case "401":
				uni.clearStorageSync()
				break
			case "2001":
				uni.clearStorageSync()
				return Promise.reject()
				break
			default:
				uni.showToast({
					title: parmas.info,
					icon: 'none'
				})
				return Promise.reject()
				break
		}

	})
}
export default request
