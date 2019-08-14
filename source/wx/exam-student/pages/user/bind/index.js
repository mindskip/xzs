const request = require('../../../utils/request.js')
Page({
  data: {
    userName: '',
    password: '',
  },
  formSubmit: function(e) {
    wx.login({
      success(wxres) {
        if (wxres.code) {
          e.detail.value.code = wxres.code
          request.formPost('/api/wx/student/auth/bind', e.detail.value, function(res) {
            if (res.code == 1) {
              wx.setStorageSync('token', res.response)
              wx.reLaunch({
                url: '/pages/index/index',
              });
            } else {
              wx.showModal({
                content: res.message,
                showCancel: false
              });
            }
          })
        } else {
          wx.showModal({
            title: "微信登录错误",
            content: res.errMsg,
            showCancel: false
          });
        }
      }
    })
  }
})