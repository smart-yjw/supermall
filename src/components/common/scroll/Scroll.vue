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
      },
      pullUpLoad: {
        type: Boolean,
        default: false
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
        this.scroll.scrollTo(x, y, time)
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
      //监听滚动的位置
      this.scroll.on('scroll', (position) => {
        //console.log(position)
        this.$emit('backtopShown', position)
      })
      //监听上拉加载
      this.scroll.on('pullingUp', () => {
        //console.log('上拉加载')
        this.$emit('loadMore')
      })
    }
  }
</script>
  
<style lang="css" scoped>
  
</style>