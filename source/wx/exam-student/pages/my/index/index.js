const app = getApp()
Page({

  data: {
    spinShow: false,
    info: {}
  },

  onLoad: function(options) {
    let _this = this
    _this.setData({
      spinShow: true
    });
    app.formPost('/api/wx/student/user/current', null, function(res) {
      _this.setData({
        spinShow: false
      });
      if (res.code == 1) {
        _this.setData({
          info: res.response
        });
      } else {
        app.message(res.message, 'error')
      }
    }, function() {
      _this.setData({
        spinShow: false
      });
    })
  }
})