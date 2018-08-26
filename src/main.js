// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui' // 移动端UI
import 'mint-ui/lib/style.css'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Footer from '@/components/footer.vue'

Vue.use(Mint)
Vue.use(ElementUi)
Vue.component('Footer', Footer)

const tabs = [
  { name: '首页', 'id': 'main', 'css_index': 'index' },
  { name: '分类', 'id': 'category', 'css_index': 'category' },
  { name: '购物车', 'id': 'car', 'css_index': 'car' },
  { name: '我的', 'id': 'me', 'css_index': 'user' }
]
Vue.prototype.$tabs = tabs
Vue.prototype.$isBack = false

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
