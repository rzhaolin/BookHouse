<template>
  <div id="app">
    <router-view/>
    <v-footer :tabDatas="tabs"></v-footer>
  </div>
</template>

<script>
import Footer from '@/components/footer.vue'
export default {
  components: {
    'v-footer': Footer
  },
  data() {
    return {
      tabs:[
        { name:'首页', 'id': 'main', 'css_index': 'index' },
        { name:'分类', 'id': 'category', 'css_index': 'category' },
        { name:'购物车', 'id': 'car', 'css_index': 'car' },
        { name:'我的', 'id': 'me', 'css_index': 'user' },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
