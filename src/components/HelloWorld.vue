<template>
  <div class="hello">
      <!--
        v-on:changeFooterMsg 监听changeFooterMsg这个事件
        一旦监听到了这个事件，则调用updateFooterMsg方法，这个方法再父组件自己这边定义
        $event为子组件穿过来的内容
      -->
      <Header v-on:changeFooterMsg="updateFooterMsg($event)"  :msg="headerMsg"></Header>
      <!--:data在User.vue中绑定的prop名为data,并且传入了一个数组datas-->
      <users :data="datas"></users>
      <users :data="datas"></users>
      <Footer :msg="footerMsg"></Footer>
  </div>
</template>

<script>
import Users from './Users';
import Header from './Header';
import Footer from './Footer';

export default {
  name: 'HelloWorld',
  data(){
    return {
      datas:[
          {name:'majun1',code:'1001'},
          {name:'majun2',code:'1002'},
          {name:'majun3',code:'1003'},
      ],
      headerMsg:'World Top',
      footerMsg:'World Buttom',
    }
  },
  components:{
    /**
     * "users"代表template中标签的名字,即<users></users>
     * Users代表上面 import Users from 这块定义的名字
     */
    "users":Users,
    "Header":Header,
    "Footer":Footer,
  },
  methods:{
    updateFooterMsg(msg){
      console.log(msg);
      //这样就获取到了从子组件传过来的内容
      this.footerMsg = msg.msg;
    }
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
