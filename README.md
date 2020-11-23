# 学之思在线考试系统

## 项目介绍

学之思在线考试系统是一款 java + vue 的前后端分离的考试系统。主要优点是开发、部署简单快捷、界面设计友好、代码结构清晰。支持web端和微信小程序，能覆盖到pc机和手机等设备。
支持多种部署方式：集成部署、前后端分离部署、docker部署。

### 开源版使用须知

* 仅用个人学习
* 禁止将本项目的代码和资源进行任何形式的出售，产生的一切任何后果责任由侵权者自负

### 演示地址

* 官网：[http://www.mindskip.net](http://www.mindskip.net)
* 学之思考试系统：[http://www.mindskip.net/xzs.html](http://www.mindskip.net/xzs.html)
* 思多多智能考试平台：[http://www.mindskip.net/sdd.html](http://www.mindskip.net/sdd.html)
* 维多多培训考试系统：[http://www.mindskip.net/wdd.html](http://www.mindskip.net/wdd.html)
* 学多多考试系统：[http://www.mindskip.net/xdd.html](http://www.mindskip.net/xdd.html)

### 学之思仓库版本地址

* gitee - postgresql ：[https://gitee.com/mindskip/uexam](https://gitee.com/mindskip/uexam)
* gitee - mysql ：[https://gitee.com/mindskip/xzs-mysql](https://gitee.com/mindskip/xzs-mysql)
* github - postgresql ：[https://github.com/mindskip/xzs](https://github.com/mindskip/xzs)
* github - mysql ：[https://github.com/mindskip/xzs-mysql](https://github.com/mindskip/xzs-mysql)

### 学之思交流群(加群获取数据库脚本)

* 交流六群：`593529956`
* QQ：`2693073475`
* 微信：`alvis-u`

### 开发部署教程

* [http://mindskip.gitee.io/uexam/](http://mindskip.gitee.io/uexam/)

### 学生系统功能

* 登录、注册： 注册时要选年级，过滤不同年级的试卷， 账号为：student/123456
* 首页： 任务中心、固定试卷、时段试卷、可以能做的一部分试卷
* 试卷中心： 包含了所有能做的试卷，按学科来过滤和分页
* 考试记录： 所有的试卷考试记录在此处分页，可以查看试卷结果、用时、得分、自行批改等
* 错题本： 所有做错的题目，可以看到做题的结果、分数、难度、解析、正确答案等
* 个人中心： 个人日志记录
* 消息： 消息通知
* 试卷答题和试卷查看： 展示出题目的基本信息和需要填写的内容

### 管理系统功能

* 登录： 账号为： admin/123456
* 主页： 包含了试卷、题目、做卷数、做题数、用户活跃度的统计功能，活跃度和做题数是按月统计
* 用户管理： 对不同角色 学生、教师、管理员 的增删改查管理功能
* 卷题管理：
    1. 试卷列表：试卷的增删改查，新增包含选择学科、试卷类型、试卷名称、考试时间，试卷内容包含添加大标题，然后添加题目到此试卷中，组成一套完整的试卷
    2. 题目列表：题目的增删改查，目前题型包含单选题、多选题、判断题、填空题、简单题，支持图片、公式等。
* 任务管理：对任务进行修改
* 教育管理：对不同年级的学科进行增删改查
* 消息中心：可以对多个用户进行消息发送
* 日志中心：用户的基本操作进行日志记录，了解用户使用过情况

### 小程序功能

* 用户登录登出功能，登录会自动绑定微信账号，登出会解绑
* 首页包含任务中心、固定试卷、时段试卷，和web端保持一致
* 试卷模块，固定试卷和时段试卷的分页查询，下拉加载更多，上拉刷新当前数据
* 记录模块，考试结果的分页，包含了试卷基本信息
* 我的模块，包含个人资料的修改，个人动态，消息中心模块

### 软件架构图

![](doc/image/frame/2.png)

### 系统展示

* 学生考试系统
<table>
    <tr>
        <td><img src="doc/image/student/2.png"/></td>
        <td><img src="doc/image/student/12.png"/></td>
    </tr>
</table>

*  小程序考试系统
<table>
    <tr>
        <td><img src="doc/image/wx/student/1.png"/></td>
        <td><img src="doc/image/wx/student/2.png"/></td>
        <td><img src="doc/image/wx/student/3.png"/></td>
        <td><img src="doc/image/wx/student/4.png"/></td>
    </tr>
    <tr>
        <td><img src="doc/image/wx/student/5.png"/></td>
        <td><img src="doc/image/wx/student/8.png"/></td>
        <td><img src="doc/image/wx/student/6.png"/></td>
        <td><img src="doc/image/wx/student/7.png"/></td>
    </tr>
</table>

* 后台管理系统

<table>
    <tr>
        <td><img src="doc/image/admin/12.png"/></td>
        <td><img src="doc/image/admin/13.png"/></td>
    </tr>
</table>