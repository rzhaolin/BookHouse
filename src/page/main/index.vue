<template>
    <div>
        <div class="header-container">
           <img class="icon" src="~@/assets/icon_camera.png" @click="clickCamera"/>
           <v-search></v-search>
           <v-message></v-message>
        </div>
        <v-swipe :swiperDatas="swiperDatas"></v-swipe>
        <Footer :tabDatas="tabs" :initTab="initTab"></Footer>
    </div>
</template>
<script src="./index.js"/>
<style src="./index.css" scoped/>


