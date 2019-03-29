<template>
  <panel title="极速贷款" :class="$style.panel">
    <div>
      <router-link :to="{name:'home'}">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280" alt="极速贷款">
      </router-link>
    </div>
  </panel>
</template>

<script>
import panel from '@/core/panel'
export default {
  name: 'borrow',
  components: {
    panel
  }
}
</script>

<style lang="scss" module>
@import "@/assets/styles/element.scss";
.panel {
  @include panel;
  div {
    padding-bottom: 40px;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
