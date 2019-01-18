<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  name: 'home',
  created () {
    this.axios.get('/api/wx/getWeather').then(() => {
    })
  }
}
</script>

<style lang="stylus" scoped>
</style>
