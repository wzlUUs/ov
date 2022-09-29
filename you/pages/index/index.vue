<template>
	<view>
		<!-- 写一个 搜搜框 点击跳转 输入禁用 -->
		<navigator url="../home/home"><button class="an"> 搜索的意外晒你 </button></navigator>
		<!-- 轮播图-->
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="(item ,index) in lun " :key="index" class="bag">
					<image :src="item.image_src" mode=""></image>
				</swiper-item>

			</swiper>
		</view>
		<!-- 列表  -->
		<view class="lie">
			<view v-for="(item ,index) in dao " :key="index">
				<image :src="item.image_src" mode=""></image>
			</view>
		</view>
	</view>
	<!-- 时尚女装 -->
	<view v-for="(item ,index) in lou" :key="index">

		<image class="nia" :src="item.floor_title.image_src" mode=""></image>

		<view class="nv">
			<!-- 左 -->
			<view class="zuo">
				<image :src="item.product_list[0].image_src" mode=""></image>
			</view>
			<!-- you -->
			<view class="you">
				<view class="shang">
					<view class="sz">
						<image :src="item.product_list[1].image_src" mode=""></image>
					</view>
					<view class="sy">
						<image :src="item.product_list[2].image_src" mode=""></image>
					</view>
				</view>
				<view class="xia">
					<view class="xz">
						<image :src="item.product_list[3].image_src" mode=""></image>
					</view>
					<view class="xy">
						<image :src="item.product_list[4].image_src" mode=""></image>
					</view>
				</view>

			</view>

		</view>


	</view>
</template>

<script>
	import {
		swiper,
		classification,
		lou
	} from "../../aoi/api(1).js"
	export default {
		data() {
			return {
				lun: [], //轮播图数据
				dao: [], //导函数
				lou: [], //楼层图
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {

		},

		mounted() {
			swiper().then(res => {
				this.lun = res.message
				/* console.log(this.lun); */
			})
			classification().then(res => {
				this.dao = res.message
				/* 		console.log(this.lun); */
			})
			lou().then(res => {
				this.lou = res.message
				console.log(res.message);
			})
		}
	}
</script>

<style scoped>
	* {

		margin: 0;
		padding: 0;
	}

	.bag image {
		width: 100%;
	}

	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.swiper {
		height: 300rpx;
	}

	.lie {
		margin-top: 15rpx;
		display: flex;
		justify-content: space-between;
	}

	.lie image {
		width: 100rpx;
		height: 100rpx;
	}

	/* 时尚女装 */
	.nv {
		width: 100%;
		height: 160px;
		display: flex;

	}


	.nv .zuo {
		width: 33%;
		height: 100%;
		/* 		background-color: antiquewhite; */
		background-color: red;
	}


	.nv .zuo image {
		width: 100%;
		height: 100%;
	}

	.nv .you image {
		margin: 1%;
		width: 94%;
		height: 196%;
	}

	.nia {
		width: 100%;
		height: 40px;
	}

	.nv .you {
		width: 66%;
		height: 100%;
		background-color: beige;
	}

	.you .shang,
	.xia {
		display: flex;
		width: 100%;
		height: 100%;
	}

	.you .shang .sz,
	.zy {
		width: 50%;
		height: 40px;
	}

	.you .xia .xz,
	.xy {
		width: 50%;
		height: 40px;
	}



	/* .you .shang,
	.xia image {
		width: 20px;
		height: 30px;
	} */

	.you .shang {
		width: 100%;
		height: 50%;
		background-color: aqua;
	}
</style>
