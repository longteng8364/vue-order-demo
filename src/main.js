import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { routes } from './routes'
import axios from 'axios'
import { store } from './store/store.js'

Vue.use(VueRouter);

axios.defaults.baseURL = 'http://localhost:3000/'

const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
