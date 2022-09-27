// pages/shang/shang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    biao: {}, // 动态标头文本
    shoplist: [],//所有 商品 数据信息
    page: 1,// 第几页
    pagesize: 10, // 每页 多少条
    total: 0,//一共 有 多少信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getshop()
    console.log(options);
    this.setData({
      biao: options
    })
  },
  getshop(){
    wx.request({
      url:`https://www.escook.cn/categories/${this.data.biao.id}/shops`,
     method:"GET",
      data:{ /* 向服务器发送的 数据   */
        _page:this.data.page,  /* 请求第几页的数据 */
        _linit:this.data.pagesize /* 请求多少条数据 */
      },
      success:(res)=>{
        this.setData({
            shoplist :[...this.data.shoplist  , ...res.data],
            total:res.header['X-Total-Count'] - 0 
        })
    
        console.log(res.data);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    /* 切换 动态 图标 */
    wx.setNavigationBarTitle({
      title: this.data.biao.title,
    })
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