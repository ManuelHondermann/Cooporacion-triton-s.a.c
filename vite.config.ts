
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Este valor DEBE ser exactamente el nombre de tu repositorio en GitHub
  base: '/Cooporacion-triton-s.a.c/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
