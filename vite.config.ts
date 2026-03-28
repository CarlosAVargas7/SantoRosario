import { defineConfig } from "vite";

export default defineConfig({
  base: "/SantoRosario/", // ← nombre exacto de tu repo en GitHub

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    open: true,
  },
});
