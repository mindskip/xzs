const request = require('/utils/request.js')
//app.js
App({
  onLaunch: function () {
    let token = wx.getStorageSync('token')
    if (null == token || token == '') {
      wx.login({
        success(wxres) {
          if (wxres.code) {
            request.formPost('/api/wx/student/auth/checkBind', { "code": wxres.code}, function (res) {
              if (res.code == 1) {
                wx.setStorageSync('token', res.response)
                wx.reLaunch({
                  url: '/pages/index/index',
                });
              } 
              else if (res.code == 2) {
                wx.navigateTo({
                  url: 'pages/user/bind/index',
                })
              }else {
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
  },
  globalData: {
    userInfo: null
  }
})