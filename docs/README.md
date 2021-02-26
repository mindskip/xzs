# 目录

## 项目介绍

学之思在线考试系统是一款 java + vue 的前后端分离的考试系统。主要优点是开发、部署简单快捷、界面设计友好、代码结构清晰。支持web端和微信小程序，能覆盖到pc机和手机等设备。 支持多种部署方式：集成部署、前后端分离部署、docker部署。

## 开源版使用须知

仅用个人学习

禁止将本项目的代码和资源进行任何形式的出售，产生的一切任何后果责任由侵权者自负

## 学之思仓库地址

gitee - postgresql ：[https://gitee.com/mindskip/uexam](https://gitee.com/mindskip/uexam)

github - postgresql ：[https://github.com/mindskip/xzs](https://github.com/mindskip/xzs)

## 运行环境

|  环境   | 版本  |
|  ----  | ----  |
| 操作系统  | Windows / Linux |
| Jdk  | 8 |
| Redis  | 6.0 |
| PostgreSql  | 12.0 |

## 技术栈列表

### 后台系统

* spring-boot  2.1.6.RELEASE
* spring-boot-security 用户登录验证
* undertow  web容器
* postgresql 优秀的开源数据库
* redis 缓存，提升系统性能
* mybatis 数据库中间件
* hikari 速度最快的数据库连接池
* 七牛云存储 分布式文件存储中心

### 前台系统

* vue  采用新版，使用了vue-cli4搭建的系统，减少大量配置文件
* element-ui  最流行的vue UI框架
* vue-element-admin 深度定制版
* echarts 图表统计
* ueditor 深度定制版

### 微信小程序

* iView 主题样式

## 架构图

![架构图](https://gitee.com/mindskip/uexam/raw/master/doc/image/frame/1.png)

## 数据库设计

### 试卷表 t_exam_paper

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int |  |
| name  | varchar | 试卷名称 |
| subject_id  | int | 学科 |
| paper_type  | int  | 试卷类型( 1固定试卷  4.时段试卷 6.任务试卷) |
| grade_level  | int  | 年级 |
| score  | int  | 试卷总分(千分制) |
| question_count  | int  | 题目数量 |
| suggest_time  | int  | 建议时长(分钟) |
| limit_start_time  | datetime  | 时段试卷 开始时间 |
| limit_end_time  | datetime  | 时段试卷 结束时间 |
| frame_text_content_id  | int  | 试卷框架 内容为JSON |
| create_user  | int  |  |
| create_time  | datetime  | |
| deleted  | bit  | |
| task_exam_id  | int  |  |

### 试卷答案表 t_exam_paper_answer

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int  |  |
| exam_paper_id  | int  |  |
| paper_name  | varchar  | 试卷名称 |
| paper_type  | int  | 试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 ) |
| subject_id  | int  | 学科 |
| system_score  | int  | 系统判定得分 |
| user_score  | int  | 最终得分(千分制) |
| paper_score  | int  | 试卷总分 |
| question_correct  | int  | 做对题目数量 |
| question_count  | int  | 题目总数量 |
| do_time  | int  | 做题时间(秒) |
| status  | int  | 试卷状态(1待判分 2完成) |
| create_user  | int  | 学生 |
| create_time  | datetime  | 提交时间 |
| task_exam_id  | int  |  |

### 试卷题目答案表 t_exam_paper_question_customer_answer

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int  |  |
| question_id  | int  | 题目Id |
| exam_paper_id  | int  | 答案Id |
| exam_paper_answer_id  | int  |  |
| question_type  | int  | 题型 |
| subject_id  | int  | 学科 |
| customer_score  | int  | 得分 |
| question_score  | int  | 题目原始分数 |
| question_text_content_id  | int  | 问题内容 |
| answer  | varchar  | 做题答案 |
| text_content_id  | int  | 做题内容 |
| do_right  | bit  | 是否正确 |
| create_user  | int  | 做题人 |
| create_time  | datetime  |  |
| item_order  | int  |  |

### 消息表 t_message

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int  |  |
| title  | varchar  | 标题 |
| content  | varchar  | 内容 |
| create_time  | datetime  |  |
| send_user_id  | int  | 发送者用户ID |
| send_user_name  | varchar  | 发送者用户名 |
| send_real_name  | varchar  | 发送者真实姓名 |
| receive_user_count  | int  | 接收人数 |
| read_count  | int  | 已读人数 |

### 用户消息表 t_message_user

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int  |  |
| message_id  | int  | 消息内容ID |
| receive_user_id  | int  | 接收人ID |
| receive_user_name  | varchar  | 接收人用户名 |
| receive_real_name  | varchar  | 接收人真实姓名 |
| readed  | bit  | 是否已读 |
| create_time  | datetime  |  |
| read_time  | datetime  | 阅读时间 |

### 题目表 t_question

|  字段名   | 类型  | 注释  |
|  ----  | ----  | ----  |
| id  | int  |  |
| question_type  | int  | 1.单选题  2.多选题  3.判断题 4.填空题 5.简答题 |
| subject_id  | int  | 学科 |
| score  | int  | 题目总分(千分制) |
| grade_level  | int  | 级别 |
| difficult  | int  | 题目难度 |
| correct  | text  | 正确答案 |
| info_text_content_id  | int  | 题目  填空、 题干、解析、答案等信息 |
| create_user  | int  | 创建人 |
| status  | int  | 1.正常 |
| create_time  | datetime  | 创建时间 |
| deleted  | bit  |  |

## 项目开发

### 开发说明

* redis 安装
* 进群获取到数据库脚本，创建表初始化数据，数据库名称为xzs
* 代码分为 postgresql 版本，配合相应的数据库使用
* 安装postgresql ，导入xzx-postgresql.sql脚本
* 学生端默认账号：student / 123456
* 管理端默认账号：admin / 123456

### 后端开发

* /uexam/source/xzs为后台代码，建议使用IntelliJ IDEA打开
* 打开application-dev.yml文件中，配置好postgesql、redis的服务地址
* 去七牛云官网申请好云存储账号，修改application.yml中的qn相关的配置
* 启动后台程序,默认端口为8000。
* 学生系统地址：<http://ip:8000/student>
* 管理端地址：<http://ip:8000/admin>

### 前端开发

* 前端使用webstorm或者vscode，分别打开文件夹打开源代码\source\vue\xzs-student和source\vue\xzs-admin
* 执行下面2个命令，安装node_module：

 ```npm
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
npm install --registry https://registry.npm.taobao.org  
 ```

* 执行下面命令，启动前端代码

 ```npm
npm run serve
 ```

* 打包命名

 ```npm
npm run build
 ```

### 微信小程序开发

* 去腾讯小程序官网注册账号，拿到appid和secret信息
* 下载好微信小程序开发工具
* 打开工具，导入代码 \source\wx\xzs-student
* 修改application.yml文件里的wx配置下面的appid和secret
* 启动小程序开发工具

## 项目部署

### 集成部署

* 分别在\source\vue\xzs-student目录和source\vue\xzs-admin目录，执行前端打包命令

 ```npm
npm run build
 ```

* 打包后的目录为student和admin
* 将文件放到\source\xzs\src\main\resources\static下，然后将java程序打包成jar包
* 修改application-prod.yml中的datasource和redis地址
* 学生端访问地址为：<http://ip:8000/student>
* 管理员端访问地址为：<http://ip:8000/admin>
* 执行下列命令，运行程序

 ```java
nohup java -Duser.timezone=Asia/Shanghai -jar -Dspring.profiles.active=prod  xzs-3.2.0.jar  > start1.log  2>&1 &
 ```

### 前后端分离部署

* 采用前后端分离方式部署，后端启动和部署方式1一样
* 前端采用nginx来装载静态页面,先创建/usr/local/xzs/web/目录，然后将打包后的student、admin放到此目录下
* 页面访问端口为8001，注意检查防火墙端口是否打开
* 学生端访问地址为：<http://ip:8001/student>
* 管理员端访问地址为：<http://ip:8001/admin>
* nginx配置如下：

```nginx
server {
    listen      8001;
    server_name xzs;
    location / {
        root /usr/local/xzs/web/;
        index index.html;
    }
    location /api/ {
       proxy_pass  http://localhost:8000;
    }
}
```

### docker部署

* 先检查服务器端口、ip转发的是否配置正确，否则无法访问到docker内部
* docker内部镜像已经安装了java、mysql、redis、nginx,均已配置好，无需其他操作
* 执行下列docker命令，拉取镜像，启动容器
* 学生端访问地址为：<http://ip:8001/student>
* 管理员端访问地址为：<http://ip:8001/admin>

```docker
docker pull  registry.cn-hangzhou.aliyuncs.com/mindskip/xzs:v3.2.0
docker run -d --name xzs --privileged -it  -d -p 8001:8001 -v /etc/localtime:/etc/localtime:ro  registry.cn-hangzhou.aliyuncs.com/mindskip/xzs:v3.2.0 /usr/sbin/init
```
