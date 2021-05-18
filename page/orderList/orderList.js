// page/component/new-pages/cart/cart.js
Page({
  data: {
    carts: [],               // 购物车列表
    hasList: false,          // 列表是否有数据
    selectAllStatus: false,    // 全选状态，默认全选
  },
  onShow() {
    this.setData({
      hasList: true,
      num: 1,
      carts: wx.getStorageSync('cart')
    });
  },
  /**
   * 当前商品选中事件
   */
  selectList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    const selected = carts[index].selected;
    carts[index].selected = !selected;
    this.setData({
      carts: carts
    });
  },

  /**
   * 删除当前商品
   */
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index, 1);
    this.setData({
      carts: carts
    });
    if (!carts.length) {
      this.setData({
        hasList: false
      })
    }
  },

  /**
   * 购物车全选事件
   */
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
  },


  toSubmit() {
    console.log(this.data.carts);
    wx.showToast({
      title: '提交成功',
      icon: 'none'
    })/*
    wx.request({
      url: 'http://172.46.184.116:8000/get_vote/',
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {
        carts: JSON.stringify(this.data.carts)
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res){
        console.log(res)
        if(res.data===0){
          wx.showToast({
            title: '提交成功',
            icon: 'none'
          })
        }
      },
      fail() {
        wx.showToast({
          title: '数据请求失败',
          icon: 'none'
        })
      }
    })*/
  }
})