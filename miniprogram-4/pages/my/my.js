// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
         cun:0 
  },
add(){
    this.setData({
      cun : this.data.cun + 1
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
     
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
   console.log('下拉刷新触发');
   this.setData({
     cun: 0
   })
   wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
console.log('触发上拉刷新');
/* 同一时间 只能 触发一次 */
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})