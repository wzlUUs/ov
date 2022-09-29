import api from '/aoi/request.js'

const swiper = async () => { //轮播图
	let data = await api({
		url: 'home/swiperdata',
		method: 'get',
	})
	return data
}

const classification = async () => { //导航数据
	let data = await api({
		url: 'home/catitems',
		method: 'get',
	})
	return data
}
const lou = async () => { //导航数据
	let data = await api({
		url: 'home/floordata',
		method: 'get',
	})
	return data
}

export {
	swiper,
	classification,
	lou
}
