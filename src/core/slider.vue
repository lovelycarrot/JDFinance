<template>
  <section :class="cname">
    <swiper :options="options"
            :not-next-tick="options.notNextTick"
            ref="swiper">
      <swiper-slide v-for="item of items"
                    :key="item.href">
        <router-link :to="item.href">
          <img :src="item.src"
               alt="">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination"
           v-if="options.pagination"></div>
    </swiper>
  </section>
</template>
<script>
export default {
  name: 'swiper',
  props: {
    cname: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default () {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          notNextTick: false
        }
      }
    },
    items: {
      type: Array,
      default () {
        reutrn[]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
