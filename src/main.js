import Vue from "vue"
import App from "./App.vue"
import router from "@/router/index.js"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/reset.scss'
import '@/styles/index.scss'
Vue.use(ElementUI)
Vue.config.productionTip = false;
// 路由全局守卫
router.beforeEach((to,from,next)=>{
  let token =localStorage.getItem('mytoken')
  if(token){
    next()
  }else{
    if(to.path == '/login'){
      next()
    }else{
      next({path:'/login'})
    }
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
