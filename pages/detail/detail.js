const app = getApp();
const header = require('../../components/header/header.js');

const data = Object.assign({}, header.data, {
  address: "显示地址",
  type: "",
  message: "显示类型",
  contact: "显示联系方式"
});


const config = Object.assign({},header , {

  data: data,

  onLoad(options) {
  },

})

Page(config)