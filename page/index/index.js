//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hasUserInfo: false,
    url: '/images/Logo.jpg'
  },

  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    wx.removeStorageSync('cart')

    /**
     * 获取轮播图
     * 获取菜单名
     */
    this.getSliderUrl()
    this.getMenu()
  },

  //获取用户信息
  getUserInfo: function(e) {
    //console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.showToast({
      title: '点击头像开始使用',
      icon: 'none'
    })
  },

  //事件处理函数
  go2hp: function() {
    wx.switchTab({
      url: '../homepage/homepage'
    })
  },

  /**
   * 轮播图
   */
  getSliderUrl() {
    var that = this
    
    wx.request({
      url:'https://www.easy-mock.com/mock/5eaac46649a64d557f000798/example/sliderPic',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        //console.log(res)
        if (res.data.code === 0) {
          wx.setStorageSync('slideImgUrls', res.data.slideImgUrls)
        }
      },
      fail() {
        wx.showToast({
          title: '数据请求失败',
          icon: 'none'
        })
      }
    })
  },

  /**
   * 新品菜
   */
  getMenu() {
    var that = this

    wx.request({
      url: 'http://api.xiaocongjisuan.com/data/cookbook/get',
      header: {
        'content-type': 'application/json' // 默认值
      },

      success(res) {
        console.log(res)

        if (res.data.code === 0) {
          wx.setStorageSync('menu', res.data.menu)
        }
      },
      fail() {
        wx.showToast({
          title: '数据请求失败',
          icon: 'none'
        })
      }
    })
  },
})