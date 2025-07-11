// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Relative path အတွက် fallback မျိုးထည့်ဖို့လိုတတ်တယ် especially on static hosts
})
