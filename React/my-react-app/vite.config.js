//helps to configure the vite configuration, server settings, plugins, etc.
//optional but better for advanced configurations
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
