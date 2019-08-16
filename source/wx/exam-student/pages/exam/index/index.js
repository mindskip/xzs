// pages/exam/index/index.js
let app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    paperType: '1',
    spinShow: false,
    queryParam: {
      paperType: '1',
      pageIndex: 1,
      pageSize: 10
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
    this.setData({
      paperType: detail.key,
      queryParam: {
        paperType: detail.key,
        pageIndex: 1,
        pageSize: 10
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
        queryParam: {
          pageIndex: this.data.queryParam.pageIndex + 1,
        }
      });
    } else if (type === 'prev') {
      this.setData({
        queryParam: {
          pageIndex: this.data.queryParam.pageIndex - 1,
        }
      });
    }
  },
  search: function() {
    let _this = this
    _this.setData({
      spinShow: false
    });
    app.formPost('/api/wx/student/exam/pageList', this.data.queryParam, function (data) {
      if (data.code === 1) {
        const re = data.response
        _this.setData({
          queryParam: {
            pageIndex: re.pageNum,
            pageSize: 10
          },
          tableData: re.list,
          total: re.pageNum
        });
      }
    }, function() {
      _this.setData({
        spinShow: false
      });
    })
  }
})