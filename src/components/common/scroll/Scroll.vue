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
    props:{
      probeType: {
        type: Number,
        default: 0
      }
    },
    data(){
      return {
        scroll: null
      }
    },
    watch:{},
    computed:{},
    methods:{
      scrollTo (x, y, time=300) {
        this.scroll && this.scroll.scrollTo(x, y, time) //逻辑与，非空才执行
      },
      finishPullUp () {
        this.scroll.finishPullUp()
      },
      refresh () {
        this.scroll && this.scroll.refresh()
      }
    },
    created(){},
    mounted(){
      //创建BetterScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        scrollY: true,
        observeDOM: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      //console.log(this.scroll.scrollerHeight)
      //监听滚动的位置
      this.scroll.on('scroll', (position) => {
        //console.log(position)
        this.$emit('backtopShown', position)
      })
      
    }
  }
</script>
  
<style lang="css" scoped>
  
</style>