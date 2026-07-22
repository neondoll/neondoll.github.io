import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // css: { preprocessorOptions: { scss: { api: "modern-compiler" } } },
  base: "/",
  plugins: [react(), tailwindcss()],
});
