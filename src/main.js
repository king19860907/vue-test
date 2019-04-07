import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'

import 'element-ui/lib/theme-chalk/index.css';
//定义在了route.js中
import {routes} from './route'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)



const router = new VueRouter({
  routes,
  mode:"history",
});

/**
 * 全局前置守卫
 */
router.beforeEach((to,from,next)=>{
  if(to.name != 'login' && to.name != 'home'){
    alert("请先登录");
    //next({name:'login'})
    next();
  }else{
    next();
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
