const {
  $Message
} = require('/component/iView/base/index');
const mtjwxsdk = require('./utils/mtj-wx-sdk.js');

App({
  globalData: {
    baseAPI: "http://wx.alvisu.com:8001",
    pageSize: 10,
    userInfo: null,
    sexEnum: [{
      'key': 1,
      'value': '男'
    }, {
      'key': 2,
      'value': '女'
    }],
    levelEnum: [{
        'key': 1,
        'value': '一年级'
      }, {
        'key': 2,
        'value': '二年级'
      }, {
        'key': 3,
        'value': '三年级'
      }, {
        'key': 4,
        'value': '四年级'
      }, {
        'key': 5,
        'value': '五年级'
      }, {
        'key': 6,
        'value': '六年级'
      },
      {
        'key': 7,
        'value': '初一'
      }, {
        'key': 8,
        'value': '初二'
      }, {
        'key': 9,
        'value': '初三'
      },
      {
        'key': 10,
        'value': '高一'
      }, {
        'key': 11,
        'value': '高二'
      }, {
        'key': 12,
        'value': '高三'
      }
    ],
  },
  onLaunch: function() {
    let _this = this
    let token = wx.getStorageSync('token')
    if (null == token || token == '') {
      wx.login({
        success(wxres) {
          if (wxres.code) {
            _this.formPost('/api/wx/student/auth/checkBind', {
              "code": wxres.code
            }).then(res => {
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
            }).catch(e => {
              _this.message(e, 'error')
            })
          } else {
            _this.message(res.errMsg, 'error')
          }
        }
      })
    }
  },
  message: function(content, type) {
    $Message({
      content: content,
      type: type
    });
  },
  formPost: function(url, data) {
    let _this = this
    return new Promise(function(resolve, reject) {
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
            reject('网络出错')
            return false;
          }

          if (res.data.code === 400) {
            let token = res.data.message
            wx.setStorageSync('token', token)
            wx.request({
              url: _this.globalData.baseAPI + url,
              header: {
                'content-type': 'application/x-www-form-urlencoded',
                'token': wx.getStorageSync('token')
              },
              method: 'POST',
              data,
              success(result) {
                resolve(result.data);
                return true;
              }
            })
          } else if (res.data.code === 401) {
            wx.reLaunch({
              url: '/pages/user/bind/index',
            });
            return false;
          } else if (res.data.code === 500) {
            reject(res.data.message)
            return false;
          } else if (res.data.code === 501) {
            reject(res.data.message)
            return false;
          }
          resolve(res.data);
          return true;
        },
        fail(res) {
          reject(res.errMsg)
          return false;
        },
        complete(res) {
          wx.hideNavigationBarLoading();
        }
      })
    })
  }
})