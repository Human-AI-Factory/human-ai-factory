import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 部署到 GitHub Pages 时使用相对路径
  base: './',
})
