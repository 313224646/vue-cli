<template>
  <div class="index">
    <we-row>
      <we-col class="col">ok</we-col>
      <we-col class="col">hello</we-col>
      <we-col class="col">fd</we-col>
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
.col
  text-align center
  background #cccccc
</style>
