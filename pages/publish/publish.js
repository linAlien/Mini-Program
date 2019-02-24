Page({

  data: {
    address: "点击选择地址",
    success: false
  },

  staticData: {
    type: "buy"
  },

  handleAddressClick() {
    wx.chooseLocation({
      success: this.handleChooseLocationSucc.bind(this)
    })
  },

  handleChooseLocationSucc(res) {
    this.setData({
      address: res.address
    });
    Object.assign(this.staticData, {
      latitude: res.latitude,
      longitude: res.longitude
    })
  },

  handleTypeChange(e) {
    this.staticData.type = e.detail.value;
  },

  handleContactChange(e){
    this.staticData.contact = e.detail.value;
  },

  handleMessageChange(e) {
    this.staticData.message = e.detail.value;
  },

  handleSubmit() {
    if (this.data.address === "点击选择地址" || !this.data.address) {
      wx.showToast({
        title: '请填写地址',
        icon: 'loading',
        duration: 2000
      })
      return;
    }
    if(!this.staticData.message) {
      wx.showToast({
        title: '请填写说明信息',
        icon: 'loading',
        duration: 2000
      })
      return;
    }
    if (!this.staticData.contact) {
      wx.showToast({
        title: '请填写联系人信息',
        icon: 'loading',
        duration: 2000
      })
      return;
    }

    // const data = Object.assign({}, this.staticData, {
    //   address: this.data.address,
    //   distinct: "longxiaozhai_cource"
    // }),
    // this.data.success = true
    this.setData({
        success: true
      })
    console.log(this.data.success)
  },

  // handleSubmitSucc(res){
  //   if(res.data && res.data.ret){
  //     this.setData({
  //       success: true
  //     })
  //   }
  // },

  handleBackTap() {
    wx.navigateBack();
  }
})
