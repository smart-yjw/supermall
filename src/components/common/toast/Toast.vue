<template>
  <div class="toast" v-show="show">
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  components:{},
  props:{
    msg: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
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
  }
</style>