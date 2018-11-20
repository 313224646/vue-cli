<template>
  <div id="app">
    <transition :name="pageTransitionName">
      <!-- 默认懒加载，若不需要，请在路由修改 -->
      <keep-alive>
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
      pageTransitionName: ''
    }
  },
  watch: {
    '$route' (to, from) {
      // 根据路径深度选择不同过渡效果
      const toDepth = to.path.split('/').filter(item => {
        return item.length !== 0
      }).length
      const fromDepth = from.path.split('/').filter(item => {
        return item.length !== 0
      }).length
      console.log(toDepth, fromDepth)
      this.pageTransitionName = toDepth <= fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style lang="stylus">
@import './assets/css/reset.css'
.slide-left-enter-active, .slide-left-leave-active {
  transition: all .1s linear;
}
.slide-left-enter {
  position: absolute !important;
  top: 0;
  transform: translateX(100vw);
}
.slide-left-leave-to {
  position: absolute !important;
  opacity: 0;
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: all .1s linear;
}
.slide-right-enter {
  position: absolute;
  opacity: 0;
}
.slide-right-leave-to {
  position: absolute;
  transform: translateX(100vw);
}
</style>


