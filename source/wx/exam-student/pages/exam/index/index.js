// pages/exam/index/index.js
let app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    paperType: 1,
    spinShow: false,
    queryParam: {
      paperType: 1,
      pageIndex: 1,
      pageSize: app.globalData.pageSize
    },
    tableData: [],
    total: 1
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    this.search()
  },
  tabChange({
    detail
  }) {
    let size = app.globalData.pageSize
    this.setData({
      paperType: detail.key,
      queryParam: {
        paperType: detail.key,
        pageIndex: 1,
        pageSize: app.globalData.pageSize
      }
    });
    this.search()
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
    app.formPost('/api/wx/student/exampaper/pageList', this.data.queryParam).then(res => {
      _this.setData({
        spinShow: false
      });
      if (res.code === 1) {
        const re = res.response
        _this.setData({
          ['queryParam.pageIndex']: re.pageNum,
          ['queryParam.pageSize']: app.globalData.pageSize,
          tableData: re.list,
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