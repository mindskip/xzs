//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    spinShow: false,
    fixedPaper: [],
    pushPaper: [],
    timeLimitPaper: [],
  },
  onLoad: function() {
    let _this = this
    _this.setData({
      spinShow: true
    });
    app.formPost('/api/wx/student/dashboard/index', null, function(res) {
      if (res.code === 1) {
        _this.setData({
          fixedPaper: res.response.fixedPaper,
          timeLimitPaper: res.response.timeLimitPaper,
          pushPaper: res.response.pushPaper
        });
      }
    }, function() {
      _this.setData({
        spinShow: false
      });
    })
  }
})