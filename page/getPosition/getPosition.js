// page/getPosition/getPosition.js

Page({
  data: {
    baseurl: 'http://39.101.196.222:8000',
    //默认省市区
    region: ["云南省", "昆明市", "呈贡区"],
    userPosition: '',
    //单级选择学校
    schoolList: [''],
    schoolIndex: 0,
    //单级选择食堂
    canteenList: [''],
    canteenIndex: 0,
    hasUserPos: false
  },

  // 选择省市区函数
  changeRegin(e) {
    this.setData({ region: e.detail.value })

    console.log("选择的地区为： " + this.data.region)
    this.sendPos()


  },
  // 学校选择函数
  changeSchool(e) {
    var that = this
    that.setData({
      schoolIndex: e.detail.value
    })
    //console.log(this.data.schoolList[this.data.schoolIndex])
    wx.request({
      url: that.data.baseurl + '/getD_din/',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        name: that.data.schoolList[that.data.schoolIndex],
      },
      success: function (res) {
        //console.log(res)
        that.setData({
          canteenList: res.data
        })

      }
    })
  },
  // 餐厅选择函数
  changeCanteen(e) {
    this.setData({
      canteenIndex: e.detail.value,
      userPosition: this.data.canteenList[this.data.canteenIndex],
    })
    console.log(e.detail.value)
    console.log(this.data.userPosition)
    wx.setStorageSync('hasUserPos', true)
    wx.setStorageSync('userPosition', this.data.schoolList[this.data.schoolIndex] + '-' + this.data.canteenList[this.data.canteenIndex])

    wx.reLaunch({
      url: '../stu_hp/stu_hp',
    })
  },
  onLoad: function () {
  },
  onShow: function () {
    wx.showToast({
      title: '从左侧向右滑动返回上一页',
      icon: 'none',
    })
  },
  //发送地区字符串
  sendPos() {
    var that = this;

    wx.request({
      url: this.data.baseurl + '/getD_id/',
      method: 'POST',
      data: {
        province: that.data.region[0],
        city: that.data.region[1],
        area: that.data.region[2],
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        console.log(res.data)
        that.setData({
          schoolList: res.data
        })
      }
    })
  }
})