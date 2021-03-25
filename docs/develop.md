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
* 去七牛云官网申请好对象存储账号，修改application.yml中的qn相关的配置，七牛云主要用于文件存储。
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