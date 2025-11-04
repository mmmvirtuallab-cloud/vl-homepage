// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // MUST HAVE TRAILING SLASH
  base: "/vl-homepage/", 
server: {
    host: '0.0.0.0', // Keep this line if you added it before
    cors: true // <-- ADD THIS LINE to allow all origins
    // Or, for specific origins (more secure, but maybe not needed for local dev):
    // cors: {
    //   origin: ['http://localhost:3000', 'http://10.45.91.242:5173'], // Allow specific origins
    //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
    //   allowedHeaders: ['Content-Type', 'Authorization'],
    // }
  },
});