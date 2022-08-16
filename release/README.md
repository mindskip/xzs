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

* 准备好centos服务器
* 先检查服务器端口、ip转发的是否配置正确，否则无法访问到docker内部
* docker内部镜像已经安装了java、mysql,均已配置好，无需其他操作
* 执行下列docker命令，拉取镜像，启动容器
* 学生端访问地址为：<http://ip:8000/student>
* 管理员端访问地址为：<http://ip:8000/admin>

```docker
docker pull  registry.cn-hangzhou.aliyuncs.com/mindskip/xzs:v3.9.0
docker run -d --name xzs --privileged -it  -d -p 8000:8000 -v /etc/localtime:/etc/localtime:ro  registry.cn-hangzhou.aliyuncs.com/mindskip/xzs:v3.9.0 /usr/sbin/init
```
