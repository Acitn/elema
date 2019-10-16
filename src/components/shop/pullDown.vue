<template>
    <div class="content">
        <div class="menuText">
            {{title}}
            <i class="iconfont icon-shaixuan"></i>
        </div>
        <div class="Downmenu">
            <div class="downItem"  v-for="(itemTitle,id) in itemTitle" :key="id">
                <div class="downTitle">{{itemTitle}}</div>
                <div class="downText">
                    <div class="item" v-for="(item,i) in dataList[id].value" :key="i">
                        <div >{{item}}</div>
                    </div> 
                </div>
            </div>
            <div class="menuBtn">
                <div class="clear">清空</div>
                <div class="confirm">查看510个商家</div>
            </div>
        </div>
        <div class="shade"></div>
    </div>
</template>



<script>
  export default{
    props:{
        dataList:{
            type:Array,
            required:true //  设置为必填
        },
        title:{
            type:String,
            required:true //  设置为必填
        },
        itemTitle:{
            type:Array,
            required:true //  设置为必填
        }
    },
    data(){
      return{
        
      }     
    },
  }
</script>
<style lang="scss" scoped>
.content{
    background-color: #fff;
    .menuText{
        height:50px;
        line-height:50px;
        padding:0 10px;
        font-size: 15px;
    }
    .Downmenu{
        position: absolute;
        z-index: 2015;
        font-size: 12px;
        width: 100%;
        animation-duration:.2s;
        top: 50px;
        left: 0;
        background-color: #fff;
        .downItem{
            background-color: #fff;
            padding: 0 18px;
            .downTitle{
                font-size: 13px;
                text-align: left;
                color: #C3C3C3;
                padding: 10px 0;
            }
            .downText{
                // display: flex;
                // justify-content: space-around;
                // flex-wrap: wrap;

                //grid布局实现
                display: grid;
                grid-template-columns: repeat(3,1fr);
                // grid-template-columns: repeat(3,33.33%);
                grid-row-gap: .08rem;
                grid-column-gap: .08rem;
                .item{
                    // width: 33.33%;
                    // flex-basis: 33.33%;
                    color:#959595;
                    // margin-top: .1rem;
                    div{
                        font-size: 12px;
                        padding: .08rem .10rem;
                        width: auto;
                        // margin-right: .05rem;
                        background-color: #F9F9F9;
                    }
                }
            }
        }
        .menuBtn{
            display: grid;
            grid-template-columns: 1fr 1fr;
            font-size: 16px;
            margin-top: 1rem;
            .clear{
                padding: .15rem 0;
                color: #DCDCDC;
                border: 1px solid #EDEDED;
                box-shadow: 10px 0 #EDEDED;
            }
            .confirm{
                padding: .15rem 0;
                background-color: #00A5FF;
                font-weight: bold;
                color: #fff;
                border: 1px solid #EDEDED;
                border-left: none;
                box-shadow: 10px 0 #EDEDED;
            }
        }
    }
    .shade{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2003;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.7);
    }
}
    
</style>