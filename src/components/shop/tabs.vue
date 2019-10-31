<template>
    <div class="tab-wrapper">
        <div class="tab_header">
            <div class="header_item" ref="element" v-for="(item,i) in navList" :key="i" @click="activeTab(i)">
                <span class="header_text">{{item.title}}</span>
                <!-- <span class="count" v-if="item.count">{{item.count}}</span>
                <span class="label" v-if="item.text">{{item.text}}</span> -->
            </div>
            <div class="bottom"></div>
        </div>
        <div class="tab_content">
            <slot></slot>
        </div>
    </div>

</template>

<script>
export default {
    name:"Tabs.",
    props: {
		//选中标签
		active: {
            type: Number,
            default: 0
       },
    },
    data(){
        return {
            now:"",
            navList:[],
        }
    },
    updated (){
        this.activeTab(this.active);
    },
    methods:{
        //获取pane
        getTabs () {
            //返回tabs子元素的内容
            return this.$children.filter(function (item) {
                //过滤除了TabsPane的内容
                return item.$options.name === 'TabsPane'
            })
        },
        updateNav () {
        //获取标题，name,并放置到navList数组中
            this.now = this.active;
            this.navList=[];
            let _this = this;
            this.getTabs().forEach(function (pane, index) {
                          
                _this.navList.push({
                    title: pane.title,
                    name:  index,
                    count: pane.count || null,
                    text: pane.text || null
                })
            })
            this.updateStatus()
        },
        updateStatus () {
            let tabs =  this.getTabs();
            let _this = this
            tabs.forEach(function (tab ,index) {
                let b = index  === _this.now
                tab.show = b
                return tab.show
            })
        },

        //底部高亮
        activeTab(index){  
            this.now = index;
            this.updateStatus() 
            let element = this.$refs.element;
               let  offsetLeft = element[index].querySelector('.header_text').offsetLeft,
                width = element[index].querySelector('.header_text').offsetWidth,
                translateX = offsetLeft - 5 +"px",   
                bottomWidth = width + 10;
	    	this.$el.querySelector('.bottom').style = "width:"+bottomWidth+"px;transform: translateX("+translateX+");"
        }
    }
}
</script>

<style lang="scss" scoped>
    .tab-wrapper{
        background-color: #fff;
        margin: .15rem 0;
        .tab_header{
            display: flex;
            position: relative;
            border-bottom: 1px solid #F2F2F1;
            .header_item{
                flex: 1;
                line-height: .35rem;
                .header_text{
                    font-size: .14rem;
                    padding: 0 .05rem;
                }
                .count{
                    color: #ACACAA;
                }
                .label{
                    font-size: .10rem;
                    padding: .03rem .05rem;
                    background-color: #E5F3FC;
                    color: #2199FF;
                    border-radius: 10px;
                }
               
            }
            .bottom{
                position: absolute;
                top: .34rem;
                left: 0;
                width: .6rem;
                background-color: #278EE5;
                height: .03rem;
                transition-duration:.3s;
            }
        }
    }
</style>