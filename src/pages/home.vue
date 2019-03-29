<template>
  <div class="home">
    <home-header></home-header>
    <home-slider></home-slider>
    <home-novice></home-novice>
    <home-borrow></home-borrow>
  </div>
</template>

<script>
import homeHeader from '@/public/header'
import homeSlider from '@/pages/home/hslider'
import homeNovice from '@/pages/home/novice'
import homeBorrow from '@/pages/home/borrow'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  components: {
    homeHeader,
    homeSlider,
    homeNovice,
    homeBorrow
  }
}
</script>

<style lang="scss" module>
</style>
