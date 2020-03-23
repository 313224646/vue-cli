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
      .set('@i', resolve('src/assets/images'))
      .set('@c', resolve('src/components'))
  },
}

function resolve (dir) {
  return path.join(__dirname, dir)
}