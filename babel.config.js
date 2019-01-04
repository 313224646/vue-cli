module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [  // 按需引入vant-ui设置
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": name => `${name}/style/less`
    }, 'vant']
  ]
}