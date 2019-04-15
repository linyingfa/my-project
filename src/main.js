// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/HelloWorld'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// 其实这个 id 里面的 app 对应 main.js 声明的new Vue({el: '#app'})。 这个是主页的Js
// import App from './components/HelloWorld' 导入做主界面
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
