import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,      // ← allows access from network devices (like your phone)
    port: 5173,      // ← optional: set any available port (default is 5173)
  },
})
