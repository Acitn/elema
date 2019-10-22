<template>
    <div class="fallsBox">
        <img class="fallsItem" lazyload="true" :data-original=item.img_url v-for="(item , i) in fallsList"  :key="i">
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
    mounted () {
        this.lazyload();
    },
    methods:{

        lazyload(){
            let viewHeight =document.documentElement.clientHeight//获取可视区高度
            var eles=document.querySelectorAll('img[data-original][lazyload]')
            Array.prototype.forEach.call(eles,function(item,index){
                var rect
                if(item.dataset.original==="")
                return
                rect=item.getBoundingClientRect()// 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
                if(rect.bottom>=0 && rect.top < viewHeight){
                    !function(){
                        var img=new Image()
                            // img.src=item.dataset.original
                            img.onload=function(){
                                item.src=item.dataset.original
                            }
                            item.removeAttribute("data-original")//移除属性，下次不再遍历
                            item.removeAttribute("lazyload")
                    }()
                }
            })
        }
        // lazyload()//刚开始还没滚动屏幕时，要先触发一次函数，初始化首页的页面图片
        // document.addEventListener("scroll",lazyload)
    }
}
</script>

<style lang="scss" scoped>
    // .fallsItem {
    //     width: 100%;
    //     -moz-page-break-inside:avoid;
    //     -webkit-column-break-inside:avoid;
    //     break-inside:avoid; //每列元素置顶
    // }
    // .fallsBox {
    //     -moz-column-count:4;
    //     /* Firefox */
    //     -webkit-column-count:4;
    //     /* Safari 和 Chrome */
    //     column-count:4;
    //     -moz-column-gap:.05rem;
    //     -webkit-column-gap:.05rem;
    //     column-gap:.05rem;  /* 每列的距离，不设置这个可以通过margin来设置边距 */
    // }
</style>