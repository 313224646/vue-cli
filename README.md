## 介绍  
用于开发移动端的`VueJS`模板，避免重复配置。
## 移动端适配
采用`vw`适配方案
## UI组件库
默认使用`Vant-UI`组件库，纯属个人喜好。  
```
// 按需引入
import { Button } from 'vant'

components: {
  [Button.name]: Button
}
```

## 字体设置
主要因为安卓端默认字体会总体偏上
```
// public/index.html
<html lang="zh-cmn-Hans">...</html>
```
```
// src/assets/stylus/reset.styl
#app {
  font-family: miui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```
## 插件
放置了一些常用插件在`src/plugins`，如需使用可在`src/main.js`导入

## VueX
已初始化但未使用
