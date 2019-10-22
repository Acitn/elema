<template>
    <div>
        <div class="top">
            <div class="bg"></div>
            <div class="photo"></div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.state.showBottomNav = false
    }
}
</script>

<style lang="scss" scoped>
.top{
    position: relative;
    .bg{
        background-color: #cecece;
        height: 1.5rem;
    }
    .photo{
        width: .8rem;
        height: .8rem;
        background: red;
        position: absolute;
        top:.9rem;
        left: 50%;
        margin-left: -.4rem;
    }
}
</style>