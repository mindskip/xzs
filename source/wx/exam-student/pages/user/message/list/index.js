const app = getApp()
Page({
  data: {
    messageList: null,
    queryParam: {
      paperType: 1,
      pageIndex: 1,
      pageSize: app.globalData.pageSize
    },
    tableData: [],
    total: 1
  },
  onLoad: function(options) {
    this.search();
  },
  pageChange({
               detail
             }) {
    const type = detail.type;
    if (type === 'next') {
      this.setData({
        ['queryParam.pageIndex']: this.data.queryParam.pageIndex + 1
      });
    } else if (type === 'prev') {
      this.setData({
        ['queryParam.pageIndex']: this.data.queryParam.pageIndex - 1
      });
    }
    this.search()
  },
  search: function() {
    let _this = this
    _this.setData({
      spinShow: true
    });
    app.formPost('/api/wx/student/user/message/page', this.data.queryParam).then(res => {
      _this.setData({
        spinShow: false
      });
      if (res.code === 1) {
        const re = res.response
        _this.setData({
          ['queryParam.pageIndex']: re.pageNum,
          ['queryParam.pageSize']: app.globalData.pageSize,
          messageList: re.list,
          total: re.pages
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