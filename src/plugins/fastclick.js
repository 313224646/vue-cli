// 用于解决移动端点击延迟插件, 使用前先安装
import Vue from 'vue'
import FastClick from 'fastclick'

FastClick.attach(document.body)

Vue.use(FastClick)