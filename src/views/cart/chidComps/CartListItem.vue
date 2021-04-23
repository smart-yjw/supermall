<template>
  <div>
    <li>{{product}}</li>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style  scoped>

</style>
