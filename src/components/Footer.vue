<template lang="html">
  <div class="footer">
      <div>footer {{msg}}</div>
  </div>
</template>

<script>
export default {
  name:'Footer',
  props:{
    msg:{
      type:String,
    }
  }
}
</script>

<style lang="css" scoped>
.footer {
    font-size: 34px;
    height: 100px;
    background-color: red;
    margin-buttom: 0px;
}
</style>
