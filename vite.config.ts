import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 部署到 GitHub Pages 时取消注释下面一行，并替换为你的仓库名
  // base: '/your-repo-name/',
  base: '/',
})
