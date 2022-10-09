const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
  devServer: {
    proxy: {
      '^/deezerapi': {
        target: 'https://api.deezer.com/',
        changeOrigin: true,
        pathRewrite: {'^/deezerapi': ''}
      },
    }
  }
})
