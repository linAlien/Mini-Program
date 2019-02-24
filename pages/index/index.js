const app = getApp();
var localData = require("../../data/json.js")
Page({
// 变量存放
  data: {
    longitude: "",
    latitude: "",
    markers: [],
    controls: [{
      iconPath: '/resources/pin.png',
      position: {
        // 获取全局变量
        left: (app.globalData.windowWidth / 2) - 11,
        top: ((app.globalData.windowHeight -40) / 2) - 31,
        width: 22,
        height: 31
      }
    }, {
      id: 1,
      iconPath: '/resources/center.png',
      position: {
        left: 20,
        top: app.globalData.windowHeight - 90,
        width: 30,
        height: 30
      },
      clickable: true
    }]
  },
// 页面展示时调用函数，加载位置
  onShow(){
    this.getMessagesSucc();
    this.getLocation();
  },

  
  

  getMessagesSucc(){
    // const data = res.data.data;
    const data =localData.testJsonList.data;
    console.log(data)
    const markers = data.map((value, index)=> {
      return {
        iconPath: "/resources/" + value.type +".png",
        id: value.id,
        latitude: value.latitude,
        longitude: value.longitude,
        width: 40,
        height: 40
      }
    });
    this.setData({
      markers: markers
    })
  },

  onReady(){
    this.mapCtx = wx.createMapContext('map');
  },
// 获取位置方法
  getLocation(){
    // 微信内置方法
    wx.getLocation({
      type: 'gcj02',
      // 将函数变为全局
      success: this.handleGetLocationSucc.bind(this)
    })
  },

  handleGetLocationSucc(res){
    // 改变data的数据
    this.setData({
      longitude: res.longitude,
      latitude: res.latitude
    })
  },

  controltap() {
    this.mapCtx.moveToLocation();
  },
// 转发
  onShareAppMessage() {
    return {
      title: 'lintt交易平台',
      path: '/pages/index/index'
    }
  },

  handleMarkerTap(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.markerId
    })
  }
})
