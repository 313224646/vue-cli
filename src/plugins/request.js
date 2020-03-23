import axios from 'axios'
import { Toast, Notify } from 'vant'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_REQUEST_URL, // url = base url + request url
  timeout: 5000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (config.data && config.data.loading) {
      Toast.loading({
        duration: 0,
        forbidClick: true,
        message: '请稍等...'
      })
    }
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    Toast.clear()
    const res = response.data
    if (res.code === 200) {
      return res.data
    } else {
      Notify({ type: 'danger', message: res.msg })
      return Promise.reject(res.msg)
    }
  },
  err => {
    Toast.clear()
    if (err.message.indexOf('timeout') !== -1) {
      Notify({ type: 'danger', message: '前方拥堵，请稍后再试。' })
    } else {
      Notify({ type: 'danger', message: err.message })
    }
    return Promise.reject(err)
  }
)

export default service
