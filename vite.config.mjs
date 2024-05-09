import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, "./src"),
        }
    },
    transpileDependencies: true,
    publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
    devServer: {
        proxy: {
            '^/deezerapi': {
                target: 'https://api.deezer.com/',
                changeOrigin: true,
                pathRewrite: { '^/deezerapi': '' }
            },
        }
    },
    optimizeDeps: { include: ['lodash.throttle', 'lodash.orderby'] },
})
