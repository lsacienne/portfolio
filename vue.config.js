const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
  devServer: {
    proxy: "https://api.deezer.com/"
  }
})
