<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    components:{},
    props:{},
    data(){
      return {
        scroll: null
      }
    },
    watch:{},
    computed:{},
    methods:{
      scrollTo (x, y, time=300) {
        this.scroll.scrollTo(x, y, time)
      }
    },
    created(){},
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollY: true
      })
      //console.log(this.scroll)
    }
  }
</script>
  
<style lang="css" scoped>
  
</style>