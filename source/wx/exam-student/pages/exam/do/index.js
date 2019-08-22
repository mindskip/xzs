import {
  formatSeconds
} from '../../../utils/util.js'

let app = getApp()
Page({
  data: {
    spinShow: false,
    paperId: null,
    form: {},
    timer: null,
    doTime: 0,
    remainTime: 0,
    remainTimeStr: ''
  },
  onLoad: function(options) {
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
            form: res.response,
            paperId: paperId,
            remainTime: res.response.suggestTime * 60
          });
          _this.timeReduce()
        }
      }).catch(e => {
        _this.setData({
          spinShow: false
        });
        app.message(e, 'error')
      })
  },
  timeReduce() {
    let _this = this
    let timer = setInterval(function() {
      let remainTime = _this.data.remainTime
      if (remainTime <= 0) {
        //_this.submitForm()
      } else {
        _this.setData({
          remainTime: remainTime - 1,
          remainTimeStr: formatSeconds(remainTime),
          doTime: _this.data.doTime + 1
        });
      }
    }, 1000)
    _this.setData({
      timer: timer
    });
  },
  onUnload() {
    clearInterval(this.data.timer)
  },
  formSubmit: function(e) {
    let _this = this
    clearInterval(this.data.timer)
    wx.showLoading({
      title: '提交中',
      mask: true
    })
    e.detail.value.id = this.data.paperId
    e.detail.value.doTime = this.data.doTime
    app.formPost('/api/wx/student/auth/bind', e.detail.value)
      .then(res => {
        if (res.response.code === 1) {

        } else {
          app.message(res.response, 'error')
        }
        wx.hideLoading()
      }).catch(e => {
        wx.hideLoading()
        app.message(e, 'error')
      })
  }
})