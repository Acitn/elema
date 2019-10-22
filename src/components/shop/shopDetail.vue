<template>
    <div>
        <div class="top">
            <div class="toolbar">
                <i class="iconfont icon-left-arrow" @click="back()"></i>
                <div class="right">
                    <i class="iconfont icon-sousuo"></i>
                    <i class="iconfont icon-fenxiang"></i>
                    <i class="iconfont icon-pin"></i>
                </div>
            </div>
            <div class="bg"></div>
            <div class="photo"></div>
            <div class="shoucang">
                <i class="iconfont icon-shoucang"></i>
            </div>
            <div class="textBox">
                <div class="title">华莱士炸鸡汉堡(茂名双山店)</div>
                <div class="info">
                    <span>评价4.6</span>
                    <span>月售1713</span>
                    <span>蜂鸟专送约30分钟</span>
                </div>
                <div class="discountBox">
                    <div class="discount">
                        <span>25减6</span>
                        <span>40减10</span>
                        <span>60减20</span>
                    </div>
                    <div class="count">3个优惠</div>
                </div>
                <div class="bottomText">公告：(一)您的满意好评是我们和骑手小哥的服务目标，如有</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.state.showBottomNav = false
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
.top{
    position: relative;
    font-size: 16px;
    .toolbar{
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 60px;
        padding-top: .2rem;
        color: #FFFAF8;
        justify-content: space-between;
        .iconfont{
            font-size: .20rem;
            margin-left: .15rem;
        }
        .icon-pin{
            margin-right: .15rem;
        }
    }
    .bg{
        background-color:rgb(206,206,206) ;
        height: 1.5rem;
    }
    .photo{
        width: 1rem;
        height: 1rem;
        background: red;
        position: absolute;
        top:.8rem;
        left: 50%;
        margin-left: -.5rem;
    }
    .shoucang{
        position: absolute;
        top: 1.3rem;
        right: .2rem;
        width: 40px;
        height: 40px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
          color: #D64C6C;
    }
    .icon-shoucang{
        color: #D64C6C;
        font-size: .2rem;
    }
    .textBox{
        margin-top: .5rem;
        .title{
            font-size: .2rem;
            font-weight: bold;
        }
        .info{
            font-size: .12rem;
            margin: .1rem 0;
            span{
                margin-left: .1rem;
                color: #8B8B8B;
            }
        }
        .discountBox{
            font-size: .12rem;
            display: flex;
            justify-content: space-between;
            padding: 0 .4rem;
            margin-bottom: .1rem;
            color: #BCBCBC;
            span{
                margin-left: .1rem;
                color: #CB736E;
                border:1px solid #E4E4E4;
                padding: .05rem;
            }
            span:nth-child(1){
                margin-left: 0;
            }
        }
        .bottomText{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:nowrap; 
            padding: 0 .4rem;
            font-size: .12rem;
            color: #BCBCBC;
        }
    }
}
</style>