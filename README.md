# 路由功能
## 二级路由
## name，path跳转
## element-ui nav 跳转
设置标签 router 为true
* index 可以 直接作为需要跳转的路径
``` html
  <el-menu-item index="/admin/order">
```
* index 为具体名称，然后el-menu-item增加route属性传入route对象
``` html
  <el-menu-item index="2" :route="{name:'account'}">
```

## 导航守卫
### 全局守卫
* 独享守卫
* 组件内守卫
* router-view复用

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
