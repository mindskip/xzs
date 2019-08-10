import Vue from 'vue'
import App from './App'
import store from './store'
import 'mpvue-weui/src/style/weui.css'
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
