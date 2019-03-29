<template>
  <div class="home">
    <home-header></home-header>
    <home-slider></home-slider>
    <home-novice></home-novice>
  </div>
</template>

<script>
import homeHeader from '@/public/header'
import homeSlider from '@/pages/home/hslider'
import homeNovice from '@/pages/home/novice'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  components: {
    homeHeader,
    homeSlider,
    homeNovice
  }
}
</script>

<style lang="scss" module>
</style>
