<template>
  <section :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in items" :key="item.src">
        <router-link :to="{ name: item.href}">
          <img :src="item.src" alt="">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" v-if="options.pagination" slot="pagination" />
    </swiper>
  </section>
</template>
<script>
export default {
  name: 'slider',
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
        return []
      }
    }
  }
}
</script>
<style lang="scss" module>
</style>
