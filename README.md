# mobile-vue-template

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

#### 简介  
这是在vue基础上融合了开发常用的工具的模板  
1. css单位转换，得益于postcss，能自动将px转换为vw，进行移动端适配，当然，为了兼容不支持vw的浏览器，postcss也能检测并重新计算为px  
2. 页面过渡效果，为了避免死板简单的直接过渡，添加了一些过渡动效  

#### 使用提示：
1. 修改页面过渡效果，请在页面路由设置mate的level字段，从1开始，比上一个页面大就左滑，反之右滑
2. 使用vant-ui取代mint-ui，如果是单人开发，按需引入还是全局引入不做限定，如果多人开发就按需引入  

// vant-ui按需引入Demo
```
<script>
import { Button } from 'vant'
export default {
  name: 'xxx',
  components: {
    [Button.name]: Button
  }
}
</script>
```  
3. 默认全部页面使用keepAlive缓存，在app.vue里面做了过滤，如果某页面不想缓存，只需要在该组件名字后加上'-nka'结尾  
4. 修改重置样式代码，使其更适合移动端开发

---  
修改全局字体，修改index.html html的lang属性，为了解决安卓总体文字偏上的情况，保持与ios一致

---
