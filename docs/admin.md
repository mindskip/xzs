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

#### 学生列表 （/api/admin/user/page/list）

```请求参数
{
    "userName": "",  //用户名
    "role": 1,   //角色
    "pageIndex": 1,  //页码
    "pageSize": 10   //每页条数
}
```

```返回参数
{
    "code": 1,
    "message": "成功",
    "response": {
        "total": 81,  //总数
        "list": [
            {
                "id": 100,     //用户id
                "userUuid": "fd31ab62-c32f-433c-8dc4-c07e653d390a",  //用户uuid
                "userName": "王",  //用户名
                "realName": null,  //真实姓名
                "age": null,  //年龄
                "role": 1,  //角色
                "sex": null,  //性别
                "birthDay": "",  //出生日期          
                "phone": null,   //手机号                 
                "lastActiveTime": "2021-06-21 20:01:26",  //最后活动时间
                "createTime": "2021-06-21 20:01:26",  //创建时间
                "modifyTime": "2021-06-21 20:01:35",  //修改时间
                "status": 1,  //状态
                "userLevel": 1,  //年级
                "imagePath": null   //头像
            }
        ]
    }
}
```
