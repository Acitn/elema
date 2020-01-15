<template>
    <div class="container">
        <div class="top">
            <div class="header">
                <i class="iconfont icon-zuojiantou" @click="back()"></i>
                <span class="title">确认订单</span>
            </div>
            <div class="cardPanel">
                <Panel v-for="(item, i) in list" :key="i" :item="item"></Panel>
            </div>
        </div>
        
        <div class="detail">
            <Panel v-for="(item, i) in list2" :key="i" :item="item"></Panel>
            <Panel :item="total">
                <span class="slot-text"  slot="left">
                    优惠说明
                    <i class="iconfont icon-wenhao"></i>
                </span>
            </Panel>
        </div>

        <div class="detail">
            <Panel v-for="(item, i) in list3" :key="i" :item="item"></Panel>
            <Panel :item="total">
                <span class="slot-text"  slot="left">
                    <div class="top2">
                        <div class="text">号码保护</div> 
                        <i class="iconfont icon-wenhao"></i>
                    </div>
                    <div class="bottom">选择<span>号码保护</span>后，将对商家、骑手隐藏您的真实手机号</div>
                </span>
            </Panel>
        </div>
    </div>
</template>

<script>
import Panel from 'components/order/Panel'
export default {
    components: {
        Panel
    },
    data() {
        return {
            total: {
                type: 'price',
                left: {

                },
                right: {
                    text: '小计',
                    price: '17.8',
                    fontSize: '.2rem'
                }
            },
            list: [
                {
                    type: 'normal',
                    left: {
                        text: '选择送货地址',
                        color: '#05a4fb',
                        fontSize: '.2rem',
                        fontWeight: 'bold'
                    },
                    right: {
                        showIcon: true
                    }
                },
                {
                    type: 'normal',
                    left: {
                        text: '立即送出',
                        fontWeight: 'bold'
                    },
                    right: {
                        color: '#05a4fb',
                        text: '约16:47送达',
                        showIcon: true,
                        fontWeight: 'bold'
                    }
                },
                {
                    type: 'normal',
                    left: {
                        text: '支付方式',
                        fontWeight: 'bold'
                    },
                    right: {
                        color: '#05a4fb',
                        text: '支付宝',
                        showIcon: true,
                        fontWeight: 'bold'
                    }
                },
            ],
            list2: [
                {
                    type: 'price',
                    left: {
                        text: '华莱士炸鸡汉堡(双山店)',
                        fontSize: '.18rem',
                        fontWeight: 'bold'
                    },
                    right: {
                        showIcon: true
                    }
                },
                {
                    type: 'price',
                    left: {
                        text: '木炭烤鸭饭',
                    },
                    right: {
                        number: '1',
                        price: '15.8'
                    }
                },
                {
                    type: 'price',
                    left: {
                        text: '餐盒费',
                    },
                    right: {
                        price: '1'
                    }
                },
                {
                    type: 'price',
                    left: {
                        text: '配送费·蜂鸟专送',
                    },
                    right: {
                        orign: '4',
                        price: '1'
                    }
                },
            ],
            list3: [
                {
                    type: 'normal',
                    left: {
                        text: '订单备注',
                        fontWeight: 'bold'
                    },
                    right: {
                        text: '口味、偏好',
                        color: '#c2c2c2',
                        showIcon: true
                    }
                },
                {
                    type: 'normal',
                    left: {
                        text: '餐具份数',
                        fontWeight: 'bold'
                    },
                    right: {
                        text: '未选择',
                        color: '#c2c2c2',
                        showIcon: true
                    }
                },
                {
                    type: 'normal',
                    left: {
                        text: '发票信息',
                        fontWeight: 'bold'
                    },
                    right: {
                        text: '该店不支持线上开票，请电话联系商户',
                        color: '#c2c2c2'
                    }
                },
            ]
        }
    },
    created(){
        this.$store.commit('setShow', false)
    },
    methods: {
         back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    .top {
        background-image: linear-gradient(#00a1ff 10%,#eef3f6);
        padding: 0 10px;
        padding-bottom: 10px;
        .header {
            height: 60px;
            color: #f5f5f5;
            display: flex;
            align-items: center;
            .icon-zuojiantou {
                font-size: 18px;
            }
            .title {
                flex: 1;
                font-size: 18px;
            }
        }
    }
    .detail {
        padding: 0 10px;
        margin-bottom: 10px;
        .slot-text {
            color: #c5c5c5;
            font-size: 15px;
            .top2 {
                .text {
                    color: #000;
                }
            }
            .bottom {
                position: relative;
                margin: 0 2px;
                span{
                    &::before{
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 10px;
                        height: 10px;
                        background-color: transparent;
                        border-left: 1px solid #c5c5c5;
                        border-top: 1px solid #c5c5c5;
                    }
                }
            }
        }
        .icon-wenhao {
            font-size: 13px;
        }
    }
}
</style>