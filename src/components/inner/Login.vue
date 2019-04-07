<template lang="html">
  <el-container>
    <el-main>
      <h1>Login</h1>
      <div>
        <el-button @click="back">返回</el-button>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  components:{
  },
  methods:{
    back(){
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
