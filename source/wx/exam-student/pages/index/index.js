//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    spinShow: false,
    fixedPaper: [],
    pushPaper: [],
    timeLimitPaper: [],
    taskList: []
  },
  onLoad: function() {
    let _this = this
    _this.setData({
      spinShow: true
    });
    app.formPost('/api/wx/student/dashboard/index', null).then(res => {
      _this.setData({
        spinShow: false
      });
      if (res.code === 1) {
        _this.setData({
          fixedPaper: res.response.fixedPaper,
          timeLimitPaper: res.response.timeLimitPaper,
          pushPaper: res.response.pushPaper
        });
      }
    }).catch(e => {
      _this.setData({
        spinShow: false
      });
      app.message(e, 'error')
    })

    app.formPost('/api/wx/student/dashboard/task', null).then(res => {
      _this.setData({
        spinShow: false
      });
      if (res.code === 1) {
        _this.setData({
          taskList: res.response,
        });
      }
    }).catch(e => {
      _this.setData({
        spinShow: false
      });
      app.message(e, 'error')
    })
  }
})