<template lang="html">
  <div class="">
    <el-menu default-active="/" router  class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1" :route="{name:'login'}">
        登录
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="/admin">
        管理
      </el-menu-item>
      <el-menu-item index="/">
        首页
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.el-menu--horizontal>.el-menu-item{
  float: right;
}
.el-menu--horizontal>.el-submenu{
  float: right;
}
</style>
