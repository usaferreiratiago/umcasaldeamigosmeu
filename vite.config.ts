import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // 1. IMPORTAR O PLUGIN DO TAILWIND V4
import path from "path";

export default defineConfig({
  plugins: [
    tailwindcss(), // 2. ATIVAR O PLUGIN DO TAILWIND ANTES DO REACT
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
