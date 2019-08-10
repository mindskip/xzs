function request (url, method, data, header = {}) {
  wx.showLoading({
    title: '加载中'
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: process.env.BASE_API + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading()
        resolve(res.data)
      },
      // eslint-disable-next-line handle-callback-err
      fail: function (error) {
        wx.hideLoading()
        // eslint-disable-next-line prefer-promise-reject-errors
        reject(false)
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  })
}

const get = function (url, params) {
  return request(url, 'GET', params)
}

const post = function (url, params) {
  return request(url, 'POST', params)
}

export {
  get,
  post
}
