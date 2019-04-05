<template>
  <div class="header">
    <div @click="noticeParent()">
      Header {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  name:'Header',
  props:{
    msg:{
      type:String,
    }
  },
  data(){
    return {

    }
  },
  methods:{
    /**
     * 通知父组件
     */
    noticeParent(){
      /**
       * changeFooterMsg 定义一个事件，父组件在<Header> 标签中通过v-on:changeFooterMsg来监听这个事件
       */
      let msg = {msg:"子组件像父组件传值"}
      this.$emit("changeFooterMsg",msg);
    }
  }
}
</script>

<style lang="css" scoped>
.header {
    font-size: 34px;
    height: 100px;
    background-color: red;
    padding-top: -5px;
    margin-top: -60px;
}
</style>
