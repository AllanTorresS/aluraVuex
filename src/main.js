import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import http from '@/http/axiosService'
import GlobalStorage from '@/globalStorage/GlobalStore'


Vue.config.productionTip = false
Vue.prototype.$http = http; 

new Vue({
  router,
  store:GlobalStorage,
  render: h => h(App)
}).$mount('#app')
