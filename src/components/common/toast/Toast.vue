<template>
  <div class="toast" v-show="isShow">
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  components:{},
  data(){
    return {
      msg: '',
      isShow: false
    }
  },
  methods:{
    showToast (msg, duration=1500) {
      this.isShow = true
      this.msg = msg
      setTimeout(() => {
        this.isShow = false
        this.msg = ''
      }, duration)
    }
  }
}
</script>
  
<style lang="css" scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 5px;
    color: #eee;
    background-color: rgba(0,0,0,.8);
    z-index: 9;
  }
</style>