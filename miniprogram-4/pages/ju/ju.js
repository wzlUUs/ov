// pages/ju/ju.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorlist: [],//随机颜色 
    /* 上拉 节流三步走  第一步定义*/
    isloading: false
  },
  getcolor() {//获取随机颜色的方法
    this.setData({
      /* 节流三步走 第二部 第一下  开启阻止 */
      isloading: true,
    })
    /* 需要 展示 logding  效果 */
    wx.showLoading({
      title: '数组正在路上',
    })
    wx.request({
      url: 'https://www.escook.cn/api/color',
      method: "GET",//发起请求, 获取随机颜色值的数组
      success: ({ data: res }) => {
        console.log(res);
        this.setData({  /* 数组的 拼接 成 一个 大数组 */
          colorlist: [...this.data.colorlist, ...res.data]
        })
      }, /* 结束 上拉 刷新 */
      complete: () => {
        wx.hideLoading(),
            /* 节流三步走 第二部 第二下  结束阻止 */
          this.setData({
            isloading: false
          })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getcolor()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    /* 节流三步 判断 当前 节流阀 值是什么  */
    if(this.data.isloading) return 
    /* 如果 节流阀 为 true  直接返回    */
    /* 否则 执行 */
    this.getcolor()
  /*   console.log('上拉刷新 触发'); */
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})