const app = getApp()
Page({
  data: {
    spinShow: false,
    info: {}
  },

  onLoad: function(options) {
    if (app.globalData.userInfo) {
      this.setData({
        info: app.globalData.userInfo,
      })
    } else {
      this.loadUserInfo()
    }
  },
  loadUserInfo() {
    let _this = this
    _this.setData({
      spinShow: true
    });
    app.formPost('/api/wx/student/user/current', null).then(res => {
      _this.setData({
        spinShow: false
      });
      if (res.code == 1) {
        app.globalData.userInfo = res.response
        _this.setData({
          info: res.response
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