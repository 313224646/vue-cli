import Vue from 'vue'
import App from './App.vue'
import router from './router'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

import '@/assets/icon/iconfont'

const requireComponent = require.context(
  '@/components/base',
  false,
  /base-[a-z]\w+\.(vue|js)$/
)


requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
