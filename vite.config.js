import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This base property is the name of your GitHub repository.
  // It's crucial for deploying to GitHub Pages.
  base: '/portfolio/', 
  plugins: [react()],
})

