#### 登录 （/api/user/login）

```请求参数
{
    "userName": "student",  //用户名
    "password": "",  //密码
    "remember": false  //下次自动登录
}
```

```返回参数
{
        "userName": "student",  //用户名
        "imagePath": "",  //头像
    }
```

#### 首页 （/api/student/dashboard/index）

```请求参数

```

```返回参数
{
    "fixedPaper": [  //固定试卷
        {
            "id": 2399,  //试卷Id
            "name": "test33333",  //试卷名称
            "limitStartTime": null,  //考试开始时间
            "limitEndTime": null     //考试结束时间
        }
    ],
    "timeLimitPaper": []    //时段试卷
}
```

#### 任务中心 （/api/student/dashboard/task）

```请求参数

```

```返回参数
[
        {
            "id": 9,  //任务id
            "title": "2021-04-25作业",  //任务标题
            "paperItems": [
                {
                    "examPaperId": 181,   //任务试卷id
                    "examPaperName": "第一次出卷",  //任务试卷名称
                    "examPaperAnswerId": 579,  //答卷id
                    "status": 2  //答卷状态
                }
            ]
        }
    ]
```

#### 未读消息 （/api/student/user/message/unreadCount）

```请求参数

```

```返回参数
{
    "code": 1,
    "message": "成功",
    "response": 0  //未读消息数量
}
```

#### 学科列表 （/api/student/education/subject/list）

```请求参数

```

```返回参数
{
    "code": 1,
    "message": "成功",
    "response": [
        {
            "id": "18",  //学科id
            "name": "英语"  //学科名称
        }
    ]
}
```

#### 试卷列表 （/api/student/exam/paper/pageList）

```请求参数
{
    "paperType": 1, //试卷类型
    "subjectId": 158, //学科id
    "pageIndex": 1, //页数
    "pageSize": 10  //每页条数
}
```

```返回参数
{
    "code": 1,
    "message": "成功",
    "response": {
        "total": 1,
        "list": [
            {
                "id": 2520,  //试卷id
                "name": "生理卫生",  //试卷名称
                "questionCount": 1,  //题目数
                "score": 20,  //试卷分数
                "createTime": "2021-05-31 13:34:49", //创建时间
                "createUser": 2,   //创建人
                "subjectId": 158,  //学科
                "subjectName": "英语",  //学科
                "paperType": 1,   //试卷类型
                "frameTextContentId": 9016  //试卷内容
            }
        ]
    }
}
```

#### 考试记录 （/api/student/exampaper/answer/pageList）

```请求参数
{
    "pageIndex": 1, //页码
    "pageSize": 10  //每页条数
}
```

```返回参数
{
    "code": 1,
    "message": "成功",
    "response": {
        "total": 6204,
        "list": [
            {
                "id": 6534,  //试卷id
                "createTime": "2021-06-01 17:56:38",  //创建时间
                "userScore": "0",  //考试分数
                "subjectName": "数学",  //考试学科
                "subjectId": 129, //学科id
                "questionCount": 1,  //题目数量
                "questionCorrect": 0,  //题目正确数
                "paperScore": "3",  //试卷总分
                "doTime": "4 秒",  //耗时
                "paperType": 7,  //试卷类型
                "systemScore": "0",  //系统批改得分
                "status": 2,   //试卷状态
                "paperName": "智能训练试卷 - 1845",  //试卷名称
                "userName": null  //用户名
            }
        ]
    }
}
```


#### 考试记录 （/api/student/question/answer/page）

```请求参数
{
    "pageIndex": 1, //页码
    "pageSize": 10  //每页条数
}
```

```返回参数
{
    "code": 1,
    "message": "成功",
    "response": {
        "total": 17002,
        "list": [
            {
                "id": 24928,   //题目id
                "questionType": 1,  //题型
                "createTime": "2021-06-02 16:07:11",  //创建时间
                "subjectName": "语文",  //学科
                "shortTitle": "666"  //题干
            }
        ]
    }
}
```
