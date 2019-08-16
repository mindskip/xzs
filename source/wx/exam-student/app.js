const {
  $Message
} = require('/component/iView/base/index');

//app.js
App({
  onLaunch: function() {
    let _this = this
    let token = wx.getStorageSync('token')
    if (null == token || token == '') {
      wx.login({
        success(wxres) {
          if (wxres.code) {
            _this.formPost('/api/wx/student/auth/checkBind', {
              "code": wxres.code
            }, function(res) {
              if (res.code == 1) {
                wx.setStorageSync('token', res.response)
                wx.reLaunch({
                  url: '/pages/index/index',
                });
              } else if (res.code == 2) {
                wx.reLaunch({
                  url: '/pages/user/bind/index',
                });
              } else {
                _this.message(res.message, 'error')
              }
            })
          } else {
            _this.message(res.errMsg, 'error')
          }
        }
      })
    }
  },

  globalData: {
    baseAPI: "http://wx.ualvis.com:8001",
    pageSize: 10
  },
  message: function(content, type) {
    $Message({
      content: content,
      type: type
    });
  },
  formPost: function(url, data, success, final) {
    let _this = this
    wx.showNavigationBarLoading();
    wx.request({
      url: _this.globalData.baseAPI + url,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'token': wx.getStorageSync('token')
      },
      method: 'POST',
      data,
      success(res) {
        if (res.statusCode !== 200 || typeof res.data !== 'object') {
          final && final();
          _this.message('网络出错', 'error')
          return false;
        }
        if (res.data.code === 401) {
          wx.reLaunch({
            url: '/pages/user/bind/index',
          });
          return false;
        } else if (res.data.code === 500) {
          final && final();
          _this.message(res.data.message, 'error')
          return false;
        } else if (res.data.code === 501) {
          final && final();
          _this.message(res.data.message, 'error')
          return false;
        }
        success && success(res.data);
        final && final();
        return true;
      },
      fail(res) {
        final && final();
        _this.message(res.errMsg, 'error')
        return false;
      },
      complete(res) {
        wx.hideNavigationBarLoading();
      }
    })
  }

})