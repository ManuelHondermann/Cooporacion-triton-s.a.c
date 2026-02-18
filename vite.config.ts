
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // El base debe coincidir exactamente con el nombre de tu repo en GitHub para subcarpetas
  base: '/Cooporacion-triton-s.a.c/',
  build: {
    outDir: 'dist'
  }
});
