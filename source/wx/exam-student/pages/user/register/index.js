const app = getApp()
Page({
  data: {
    levelIndex: 0
  },
  bindLevelChange: function (e) {
    this.setData({
      levelIndex: e.detail.value
    })
  },
  formSubmit: function(e) {
    let _this = this;
    let form = e.detail.value
    if (form.userName == null || form.userName == '') {
      app.message('用户名不能为空', 'error');
      return;
    }
    if (form.password == null || form.password == '') {
      app.message('密码不能为空', 'error');
      return;
    }
    if (form.userLevel == null || form.userLevel == '') {
      app.message('年级不能为空', 'error');
      return;
    }
    _this.setData({
      spinShow: true
    });
    app.formPost('/api/wx/student/user/register', form)
      .then(res => {
        _this.setData({
          spinShow: false
        });
        if (res.code == 1) {
          wx.reLaunch({
            url: '/pages/user/bind/index',
          });
        } else {
          app.message(res.message, 'error')
        }
      }).catch(e => {
        _this.setData({
          spinShow: false
        });
        app.message(e, 'error')
      })
  }
})