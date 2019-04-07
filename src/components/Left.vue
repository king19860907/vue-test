<template lang="html">
  <el-menu :router="true">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item index="/admin/order">
          订单管理
        </el-menu-item>
        <el-menu-item index="2" :route="{name:'account'}">
          账号
        </el-menu-item>
      </el-submenu>
    </el-menu>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
