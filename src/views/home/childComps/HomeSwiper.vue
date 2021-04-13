<template>
  <swiper>
    <swiper-item v-for="(item,key) in banners" :key="key">
      <a :href="item.link">
        <img :src="item.image" alt=""  @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>

  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    props: {
      banners: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    data () {
      return {
        isLoad: false
      }
    },
    methods: {
      imgLoad () {
        //console.log('imgload')

        //使用isLoad变量记录事件发出的状态，防止多次发出
        if (!this.isLoad) {
          this.$emit('swipperImgLoad')
          this.isLoad = true
        }
      }
    },
    
  }
</script>

<style scoped>

</style>
