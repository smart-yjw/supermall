<template>
    
    <div class="icon-selector" :class="{'selected': selected}">
      <img src="~/assets/img/cart/tick.svg" alt="">
    </div>
    
</template>

<script>
	export default {
		name: "CheckButton",
    props: {
		  selected: {
		    type: Boolean,
        default: false
      }
    },
    data: function () {
		  return {
		    checked: this.checkAll
      }
    },
    methods: {
      
    },
    watch: {}
	}
</script>

<style scoped>
  .icon-selector {
    width: 18px;
    height: 18px;
    line-height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }
  .selected {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>
