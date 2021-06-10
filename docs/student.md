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

#### 错题本 （/api/student/question/answer/page）

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

#### 答题详情 （/api/student/question/answer/select/25067）

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
        "questionVM": {
            "id": 507,    //题目id
            "questionType": 1,   //题目类型
            "subjectId": 46,  //学科id
            "title": "111",   //题干
            "gradeLevel": 12,    //年级
            "items": [        //选项
                {
                    "prefix": "A",  //选项
                    "content": "A",  //选项内容
                    "score": null    //选项分数
                }
            ],
            "analyze": "D",     //解析
            "correctArray": null,  //标答
            "correct": "D",   //标答
            "score": "2",  //分数
            "difficult": 3,  //难度
            "itemOrder": null  //排序
        },
        "questionAnswerVM": {   //用户答案
            "id": 25067,  
            "questionId": 507,  //题目id
            "doRight": false,   //是否正确
            "content": "A",   //用户答案
            "itemOrder": 2,   //排序
            "contentArray": null,   //用户答案
            "score": "0",  //得分
            "questionScore": "2"  //题目分数
        }
    }
}
```

#### 用户动态 （/api/student/user/log）

```请求参数

```

```返回参数
{
    "code": 1,
    "message": "成功",
    "response": [
        {
            "id": 1812,  
            "userId": 1,  //用户id
            "userName": "student",  //用户名
            "realName": "Test",  //用户真实姓名
            "content": "student 登录了学多多考试系统",  //动态内容
            "createTime": "2021-06-08 17:12:50"  //创建时间
        }
    ]
}
```

#### 当前用户信息 （/api/student/user/current）

```请求参数

```

```返回参数
{
    "code": 1,
    "message": "成功",
    "response": {
        "id": 1,
        "userUuid": "d2d29da2-dcb3-4013-b874-727626236f47",
        "userName": "student",  //用户名
        "realName": "Test",  //真实姓名
        "age": 18,   //年龄
        "role": 1,   //角色
        "sex": 1,  //性别
        "birthDay": "2019-09-01 00:00:00",  //生日
        "phone": "158800882",  //手机号
        "lastActiveTime": "",
        "createTime": "2019-09-07 18:55:02",
        "modifyTime": "2021-06-09 17:04:31",
        "status": 1,  //状态
        "userLevel": 1,   //年级
        "classes": "1班",  //用户班级
        "imagePath": ""  //用户头像
    }
}
```
