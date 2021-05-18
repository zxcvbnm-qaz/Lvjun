// page/upLoadFood/upLoadFood.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
name:''
  },

  //菜品上传
  foodNameInput(e){
    //console.log(e.detail.value)
    this.setData({
      name:e.detail.value
    })
    console.log(this.data.name)
  },

  upLoad:function(){
    wx.request({
      url: 'http://39.101.196.222:8089/WebDemoMVC/WechatFoodUpload',
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        name: this.data.name
      },
      success: function (res) {
        console.log(res)
        
      }
    })
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
  onShow: function () {

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