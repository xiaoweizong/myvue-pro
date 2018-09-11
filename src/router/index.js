import Vue from "vue"
import Router from "vue-router"
import Login from '@/views/Login'
import Home from '@/views/Home'
import Welcome from '@/views/welcome/Welcome'
import Axios from "axios";
Vue.use(Router)
// 添加拦截器
Axios.interceptors.request.use(function(config){
  let token = localStorage.getItem('mytoken')
  if(token){
    // console.log(config)
    config.headers['Authorization'] = token
  }
  return config;
},function(error){ 
return Promise.reject(error)
})
export default new Router({
    routes: [
      {
        path: "/login",
        name: "Login",
        component: Login
      },
      {
        path: "/",
        name: "Home",
        component: Home,
        redirect:{name:'Welcome'},
        children:[
          {
            name:'Welcome',
            path:'welcome',
            component:Welcome
          }
        ]
      },
    ]
  })