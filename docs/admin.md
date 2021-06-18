#### 登录 （/api/user/login）

```请求参数
{
    "userName": "admin",  //用户名
    "password": "",  //密码
    "remember": false  //记住我
}
```

```返回参数
{
    "code": 1,
    "message": "成功",
    "response": {
        "id": null,
        "userUuid": null,
        "userName": "admin",  //用户名
        "password": null,
        "realName": null,
        "age": null,
        "sex": null,
        "birthDay": null,
        "userLevel": null,
        "phone": null,
        "role": null,
        "status": null,
        "imagePath": null,
        "createTime": null,
        "modifyTime": null,
        "lastActiveTime": null,
        "deleted": null,
        "wxOpenId": null
    }
}
```

#### 首页 （/api/admin/dashboard/index）

```请求参数

```

```返回参数
 {
    "examPaperCount": 2413,  //试卷总数
    "questionCount": 1025,  //题目总数
    "doExamPaperCount": 6148,  //总答卷数
    "doQuestionCount": 23945,  //总题数
    "mothDayUserActionValue": [  //活跃度
        85
    ],
    "mothDayDoExamQuestionValue": [  //月做题数
        22
    ],
    "mothDayText": [  //本月天数
        "1"
    ]
}    
```
