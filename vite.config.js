import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { templateCompilerOptions } from "@tresjs/core";
export default defineConfig({
  transpileDependencies: true,
  plugins: [
    vue({
      ...templateCompilerOptions,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  devServer: {
    proxy: {
      "^/deezerapi": {
        target: "https://api.deezer.com/",
        changeOrigin: true,
        pathRewrite: { "^/deezerapi": "" },
      },
    },
  },
  optimizeDeps: { include: ["lodash.throttle", "lodash.orderby"] },
});
