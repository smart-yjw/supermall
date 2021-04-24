<template>
  <div>
    <div class="cart-item">
      <div class="item-selector">
        <check-button @click.native="checkedChange" :selected="product.checked"></check-button>
      </div>
      <div class="item-img">
        <img :src="product.image" alt="">
      </div>
      <div class="item-info">
        <div class="item-title">{{product.title}}</div>
        <div class="item-desc">{{product.desc}}</div>
        <div class="info-bottom">
          <div class="item-price left">{{product.price}}</div>
          <div class="item-count right">x{{product.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton.vue'
export default {
  components: { CheckButton },
  data () {
    return {
      selected: {
        type: Boolean,
        default: false
      }
    }
  },
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    checkedChange () {
      console.log('点击了')
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style  scoped>
  .cart-item {
    width: 100%;
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-img {
    padding: 5px;
  }
  .item-img img {
    flex-shrink: 1;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }

</style>
