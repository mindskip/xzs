const request = require('../../../utils/request.js')
Page({
  data: {
    userName: '',
    password: '',
  },
  formSubmit: function (e) {
    console.log(e.detail.value);
    request.formPost('/api/wx/student/user/bind', e.detail.value, function () {

    }, function () {

    })
  }
})