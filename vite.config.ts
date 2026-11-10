import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // No custom domain yet → served from https://norin-web.github.io/DeviArt-v1/.
  // When a domain is attached in Pages settings, switch to "/" AND add public/CNAME
  // in the same commit, or every asset 404s (white screen). Also update og:url in index.html.
  base: "/DeviArt-v1/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
