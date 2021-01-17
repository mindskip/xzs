const app = getApp()
Page({
  data: {
    message: null
  },

  onLoad: function(options) {
    let msgId = options.id;
    let _this = this
    _this.setData({
      spinShow: true
    });
    app.formPost('/api/wx/student/user/message/detail/' + msgId, null).then(res => {
      _this.setData({
        spinShow: false
      });
      if (res.code === 1) {
        _this.setData({
          message: res.response,
        });
        app.formPost('/api/wx/student/user/message/read/' + msgId, null);
      }
    }).catch(e => {
      _this.setData({
        spinShow: false
      });
      app.message(e, 'error')
    })
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