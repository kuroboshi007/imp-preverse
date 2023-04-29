import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
	  alias: {
	    '@': path.resolve(__dirname, './src'),
	    '@views': path.resolve(__dirname, './src/views'),
	    '@components': path.resolve(__dirname, './src/components'),
	    '@utils': path.resolve(__dirname, './src/utils'),
	    '@common': path.resolve(__dirname, './src/common'),
      '@packages': path.resolve(__dirname, './packages'),
	  }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      overlay: true
    }
  }
})

