<template>
  <div>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    components:{
        NavBar

    },
    props:{},
    data(){
      return {
        goodsID: null
      }
    },
    watch:{},
    computed:{},
    methods:{},
    created(){
      //console.log(this.$route.params)
      this.goodsID = this.$route.params.id
    },
    mounted(){}
  }
</script>
  
<style lang="scss" scoped>
  
</style>