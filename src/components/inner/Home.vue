<template lang="html">
  <div class="">
    <h1>Home</h1>
    <el-button @click="login">登录</el-button>
  </div>
</template>

<script>
export default {
  methods:{
    login(){

      //跳转到指定地址
      //this.$router.replace("/login");

      //跳转到指定路由的名字下
      //this.$router.replace({name:"login"});

      //通过push跳转
      this.$router.push("/login");
      this.$router.push({name:"login"});

    }
  }
}
</script>

<style lang="css" scoped>
</style>
