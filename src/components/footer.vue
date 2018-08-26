<template>
    <footer class="footer" @click="gotoPage">
       <mt-tabbar v-model="selected" fixed>
           <mt-tab-item v-for="item in tabDatas" :key="item.id" :id="item.id">
               <i slot="icon" :class="cssStyle(item.css_index)"></i>
               {{item.name}}
           </mt-tab-item>
        
        </mt-tabbar> 
    </footer>
</template>
<script>
export default {
    data() {
        return {
          selected: this.initTab
        }
    },
     methods: {
      gotoPage() {
        this.$router.push({
          name: this.selected
        })
      },
      cssStyle(index) {
        return 'icon-' + index
      }
    },
    props: {
        tabDatas: {
            type: Array
        },
        initTab:String
    },
    activated: function () {
      this.selected = this.initTab
    }
}
</script>
<style lang="less" scoped>
@import '../assets/fz.less';
@import '../assets/index/style.css';
.mint-tab-item-label:hover {
  color:#333;
}.footer {
    .mint-tabbar {
      background-color: #fff;
      background-image: none;
      box-shadow: 0 0 2.2vw 0 hsla(0, 6%, 50%, .13);
      -webkit-box-shadow: 0 0 2.2vw 0 hsla(0, 6%, 50%, .13);
      .is-selected {
        color: @cl;
        background-color: #fff;
        i {
          &::before {
            color: @cl;
          }
        }
      }
      i {
        .fz(font-size, 42);
      }
    }
  }
</style>
