<template>

  <div class="tab-bar">
      <slot></slot>
  </div>

</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style  scoped>
  .tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    width: 100%;
    height: 49px;
    bottom: 0;
    box-shadow: 0 -1px 2px rgba(100, 100, 100, .2);
    z-index: 9;
  }
</style>
