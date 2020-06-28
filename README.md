# 学之思在线考试系统

### 项目介绍
学之思在线考试系统是一款 java + vue 的前后端分离的考试系统。主要优点是开发、部署简单快捷、界面设计友好、代码结构清晰。目前支持web端和微信小程序，能覆盖到pc机和手机等设备。


### 开源版使用须知
 * 仅用个人学习，商用请购买授权 [http://www.alvisu.com/buy.html](http://www.alvisu.com/buy.html) 
 * 禁止将本项目的代码和资源进行任何形式的出售，产生的一切任何后果责任由侵权者自负

### 演示地址
 * 官网：[http://www.alvisu.com](http://www.alvisu.com)
 * 学之思：[http://www.alvisu.com/uexam.html](http://www.alvisu.com/uexam.html) 
 * 学多多：[http://www.alvisu.com/xdd.html](http://www.alvisu.com/xdd.html) 
 * 思多多：[http://www.alvisu.com/sdd.html](http://www.alvisu.com/sdd.html) 

### 学之思仓库版本地址
* gitee - postgresql ：[https://gitee.com/alvis-yu/uexam](https://gitee.com/alvis-yu/uexam)
* github - postgresql ：[https://github.com/alvis-u/uexam](https://github.com/alvis-u/uexam)
* gitee - mysql ：[https://gitee.com/alvis-yu/uexam-mysql](https://gitee.com/alvis-yu/uexam-mysql)
* github - mysql ：[https://github.com/alvis-u/uexam-mysql](https://github.com/alvis-u/uexam-mysql)

### 学之思交流群(加群获取数据库脚本)
* 交流一群：`530136203`(满)
* 交流二群：`947654489`(满)
* 交流三群：`670546875`(满)
* 交流四群：`1039666905`
* QQ：`2693073475`
* 微信：`alvis-u`

 
### 大事件
 * 2020/5 商业Saas思多多智能考试平台正式版发布 地址：[http://www.alvisu.com/sdd.html](http://www.alvisu.com/sdd.html) 
 * 2020/3 考试系统实战教程发布 试听地址：[https://alvis.ke.qq.com/?tuin=a0850a43](https://alvis.ke.qq.com/?tuin=a0850a43)
 * 2020/2 项目累计突破2000 star
 * 2020/1 累计超过150万用户使用
 * 2019/12 项目累计突破1000 star
 * 2019/11 入围开源中国最受欢迎开源项目
 * 2019/10 累计超过100万学生使用
 * 2019/10 荣获码云最有价值开源项目
 * 2019/8 release 1.0 发布
 * 2019/7 学之思开源考试系统项目启动


### 学生系统功能
* 登录、注册： 注册时要选年级，过滤不同年级的试卷， 账号为student/123456
* 首页： 任务中心、固定试卷、时段试卷、可以能做的一部分试卷
* 试卷中心： 包含了所有能做的试卷，按学科来过滤和分页
* 考试记录： 所有的试卷考试记录在此处分页，可以查看试卷结果、用时、得分、自行批改等
* 错题本： 所有做错的题目，可以看到做题的结果、分数、难度、解析、正确答案等
* 个人中心： 个人日志记录
* 消息： 消息通知 
* 试卷答题和试卷查看： 展示出题目的基本信息和需要填写的内容

### 管理系统功能
* 登录： 账号为 admin/123456
* 主页： 包含了试卷、题目、做卷数、做题数、用户活跃度的统计功能，活跃度和做题数是按月统计
* 用户管理： 对不同角色 学生、教师、管理员 的增删改查管理功能
* 卷题管理：
    1. 试卷列表：试卷的增删改查，新增包含选择学科、试卷类型、试卷名称、考试时间，试卷内容包含添加大标题，然后添加题目到此试卷中，组成一套完整的试卷
    2. 题目列表：题目的增删改查，目前题型包含单选题、多选题、判断题、填空题、简单题，支持图片、公式等。
* 教育管理：对不同年级的学科进行增删改查
* 消息中心：可以对多个用户进行消息发送，预留：加入班级，推送试卷等消息
* 日志中心：用户的基本操作进行日志记录，了解用户使用过情况

### 小程序学生系统功能：
* 用户登录登出功能，登录会自动绑定微信账号，登出会解绑
* 首页包含任务中心、固定试卷、时段试卷、推送试卷模块，和web端保持一致
* 试卷模块，固定试卷和时段试卷的分页查询，下拉加载更多，上拉刷新当前数据
* 记录模块，考试结果的分页，包含了试卷基本信息
* 我的模块，包含个人资料的修改，个人动态，消息中心模块


###  技术栈列表
后台系统：
* spring-boot  2.1.6.RELEASE
* spring-boot-security 用户登录验证 
* undertow  web容器 
* postgresql/mysql 优秀的开源数据库
* redis 缓存，提升系统性能
* mybatis 数据库中间件
* hikari 速度最快的数据库连接池
* 七牛云存储 目前10G内免费

前台系统：
* Vue.js  采用新版，使用了vue-cli3搭建的系统，减少大量配置文件
* element-ui  最流行的vue组件，采用的最新版
* vue-element-admin 最新版，对该系统做了大量精简，只保留了部分样式和控件
* echarts 图表统计
* ueditor 填空题扩展插件

微信小程序：
* iView 主题样式

### 使用教程
1. redis 安装
2. 进群获取到数据库脚本，创建表初始化数据
3. /uexam/source/exam为后台代码，建议使用IntelliJ IDEA打开，在application-dev.yml文件中，配置好postgesql/mysql、redis的服务地址，打开ExamApplication文件编译运行,默认端口为8000。
4. 学生系统地址：http://localhost:8000/student
5. 管理端地址：http://localhost:8000/admin

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
     