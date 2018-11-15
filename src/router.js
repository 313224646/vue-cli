import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home')
    },
    {
      path: '*',
      name: 'home',
      component: () => import('./views/Home')
    }
  ],
  // 默认跳转页面滚动到顶部
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
