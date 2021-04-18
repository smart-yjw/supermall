<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data () {
      return {
        
      }
    },
    computed: {
      //isActive为true，表示点击了当前所在tabbar
      isActive () {
        //根据this.path判断点击了哪个tabbar
        //indexOf()返回指定字符串第一次出现的位置，-1说明没有
        return this.$route.path.indexOf(this.path) !== -1
      },
      //选中后设置样式
      activeStyle () {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      //监听tabbar的点击，跳转相应的路由
      itemClick () {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style  >

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  
</style>
