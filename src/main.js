import Vue from 'vue'
import Root from './Root.vue'
import router from './router'
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Root)
})
