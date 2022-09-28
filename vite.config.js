import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dsv from "@rollup/plugin-dsv"; // csv loading support, this should also work for prod builds when building that

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      dsv() // for csv support
  ]
})
