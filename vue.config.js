const path = require('path')

module.exports = {
  lintOnSave: false,
  publicPath: process.env.VUE_APP_BASE_URL,
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
  },
  configureWebpack: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'webpack-atomizer-loader',
        query: {
          configPath: path.resolve('./atomCssConfig.js')
        }
      }
    ]
  }
}

function resolve (dir) {
  return path.join(__dirname, dir)
}