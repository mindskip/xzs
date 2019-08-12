const Base_API = "http://www.hao123.com:8001"

const formPost = function (url, data, success, fail) {
  wx.showNavigationBarLoading();
  wx.request({
    url: Base_API + url,
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      'token': wx.getStorageSync('token')
    },
    method: 'POST',
    data,
    success(res) {
      if (res.statusCode !== 200 || typeof res.data !== 'object') {
        wx.showModal({
          content: '网络出错'
        });
        return false;
      }
      if (res.data.code === 401) {
        wx.reLaunch({
          url: 'pages/user/bind/index',
        });
        return false;
      } else if (res.data.code === 500) {
        wx.showModal({
          content: res.data.message
        });
        return false;
      } else if (res.data.code === 501) {
        wx.showModal({
          title: "提交数据错误",
          content: res.data.message
        });
        return false;
      }
      success && success(res.data);
    },
    fail(res) {
      wx.showModal({
        content: res.errMsg
      });
    },
    complete(res) {
      wx.hideLoading();
      wx.hideNavigationBarLoading();
    }
  });
}

export {
  formPost
}