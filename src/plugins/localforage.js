// 用于本地存储数据
// 参考：https://localforage.docschina.org/#localforage

/**
Demo: 
this.$forage.getItem('beforeDate').then(res => { // 存储数据
  console.log(beforeDate)
})

this.$forage.setItem('beforeDate', date) // 获取数据
*/

import Vue from 'vue'
import localforage from 'localforage'
Vue.prototype.$forage = localforage
