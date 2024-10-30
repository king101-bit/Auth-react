import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@supabase/auth-ui-react': 'http://localhost:5173/node_modules/@supabase/auth-ui-react',
    },
  },
})
