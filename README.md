<p></p>
<p></p>

<p align="center">
<a href="https://www.mindskip.net" target="_blank">
 <img src="https://www.mindskip.net/style/git/images/logo/1.png" height="80"/>
<a/>
</p>

<div align="center">

[![Gitee star](https://gitee.com/mindskip/uexam/badge/star.svg?theme=gvp)](https://gitee.com/mindskip/uexam) 
[![Gitee fork](https://gitee.com/mindskip/uexam/badge/fork.svg?theme=gvp)](https://gitee.com/mindskip/uexam)
[![Github stars](https://img.shields.io/github/stars/mindskip/xzs?logo=github)](https://github.com/mindskip/xzs) 
[![Github forks](https://img.shields.io/github/forks/mindskip/xzs?logo=github)](https://github.com/mindskip/xzs) 
![star](https://gitcode.com/mindskip/xzs/star/badge.svg)
[![Github license](https://img.shields.io/badge/license-AGPL-yellow)](https://gitee.com/mindskip/uexam/blob/master/LICENSE) 

</div>

# 学之思开源考试系统 - Postgresql版

## 项目介绍

学之思开源考试系统是一款 java + vue 的前后端分离的考试系统。主要优点是开发、部署简单快捷、界面设计友好、代码结构清晰。支持web端和微信小程序，能覆盖到pc机和手机等设备。
支持多种部署方式：集成部署、前后端分离部署、docker部署。

### 演示地址

* 官网：[https://www.mindskip.net](https://www.mindskip.net)
* 学之思开源考试系统：[https://www.mindskip.net/xzs.html](https://www.mindskip.net/xzs.html)
* 维多多培训考试系统：[https://www.mindskip.net/wdd.html](https://www.mindskip.net/wdd.html)
* 思多多智能考试系统：[https://www.mindskip.net/sdd.html](https://www.mindskip.net/sdd.html)

### 文档视频教程

* 数据库脚本下载地址：[https://www.mindskip.net:888](https://www.mindskip.net:888)
* 文档教程：[https://www.mindskip.net:888](https://www.mindskip.net:888)
* 视频教程：[https://space.bilibili.com/1389892305](https://space.bilibili.com/1389892305)
* QQ交流群17：`624825080`
* 商务QQ：`2732007709`
* 商务微信：`whmindskip`
* 商务邮箱：`mindskip@qq.com`

### 学之思仓库版本地址

* gitee - postgresql ：[https://gitee.com/mindskip/uexam](https://gitee.com/mindskip/uexam)
* gitee - mysql ：[https://gitee.com/mindskip/xzs-mysql](https://gitee.com/mindskip/xzs-mysql)
* github - postgresql ：[https://github.com/mindskip/xzs](https://github.com/mindskip/xzs)
* github - mysql ：[https://github.com/mindskip/xzs-mysql](https://github.com/mindskip/xzs-mysql)
* gitcode - postgresql ：[https://gitcode.com/mindskip/xzs](https://gitcode.com/mindskip/xzs)
* gitcode - mysql ：[https://gitcode.com/mindskip/xzs-mysql](https://gitcode.com/mindskip/xzs-mysql)


### 学生系统功能

|  模块   | 介绍  |
|  ----  | ----  |
| 登录  | 用户名、密码  |  
| 注册  | 年级、用户名、密码  |  
| 任务中心  | 管理员发布的年级任务，每个学生只能做一次  |  
| 考试  | 题干支持文本、图片、数学公式、表格等，学生答题支持：文本  |  
| 固定试卷  | 可重复练习、自行批改的试卷  |  
| 时段试卷  | 在时间限制内，可重复练习、自行批改的试卷  |  
| 考试记录  | 查看答卷记录和试卷信息  |  
| 错题本  | 答错题目会自动进入错题本，显示题目基本信息  |  
| 个人信息  | 显示学生个人资料  |  
| 更新信息  | 修改个人资料、头像  |  
| 个人动态  | 显示用户最近的个人动态  |  
| 消息中心  | 用于接收管理员发送的消息  |  

### 管理系统功能

|  模块   | 介绍  |
|  ----  | ----  |
| 登录  | 用户名、密码  |  
| 主页  | 试卷总数、题目总数、用户活跃度、题目月数量  |  
| 学生列表  | 显示系统所有的学生，新增、修改、删除、禁用  |  
| 管理员列表  | 显示系统所有的管理员，新增、修改、删除、禁用  |  
| 学科列表  | 学科查询、修改、删除  |  
| 学科创编  | 创建学科  |  
| 试卷列表  | 试卷查询、修改、删除  |  
| 试卷创编  | 创建的试卷为时段试卷、固定试卷、任务试卷  |  
| 题目列表  | 题目查询、修改、删除  |  
| 题目创建  | 题目支持单选题、多选题、判断题、填空题、简答题，题干支持文本、图片、表格、数学公式  |  
| 任务列表  | 任务查询、修改、删除  |  
| 消息列表  | 显示已发送的消息，消息已读人数等信息  |  
| 消息发送  | 发送消息给多个用户  |  
| 用户日志  | 显示所有用户日志  |  
| 个人资料  | 显示管理员用户名、真实姓名  |  
| 时间线  | 显示管理员创建时间  |  
| 修改资料  | 修改姓名、手机号  |  

### 小程序功能

|  模块   | 介绍  |
|  ----  | ----  |
| 登录  | 用户登录登出功能，登录会自动绑定微信账号，登出会解绑  |  
| 注册  | 年级、用户名、密码  |  
| 任务中心  | 管理员发布的年级任务，每个学生只能做一次  |  
| 考试  | 题干支持文本、图片、数学公式、表格等，学生答题支持：文本  |  
| 固定试卷  | 可重复练习、自行批改的试卷  |  
| 时段试卷  | 在时间限制内，可重复练习、自行批改的试卷  |  
| 考试记录  | 查看答卷记录和试卷信息  |  
| 错题本  | 答错题目会自动进入错题本，显示题目基本信息  |  
| 个人信息  | 显示学生个人资料  |  
| 更新信息  | 修改个人资料、头像  |  
| 个人动态  | 显示用户最近的个人动态  |  
| 消息中心  | 用于接收管理员发送的消息  |  

### 系统展示

* 学生考试系统
<table>
    <tr>
        <td><img src="https://www.mindskip.net/style/git/images/student/1.png"/></td>
        <td><img src="https://www.mindskip.net/style/git/images/student/2.png"/></td>
    </tr>
</table>

*  小程序考试系统
<table>
    <tr>
        <td><img src="https://www.mindskip.net/style/git/images/wx/student/1.png"/></td>
        <td><img src="https://www.mindskip.net/style/git/images/wx/student/2.png"/></td>
        <td><img src="https://www.mindskip.net/style/git/images/wx/student/3.png"/></td>
        <td><img src="https://www.mindskip.net/style/git/images/wx/student/4.png"/></td>
    </tr>
    <tr>
        <td><img src="https://www.mindskip.net/style/git/images/wx/student/5.png"/></td>
        <td><img src="https://www.mindskip.net/style/git/images/wx/student/8.png"/></td>
        <td><img src="https://www.mindskip.net/style/git/images/wx/student/6.png"/></td>
        <td><img src="https://www.mindskip.net/style/git/images/wx/student/7.png"/></td>
    </tr>
</table>

* 后台管理系统

<table>
    <tr>
        <td><img src="https://www.mindskip.net/style/git/images/admin/1.png"/></td>
        <td><img src="https://www.mindskip.net/style/git/images/admin/2.png"/></td>
    </tr>
</table>