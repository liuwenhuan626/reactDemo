### Project Structure

```
├── 
├── config                     webpack配置文件
│   ├──...
│   ├──webpack.config.dev.js   开发环境配置(启动速度优化)
│   ├──webpack.config.prod.js  生产环境配置(打包体积优化)
├── node_modules               node模块目录
├── public
│   └──index.html
├── scripts
│   ├── build.js               打包项目文件
│   ├── start.js               启动项目文件
│   └── test.js                测试项目文件
├── src
│   ├── api                    接口请求
│   │   ├── store              redux中的store
│   │   ├── devTools.js        开发者工具
│   ├── assect                 公共静态文件
│   │   ├── images             图片
│   │   ├── css                样式
│   ├── components             公共组件
│   │   ├──index.js
│   ├── pages                  组件 
│   │   ├──adminPeople         管理员信息
│   │   ├──course              课程管理
│   │   ├──equipment           设备管理
│   │   ├──homePage            首页
│   │   ├──login               登录页
│   │   ├──notFound            404
│   │   ├──personalTrainer     私人教练管理
│   │   ├──staff               员工管理
│   │   ├──vipInformation      会员信息
│   │   ├──vipRentArk          会员租柜
│   │   └──index.js             
│   ├── routers                路由 
│   ├── store                  仓库 
├── .gitignore
├── package.json
└── README.md
```