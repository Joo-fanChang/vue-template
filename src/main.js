// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.config.productionTip = false;
import './assets/css/common.css';
import './assets/css/reset.min.css';
import store from './store/store.js';
import axios from 'axios';
import './axios/axios';
Vue.prototype.$axios = axios;
Vue.use(MintUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
