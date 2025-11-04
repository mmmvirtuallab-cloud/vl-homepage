import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // FIX: Set the base to your repository name
  base: "/vl-homepage/", 
  // Make sure this matches your GitHub repository name exactly!
})