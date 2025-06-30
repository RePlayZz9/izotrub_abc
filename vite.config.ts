import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/izotrub/abc/' : '/',
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});