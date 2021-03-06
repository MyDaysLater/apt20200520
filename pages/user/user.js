// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:[]
  },
  getUserInfoFunc: function (e) {
    console.log(e);
    // 1. 获取用户信息
    let userInfo = e.detail.userInfo;
    this.setData({
      userInfo:userInfo
    })
    // 2. 存到缓存区
    wx.setStorageSync("userInfo", userInfo)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {
    let userInfo = wx.getStorageSync("userInfo");
    this.setData({
      userInfo
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
   
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
     
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})