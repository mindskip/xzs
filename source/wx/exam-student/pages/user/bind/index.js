const app = getApp()
Page({
  data: {
    spinShow: false,
    userName: '',
    password: '',
  },
  formSubmit: function(e) {
    let _this = this
    _this.setData({
      spinShow: true
    });
    wx.login({
      success(wxres) {
        if (wxres.code) {
          e.detail.value.code = wxres.code
          app.formPost('/api/wx/student/auth/bind', e.detail.value, function(res) {
            _this.setData({
              spinShow: false
            });
            if (res.code == 1) {
              wx.setStorageSync('token', res.response)
              wx.reLaunch({
                url: '/pages/index/index',
              });
            } else {
              app.message(res.message, 'error')
            }
          }, function() {
            _this.setData({
              spinShow: false
            });
          })
        } else {
          app.message(res.errMsg, 'error')
        }
      }
    })
  }
})