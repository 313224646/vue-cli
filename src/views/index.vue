<template>
  <div class="index">
    <we-row justify="space-between">
      <we-col>ok</we-col>
      <we-col>hello</we-col>
      <we-col>hi</we-col>
    </we-row>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    'we-row': () => import('@/components/we/we-row'),
    'we-col': () => import('@/components/we/we-col'),
  },
  data () {
    return {
      list: []
    }
  },
  created () {}
}
</script>

<style lang="stylus" scoped>
</style>
