<template>
  <div :class="containerClass" :style="containerStyles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'we-col',
  props: {
    order: {
      type: Number,
      default: 0
    },
    flex: {
      type: String,
      default: 'none',
      validator (value) {
        return ['none', 'auto'].indexOf(value) !== -1
      }
    },
    align: {
      type: String,
      default: 'auto',
      validator (value) {
        return ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    containerStyles () {
      let styleObject = {}
      if (this.order !== 0) {
        styleObject.order = this.order
      }
      return styleObject
    },
    containerClass () {
      return ['we-col', `we-flex-${this.flex}`, `we-align-${this.align}`]
    }
  },
}
</script>

<style scoped lang="stylus">
for i in none auto
  .we-flex-{i}
    flex i
for i in none flex-start flex-end center baseline stretch
  .we-flex-{i}
    align-self i
</style>
