// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { DatetimePicker } from 'mint-ui'
import './assets/font/iconfont.css'
import '../node_modules/mint-ui/lib/style.css'
import Header from './components/common/Header.vue'
import Mask from './components/common/Mask.vue'

Vue.component('MyHeader',Header)
Vue.component('MyMask',Mask)

Vue.component(DatetimePicker.name,DatetimePicker)

Vue.prototype.axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
