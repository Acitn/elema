<template>
    <div>
        <div>
            <div class="panel">
                <div class="label" v-if="item.type == 'normal'">
                    <div class="left">
                        <span :style="{ color: item.left.color, fontSize: item.left.fontSize, 'font-weight': item.left.fontWeight}"> {{item.left.text}}</span>
                    </div>
                    <div class="right">
                        <span v-if="item.right.text" :style="{ color: item.right.color, fontSize: item.right.fontSize, 'font-weight': item.right.fontWeight}"> {{item.right.text}}</span>
                        <i class="iconfont icon-youjiantou" v-if="item.right.showIcon"></i>
                    </div>
                </div>

                <div class="label"  v-if="item.type == 'price'">
                    <div class="left">
                        <img v-if="item.left.img" class="p-img" :src="item.img" alt="">
                        <span class="p-span" :style="{ color: item.left.color, fontSize: item.left.fontSize, 'font-weight': item.left.fontWeight }"> {{item.left.text}}</span>
                        <slot name="left"></slot>
                    </div>
                    <div class="right flex">
                        <slot name="right"></slot>
                        <!-- 数量 -->
                        <div class="p-number" v-if="item.right.number">
                            <span class="sign">x</span>
                            <span>{{item.right.number}}</span>
                        </div>
                        <!-- 优惠 -->
                        <div class="p-orign" v-if="item.right.orign">
                            <span class="sign">&yen;</span>
                            <span>{{item.right.orign}}</span>
                        </div>
                        <!-- 文字描述 -->
                        <span class="p-text" v-if="item.right.text" :style="{ color: item.right.color2, fontSize: item.right.fontSize2, 'font-weight': item.right.fontWeight2}"> {{item.right.text}}</span>
                        <!-- 价格 -->
                        <div class="p-price" v-if="item.right.price"  :style="{ color: item.right.color, fontSize: item.right.fontSize,'font-weight': item.right.fontWeight }"> 
                            <span class="sign">&yen;</span>
                            <span>{{item.right.price}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Panel",
        props: {
            item: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .panel {
        background-color: #ffffff;
        width: 100%;
        .label {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 15px;
            height: 50px;
            border-bottom: 1px solid #f4f4f4;
            font-size: 15px;
            .right {
                .icon-youjiantou{
                    margin-left: 5px;
                    color: #cecdd2;
                    font-size: 15px;
                }
                .p-number {
                    font-size: 13px;
                    margin-right: 15px;
                }
                .p-orign {
                    font-size: 13px;
                    margin-right: 15px;
                    color: #bbbbbb;
                    text-decoration: line-through;
                }
                .p-text {
                    font-size: 13px;
                    margin-right: 10px;
                }
            }
            .flex{
                display: flex;
                align-items: center;
                .sign {
                    font-size: 12px;
                }
            } 
        }
    }
</style>