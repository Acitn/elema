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
        <slot></slot>
    </div>

</template>

<script>
export default {
    name:"Tabs",
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
        .tab_header{
            display: flex;
            position: relative;
            border-bottom: 1px solid #F2F2F1;
            .header_item{
                flex: 1;
                line-height: 35px;
                .header_text{
                    font-size: 14px;
                    padding: 0 5px;
                }
                .count{
                    color: #ACACAA;
                }
                .label{
                    font-size: 10px;
                    padding: 3px 5px;
                    background-color: #E5F3FC;
                    color: #2199FF;
                    border-radius: 10px;
                }
               
            }
            .bottom{
                position: absolute;
                top: 34px;
                left: 0;
                width: 60px;
                background-color: #278EE5;
                height: 3px;
                transition-duration:.3s;
            }
        }
    }
</style>