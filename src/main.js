import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/viewport-units-buggyfill'
// import './plugins/fastclick'
// import './plugins/axios'
// import './plugins/swiper'
// import './plugins/vee-validate'
// import './plugins/vue-touch-ripple'
// import './plugins/mint-ui'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
