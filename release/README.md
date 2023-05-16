# 项目部署

### 集成部署

* 分别在\source\vue\xzs-student目录和source\vue\xzs-admin目录，执行前端打包命令

 ```npm
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
npm install --registry https://registry.npm.taobao.org  
npm run build
 ```

* 打包后的目录为student和admin
* 将文件放到\source\xzs\src\main\resources\static下，然后将java程序打包成jar包
* 修改application-prod.yml中的datasource地址
* 数据库账号密码设置为：root/123456
* 数据库脚本领取地址：[https://www.mindskip.net:999](https://www.mindskip.net:999)
* 创建数据库xzs，导入数据库脚本
* 学生端访问地址为：<http://ip:8000/student>
* 管理员端访问地址为：<http://ip:8000/admin>
* 执行下列命令，运行程序

 ```java
nohup java -Duser.timezone=Asia/Shanghai -jar -Dspring.profiles.active=prod  xzs-3.9.0.jar  > start1.log  2>&1 &
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

* 打开网站<https://gitee.com/mindskip/xzs-mysql>，找到docker目录，里面有已配置好的文件
* 下载sql脚本，下载教程<https://www.mindskip.net:999>，然后解压sql压缩包，找到xzs-mysql.sql文件，编辑此文件，在文件开头加如下代码：

```xzs-mysql
CREATE DATABASE `xzs` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE xzs;
```

* sql文件改好后，将文件移动到 docker/sql 目录下
* 将整个docker目录中的文件，复制到/usr/local/xzs下面
* 进入到install目录，执行下面命令，安装docker-compose

```docker-compose
cd /usr/local/xzs/install
mv docker-compose-linux-x86_64 /usr/local/bin/docker-compose
chmod +x  /usr/local/bin/docker-compose
docker-compose --version
```

* 执行下面命令，启动学之思网站，有问题可以看下/usr/local/xzs/log中的日志

```docker-xzs
cd /usr/local/xzs
docker-compose up -d
```

* 学生端访问地址为：<http://ip:8000/student>
* 管理员端访问地址为：<http://ip:8000/admin>