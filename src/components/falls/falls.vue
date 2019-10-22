<template>
    <div class="fallsBox">
        <img class="fallsItem" v-for="(item , i) in fallsList" :key="i" :src=item.img_url alt="">
    </div>
</template>

<script>
export default{
    name:"falls",
    props:{
        fallsList:{
            type:Array,
            required:true //  设置为必填
        },
    },
}
</script>

<style lang="scss" scoped>
    .fallsItem {
        width: 100%;
        -moz-page-break-inside:avoid;
        -webkit-column-break-inside:avoid;
        break-inside:avoid; //每列元素置顶
    }
    .fallsBox {
        -moz-column-count:4;
        /* Firefox */
        -webkit-column-count:4;
        /* Safari 和 Chrome */
        column-count:4;
        -moz-column-gap:.05rem;
        -webkit-column-gap:.05rem;
        column-gap:.05rem;  /* 每列的距离，不设置这个可以通过margin来设置边距 */
    }
</style>