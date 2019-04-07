<template>
  <div class="hello">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <router-view></router-view>
      <router-view name="account"></router-view>
    </el-container>
  </div>
</template>

<script>
import Header from './Header';

export default {
  name: 'Main',
  data(){
    return {

    }
  },
  components:{
    'Header':Header,
  },
  methods:{

  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-container{
  height: 80vh;
}
</style>
