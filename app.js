
App({
// 将变量存在globaldata里，
  globalData: {
  },
// 微信小程序启动时,获取系统基本信息，变为全局
  onLaunch() {
    try {
      const deviceInfo = wx.getStorageSync("deviceInfo");
      if(!deviceInfo) {
        const res = wx.getSystemInfoSync()
        this.globalData.windowHeight = res.windowHeight;
        this.globalData.windowWidth = res.windowWidth;
        wx.setStorageSync("deviceInfo", {
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }else {
        this.globalData.windowHeight = deviceInfo.windowHeight;
        this.globalData.windowWidth = deviceInfo.windowWidth;
      }
      
    } catch (e) {}
  }
})
