#### 登录 （/api/user/login）

```请求参数
{
    "userName": "student",  //用户名
    "password": "EJBZqzo8/MvOLuOIiGeRjHZsQ9OOdnCvdFCI1cBWL2O1wpzyTXJ+UQXgwxF7a1Qzo7kV6flm+ygituIsXEwkzCOdJsrt7Gy0LOqjT7vOrKWA627uOWO4oRqEAoj/biOvVZ78PRZtRupbx9VHp275q1beiTkaDgMl90BeaLMV7ZU=",  //密码
    "remember": false  //下次自动登录
}
```

```返回参数
{
        "userName": "student",  //用户名
        "imagePath": "https://www.mindskip.net:7000/resource/image/09d1158f-3264-4c7c-bc96-5861f9154dbd/1.png",  //头像
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

