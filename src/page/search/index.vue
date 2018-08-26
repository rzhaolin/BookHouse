<template>
 <!-- <div class="container"> -->
    <!-- <img class="icon" src="~@/assets/icon_back.png"/> -->
    <div class="page-search" v-on:keyup.13="submit">
     <mt-search autofocus v-model="value" :result="filterResult" @keyup.enter="testsearch()">
     </mt-search>
    <div class="hotkey-wrapper">
    <p class="title">搜索历史</p>
    <ul class="hotkey-list">
        <a>玻璃水</a>
        <a>苹果</a>
        <a>汽车</a>
        <a>防滑地垫 </a>
        <a>拖把</a>
    </ul>
    </div>

    <div class="hotkey-wrapper">
    <p class="title">热门搜索</p>
    <ul class="hotkey-list">
        <a>双11</a>
        <a>大盘纸</a>
        <a>雨刮器</a>
        <a>脚垫 </a>
    </ul>
    </div>
  </div>
<!-- </div> -->
</template>
<style src="./index.css" scoped/>
<script src="./index.js"/>


