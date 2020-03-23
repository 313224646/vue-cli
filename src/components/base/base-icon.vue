<template>
  <svg class="icon" aria-hidden="true" :style="style">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'icon',
  props: {
    icon: {
      type: String,
      require: true
    },
    size: {
      type: [String, Number],
      default: 1
    }
  },
  computed: {
    iconName () {
      return `#${this.icon}`
    },
    style () {
      return {
        fontSize: `${this.size}em`
      }
    }
  },
}
</script>

<style scoped lang="stylus">
</style>