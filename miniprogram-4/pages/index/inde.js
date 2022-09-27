// pages/index/inde.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      lun:[] ,//轮播图数据
      jiu:[] ,//九宫格数据
  },
/* 通过  编程式 导航 进入 tab 页面 */
goto(){
 wx.switchTab({
   url: '/pages/miao/miao',
 })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
this.lunbo()
this.jiuge()
  },
/* 数据 接口 获取数 */
/* https://www.escook.cn/slides   轮播图数据*/
/* https://www.escook.cn/categories   九宫格数据  */
lunbo(){
  wx.request({
    url: 'https://www.escook.cn/slides',
    method:"GET",
    success:(res)=>{
   /*    console.log(res); */
      this.setData({
        lun:res.data
      })
    }
  })
},
jiuge(){
wx.request({
  url: 'https://www.escook.cn/categories',
  method:"GET",
  success:(res)=>{
    console.log(res);
    this.setData({
      jiu:res.data
    })
  }
})
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})