const path = require('path')

module.exports = {
  lintOnSave: false,
  publicPath: process.env.VUE_APP_DOMAIN_URL,
  css: {
    loaderOptions: {
      less: {
        modifyVars: { // 修改vant主题颜色变量
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@images', resolve('src/assets/images'))
  },
}

function resolve (dir) {
  return path.join(__dirname, dir)
}