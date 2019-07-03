<template>
  <div class="index">
    <common-text>hi bor!</common-text>
  </div>
</template>

<script>
import axios from '@/plugins/axios'
export default {
  name: 'home',
  components: {
    'common-text': () => import('@/components/common/common-text')
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.axios.get('https://zsmall.zfgc.cn/f/wl/index/articles', {
      params: {}
    }).then(res => {
      this.list = res
    })
  }
}
</script>

<style lang="stylus" scoped>
</style>
