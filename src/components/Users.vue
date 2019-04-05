<template>
  <div class="users">
      <ul>
        <li v-for='user in data'>
          {{user.name}}:{{user.code}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name:'Users',
  props:{
    /**
     * data为父组件中标签中定义的:data相当于v-bind="data"
     */
    data:{
      type:Array,
      required:true,
    }
  },
  data(){
    return {
    }
  }
}
</script>

<style lang="css" scoped>

</style>
