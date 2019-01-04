<template>
  <div id="app">
    <transition :name="pageTransitionName">
      <!-- 默认全局缓存页面 -->
      <!-- 组件名字以-nka结尾都的文件都不缓存 “not keep alive” -->
      <keep-alive :exclude="/-nka$/">
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      pageTransitionName: 'fade'
    }
  },
  watch: {
    '$route' (to, from) {
      // 监听路由变更设置过渡效果
      if (!from.meta.level) { // 判定为刷新操作
        this.pageTransitionName = 'fade'
      } else {
        const toLevel = parseInt(to.meta.level)
        const fromLevel = parseInt(from.meta.level)
        if (toLevel > fromLevel) { // 右滑
          this.pageTransitionName = 'slide-right'
        } else { // 左滑
          this.pageTransitionName = 'slide-left'
        }
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/page-transition.styl'
@import '~@/assets/stylus/reset.styl'
</style>


