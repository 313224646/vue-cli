import axios from 'axios'
import { Notify } from 'vant'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
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
    const res = response.data
    if (res.status === 'success') {
      return res.data ? JSON.parse(res.data) : res.data
    } else {
      Notify({ type: 'danger', message: res.msg })
      return Promise.reject(res.msg)
    }
  },
  err => {
    Notify({ type: 'danger', message: err.message })
    return Promise.reject(error)
  }
)

export default service
