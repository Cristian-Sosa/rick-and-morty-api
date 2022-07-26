import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://cristian-sosa.github.io/rick-and-morty-api/",
  plugins: [react()]
})
