import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // For GitHub Pages: base should be '/your-repo-name/' if deploying to a project page
  // Change 'portfolio_website' to your actual repository name
  base: mode === 'production' 
    ? (process.env.VITE_BASE_PATH || '/portfolio_website/') 
    : '/',
}))

