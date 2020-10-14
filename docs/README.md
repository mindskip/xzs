# 目录

## 项目介绍

学之思在线考试系统是一款 java + vue 的前后端分离的考试系统。主要优点是开发、部署简单快捷、界面设计友好、代码结构清晰。目前支持web端和微信小程序，能覆盖到pc机和手机等设备。

## 开源版使用须知

仅用个人学习，商用请购买授权 <http://www.mindskip.net/buy.html>

禁止将本项目的代码和资源进行任何形式的出售，产生的一切任何后果责任由侵权者自负

## 演示地址

官网：<http://www.mindskip.net>

学之思考试系统：<http://www.mindskip.net/xzs.html>

学多多考试系统：<http://www.mindskip.net/xdd.html>

思多多智能考试平台：<http://www.mindskip.net/sdd.html>

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
| Redis  | 3.0 |
| PostgreSql / Mysql  | 12.0 / 8.0 |

## 使用教程

1. redis 安装
2. 进群获取到数据库脚本，创建表初始化数据，数据库名称为xzs
3. /uexam/source/xzs为后台代码，建议使用IntelliJ IDEA打开，在application-dev.yml文件中，配置好postgesql/mysql、redis的服务地址，打开XzsApplication文件编译运行,默认端口为8000。
4. 学生系统地址：<http://localhost:8000/student>
5. 管理端地址：<http://localhost:8000/admin>