var app = getApp();

Page({
  data: {
    manegement:true,
    information:false,

    hasUserInfo: false,
    hasUserPos: false,
    slideImgUrls: [],
    menu: [{
      selected: false
    }],
    num: 1,
    totalNum: 0,
    indicatorDots: false,
    autoplay: false,
    interval: 3600,
    duration: 800,
    userPosition: '您还没有绑定位置，无法为您生成菜品',
    cart: [],
    index: 0
  },
  onShow: function() {
    /* 
      获取角色信息
      ...
    */
    this.setData({
      userPosition: wx.getStorageSync('userPosition')
    })
  },
/**
   * 新品菜
   */
  getMenu() {
    var that = this
    //console.log(menu.menu.menu)
    
    wx.request({
      //url: 'https://www.easy-mock.com/mock/5eaac46649a64d557f000798/example/menuPic',
      //url:'http://10.100.61.245:8000/postFood/',
      //url: 'http://10.100.61.245:8000/recommend_food/',//推荐接口
      url: 'http://39.101.196.222:8000/postFood/',
      header: {
        'content-type': 'application/json' // 默认值
      },

      success(res) {
        
        
          that.setData({
            menu:res.data
          })
        
        console.log('111'+that.data.menu)
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  
    /**
     * 获取用户信息
     */
    if (app.globalData.userInfo) {
      this.setData({
        hasUserInfo: true
      })
    }

    /**
     * 获取用户位置
     */
    this.setData({
      hasUserPos: wx.getStorageSync('hasUserPos')
    })
    console.log(this.data.userPosition)

    /**
     * 获取轮播图
     * 获取菜单名
     */
    this.setData({
      slideImgUrls: wx.getStorageSync('slideImgUrls')
    })
    this.getMenu()
  },


  search: function() {
    wx.navigateTo({
      url: '../search/search',
    })
  },
add:function(){
wx.navigateTo({
  url: '../upLoadFood/upLoadFood',
})
},
  getPosBtn: function() {
    wx.navigateTo({
      url: '../getPosition/getPosition',
    })
  },

  loginBtn: function() {
    wx.reLaunch({
      url: '../index/index',
    })
  },
  cartBtn: function() {
    wx.navigateTo({
      url: '../orderList/orderList',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    
  },

  goHp:function(){
    wx.redirectTo({
      url: '/page/staff_hp/staff_hp',
    })
  },

  chooseManagement:function (e){
    var manegement=this.data.manegement
    var information=this.data.information
    this.setData({
      manegement: true,
      information: false
    })
  },
  chooseInformation: function (e) {
    this.setData({
      manegement: false,
      information: true,
    })
  },

})