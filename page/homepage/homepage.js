var app = getApp();

//echarts
import * as echarts from '../../util/ec-canvas/echarts';
let chart = null;

function initChart1(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '',
      x:''
           },
  tooltip: {
    type: 'category'
  },
  xAxis: {
      data: ['8:00', '8:10','8:20', '8:30', '8:40', '8:50', '9:00', '9:10','9:20', '9:30', '9:40', '9:50','10:00', '10:10','10:20', '10:30', '10:40', '10:50','11:00'],
      boundaryGap : false,
      axisLabel:{
          interval:0,
          rotate:90,
          fontSize:8,
          margin:2  
       },
       axisTick:{
        show : false
      },
      splitLine:{
        show: false
      },
         },
  yAxis: {
    axisTick:{
      show : false
    },
    splitLine:{
      show: false
    },
    axisLine: {
      show: false
    },
  },
  grid: {
    x: 40,
    y: 40,
    x2: 30,
    y2: 45
  },
  series: [{
     data: [412, 450, 400, 365, 350, 320,300, 315, 362, 320, 312, 290,201, 220, 310, 360, 350,315,200],
      type: 'line',
      smooth: true,
      symbol:'none',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {offset: 0, color: 'rgb(194,53,49)'}, 
            { offset: 1, color: '	rgb(250,250,250)'}
          ],
          global: false // 缺省为 false
      }
      },
      itemStyle: {
         normal: {
            label: {
            show: false,  //关闭数值显示
            position: 'top',  //在上方显示
            textStyle: {  //数值样式
              color: 'gray',
              fontSize: 12
            }
          }
        }
      },
    }]
  };  

  chart.setOption(option);
  return chart;
}

//page
Page({
  data: {
    /* 声明跳转Target */
    PageCur: "",
    /* 声明菜单数据 */
    tabBarList: {},

    /**
     * echarts
     */
    chooseBreakfast:true,
    chooseLunch:false,
    chooseDinner:false,
    chooseNight:false,
    List:['早餐','午餐','晚餐','夜宵'],
    ec1: {
      onInit: initChart1
    },

    hasUserInfo: false,
    hasUserPos: false,
    slideImgUrls: [],
    menu: [{
      id: 0,
      name: '',
      price: '',
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
/* ColorUI页面跳转方式 */
NavChange(e) {
  var cur = e.currentTarget.dataset.cur;
  console.log(cur)
  if(cur == 'staff_mine'){
    wx.redirectTo({
      url: '/page/staff_mine/staff_mine',
    })
  }
  if(cur){
    this.setData({
      PageCur: cur,
      "tabBarList.activeUrl": cur
    })
  }
},
  onShow: function() {
    this.setData({
      userPosition: wx.getStorageSync('userPosition')
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
      menu: wx.getStorageSync('menu'),
      slideImgUrls: wx.getStorageSync('slideImgUrls')
    })
    /* 
      获取角色信息
      ...
    */
     this.setData({
       tabBarList: tabBarList.staffTabData
     })
     
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    setTimeout(function () {
      // 获取 chart 实例的方式
      // console.log(chart)
    }, 2000);
    
  },

  search: function() {
    wx.navigateTo({
      url: '../search/search',
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

  breakfast:function(e){
  console.log(e.currentTarget.dataset.index)
  var index = e.currentTarget.dataset.index
  var chooseBreakfast=this.data.chooseBreakfast
  var chooseLunch=this.data.chooseLunch
  var chooseDinner=this.data.chooseDinner
  var chooseNight=this.data.chooseNight
  if(index==0){
    chooseBreakfast=true
    chooseLunch=false
    chooseDinner=false
    chooseNight=false
  }else if(index==1){
    chooseBreakfast=false
    chooseLunch=true
    chooseDinner=false
    chooseNight=false
  }else if(index==2){
    chooseBreakfast=false
    chooseLunch=false
    chooseDinner=true
    chooseNight=false
  }else{
    chooseBreakfast=false
    chooseLunch=false
    chooseDinner=false
    chooseNight=true
  }
  this.setData({
    chooseBreakfast:chooseBreakfast,
    chooseLunch:chooseLunch,
    chooseDinner:chooseDinner,
    chooseNight:chooseNight
  })
  },

  goDetail:function(){
    wx.navigateTo({
      url: '/page/voteResult/voteResult',
    }),
    console.log('444');
  },
 
  goview1:function(){
    wx.navigateTo({
      url: '../upLoadFood/upLoadFood',
      url: '../staff_foodM/staff_foodM',
    })
  },
  goview2:function(){
    wx.navigateTo({
      url: '../staff_foodM/staff_foodM',
    })
  },
  goview3:function(){
    wx.navigateTo({
      url: '../getPosition/getPosition',
    })
  },
})
