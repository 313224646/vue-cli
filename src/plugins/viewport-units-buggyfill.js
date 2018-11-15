// 提供了在旧的IE和Android Stock浏览器中运行视窗单位的转换
// 参考：https://www.npmjs.com/package/viewport-units-buggyfill
let hacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks')
require('viewport-units-buggyfill').init({
  hacks: hacks,
  // 忽略用户代理强制初始化
  force: true
})