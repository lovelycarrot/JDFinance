<template>
  <section :class="[panelClass,cname]">
    <h4>-{{title}}-</h4>
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'Panel',
  props: {
    cname: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      panelClass: 'panel'
    }
  }
}
</script>

<style scoped lang="scss">
.panel {
  @include panel;
}
</style>