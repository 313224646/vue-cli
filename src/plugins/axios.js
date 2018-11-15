// 用于http请求插件, 使用前先安装
// 参考：https://www.npmjs.com/package/axios
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// 基本路径
// axios.defaults.baseURL = ''

// 全局拦截器
axios.interceptors.response.use(function (res) {
  let data
  if (res.data.status === 'success') {
    try {
      data = JSON.parse(res.data.data)
    } catch (e) {
      data = null
    }
  } else {
    data = null
  }
  return data
}, function (err) {
  return Promise.reject(err)
})