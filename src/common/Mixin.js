import {debounce} from './Utils'

export const goodsImgLsnMixin = {
  data () {
    return {
      scrollRefresh: null,
      goodsImgLsn: null
    }
  },
  mounted () {
    this.scrollRefresh = debounce(this.$refs.scroll.refresh)
    this.goodsImgLsn = () => {
      this.scrollRefresh
    }
    this.$bus.$on('goodsImgLoad', this.goodsImgLsn)
    //console.log('混入-refresh')
  }
}