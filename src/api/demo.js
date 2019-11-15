import request from '@/plugins/request'

export function getDemo(query) {
  return request({
    url: '/test',
    method: 'get',
    params: query
  })
}

export function postDemo(data) {
  return request({
    url: '/test',
    method: 'post',
    data
  })
}