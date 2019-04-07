import Login from './components/inner/Login.vue'
import Admin from './components/Admin.vue'
import Order from './components/inner/Order.vue'
import Account from './components/inner/Account.vue'
import Home from './components/inner/Home.vue'

export const routes =[
  {path:"/",name:"home",components:{
    //路由复用
    default:Home,
    //这里通过在Home.vue中 <router-view name="account">来指定
    'account':Account,
  }},
  {path:"/login",name:"login",component:Login},
  {path:"/admin",component:Admin,children:[
    {path:"order",component:Order},
    {path:"account",name:"account",component:Account,
     beforeEnter:(to,from,next) => {
       alert('独享守卫');
       next();
     }
    },
  ]},
  {path:"*",redirect:'/'},
];
