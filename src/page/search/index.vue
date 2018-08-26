<template>
 <div>
    <mt-header title="搜索">
    <router-link to="/" slot="left">
    <mt-button icon="back">back</mt-button>
    </router-link>
    </mt-header>
    <mt-search v-model="value" cancel-text="取消" placeholder="搜索">
    </mt-search>
 </div>
</template>
