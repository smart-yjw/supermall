<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.iid" :goods-item="item"/>
  </div>
</template>

<script>
 import GoodsListItem from './GoodsListItem'

  export default {
    components: {GoodsListItem},
    data () {
      return {
      }
    },
    props: {
      goods: {
        type: Array,
        dafault () {
          return []
        }
      }
    }
  }
</script>

<style  scoped>

</style>
