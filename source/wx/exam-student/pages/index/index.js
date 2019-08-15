//index.js
//获取应用实例
const app = getApp()
const request = require('../../utils/request.js')

Page({
  data: {
    fixedPaper: [],
    pushPaper: [],
    timeLimitPaper: [],
  },
  onLoad: function () {
    let _this=this
    request.formPost('/api/wx/student/dashboard/index', null, function (res) {
      if(res.code===1){
        _this.setData({
          fixedPaper: res.response.fixedPaper,
          timeLimitPaper: res.response.timeLimitPaper,
          pushPaper: res.response.pushPaper
        });
      }
    })
  }
})
