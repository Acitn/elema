<template>
  <div class="about">

  </div>
</template>

<script>


export default {
    components:{

    },
    data(){
      return{
        fallsList:[]
      }
    },
    created(){
      this.$store.commit('setShow', true)
    },
    methods:{

    }
}
</script>