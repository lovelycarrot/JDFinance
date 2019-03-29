<template>
  <div class="home">
    <home-header></home-header>
    <home-slider></home-slider>
  </div>
</template>

<script>
import homeHeader from '@/public/header'
import homeSlider from '@/pages/home/hslider'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  components: {
    homeHeader,
    homeSlider
  }
}
</script>

<style lang="scss" module>
</style>
