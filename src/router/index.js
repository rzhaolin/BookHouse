import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 按需加载
const Main = resolve => require(['@/page/main/index.vue'], resolve)
const Category = resolve => require(['@/page/category/index.vue'], resolve)
const Car = resolve => require(['@/page/car/index.vue'], resolve)
const Me = resolve => require(['@/page/me/index.vue'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    }
  ]
})
