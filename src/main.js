// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import vRegion from 'v-region';
Vue.use(vRegion);

import Dialog from 'v-dialogs'
Vue.use(Dialog);

import Suggest from 'v-suggest'
Vue.use(Suggest);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
