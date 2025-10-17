import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Importujemy nową wtyczkę

export default defineConfig({
  // Dodajemy wtyczkę tailwindcss() do tablicy plugins
  plugins: [react(), tailwindcss()],
  base: '/rezydencja-rubin-demo/',
})