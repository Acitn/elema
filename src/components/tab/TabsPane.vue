<template>
    <div class="tab_content" v-if="show">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"TabsPane",
    props: {
        name: {
            type: String
        },
        title: {
            type: String,
            required: true
        },
        count: {
            type: String
        },
        text: {
            type: String
        }
    },
     data () {
        return {
            show: true
        }
    },
    methods:{
        updateNav () {
            this.$parent.updateNav()
        }
    },
    mounted () {
        this.updateNav()
    },
    watch: {
    label () {
      this.updateNav()
    }
  },
}


</script>

<style lang="scss" scoped>
.tab_content{
    margin: 15px 0;
	margin-bottom: 0;
	background: #F5F5F5;
}
</style>