/**
 * 配合vue-cli自动创建.vue文件，调用命令：npm run create fileName [page|component]
 * fileName: 文件名
 * type: page: 页面级，在views里面创建，并自动注入路由、component: 组件级，在components/page里面创建
 */
const fs = require('fs')
const path = require('path')

const fileName = process.argv[2] || 'default-name'
const type = process.argv[3] || 'page'

if (type === 'page') {
  createComponent(path.join(__dirname, 'src', 'views', `${fileName}.vue`))

  fs.readFile(path.join(__dirname, 'src', 'router.js'), 'utf8', (err, data) => {
    if (err) throw err
    data = data.toString()
    const re = /routes:\s?\[/
    let indexOf = data.search(re)
    let splitPoint = indexOf + data.match(re)[0].length
    let [dataStart, dataEnd] = [data.slice(0, splitPoint), data.slice(splitPoint)]
    const newRoute = `
    {
      path: '/${fileName}',
      component: () => import('./views/${fileName}'),
    },`
    const content = dataStart + newRoute + dataEnd
    fs.writeFile(path.join(__dirname, 'src', 'router.js'), content, err => {
      if (err) {
        return console.error(err);
      }
      console.log('添加路由成功！')
    })
  })
} else {
  let pathComponents = path.join(__dirname, 'src', 'components')
  let pathPage = path.join(pathComponents, 'page')
  fs.exists(pathPage, exists => {
    if (exists) {
      createComponent(path.join(pathPage, `${fileName}.vue`))
    } else {
      fs.mkdir(pathPage, err => {
        if (err) console.error(err)
        createComponent(path.join(pathPage, `${fileName}.vue`))
      })
    }
  })
}

function createComponent(path) {
  const template =
`<template>
  <div>
  </div>
</template>

<script>
export default {
  name: '${fileName}',
  data () {
    return {}
  },
}
</script>

<style scoped lang="stylus">
</style>`

  fs.writeFile(path, template, err => {
    if (err) {
      return console.error(err);
    }
    console.log('创建成功！')
  })
}
