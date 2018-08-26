<template>
  <mt-swipe :auto="3000" :show-indicators="true" class="container">
  <mt-swipe-item v-for="item in swiperDatas" :key="item.id">
      <router-link :to="{ path: 'category'}">
          <img class="image" :src="item.imgPath"/>
      </router-link>
  </mt-swipe-item>
  </mt-swipe>
</template>
<script>
export default {
    props: {
        swiperDatas: {
            type: Array
        }
    }
}
</script>

<style>
.container {
    width:100%;
    height: 80px;
}
.image {
    width:100%;
    height:100%;
}
.mint-swipe-indicators {
    position: absolute;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
}
.mint-swipe-indicator {
    width: 4px;
    height: 4px;
    display: inline-block;
    border-radius: 100%;
    background: rgb(71, 70, 70);
    opacity: 0.8;
}
</style>
