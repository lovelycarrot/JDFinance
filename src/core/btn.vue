<template>
  <div :class="[btnClass,cname]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Btn',
  props: {
    cname: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      btnClass: 'btns'
    }
  }
}
</script>

<style scoped lang="scss">
@import "styles/element.scss";
.btns {
  @include btn;
}
</style>
