<template lang="html">
    <el-container>
      <el-aside width="200px">
        <Left></Left>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import Left from './Left.vue'
export default {
  components:{
    "Left":Left,
  }
}
</script>

<style lang="css" scoped>

</style>
