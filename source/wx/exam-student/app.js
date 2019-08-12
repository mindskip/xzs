//app.js
App({
  onLaunch: function () {
    let token = wx.getStorageSync('token')
    if (null == token || token == '') {
      wx.navigateTo({
        url: 'pages/user/bind/index',
      })
    }
  },
  globalData: {
    userInfo: null
  }
})