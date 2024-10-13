import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5175,
    proxy: {
      '/api': {
        target: 'https://zenquotes.io',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1000000,
  }
})
