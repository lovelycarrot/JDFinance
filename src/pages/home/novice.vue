<template>
  <panel :class="$style.novice" title="新手特权">
    <section :class="$style.content">
      <div :class="$style.item">
        <h4>下载APP <span :class="$style.red">送888元红包</span></h4>
        <p :class="$style.gray">新手专享</p>
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="新手特权">
      </div>
      <div :class="$style.item">
        <ul>
          <li>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200" alt="">
            <h4 :class="$style.red">领128元新手礼包</h4>
            <p :class="$style.gray">立即开通</p>
          </li>
          <li>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100" alt="">
            <h4>打白条<span :class="$style.red">享免息</span></h4>
            <p :class="$style.gray">立即开通享豪礼</p>
          </li>
        </ul>
      </div>
    </section>
  </panel>
</template>

<script>
import panel from '@/core/panel'
export default {
  name: 'novice',
  components: {
    panel
  }
}
</script>

<style lang="scss" module>
@import "@/assets/styles/element.scss";
.novice {
  @include panel;
  > h4 {
    border-bottom: 1px solid #eee; /*no*/
  }
  .content {
    @include list(row);
    .item {
      width: 50%;
      box-sizing: border-box;
      &:first-child {
        border-right: 1px solid #eee; /*no*/
        padding: 32px 20px;
        text-align: center;
        img {
          width: 132px;
          margin-top: 20px;
        }
      }
      h4 {
        font-size: 24px;
        line-height: 40px;
      }
      .red {
        color: red;
      }
      p {
        margin-top: 10px;
        font-size: 24px;
      }
      .gray {
        color: #999;
      }
      ul {
        width: 100%;
        li {
          overflow: hidden;
          padding: 32px 28px;
          height: 144px;
          box-sizing: border-box;
          &:first-child {
            border-bottom: 1px solid #eee; /*no*/
          }
          img {
            float: right;
            width: 80px;
          }
          h4 {
            @include ellipse;
          }
        }
      }
    }
  }
}
</style>
