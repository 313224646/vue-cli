// 触摸阴影效果插件, 可先配置全局属性, 使用前先安装
import Vue from 'vue'
import VueTouchRipple from 'vue-touch-ripple'
import 'vue-touch-ripple/dist/vue-touch-ripple.css'

Vue.use(VueTouchRipple, {
  color: '#ccc',
  opacity: 0.2,
  speed: 2,
  transition: 'ease'
})