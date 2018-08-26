<template>
     <input class='form_input' type="search" placeholder="搜索一下你就知道"
     v-model.trim='key' @click.down="clickSearch">
</template>
<script>
export default {
    methods: {
        clickSearch() {
            this.$router.push({
                name: 'search'
            })
        }
    }
}
</script>
<style scoped>
.form_input {
    width: 100%;
    height: 30px;
    padding-left: 10px;
    font-size: 12px;
    text-align: left;
    border-radius: 10px;
    border-color: gray;
    border-style: solid;
    border-width: 1px;
    vertical-align: middle;
}
</style>


