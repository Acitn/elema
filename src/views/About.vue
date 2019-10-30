<template>
  <div class="about">
    <falls :fallsList="fallsList"></falls>
  </div>
</template>

<script>
import falls from '../components/falls/falls2';

export default {
    components:{
      falls
    },
    data(){
      return{
        fallsList:[]
      }
    },
    created(){
      this.getImg();
      this.$store.commit('setShow', true)
    },
    methods:{
      getImg(){
        this.$http.post("https://www.fastmock.site/mock/74bb9d71168dd9fbbf6c7057beb57182/falls/falls").then(result => {
          if(result.status === 200){
            this.fallsList = result.body.data;
          }
        })
      }
    }
}
</script>