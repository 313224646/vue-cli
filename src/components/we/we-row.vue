<template>
  <div :class="containerClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'we-row',
  props: {
    justify: {
      type: String,
      default: 'center',
      validator (value) {
        return ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'].indexOf(value) !== -1
      }
    },
    align: {
      type: String,
      default: 'center',
      validator (value) {
        return ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'].indexOf(value) !== -1
      }
    },
    direction: {
      type: String,
      default: 'row',
      validator (value) {
        return ['row', 'row-reverse', 'column', 'column-reverse'].indexOf(value) !== -1
      }
    },
    wrap: {
      type: String,
      default: 'nowrap',
      validator (value) {
        return ['nowrap', 'wrap', 'wrap-reverse'].indexOf(value) !== -1
      }
    },
    gutter: {
      type: Number,
      default: 0
    }
  },
  computed: {
    containerClass () {
      return ['we-row', `we-justify-${this.justify}`, `we-align-${this.align}`, `we-direction-${this.direction}`, `we-wrap-${this.wrap}`]
    }
  },
}
</script>

<style scoped lang="stylus">
.we-row
  display flex
for i in flex-start flex-end center space-between space-around
  .we-justify-{i}
    justify-content i
  .we-align-{i}
    align-items i
for i in row row-reverse column column-reverse
  .we-direction-{i}
    flex-direction i
for i in nowrap wrap wrap-reverse
  .we-wrap-{i}
    flex-wrap i
</style>
