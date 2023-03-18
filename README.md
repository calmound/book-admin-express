# 三木图书管理系统

# 简介

book-admin 系列是包含了完整的前端代码和后端代码。目前完成的技术栈是 前端有 react，后端有 express+mongodb。

目前这个仓库是后端部分，基于 **express、mongodb** 技术栈实现的。

**通过这个项目你可以学习到：**

1. 如何使用 docker 启动数据库
2. express 项目如何连接 mongodb
3. express 如何存储登陆用户的信息-session
4. mongoose 如何操作数据

如果你想浏览完整的前后端项目，可以访问 [前端 React](https://github.com/calmound/book-admin-react)

若你只想学习 node 部分，可以直接使用我搭建好的 test 数据进行接口测试，访问[Apifox](https://www.apifox.cn/apidoc/shared-89bc045f-6df6-452f-b5ab-7968395be635)。可以联系我要完整的 mock 数据导出包，导入到自己的 apifox 中使用。

### 规划

book-admin 系统前端实现了 **react** 版本，后端实现了 **express** 和 **mongodb** 版本。未来前端还会实现 **vue**，后端实现 **nestjs** 和 **mysql**。每个技术栈都独占一个仓库，方便感兴趣的同学自由搭配前后端项目的技术栈。

**如果对你有一些帮助，欢迎 star**！

# 功能介绍

## 功能流程图

![](https://raw.githubusercontent.com/calmound/book-admin-react/master/screenshot/1.png)

### 系统演示

![](https://raw.githubusercontent.com/calmound/book-admin-react/master/screenshot/3.gif)

# 启动

## 安装 nodejs

1. 安装 nodejs，版本 >= 14，(NodeJs 安装)[https://nodejs.org/en]

## 安装 Docker

1. 安装 Docker，请前往[Docker 官网](https://www.docker.com/)下载并安装
1. 打开终端，执行 docker pull mongo:latest，安装最新版的 mongo
1. 打开终端或命令行窗口，输入以下命令拉取 Mongo 镜像：

   ```
   docker pull mongo
   ```

1. 等待镜像下载完成后，输入以下命令启动 Mongo 容器：

   ```
   docker run -d -p 27017:27017 --name mongodb mongo

   ```

   其中，`-d`参数表示在后台运行，`-p`参数表示将容器的端口映射到主机上，`--name`参数指定容器的名称。

1.

1. 等待几秒钟，Mongo 容器就会启动并运行。可以使用以下命令检查容器状态：

   ```
   docker ps

   ```

   如果看到`mongodb`容器正在运行，则表示 Mongo 已成功启动。
   []()

1. 要停止 Mongo 容器，可以使用以下命令：

   ```
   docker stop mongodb

   ```

   其中，`mongodb`是容器的名称。

## 安装数据可视化工具

推荐使用的是 navicat 工具，前往 Navicat 官网（https://www.navicat.com/en/download/navicat-premium）下载适合的操作系统的版本，比如 Windows 或 macOS。
通过上面已经开启了端口为 27017 的 mongo，大家通过 navicat 连接它即可，具体的连接过程可以自行查询。

在项目的根目录有一个 mongodb 的文件夹，里面是基础数据。大家通过 navicat 导入后，就可以使用启动前端项目()[]，登陆管理员（账号 admin,米阿么 admin），用户(账号 admin，密码 user)两个账号进行操作了。

PS： 前端的 next.config.js 里面的接口代理别忘记改了，具体操作查看前端项目的 readme

## 启动后端项目

1. 下载依赖包，执行

   ```shell
   npm install
   ```

1. 运行项目

   ```shell
   npm run dev
   ```

1. 通过 apifox 里面的 test 数据访问任意请求成功即生效。
