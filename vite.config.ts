import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
import { pxtorem } from './src/pxtorem'
import { presetAttributify, presetUno } from 'unocss'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    open: true,
    port: 3000
  },
  css: {
    postcss: {
      plugins: [
        // pxtorem({})
      ]
    }
  },
  build: {
    target: 'es2020'
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-import.d.ts',
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      dts: 'src/components.d.ts'
    }),
    UnoCSS({
      presets: [presetAttributify(), presetUno()]
    })
  ]
})
