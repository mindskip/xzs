let app = getApp()
Page({
  data: {
    spinShow: false,
    paperId: null,
    form: {},
    clearTimer: false,
    targetTime: 0
  },
  onLoad: function(options) {
    this.setData({
      targetTime: new Date().getTime() + 6430000,
    });

    let paperId = options.id
    let _this = this
    _this.setData({
      spinShow: true
    });
    app.formPost('/api/wx/student/exampaper/select/' + paperId, null)
      .then(res => {
        _this.setData({
          spinShow: false
        });
        if (res.code === 1) {
          _this.setData({
            form: res.response
          });
        }
      }).catch(e => {
        _this.setData({
          spinShow: false
        });
        app.message(e, 'error')
      })
  },
  onUnload() {
    this.setData({
      clearTimer: true
    });
  },
  formSubmit: function(e) {

  },
  timeOut: function() {

  }
})