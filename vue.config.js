module.exports = {

  // vue项目中关闭eslint
  lintOnSave: false,

  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        views: '@/views',
      }
    }
  }

}