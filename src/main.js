// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入axios
import axios from "axios"
//引入mint-ui 
import MintUI from "mint-ui"
//引入mint-ui样式文件
import "mint-ui/lib/style.css"
//引入normalize.css
import "normalize.css"
//设置axios参数
axios.defaults.baseURL = "http://127.0.0.1:4000/";
axios.defaults.withCredentials = true;

//注册 axios
Vue.prototype.axios = axios;
//注册 mint-ui为vue实例对象
Vue.use(MintUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
