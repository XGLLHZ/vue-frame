// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/**
 * 启动文件
 */
import Vue from 'vue'
import App from './App'
import router from './router'   //路由
import ElementUI from 'element-ui'   //组件库
//import store from './store'   //store
//import { initMenu } from './utils/menu'   //初始化 menu

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //store,
  components: { App },
  template: '<App/>'
})

