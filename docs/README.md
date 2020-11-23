# 目录

## 项目介绍

学之思在线考试系统是一款 java + vue 的前后端分离的考试系统。主要优点是开发、部署简单快捷、界面设计友好、代码结构清晰。支持web端和微信小程序，能覆盖到pc机和手机等设备。 支持多种部署方式：集成部署、前后端分离部署、docker部署。

## 开源版使用须知

仅用个人学习

禁止将本项目的代码和资源进行任何形式的出售，产生的一切任何后果责任由侵权者自负

## 学之思仓库版本地址

gitee - postgresql ：[https://gitee.com/mindskip/uexam](https://gitee.com/mindskip/uexam)

gitee - mysql ：[https://gitee.com/mindskip/xzs-mysql](https://gitee.com/mindskip/xzs-mysql)

github - postgresql ：[https://github.com/mindskip/xzs](https://github.com/mindskip/xzs)

github - mysql ：[https://github.com/mindskip/xzs-mysql](https://github.com/mindskip/xzs-mysql)

## 运行环境

|  环境   | 版本  |
|  ----  | ----  |
| 操作系统  | Windows / Linux |
| Jdk  | 8 |
| Redis  | 6.0 |
| PostgreSql / Mysql  | 12.0 / 8.0 |

## 技术栈列表

### 后台系统

* spring-boot  2.1.6.RELEASE
* spring-boot-security 用户登录验证 
* undertow  web容器 
* postgresql/mysql 优秀的开源数据库
* redis 缓存，提升系统性能
* mybatis 数据库中间件
* hikari 速度最快的数据库连接池
* 七牛云存储 目前10G内免费

### 前台系统

* Vue.js  采用新版，使用了vue-cli3搭建的系统，减少大量配置文件
* element-ui  最流行的vue组件，采用的最新版
* vue-element-admin 优化和扩展版本
* echarts 图表统计
* ueditor 优化版

### 微信小程序

* iView 主题样式

## 项目开发

### 开发说明

* redis 安装
* 进群获取到数据库脚本，创建表初始化数据，数据库名称为xzs
* 代码分为 mysql / postgresql 2个版本，配合响应的数据库使用
* 安装mysql / postgresql ，数据库二选一即可 ，导入sql脚本。mysql导入xzs-mysql.sql脚本。postgresql导入xzx-postgresql.sql脚本
* 学生端默认账号：student / 123456
* 管理端默认账号：admin / 123456

### 后端开发

* /uexam/source/xzs为后台代码，建议使用IntelliJ IDEA打开
* 打开application-dev.yml文件中，配置好postgesql/mysql、redis的服务地址
* 启动后台程序,默认端口为8000。
* 学生系统地址：<http://localhost:8000/student>
* 管理端地址：<http://localhost:8000/admin>

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
nohup java -Duser.timezone=Asia/Shanghai -jar -Dspring.profiles.active=prod  xzs-3.0.7.jar  > start1.log  2>&1 &
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
       proxy_pass  https://localhost:8000;
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
docker pull  registry.cn-hangzhou.aliyuncs.com/mindskip/xzs:v3.0.6
docker run -d --name xzs --privileged -it  -d -p 8001:8001  registry.cn-hangzhou.aliyuncs.com/mindskip/xzs:v3.0.6 /usr/sbin/init
```
