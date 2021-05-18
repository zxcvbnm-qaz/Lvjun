// page/date2.0/date2.0.js
var app=getApp();
import * as echarts from '../../util/ec-canvas/echarts';
let chart = null;

function initChart2(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  var option2 = {
    title: {
        text: ''
    },
    tooltip: {},
    xAxis: {
        data: ["红烧肉","土豆泥","口水鸡","炒豇豆","回锅肉","炒白菜"],
          axisLabel:{
          interval:0,
          rotate:0,
          fontSize:12,
          margin:4     
       },
       axisTick:{
         show : false
        },
        splitLine:{
          show: false
        },
        axisLine: {
          show: false
        }
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
      max : 800,
      min : 0,
      splitNumber : 5,

    },
    grid: {
      x: 40,
      y: 10,
      x2: 30,
      y2: 15
    },
    series: [{
        name: '票数',
        type: 'bar',
        data: [425, 614, 396, 200, 640, 120],
        barWidth : 30,
        label: {
          show: true,  //开启显示
          position: 'top',  //在上方显示
          textStyle: {  //数值样式
            color: 'gray',
            fontSize: 12
          }
        },
        itemStyle:{
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
    }]
};
chart.setOption(option2);
  return chart;

}


Page({

  /**
   * 页面的初始数据
   */
  data: {

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