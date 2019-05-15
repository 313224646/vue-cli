<template>
  <div class="index">
    <common-text>hi bor!</common-text>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    'common-text': () => import('@/components/common/common-text')
  }
}
</script>

<style lang="stylus" scoped>
</style>
