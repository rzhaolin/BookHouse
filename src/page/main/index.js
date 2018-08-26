import Swipe from '@/components/swipe.vue'
import Search from '@/components/search-ui.vue'
import MessageBox from '@/components/widgets/message-icon.vue'

export default {
  components: {
    'v-swipe': Swipe,
    'v-search': Search,
    'v-message': MessageBox
  },
  methods: {
    clickCamera () {
      this.$router.push({
        name: 'category'
      })
    }
  },
  data () {
    return {
      tabs: this.$tabs,
      initTab: this.$tabs[0].id,
      swiperDatas: [
        {'id': 1, 'imgPath': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1472696957,3964242202&fm=27&gp=0.jpg'},
        {'id': 2, 'imgPath': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535258625296&di=90f018b888d32d78031688da188c2126&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F16%2F91%2F81%2F01H58PIC9q7_1024.jpg'},
        {'id': 3, 'imgPath': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3525667306,212394264&fm=27&gp=0.jpg'}
      ]
    }
  }
}
