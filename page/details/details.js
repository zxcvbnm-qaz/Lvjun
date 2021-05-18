// page/component/details/details.js
Page({
  data:{
    goods: {
      //demo data
      id: 1,
      imageUrl: '/images/goods1.png',
      title: '菜品1',
      price: 0.01
    },
    totalNum: 1,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },
  
  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  },
})