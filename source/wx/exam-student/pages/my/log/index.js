const app = getApp()
Page({
  data: {
    logList: null,
    len: 0
  },
  onLoad: function(options) {
    this.search();
  },
  search: function() {
    let _this = this
    _this.setData({
      spinShow: true
    });
    app.formPost('/api/wx/student/user/log', null).then(res => {
      _this.setData({
        spinShow: false
      });
      if (res.code === 1) {
        _this.setData({
          logList: res.response,
          len: res.response.length
        });
      }
    }).catch(e => {
      _this.setData({
        spinShow: false
      });
      app.message(e, 'error')
    })
  }
})