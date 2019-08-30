const app = getApp()
Page({
  data: {
    levelItems: app.globalData.levelEnum,
    levelIndex: null,
    levelVal: null,
  },

  bindLevelChange(e) {
    let levelIndex = parseInt(e.detail.value);
    this.setData({
      levelIndex: levelIndex,
      levelVal: this.data.levelItems[levelIndex].key
    })
  },
  formSubmit: function(e) {
    let _this = this;

    if (e.detail.value.userName == null || e.detail.value.userName == '') {
      app.message('用户名不能为空', 'error');
      return;
    }
    if (e.detail.value.password == null || e.detail.value.password == '') {
      app.message('密码不能为空', 'error');
      return;
    }
    if (this.data.levelVal == null || this.data.levelVal == '') {
      app.message('年级不能为空', 'error');
      return;
    }
    _this.setData({
      spinShow: true
    });
    e.detail.value.userLevel = this.data.levelVal;
    app.formPost('/api/wx/student/user/register', e.detail.value)
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
  },
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})