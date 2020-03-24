## 介绍  
一款移动端开发的脚手架，基于`VueJS`，
进行了二次封装，做了一些能提升开发体验的配置（个人认为）。
## 移动端适配
采用`vw`进行适配，具体适配信息请看`postcss.config.js`，你可以在上面按需修改。
## UI组件库
使用`Vant-UI`组件库，纯属个人喜好，但你可以随时更改。  
```
// 按需引入Demo
import { Button } from 'vant'
components: {
  [Button.name]: Button
}
```
## Router
默认使用`vue-router`
## Vuex
默认不使用，你有需要的话，它们放在`src\store`
## 自动生成脚本
`npm run create fileName type[page|component] `  
搭配vue-cli使用，自动创建.vue文件  
fileName: 文件名  
type:
1. page: 在views里面创建，并自动注入路由  
2. component: 组件级，在components/page里面创建

## plugins
下面是我的常用清单：
- 动画类
- - [animate.js](https://www.npmjs.com/package/animate.css)
- - [TweenMax.js](https://www.tweenmax.com.cn/)
- - [vue-scrollto](https://www.npmjs.com/package/vue-scrollto)
- 表单验证
- - [vee-validate](https://baianat.github.io/vee-validate/)
- 存储
- - [localforage](https://localforage.docschina.org/#localforage)
- 网络
- - [axios](https://www.kancloud.cn/yunye/axios/234845)
- 绘图
- - [v-charts](https://v-charts.js.org/#/)
- - [e-charts](https://www.echartsjs.com/zh/index.html)
- - [AntV](https://antv.vision/zh)
- UI库
- - [Vant](https://youzan.github.io/vant/#/zh-CN/home)
- - [Ant Design of Vue](https://www.antdv.com/docs/vue/introduce-cn/)

## 待做.....
1. 自动导入阿里图标的js文件
2. 描述添加阿里图标的说明