# 学之思在线考试系统

### 项目介绍
学之思在线考试系统是一款 java + vue 的前后端分离的考试系统。主要优点是开发、部署简单快捷,可水平拓展在多台服务器上做负载均衡。考试功能齐全，目前有web端和微信小程序，能覆盖到pc机和手机等设备。

### 授权
官网：[https://www.alvisu.com](https://www.alvisu.com)

授权介绍：[https://www.alvisu.com/buy.html](https://www.alvisu.com/buy.html)

学之思开源考试系统 使用 AGPLv3 开源，请遵守 AGPLv3 的相关条款，或者联系作者获取商业授权(https://www.alvisu.com)


### 演示地址
学之思：[https://www.alvisu.com/uexam.html](https://www.alvisu.com/uexam.html) 

学多多：[https://www.alvisu.com/xdd.html](https://www.alvisu.com/xdd.html) 

思多多：[https://www.alvisu.com/sdd.html](https://www.alvisu.com/sdd.html) 


### 衍生版本源码地址
##### gitee ：[postgresql](https://gitee.com/alvis-yu/uexam) | [mysql](https://gitee.com/alvis-yu/uexam-mysql)
##### github ：[postgresql](https://github.com/alvis-u/uexam) | [mysql](https://github.com/alvis-u/uexam-mysql)


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
* ueditor 为了支持填空题，做了部分修改

微信小程序：
* iView 主题样式


### 软件架构图
![](doc/image/frame/2.png)

### 安装教程
1. redis 安装
2. postgresql/mysql 安装后执行/exam/database下的数据库脚本，创建表初始化数据
3. /uexam/source/exam为后台代码，建议使用IntelliJ IDEA打开，在application-dev.yml文件中，配置好postgesql/mysql、redis的服务地址，打开ExamApplication文件编译运行,默认端口为8001。
4. /uexam/source/vue/exam-student 是学生系统前端代码，建议使用JetBrains WebStorm打开，先运行安装包命令：【npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/ 】
【npm install --registry https://registry.npm.taobao.org 】 ，再运行编译启动命令：【npm run serve】 ，默认端口为80
5. /uexam/source/vue/exam-admin 是后台管理系统前端代码，建议使用JetBrains WebStorm打开，先运行安装包命令：【npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/ 】
【npm install --registry https://registry.npm.taobao.org 】 ，再运行编译启动命令：【npm run serve】 ，默认端口为81
6. /uexam/source/wx/exam-student 是微信小程序端代码，直接使用微信开发者工具打开即可

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



### 学之思交流群
   QQ群：[![加入QQ群](https://img.shields.io/badge/530136203-blue.svg)](https://jq.qq.com/?_wv=1027&k=5xc9pvX)  点击链接加入群聊【学之思交流群】

#### 开源不易，喜欢的朋友请star一下，谢谢！！
     