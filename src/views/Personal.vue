<template>
  <div class="content">
      <header class="top">
        <i class="iconfont icon-Asset"></i>
        <i class="iconfont icon-shezhi"></i>
      </header>
      <main>
          <div class="messageBox">
              <div class="boxText">
                    <div class="user">4437b64r8</div>
                    <div class="describe">再忙，也要记得吃饭哟~</div>
                    <div class="signIn">
                        <i class="iconfont icon-qiandao"></i>
                        <span>签到领10元红包</span>
                    </div>
              </div>
              <div class="userImg"></div>
          </div>
          <div class="box">
              <div class="memberCard">
                    <div class="left">
                        <i class="iconfont icon-chaojihuiyuan"></i>
                        超级会员
                    </div>
                    <div class="right">
                        开通后，每月领超过<span>20</span>元红包<i class="iconfont icon-arrow-right"></i>
                    </div>
              </div>
              <div class="func">
                  <div class="card">
                      <div class="cardTop">红包</div>
                      <div class="cardBottom">
                        <div>10</div>
                        <span>个未使用</span>    
                      </div>
                  </div>
                  <div class="card">
                      <div class="cardTop">津贴</div>
                      <div class="cardBottom">
                        <div>&yen;20</div>
                        <span>可用</span>    
                      </div>
                  </div>
                  <div class="card">
                      <div class="cardTop">钱包</div>
                      <div class="cardBottom">
                        <span>金币、借钱、福利</span>    
                      </div>
                  </div>
              </div>
          </div>
      </main>
      <nav class="nav">
          <div class="navItem" v-for="(item,i) in nav" :key="i">
              <div class="itemLeft">
                  <i :class="item.icon"></i>
                  <span>{{item.text}}</span>
              </div>
              <div class="itemRight">
                  <span class="rightText" v-if=" item.rightText != '' ">{{item.rightText}}</span>
                  <span>&gt;</span>
              </div>
          </div>
      </nav>
  </div>
</template>

<script>

export default {
    data(){
        return{
            nav:[
                {icon:"iconfont icon-xinaixin",text:"我的收藏"},
                {icon:"iconfont icon-kefu",text:"我的客服"},
                {icon:"iconfont icon-liwu",text:"推荐有奖",rightText:"得15元"},
                {icon:"iconfont icon-shangwu",text:"商务合作"},
                {icon:"iconfont icon-woyaobanqia",text:"办卡有礼"},
                {icon:"iconfont icon-gongyi",text:"3小时公益"}
            ]
        }
    },
    created(){
        this.$store.commit('setShow', true)
    }
}
</script>

<style lang="scss" scoped>
.content{
    background: #fff;
    .top{
        display: flex;
        justify-content: flex-end;
        padding:.1rem .15rem;
        .iconfont{
            font-size: .2rem;
        }
        .icon-Asset{
            margin-right: .15rem
        }
    }
    .messageBox{
        display: flex;
        margin: .15rem 0;
        padding: 0 .15rem;
        .boxText{
            flex: 1;
            text-align: left;
            display: flex;
            flex-direction: column;
            .user{
                font-size: .34rem;
                font-weight: bold;
            }
            .describe{
                font-size: .16rem;
                color: #9D9D9D;
                margin-bottom: .13rem
            }
            .signIn{
                width: 120px;
                font-size: .12rem;
                border: 1px solid #CBCBCB;
                padding: 5px 10px;
                border-radius: 50px;
				white-space: nowrap;
                .iconfont{
                    font-size: .12rem;
                    color: #FC4E30;
                    padding-right: .08rem;
                }
            }
        }
        .userImg{
            width: 80px;
            height: 80px;
            background: url("../assets/images/user.jpg");
            background-size: cover;
            border-radius: 50%;
        }
    }
    .box{              
        .memberCard{
            margin:.1rem .15rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 10px;
            padding: 10px 15px;
            background-image: linear-gradient(90deg,#FCEFD6 0%,#FAE4B8 70%);
            background-image: -webkit-linear-gradient(90deg,#FCEFD6 0%,#FAE4B8 70%);
            background-image: -moz-linear-gradient(90deg,#FCEFD6 0%,#FAE4B8 70%);
            background-image: -o-linear-gradient(90deg,#FCEFD6 0%,#FAE4B8 70%);
            .left{
                .iconfont{
                    color: #D2AD5A;
                    margin-right: .1rem;
                }
                font-size: .2rem;
            }
            .right{
                font-size: .12rem;
                span:nth-child(1){
                    color: red;
                    font-size: .18rem;
                    font-weight: bold;
                    padding: 0 3px;
                }
                span:nth-child(2){
                    padding-left: 3px;
                }
            }
        }
        .func{
            display: grid;
            grid-template-columns: repeat(3,1fr);
            grid-row-gap: .05rem;
            grid-column-gap: .05rem;
            justify-content: space-between;
            background: #f5f5f5;
            padding: 8px 5px;
            .card{
                display: flex;
                flex-direction: column;
                background: #ffffff;
                border-radius: 5px;
                padding: .1rem .1rem;
                box-shadow: 1px 1px  #f8f8f8;
                border-bottom: 1px solid #F8F8F8;
                .cardTop{
                    font-size: .16rem;
                    text-align: left;
                }
                .cardBottom{
                    display: flex;
                    margin-top: .08rem;
                    align-items: center;
                    div{
                        color: red;
                        font-size: .16rem;
                        font-weight: bold;
                        margin-right: .03rem;
                    }
                    span{
                        font-size: .1rem;
                        color: #959595;
                    }
                }
            }
        }
        
    }
    .nav{
        padding: 0 .15rem;
        .navItem{
            font-size: .16rem;
            display: flex;
            justify-content: space-between;
            padding: .10rem 0;
            .itemLeft{
               .iconfont{
                   color: #009CFF;
                   margin-right: .08rem;
               }
            }
            .itemRight{
                color: #BEBEBE;
                display: flex;
                align-items: center;
                font-size: .16rem;
                .rightText{
                    font-size: .12rem;
                    margin-right: .08rem;
                }
                
            }
        }
    }
}
</style>
