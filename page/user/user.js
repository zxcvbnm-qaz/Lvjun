Page({
  data:{
    /* 声明跳转Target */
    PageCur: "",
    /* 声明菜单数据 */
    tabBarList: {},

    thumb:'',
    nickname:'未登录',
    motto:'关于我们'
  },

  /* ColorUI页面跳转方式 */
  NavChange(e) {
    var cur = e.currentTarget.dataset.cur;
    console.log(cur)
    if(cur == 'staff_hp'){
      wx.redirectTo({
        url: '/page/staff_hp/staff_hp',
      })
    }
     if(cur){
      this.setData({
        PageCur: cur,
        "tabBarList.activeUrl": cur
      })
    }
  },

  onLoad:function(){

    /* 
      获取角色信息
      ...
    */
   this.setData({
    tabBarList: tabBarList.staffTabData
  })
  },
　onShow:function(){
   var self = this;
   /**
   * 获取用户信息
   */
   wx.getUserInfo({
     success: function (res) {
       self.setData({
         thumb: res.userInfo.avatarUrl,
         nickname: res.userInfo.nickName
       })
     }
   })
},
  bindPos: function(){
    var self = this;
    /**
     * 发起请求获取订单列表信息
     */
    wx.request({
      url: '/Users/wht/WeChatProjects/食俭/orders.txt',
      success(res){
        self.setData({
          orders: res.data
        })
      }
    })
  },
/**
 * 切换身份
 */
changeId(){
wx.reLaunch({
  url: '../guide/guide',
})
},
  /**
   * 发起支付请求
   */
  payOrders(){
    wx.requestPayment({
      timeStamp: 'String1',
      nonceStr: 'String2',
      package: 'String3',
      signType: 'MD5',
      paySign: 'String4',
      success: function(res){
        console.log(res)
      },
      fail: function(res) {
        wx.showModal({
          title:'操作失败',
          content:'<text>',
          showCancel: false
        })
      }
    })
  },
  about_us(){
    wx.showModal({
      title: '关于我们',
      content: '如有意联系我们,可以发送电子邮件至\naurope@qq.com',
      text: 'center',
      showCancel: false,
      complete() {
        wx.showToast({
          title: '感谢您的支持！',
          icon: 'none',
        })
      }
    })
  },

})