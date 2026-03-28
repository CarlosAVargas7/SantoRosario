import { defineConfig } from 'vite';

export default defineConfig({
  // Raíz del proyecto (donde está index.html)
  root: '.',

  build: {
    // Carpeta de salida para producción
    outDir: 'dist',
    // Limpiar dist antes de cada build
    emptyOutDir: true,
  },

  server: {
    // Puerto de desarrollo
    port: 3000,
    open: true,
  },
});
