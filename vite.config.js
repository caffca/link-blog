import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base 设为 GitHub Pages 子路径
export default defineConfig({
  plugins: [react()],
  base: '/link-blog/',
})
