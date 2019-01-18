import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/viewport-units-buggyfill'
import './plugins/axios'
// import './plugins/fastclick'
// import './plugins/swiper'
// import './plugins/vee-validate'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
