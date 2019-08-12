const request = require('../../../utils/request.js')
Page({
  data: {
    userName: '',
    password: '',
  },
  formSubmit: function(e) {
    wx.login({
      success(res) {
        if (res.code) {
          e.detail.value.code = res.code
          request.formPost('/api/wx/student/user/bind', e.detail.value, function(res) {
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
          }, function() {

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