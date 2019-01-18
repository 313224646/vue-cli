// 用于http请求插件, 使用前先安装
// 参考：https://www.npmjs.com/package/axios
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { baseHttpUrl } from '@/tool/baseUrl'

axios.defaults.baseURL = baseHttpUrl

Vue.use(VueAxios, axios)

// 统一请求拦截器
axios.interceptors.request.use(function (config) {
  // notInterceptors：不拦截
  // Demo：
  // axios.get(`url...`, {
  //   data: {
  //     notInterceptors: true
  //   }
  // }
  if (config.data && config.data.notInterceptors) {
    return
  } else {
    // 全局loding设置
    // ...
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  // ...
  return Promise.reject(error)
})

// 统一响应拦截器
axios.interceptors.response.use(function (res) {
  if (res.data.status === 'success') {
    let data
    try {
      data = JSON.parse(res.data.data) // 通常将数据转换成json格式
    } catch (e) {
      data = res.data // 转换失败可能数据是其他格式，直接返回
    }
    return data
  } else {
    // 响应返回结果错误
    return Promise.reject()
  }
}, function (err) {
  // 响应状态错误
  return Promise.reject(err)
})

export default axios
