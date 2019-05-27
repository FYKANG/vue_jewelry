// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'; // iview插件
import 'iview/dist/styles/iview.css';
import VueCookies from 'vue-cookies'; // cookies插件

Vue.use(VueCookies);
var VueValidator = require("vue-validator"); // 表单验证
Vue.use(VueValidator);
Vue.use(iView);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
