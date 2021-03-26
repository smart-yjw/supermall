module.exports = {

  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        content: '@/components/content',
        components: '@/components',
        network: '@/network',
        views: '@/views',
      }
    }
  }

}