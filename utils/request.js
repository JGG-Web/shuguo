// 封装并且暴露发起数据请求的方法。
export default(url, data={}, method='GET') => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: 'http://localhost:7788' + url,
			data,
			method,
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}