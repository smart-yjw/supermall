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
      //监听滚动位置
      scrollTo (x, y, time=300) {
        this.scroll && this.scroll.scrollTo(x, y, time) //逻辑与，非空才执行
      },
      //完成上拉加载
      finishPullUp () {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh () {
        this.scroll && this.scroll.refresh()
        //console.log('监听refresh,计算滚动高度')
      }
    },
    created(){},
    mounted(){
      //1.创建BetterScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        scrollY: true,
        observeDOM: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      //console.log(this.scroll.scrollerHeight)
      //2.监听滚动的位置
      if (this.props === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          //console.log(position)
          this.$emit('backtopShown', position) //发射自定义事件然后在首页监听
        })
      }
      //3.监听scroll滚动位置
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          //console.log('滚动到底部了')
          this.$emit('pullingUp') //发射自定义事件然后在首页监听
        })
      }
      
    }
  }
</script>
  
<style lang="css" scoped>
  
</style>