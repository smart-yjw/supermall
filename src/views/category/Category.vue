<template>
  <div class="category">
    <h3>分类</h3>
  </div>
</template>

<script>

  export default {
    components:{},
    props:{},
    data(){
      return {
        
      }
    },
    watch:{},
    computed:{},
    methods:{
      getData () {
        //创建一个异步请求对象
        let ajax = new XMLHttpRequest()
        let url = "http://152.136.185.210:7878/api/m5/home/multidata"
        ajax.open('get', url, true)
        ajax.send()
        ajax.onreadystatechange = function () {
          ajax.onload = function(){
              //console.log(JSON.parse(ajax.responseText))
              
            }
        }
      }
    },
    created(){
      this.getData()
    },
    mounted(){
      
    }
  }
</script>
  
<style lang="css" scoped>
  
</style>