### 第一部分：基础软件安装

* 打开学之思开源仓库地址：<https://gitee.com/mindskip/xzs-mysql>
* 加群QQ交流群，找管理员拿到数据库脚本
* 工具介绍

```软件简介
    VC_redist.x64 :  Redis数据库依赖、mysql依赖，先安装这个
    ideaIU-2020.3.3 ： java开发工具
    mysql-installer-community-8.0.19.0 ： Mysql数据库安装包
    navicat150_mysql_cs_x64 ： Mysql数据库连接工具
    rdm-2021.3.0.0 ：Redis连接工具
    Redis-x64-3.0.504 ： Redis内存数据库
    WebStorm-2020.3.3:  前端开发工具
    jdk-8u241-windows-x64：java运行环境
    node-v12.16.1-x64：前端vue运行环境
```

* 工具安装
* 所有准备工具安装已结束，下一步是调试开发环境
* 视频地址：<https://www.bilibili.com/video/BV1rp4y1b7Se>

### 第二部分：本地代码调试运行

* 打开仓库地址 <https://gitee.com/mindskip/xzs-mysql> ，下载源代码
* 打开教学文档 <https://www.mindskip.net:999>
* 修改java的镜像，改为阿里云镜像，默认是国外的，速度比较慢。默认是没有.m2文件夹的，可以自己新建一个。
* 打开数据库连接工具，导入mysql脚本
* 打开java代码，等待组件自动下载完成即可启动
* 添加sdk，建议使用1.8
* 启动后端程序
* 修改下配置文件，我们是本地连接，需要改下数据库连接地址
* 再打开教程，开始启动前端开发工具
* 前端依赖组件默认也是国外的，可按教程修为成国内的
* 组件下载完成，执行运行命令
* 学生前端也同样操作，启动
* 建议先将package-lock.json文件删掉，再执行npm install命令
* 前后端都已启动完成
* 视频地址：<https://www.bilibili.com/video/BV1Qh411S7RY>

### 第三部分：微信小程序开发

* 去官网下载小程序开发工具，并安装
* 去微信小程序官网 （微信公众平台），创建小程序
* 登录成功后，点击左边菜单开发下面的开发管理，在点击开发设置
* 拿到appId、AppSecret后配置到代码中
* 修改代码配置后，重新启动后台程序
* 打开微信开发工具，导入微信小程序代码
* 微信接口默认是<http://localhost:8000>，默认就可以了，和后端端口保持一致
* 启动后需要修改appid,和代码中的保持一致
* 微信小程序就启动成功了
* 视频地址：<https://www.bilibili.com/video/BV1mK4y127C5>

### 第四部分：代码配置介绍

* 下面介绍下常用的配置
* 后端配置主要在 yml 文件中
* 七牛云配置完成后，测试一下，重新启动，加载配置文件
* 图片替换成功，说明七牛云配置是ok的
* application-prod.yml  用于正式环境的配置，和dev基本是一样的
* 学生端vue配置
* 管理端vue配置
* 微信小程序配置
* 配置都已经介绍完毕
* 视频地址：<https://www.bilibili.com/video/BV19V411n7XV>

### 第五部分：win系统部署

* 下面介绍下在win平台下怎么部署学之思，包含win所有平台
* 先预装好下面软件，不会的可以看第一部分视频

```软件简介
    VC_redist.x64 :  Redis数据库依赖、mysql依赖，先安装这个
    mysql-installer-community-8.0.19.0 ： Mysql数据库安装包
    navicat150_mysql_cs_x64 ： Mysql数据库连接工具
    Redis-x64-3.0.504 ： Redis内存数据库
    jdk-8u241-windows-x64：java运行环
```

* 按文档教程中的项目部署操作来
* 首先展示集成部署
* 这个jar包就是打包之后的运行程序，我们使用命令运行

```运行命令
   java -Duser.timezone=Asia/Shanghai -jar -Dspring.profiles.active=prod  xzs-3.3.0.jar 
```

* 访问成功，说明部署没问题
* 下面我们看下前后的分离部署，需要安装nginx
* 访问localhost,看到这个页面就说nginx启动没问题
* 配置学之思
* 先启动后端程序
* 再修改前端配置，启动前端程序，访问地址没问题，就说明部署成功了
* 这里需要注意两点：
* 1. 8001端口默认是微信开发工具的启动端口，建议先关闭微信开发工具，再启动nginx
* 2. root C:/xzs/release/web;  这里的路径要填反斜杠，不能直接用win的复制路径
* win系统部署结束
* 视频地址：<https://www.bilibili.com/video/BV1XA41157P4>

### 第六部分：CentOS系统部署

* 下载好xshell和xftp，这个工具用于连接centos服务器的
* 可在群文件中找到Xftp-7.0.0063p 和 Xshell-7.0.0065p ，直接安装
* 打开xshell , 连接准备好的centos服务器
* 服务器中要安装好 redis、mysql 8 、jdk 1.8、nginx , 可以自行搜索教程进行安装
* 安装好后，我们检测下是否都在运行
* 创建数据库xzs、导入xzs-mysql.sql脚本
* 登录mysql，执行导入命令：

```脚本导入命令
    mysql -u root -p -D xzs < /usr/local/xzs/sql/xzs-mysql.sql
```

* 数据导入成功后，可以登录mysql数据库，检查一下是否成功
* 打包jar文件，注意修改配置文件application-prod.yml ，正式环境用的这个文件，这里里面的数据库连接地址和账号等，由于都是服务器本地的，都用localhost即可
* 上传jar包到服务器中
* 启动学之思后端程序

```运行命令
    nohup java -Duser.timezone=Asia/Shanghai -jar -Dspring.profiles.active=prod  xzs-3.3.0.jar  > start1.log  2>&1 &
```

* 打开浏览器，检查是否启动成功
* 集成部署已经完成，下面介绍下前后端分离部署，分离部署前端页面要放在nginx中，需要配置nginx
* 上传成功后配置nginx，nginx默认配置目录为 /etc/nginx/conf.d ，在里面新建xzs.conf配置文件即可
* 执行命令：nginx -s reload  ，重新加载nginx配置文件
* 在浏览器中能访问成功说明部署正确
* docker部署，先安装好docker
* 执行教程中的命令，下载镜像，运行容器
* 打开浏览器验证下是否能访问，访问成功表示docker版运行正常
* 视频地址：<https://www.bilibili.com/video/BV17b4y1D7Re>

### 第七部分：使用手册

* 用户管理：学生添加、管理员添加
* 题目管理：添加题目、单选题、多选题、判断题、填空题、解答题
* 教育管理：添加学科
* 试卷管理：添加试卷 固定试卷  时段试卷 任务试卷
* 任务管理：添加任务
* 消息管理：消息发送
* 成绩管理：查看成绩
* 视频地址：<https://www.bilibili.com/video/BV1884y1F71Y>
