import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isAnalyze = mode === "analyze";
  const isProduction = mode === "production";

  return {
    base: "/",
    build: {
      emptyOutDir: true,
      manifest: true,
      minify: isProduction ? "terser" : false,
      reportCompressedSize: true,
      rollupOptions: {
        input: { main: resolve(__dirname, "index.html") },
        output: {
          assetFileNames: (assetInfo) => {
            const name = assetInfo.name || "asset";
            const ext = name.split(".").pop() || "";

            if (["css"].includes(ext)) {
              return "assets/css/[name]-[hash][extname]";
            }
            else if (["eot", "ttf", "woff", "woff2"].includes(ext)) {
              return "assets/fonts/[name]-[hash][extname]";
            }
            else if (["gif", "jpeg", "jpg", "png", "svg", "webp"].includes(ext)) {
              return "assets/images/[name]-[hash][extname]";
            }
            else if (["mp4", "ogg", "webm"].includes(ext)) {
              return "assets/videos/[name]-[hash][extname]";
            }

            // Остальные assets
            return "assets/misc/[name]-[hash][extname]";
          },
          chunkFileNames: "chunks/[name]-[hash].js",
          entryFileNames: "js/[name]-[hash].js",
          generatedCode: { preset: "es2015" },
          manualChunks: (id) => {
            // ВСЯ экосистема React ВСЕГДА вместе
            if (
              id.includes("/node_modules/react/")
              || id.includes("/node_modules/react-dom/")
              || id.includes("/node_modules/react-router/")
              || id.includes("/node_modules/react-redux/")
              || id.includes("/node_modules/@reduxjs/toolkit/")
              || id.includes("/node_modules/@tanstack/react-table/")
              || id.includes("/node_modules/react-error-boundary/")
            ) {
              return "vendor-react-core";
            }

            // Radix UI - может зависеть от React, поэтому тоже в React группе
            if (id.includes("/node_modules/@radix-ui/")) {
              return "vendor-radix";
            }

            // Остальные библиотеки
            if (id.includes("/node_modules/date-fns/") || id.includes("/node_modules/react-day-picker/")) {
              return "vendor-dates";
            }

            if (id.includes("/node_modules/axios/")) {
              return "vendor-http";
            }

            if (id.includes("/node_modules/embla-carousel/") || id.includes("/node_modules/react-photo-album/") || id.includes("/node_modules/yet-another-react-lightbox/")) {
              return "vendor-media";
            }

            // Компоненты приложения
            if (id.includes("/src/components/")) {
              const match = id.match(/\/src\/components\/([^/]+)/);
              if (match) return `component-${match[1]}`;
            }

            // Роуты
            if (id.includes("/src/routes/")) {
              const match = id.match(/\/src\/routes\/([^/]+)/);
              if (match) return `route-${match[1]}`;
            }

            return null; // Пусть Rollup сам решит
          },
        },
      },
      sourcemap: isAnalyze,
      target: "es2022",
    },
    optimizeDeps: {
      // Явно включаем React и его зависимости
      include: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
    },
    plugins: [react(), tailwindcss()],
    resolve: { alias: { "@": resolve(__dirname, "./src") } },
  };
});
