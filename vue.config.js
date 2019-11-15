const path = require('path')

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: { // 修改vant主题颜色变量
        }
      }
    }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    config.resolve.alias
      .set('@images', resolve('src/assets/images'))
  }
}

function resolve (dir) {
  return path.join(__dirname, dir)
}