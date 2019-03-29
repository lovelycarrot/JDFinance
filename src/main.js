// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import hotcss from '@/assets/js/hotcss.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.scss'
import 'styles/layout.scss'
import 'styles/element.scss'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(hotcss)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
