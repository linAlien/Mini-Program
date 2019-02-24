Page({

  data: {
    list: [{ "id": "00000000001", "latitude": "40.0819", "longitude": "116.3575", "type": "sell" },
      { "id": "00000000002", "latitude": "40.0819", "longitude": "116.3575", "type": "buy" }
	]
  },

  staticData: {
    inputValue: ""
  },

  getSearchResultSucc(res) {
    if(res.data.ret) {
      const result = res.data.data;
      this.setData({
        list: result
      })
    }else {
      this.setData({
        list: []
      })
    }
    
  },

  handleInputChange(e) {
    this.staticData.inputValue = e.detail.value;
  },

  handleSearch() {
    this.getSearchResult()
  },

  handleItemTap(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.id,
    })
  }


})